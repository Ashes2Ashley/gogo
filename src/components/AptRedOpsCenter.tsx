import React, { useState, useMemo } from 'react';
import { 
  ShieldAlert, 
  Terminal, 
  Flame, 
  Code2, 
  Cpu, 
  Search, 
  Filter, 
  Sparkles, 
  CheckCircle2, 
  Copy, 
  Check, 
  Play, 
  AlertTriangle,
  Zap,
  Target,
  FileCode,
  Layers,
  Skull
} from 'lucide-react';
import { ADVANCED_100_FEATURES, AdvancedFeature } from '../data/advancedFeatures';
import { ModuleRegistry } from './ModuleRegistry';
import confetti from 'canvas-confetti';

interface AptRedOpsCenterProps {
  onExportCapabilitiesDoc: () => void;
}

export const AptRedOpsCenter: React.FC<AptRedOpsCenterProps> = ({ onExportCapabilitiesDoc }) => {
  const [activeSubTab, setActiveSubTab] = useState<'capabilities' | 'registry'>('capabilities');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedPhase, setSelectedPhase] = useState<string>('all');
  const [selectedFeature, setSelectedFeature] = useState<AdvancedFeature | null>(ADVANCED_100_FEATURES[0]);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [simulatedLogs, setSimulatedLogs] = useState<string[]>([]);
  const [isRunningSim, setIsRunningSim] = useState(false);

  const categories = ['all', 'Marketing Red Ops', 'APT Analysis', 'Scriptable Module', 'Execution Engine', 'Operational Security'];
  const phases = ['all', 'Reconnaissance', 'Weaponization', 'Delivery', 'Exploitation', 'Installation', 'C2 / Control', 'Actions on Objectives', 'Persistence / Defense Evasion'];

  const filteredFeatures = useMemo(() => {
    return ADVANCED_100_FEATURES.filter(f => {
      if (selectedCategory !== 'all' && f.category !== selectedCategory) return false;
      if (selectedPhase !== 'all' && f.aptPhase !== selectedPhase) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          f.title.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q) ||
          f.threatActorContext.toLowerCase().includes(q) ||
          f.redTeamPlaybook.toLowerCase().includes(q) ||
          f.num.toString().includes(q)
        );
      }
      return true;
    });
  }, [searchQuery, selectedCategory, selectedPhase]);

  const handleCopyCode = (snippet: string, id: string) => {
    navigator.clipboard.writeText(snippet);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExecuteSimulation = (feat: AdvancedFeature) => {
    setIsRunningSim(true);
    setSimulatedLogs(prev => [
      `[${new Date().toLocaleTimeString()}] INITIATING APT/RED-OPS HOOK: ${feat.title}...`,
      `[${new Date().toLocaleTimeString()}] Phase: ${feat.aptPhase} | Threat Context: ${feat.threatActorContext.slice(0, 50)}...`,
      `[${new Date().toLocaleTimeString()}] Compiling scriptable payload...`,
      `[${new Date().toLocaleTimeString()}] SUCCESS: Verified payload execution. Impact: ${feat.impactMetric}`,
      ...prev
    ].slice(0, 8));

    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.8 },
      colors: ['#ef4444', '#f59e0b', '#3b82f6']
    });

    setTimeout(() => setIsRunningSim(false), 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      
      {/* Top Header Banner */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 text-white p-6 sm:p-8 rounded-3xl border border-rose-900/40 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-500/20 text-rose-300 border border-rose-500/30 mb-3">
              <Skull className="w-3.5 h-3.5 text-rose-400" />
              <span>100 Advanced Capabilities • Scriptable Modules • Marketing Red Ops</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white flex items-center gap-3">
              <span>APT & RED-OPS WAR ROOM</span>
              <span className="text-xs px-2.5 py-1 rounded-lg bg-rose-600/30 border border-rose-500/50 text-rose-300 font-mono">
                100/100 LOADED
              </span>
            </h1>
            <p className="mt-2 text-sm text-slate-300 max-w-3xl leading-relaxed">
              Deconstruct cash flow vectors through the lens of an <strong>Advanced Persistent Threat (APT)</strong>. 
              Deploy adversarial marketing red-team operations, automate anti-detection pipelines, and run scriptable out-of-the-box execution modules.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => handleExecuteSimulation(selectedFeature || ADVANCED_100_FEATURES[0])}
              disabled={isRunningSim}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-xs font-bold shadow-lg shadow-rose-600/30 transition-all hover:scale-[1.02]"
            >
              <Play className="w-3.5 h-3.5" />
              <span>{isRunningSim ? 'Executing Payload...' : 'Test Active Payload'}</span>
            </button>
            <button
              onClick={onExportCapabilitiesDoc}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
            >
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Export 100 Script Dossier</span>
            </button>
          </div>
        </div>

        {/* Real-Time Live APT Telemetry Strip */}
        <div className="mt-6 pt-5 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[11px] uppercase">Loaded Modules</span>
            <span className="text-lg font-bold text-white mt-0.5 block">100 Production Modules</span>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[11px] uppercase">Marketing Red Ops</span>
            <span className="text-lg font-bold text-rose-400 mt-0.5 block">20 Adversarial Funnels</span>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[11px] uppercase">Scriptable Runners</span>
            <span className="text-lg font-bold text-amber-400 mt-0.5 block">Ready Out-Of-The-Box</span>
          </div>
          <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <span className="text-slate-400 block text-[11px] uppercase">Threat Defense</span>
            <span className="text-lg font-bold text-emerald-400 mt-0.5 block">Zero Contagion Risk</span>
          </div>
        </div>
      </div>

      {/* Sub-Tab Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-3">
        <button
          onClick={() => setActiveSubTab('capabilities')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeSubTab === 'capabilities'
              ? 'bg-rose-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Skull className="w-4 h-4" />
          <span>100 Advanced APT Capabilities Matrix</span>
        </button>

        <button
          onClick={() => setActiveSubTab('registry')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
            activeSubTab === 'registry'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
          }`}
        >
          <Terminal className="w-4 h-4" />
          <span>Module Registry (Bash & Node.js Scripts)</span>
          <span className="bg-emerald-700/60 text-white px-1.5 py-0.2 rounded text-[10px] font-mono">LIVE OPS</span>
        </button>
      </div>

      {activeSubTab === 'registry' ? (
        <ModuleRegistry />
      ) : (
        <>
          {/* Terminal Telemetry Log (if simulations run) */}
          {simulatedLogs.length > 0 && (
            <div className="bg-black text-emerald-400 p-4 rounded-2xl border border-emerald-900/60 font-mono text-xs shadow-lg space-y-1">
              <div className="flex items-center justify-between text-slate-500 pb-2 border-b border-slate-900 text-[11px]">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>LIVE RED-OPS EXECUTION CONSOLE</span>
                </span>
                <button onClick={() => setSimulatedLogs([])} className="hover:text-white">Clear</button>
              </div>
              {simulatedLogs.map((log, idx) => (
                <div key={idx} className="leading-relaxed">{log}</div>
              ))}
            </div>
          )}

      {/* Controls & Search Filter Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search 100 capabilities by keyword, MITRE phase, threat scenario, or script type..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500/20"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar text-xs">
            <span className="text-slate-400 font-semibold uppercase text-[11px] shrink-0">Track:</span>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all font-medium border ${
                  selectedCategory === cat
                    ? 'bg-rose-600 text-white border-rose-600 font-bold shadow-xs'
                    : 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat === 'all' ? 'All 100 Modules' : cat}
              </button>
            ))}
          </div>

        </div>

        {/* MITRE ATT&CK Phase Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pt-1 text-xs">
          <span className="text-slate-400 font-semibold uppercase text-[11px] shrink-0 mr-1">APT Phase:</span>
          {phases.map(phase => (
            <button
              key={phase}
              onClick={() => setSelectedPhase(phase)}
              className={`px-2.5 py-1 rounded-md whitespace-nowrap text-[11px] transition-colors border ${
                selectedPhase === phase
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent font-semibold'
                  : 'bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {phase === 'all' ? 'All Phases' : phase}
            </button>
          ))}
        </div>
      </div>

      {/* Main Two-Column View: Capabilities Grid (Left) + Deep-Dive Inspector (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left List of Capabilities */}
        <div className="lg:col-span-5 space-y-3 max-h-[780px] overflow-y-auto pr-1">
          <div className="text-xs font-semibold text-slate-500 px-1 flex justify-between items-center">
            <span>Showing {filteredFeatures.length} of 100 Capabilities</span>
            <span>Click to inspect code</span>
          </div>

          {filteredFeatures.map(feat => {
            const isSelected = selectedFeature?.id === feat.id;
            return (
              <div
                key={feat.id}
                onClick={() => setSelectedFeature(feat)}
                className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-rose-50/80 border-rose-300 dark:bg-rose-950/40 dark:border-rose-700 shadow-md ring-1 ring-rose-500/20'
                    : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
                      #{feat.num}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-semibold border ${
                      feat.category === 'Marketing Red Ops'
                        ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 border-rose-200 dark:border-rose-800'
                        : feat.category === 'APT Analysis'
                        ? 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                    }`}>
                      {feat.category}
                    </span>
                    <span className="px-1.5 py-0.5 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      {feat.aptPhase}
                    </span>
                  </div>

                  <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400">
                    {feat.status}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                  {feat.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                  {feat.description}
                </p>

                <div className="mt-2 text-[11px] text-slate-400 flex items-center justify-between">
                  <span className="text-rose-600 dark:text-rose-400 font-medium">
                    {feat.impactMetric}
                  </span>
                  <span>Inspect &rarr;</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Inspector & Code Runner */}
        <div className="lg:col-span-7">
          {selectedFeature ? (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 shadow-xl space-y-6 sticky top-20">
              
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-rose-600 text-white">
                      CAPABILITY #{selectedFeature.num} OF 100
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      Phase: {selectedFeature.aptPhase}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300">
                      {selectedFeature.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                    {selectedFeature.title}
                  </h3>
                </div>

                <button
                  onClick={() => handleExecuteSimulation(selectedFeature)}
                  className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white transition-colors shrink-0 shadow-md"
                >
                  <Play className="w-3.5 h-3.5" />
                  <span>Run Module</span>
                </button>
              </div>

              {/* Threat Actor Scenario Context */}
              <div className="bg-rose-50/70 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/50 p-4 rounded-2xl space-y-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>Threat Actor / Adversarial Context</span>
                </span>
                <p className="text-xs text-rose-900 dark:text-rose-200 leading-relaxed font-medium">
                  {selectedFeature.threatActorContext}
                </p>
              </div>

              {/* Red Team Execution Playbook */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                  <span>Red Team Operation Playbook</span>
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                  {selectedFeature.redTeamPlaybook}
                </p>
              </div>

              {/* Ready Scriptable Module & Code Block */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                    <FileCode className="w-3.5 h-3.5 text-blue-500" />
                    <span>Out-Of-The-Box Scriptable Code</span>
                  </h4>
                  <button
                    onClick={() => handleCopyCode(selectedFeature.scriptSnippet, selectedFeature.id)}
                    className="flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  >
                    {copiedId === selectedFeature.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-500 font-semibold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Script</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-4">
                  <pre className="font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
                    <code>{selectedFeature.scriptSnippet}</code>
                  </pre>
                </div>
              </div>

              {/* Impact Metric Strip */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-xs font-semibold text-emerald-900 dark:text-emerald-200">
                    Measured Operational Advantage:
                  </span>
                </div>
                <span className="text-xs font-extrabold text-emerald-700 dark:text-emerald-300 font-mono">
                  {selectedFeature.impactMetric}
                </span>
              </div>

              </div>
            ) : (
              <div className="p-12 text-center text-slate-400 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                Select a capability on the left to inspect its red-team playbook and scriptable code.
              </div>
            )}
          </div>

        </div>
      </>
    )}

  </div>
);
};
