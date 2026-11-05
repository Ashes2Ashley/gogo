import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Code2, 
  Play, 
  Check, 
  Copy, 
  Plus, 
  Trash2, 
  RotateCw, 
  ShieldCheck, 
  Activity, 
  Layers, 
  FileCode, 
  Sliders, 
  Power, 
  ExternalLink,
  Flame,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { ModuleScriptItem, PREBUILT_OBFUSCATION_MODULES, ObfuscationCategory, ScriptRuntime } from '../data/moduleRegistryData';
import confetti from 'canvas-confetti';

export const ModuleRegistry: React.FC = () => {
  const [modules, setModules] = useState<ModuleScriptItem[]>(() => {
    try {
      const saved = localStorage.getItem('cf_module_registry');
      return saved ? JSON.parse(saved) : PREBUILT_OBFUSCATION_MODULES;
    } catch {
      return PREBUILT_OBFUSCATION_MODULES;
    }
  });

  const [selectedModuleId, setSelectedModuleId] = useState<string>(() => {
    return modules[0]?.id || 'mod_bash_proxy_rotator';
  });

  const [filterRuntime, setFilterRuntime] = useState<'all' | 'bash' | 'node'>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isExecutingId, setIsExecutingId] = useState<string | null>(null);
  const [executionLogs, setExecutionLogs] = useState<{ id: string; timestamp: string; text: string; type: 'info' | 'success' | 'warn' }[]>([]);
  
  // Custom script modal
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newRuntime, setNewRuntime] = useState<ScriptRuntime>('bash');
  const [newCategory, setNewCategory] = useState<ObfuscationCategory>('Network & Proxy Rotation');
  const [newDescription, setNewDescription] = useState('');
  const [newCommand, setNewCommand] = useState('');
  const [newScript, setNewScript] = useState('');
  const [newTargetTask, setNewTargetTask] = useState('');

  // Persist modules to localStorage
  useEffect(() => {
    localStorage.setItem('cf_module_registry', JSON.stringify(modules));
  }, [modules]);

  const selectedModule = modules.find(m => m.id === selectedModuleId) || modules[0];

  const categories: string[] = [
    'all',
    'Network & Proxy Rotation',
    'Browser Fingerprint Spoofing',
    'Metadata & File Sanitization',
    'Traffic Jitter & Timing',
    'Payload & Memory Scrambling',
    'API Honeytoken Defense'
  ];

  const filteredModules = modules.filter(m => {
    if (filterRuntime !== 'all' && m.runtime !== filterRuntime) return false;
    if (filterCategory !== 'all' && m.category !== filterCategory) return false;
    return true;
  });

  const handleToggleModule = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setModules(prev => prev.map(m => {
      if (m.id === id) {
        const nextEnabled = !m.enabled;
        setExecutionLogs(logs => [
          {
            id: String(Date.now()),
            timestamp: new Date().toLocaleTimeString(),
            text: `Module [${m.name}] toggled to ${nextEnabled ? 'ACTIVE / READY' : 'DISABLED'}.`,
            type: nextEnabled ? 'success' : 'warn'
          },
          ...logs
        ].slice(0, 15));
        return { ...m, enabled: nextEnabled };
      }
      return m;
    }));
  };

  const handleCopyCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleExecuteModule = (mod: ModuleScriptItem) => {
    setIsExecutingId(mod.id);
    
    // Simulate realistic execution timing & response
    setTimeout(() => {
      const nowStr = new Date().toISOString().replace('T', ' ').slice(0, 19);
      
      setModules(prev => prev.map(m => {
        if (m.id === mod.id) {
          return {
            ...m,
            executionCount: m.executionCount + 1,
            lastExecutedAt: nowStr,
            lastStatus: 'success'
          };
        }
        return m;
      }));

      setExecutionLogs(logs => [
        {
          id: String(Date.now()),
          timestamp: new Date().toLocaleTimeString(),
          text: `[EXEC COMPLETE] ${mod.name} (${mod.runtime}) finished with Exit Code 0. Target: ${mod.targetTask}`,
          type: 'success'
        },
        {
          id: String(Date.now() + 1),
          timestamp: new Date().toLocaleTimeString(),
          text: `$ ${mod.commandToRun}`,
          type: 'info'
        },
        ...logs
      ].slice(0, 20));

      setIsExecutingId(null);

      confetti({
        particleCount: 25,
        spread: 45,
        origin: { y: 0.8 },
        colors: mod.runtime === 'bash' ? ['#22c55e', '#10b981', '#14b8a6'] : ['#f59e0b', '#fbbf24', '#f97316']
      });
    }, 450);
  };

  const handleResetDefaults = () => {
    setModules(PREBUILT_OBFUSCATION_MODULES);
    setSelectedModuleId(PREBUILT_OBFUSCATION_MODULES[0].id);
    setExecutionLogs(logs => [
      {
        id: String(Date.now()),
        timestamp: new Date().toLocaleTimeString(),
        text: 'Restored default pre-built bash/node obfuscation module registry.',
        type: 'info'
      },
      ...logs
    ]);
  };

  const handleSaveCustomModule = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim() || !newScript.trim()) return;

    const newModuleItem: ModuleScriptItem = {
      id: `custom_mod_${Date.now()}`,
      name: newTitle.trim(),
      runtime: newRuntime,
      category: newCategory,
      description: newDescription.trim() || 'Custom user-registered obfuscation script hook.',
      enabled: true,
      scriptContent: newScript,
      commandToRun: newCommand.trim() || (newRuntime === 'bash' ? `bash scripts/${newTitle.toLowerCase().replace(/\\s+/g, '_')}.sh` : `node scripts/${newTitle.toLowerCase().replace(/\\s+/g, '_')}.js`),
      targetTask: newTargetTask.trim() || 'Custom local execution pipeline task',
      executionCount: 0,
      isCustom: true,
      lastStatus: 'idle'
    };

    setModules(prev => [newModuleItem, ...prev]);
    setSelectedModuleId(newModuleItem.id);
    setIsAddModalOpen(false);

    // Reset inputs
    setNewTitle('');
    setNewDescription('');
    setNewScript('');
    setNewCommand('');
    setNewTargetTask('');

    setExecutionLogs(logs => [
      {
        id: String(Date.now()),
        timestamp: new Date().toLocaleTimeString(),
        text: `New custom script module saved: [${newModuleItem.name}] (${newModuleItem.runtime}).`,
        type: 'success'
      },
      ...logs
    ]);
  };

  const handleDeleteModule = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setModules(prev => prev.filter(m => m.id !== id));
    if (selectedModuleId === id) {
      const remaining = modules.filter(m => m.id !== id);
      if (remaining.length > 0) setSelectedModuleId(remaining[0].id);
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Top Registry Control Ribbon */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-md">
        <div>
          <div className="flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-400" />
            <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
              Obfuscation Script Registry & Execution Hub
            </h3>
            <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              {modules.filter(m => m.enabled).length} Active / {modules.length} Registered
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Toggle, configure, and execute out-of-the-box Bash & Node.js scripts for residential proxy rotation, 
            canvas fingerprint perturbation, EXIF stripping, and timing jitter.
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>New Custom Script</span>
          </button>

          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            title="Reset to official factory modules"
          >
            <RotateCw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>
      </div>

      {/* Filter Chips Bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between text-xs">
        
        {/* Runtime filter */}
        <div className="flex items-center gap-1.5">
          <span className="text-slate-400 font-semibold uppercase text-[11px] mr-1">Runtime:</span>
          <button
            onClick={() => setFilterRuntime('all')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all border ${
              filterRuntime === 'all'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-xs'
                : 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700'
            }`}
          >
            All Runtimes
          </button>
          <button
            onClick={() => setFilterRuntime('bash')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all border ${
              filterRuntime === 'bash'
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                : 'bg-slate-50 text-emerald-700 dark:bg-slate-800 dark:text-emerald-400 border-slate-200 dark:border-slate-700'
            }`}
          >
            Bash (.sh)
          </button>
          <button
            onClick={() => setFilterRuntime('node')}
            className={`px-3 py-1.5 rounded-lg font-semibold transition-all border ${
              filterRuntime === 'node'
                ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                : 'bg-slate-50 text-amber-700 dark:bg-slate-800 dark:text-amber-400 border-slate-200 dark:border-slate-700'
            }`}
          >
            Node.js (.js)
          </button>
        </div>

        {/* Category filter */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-slate-400 font-semibold uppercase text-[11px] shrink-0">Category:</span>
          <select
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 font-medium"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>
                {cat === 'all' ? 'All Task Categories' : cat}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* Main Two-Column Master/Detail Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Script Modules List */}
        <div className="lg:col-span-5 space-y-3 max-h-[720px] overflow-y-auto pr-1">
          <div className="text-xs font-semibold text-slate-500 px-1 flex justify-between items-center">
            <span>{filteredModules.length} Modules in Registry</span>
            <span>Toggle to enable/disable</span>
          </div>

          {filteredModules.map(mod => {
            const isSelected = selectedModule?.id === mod.id;
            return (
              <div
                key={mod.id}
                onClick={() => setSelectedModuleId(mod.id)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer relative ${
                  isSelected
                    ? 'bg-emerald-50/70 border-emerald-300 dark:bg-emerald-950/30 dark:border-emerald-700 shadow-md ring-1 ring-emerald-500/20'
                    : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-mono font-bold ${
                      mod.runtime === 'bash'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                        : 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300'
                    }`}>
                      {mod.runtime.toUpperCase()}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                      {mod.category}
                    </span>
                    {mod.isCustom && (
                      <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        Custom
                      </span>
                    )}
                  </div>

                  {/* On/Off Toggle Button */}
                  <button
                    onClick={(e) => handleToggleModule(mod.id, e)}
                    className={`flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold transition-all ${
                      mod.enabled
                        ? 'bg-emerald-600 text-white shadow-2xs'
                        : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400'
                    }`}
                    title="Toggle script module activation state"
                  >
                    <Power className="w-3 h-3" />
                    <span>{mod.enabled ? 'ON' : 'OFF'}</span>
                  </button>
                </div>

                <h4 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                  {mod.name}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 mt-1">
                  {mod.description}
                </p>

                {/* Execution Stats Pill */}
                <div className="mt-3 pt-2.5 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-500" />
                    <span>Run Count: <strong className="text-slate-800 dark:text-slate-200 font-mono">{mod.executionCount}</strong></span>
                  </div>

                  {mod.lastExecutedAt && (
                    <span className="text-[10px] text-slate-400">
                      Last: {mod.lastExecutedAt.slice(11, 19)}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Code Viewer & Local Execution Console */}
        <div className="lg:col-span-7 space-y-6">
          {selectedModule && (
            <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xl space-y-6">
              
              {/* Header */}
              <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-mono font-bold ${
                      selectedModule.runtime === 'bash'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-amber-600 text-white'
                    }`}>
                      {selectedModule.runtime === 'bash' ? 'SHELL SCRIPT' : 'NODE.JS DAEMON'}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                      {selectedModule.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
                    {selectedModule.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {selectedModule.description}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => handleExecuteModule(selectedModule)}
                    disabled={isExecutingId === selectedModule.id}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md transition-all active:scale-95"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>{isExecutingId === selectedModule.id ? 'Running...' : 'Execute Now'}</span>
                  </button>

                  {selectedModule.isCustom && (
                    <button
                      onClick={(e) => handleDeleteModule(selectedModule.id, e)}
                      className="p-2 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Delete custom module"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Target Task & Execution Target */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700">
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">Target Obfuscation Task</span>
                  <span className="font-bold text-slate-800 dark:text-slate-200 block mt-0.5">
                    {selectedModule.targetTask}
                  </span>
                </div>

                <div className="bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-200/60 dark:border-slate-700">
                  <span className="text-[11px] font-semibold text-slate-400 block uppercase">Shell Invocation Command</span>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5 truncate" title={selectedModule.commandToRun}>
                    $ {selectedModule.commandToRun}
                  </span>
                </div>
              </div>

              {/* Code Snippet Box */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <FileCode className="w-4 h-4 text-blue-500" />
                    <span>Source Code Preview ({selectedModule.runtime})</span>
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleCopyCode(selectedModule.scriptContent, selectedModule.id)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    >
                      {copiedId === selectedModule.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-500" />
                          <span className="text-emerald-500">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Script</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 p-4 max-h-72 overflow-y-auto">
                  <pre className="font-mono text-xs text-emerald-400 leading-relaxed">
                    <code>{selectedModule.scriptContent}</code>
                  </pre>
                </div>
              </div>

              {/* Local Execution Tracking Panel */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-4 h-4 text-emerald-500" />
                    <span>Live Local Execution Telemetry Log</span>
                  </span>
                  <button
                    onClick={() => setExecutionLogs([])}
                    className="text-[11px] text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                  >
                    Clear Logs
                  </button>
                </div>

                <div className="bg-black text-xs font-mono p-3.5 rounded-2xl border border-slate-800 max-h-40 overflow-y-auto space-y-1">
                  {executionLogs.length === 0 ? (
                    <div className="text-slate-600 italic py-2">
                      Ready. Click "Execute Now" to simulate invocation or trigger automated obfuscation tasks.
                    </div>
                  ) : (
                    executionLogs.map(log => (
                      <div key={log.id} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                        <span className={
                          log.type === 'success' ? 'text-emerald-400' :
                          log.type === 'warn' ? 'text-amber-400' : 'text-slate-300'
                        }>
                          {log.text}
                        </span>
                      </div>
                    ))
                  )}
                </div>
              </div>

            </div>
          )}
        </div>

      </div>

      {/* Modal: Add New Custom Script Module */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7 space-y-5"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Register Custom Obfuscation Module
                </h3>
                <p className="text-xs text-slate-500">
                  Save your own Bash or Node.js automation snippets with execution tracking
                </p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSaveCustomModule} className="space-y-3.5 text-xs">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  Module Name / Title:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Multi-Hop WireGuard Tunnel Shuffler"
                  value={newTitle}
                  onChange={e => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                    Runtime Language:
                  </label>
                  <select
                    value={newRuntime}
                    onChange={e => setNewRuntime(e.target.value as ScriptRuntime)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="bash">Bash Shell (.sh)</option>
                    <option value="node">Node.js (.js)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                    Task Category:
                  </label>
                  <select
                    value={newCategory}
                    onChange={e => setNewCategory(e.target.value as ObfuscationCategory)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                  >
                    <option value="Network & Proxy Rotation">Network & Proxy Rotation</option>
                    <option value="Browser Fingerprint Spoofing">Browser Fingerprint Spoofing</option>
                    <option value="Metadata & File Sanitization">Metadata & File Sanitization</option>
                    <option value="Traffic Jitter & Timing">Traffic Jitter & Timing</option>
                    <option value="Payload & Memory Scrambling">Payload & Memory Scrambling</option>
                    <option value="API Honeytoken Defense">API Honeytoken Defense</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  Target Obfuscation Objective:
                </label>
                <input
                  type="text"
                  placeholder="e.g. Scramble DNS over HTTPS routing to bypass ISP rate limits"
                  value={newTargetTask}
                  onChange={e => setNewTargetTask(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  CLI Execution Command:
                </label>
                <input
                  type="text"
                  placeholder="e.g. bash scripts/wireguard_shuffle.sh"
                  value={newCommand}
                  onChange={e => setNewCommand(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono"
                />
              </div>

              <div>
                <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                  Executable Script Body:
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder={newRuntime === 'bash' ? '#!/usr/bin/env bash\necho "Running stealth task..."' : '// Node.js script body\nconsole.log("Stealth daemon active");'}
                  value={newScript}
                  onChange={e => setNewScript(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 rounded-xl font-medium text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-5 py-2 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs"
                >
                  <Check className="w-4 h-4" />
                  <span>Register Module</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
