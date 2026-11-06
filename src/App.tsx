import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import { CASH_FLOW_VECTORS, PRESET_PORTFOLIOS } from './data/cashFlowVectors';
import { CATEGORIES } from './data/categories';
import { VectorItem, FilterState } from './types';
import { Navbar, ActiveTab } from './components/Navbar';
import { StatsBanner } from './components/StatsBanner';
import { FilterBar } from './components/FilterBar';
import { VectorCard } from './components/VectorCard';
import { VectorDetailModal } from './components/VectorDetailModal';
import { PortfolioBuilder } from './components/PortfolioBuilder';
import { RiskReturnMatrix } from './components/RiskReturnMatrix';
import { RoiCalculator } from './components/RoiCalculator';
import { OperationalNotice } from './components/OperationalNotice';
import { CustomVectorModal } from './components/CustomVectorModal';
import { AptRedOpsCenter } from './components/AptRedOpsCenter';
import { ADVANCED_100_FEATURES } from './data/advancedFeatures';
import { Currency, formatCurrency } from './utils/formatters';
import { 
  Sparkles, 
  ArrowUp, 
  Download, 
  Briefcase, 
  Grid3X3, 
  CheckCircle,
  HelpCircle
} from 'lucide-react';

const INITIAL_BENCHMARK_IDS = [
  'vec_1_1', // AI-Generated Content Arbitrage
  'vec_5_2', // Crypto Airdrop Farming
  'vec_6_1', // AI-Generated Micro-Dropshipping
  'vec_2_1', // Custom AI Chatbot Setup
  'vec_3_1', // Amazon FBA Wholesale & Retail Arbitrage
  'vec_4_2', // Local Business Lead Generation & Data Enrichment
  'vec_9_1', // Faceless YouTube Channel Network
  'vec_6_2', // Print-on-Demand (POD) AI Merchandise
  'vec_4_1', // AI Dataset Labeling & Verification Network
  'vec_5_1', // DeFi Liquidity Provision & Yield Farming
];

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('explorer');
  const [currency, setCurrency] = useState<Currency>(() => {
    return (localStorage.getItem('cf_currency') as Currency) || 'USD';
  });
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('cf_dark');
    return saved !== null ? saved === 'true' : true; // Default to true (ominous dark mode)
  });

  // Custom vectors added by user
  const [customVectors, setCustomVectors] = useState<VectorItem[]>(() => {
    try {
      const saved = localStorage.getItem('cf_custom_vectors');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Master list of all vectors
  const allVectors = useMemo(() => {
    return [...CASH_FLOW_VECTORS, ...customVectors];
  }, [customVectors]);

  // Selected portfolio vector IDs
  const [portfolioVectorIds, setPortfolioVectorIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('cf_portfolio_ids');
      return saved ? JSON.parse(saved) : INITIAL_BENCHMARK_IDS;
    } catch {
      return INITIAL_BENCHMARK_IDS;
    }
  });

  // Completed steps tracking per vector: { [vectorId]: [stepIndex0, stepIndex1] }
  const [completedStepsMap, setCompletedStepsMap] = useState<Record<string, number[]>>(() => {
    try {
      const saved = localStorage.getItem('cf_completed_steps');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Active modal inspection state
  const [selectedVector, setSelectedVector] = useState<VectorItem | null>(null);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState<boolean>(false);

  // Filter state for explorer
  const [filters, setFilters] = useState<FilterState>({
    selectedCategory: 'all',
    searchQuery: '',
    maxRisk: 10,
    maxCost: 5000,
    scalability: 'all',
    recommendedOnly: false,
    sortBy: 'code_asc',
  });

  // Save states to localStorage
  useEffect(() => {
    localStorage.setItem('cf_currency', currency);
  }, [currency]);

  useEffect(() => {
    localStorage.setItem('cf_portfolio_ids', JSON.stringify(portfolioVectorIds));
  }, [portfolioVectorIds]);

  useEffect(() => {
    localStorage.setItem('cf_completed_steps', JSON.stringify(completedStepsMap));
  }, [completedStepsMap]);

  useEffect(() => {
    localStorage.setItem('cf_custom_vectors', JSON.stringify(customVectors));
  }, [customVectors]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('cf_dark', isDarkMode ? 'true' : 'false');
  }, [isDarkMode]);

  // Portfolio Toggle Handler
  const handleTogglePortfolio = (vectorId: string) => {
    setPortfolioVectorIds(prev => {
      const exists = prev.includes(vectorId);
      if (exists) {
        return prev.filter(id => id !== vectorId);
      } else {
        // Trigger celebratory micro-confetti
        confetti({
          particleCount: 30,
          spread: 45,
          origin: { y: 0.8 },
          colors: ['#3b82f6', '#10b981', '#6366f1'],
        });
        return [...prev, vectorId];
      }
    });
  };

  const handleClearPortfolio = () => {
    setPortfolioVectorIds([]);
  };

  const handleLoadPreset = (presetId: string) => {
    if (presetId === 'apt_redops_jump') {
      setActiveTab('apt_redops');
      return;
    }
    const preset = PRESET_PORTFOLIOS.find(p => p.id === presetId);
    if (preset) {
      setPortfolioVectorIds(preset.vectorIds);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
      setActiveTab('portfolio');
    }
  };

  const handleToggleStep = (vectorId: string, stepIndex: number) => {
    setCompletedStepsMap(prev => {
      const current = prev[vectorId] || [];
      const updated = current.includes(stepIndex)
        ? current.filter(i => i !== stepIndex)
        : [...current, stepIndex];
      return { ...prev, [vectorId]: updated };
    });
  };

  const handleAddCustomVector = (newVector: VectorItem) => {
    setCustomVectors(prev => [newVector, ...prev]);
    setPortfolioVectorIds(prev => [...prev, newVector.id]);
    confetti({
      particleCount: 40,
      spread: 50,
      origin: { y: 0.6 },
    });
  };

  // Reset Filters
  const handleResetFilters = () => {
    setFilters({
      selectedCategory: 'all',
      searchQuery: '',
      maxRisk: 10,
      maxCost: 5000,
      scalability: 'all',
      recommendedOnly: false,
      sortBy: 'code_asc',
    });
  };

  // Filtered & Sorted vectors
  const filteredVectors = useMemo(() => {
    return allVectors
      .filter(v => {
        // Category filter
        if (filters.selectedCategory !== 'all' && v.category !== filters.selectedCategory) {
          return false;
        }
        // Recommended filter
        if (filters.recommendedOnly && !v.recommendedInBenchmark) {
          return false;
        }
        // Risk filter
        if (v.riskScore > filters.maxRisk) {
          return false;
        }
        // Cost filter
        if (filters.maxCost < 5000 && v.upfrontCost > filters.maxCost) {
          return false;
        }
        // Scalability filter
        if (filters.scalability !== 'all' && v.scalability !== filters.scalability) {
          return false;
        }
        // Search Query filter
        if (filters.searchQuery.trim()) {
          const q = filters.searchQuery.toLowerCase();
          const matchTitle = v.title.toLowerCase().includes(q);
          const matchCode = v.code.toLowerCase().includes(q);
          const matchTools = v.tools.some(t => t.toLowerCase().includes(q));
          const matchSteps = v.steps.some(s => s.toLowerCase().includes(q));
          const matchRevenue = v.revenueString.toLowerCase().includes(q);
          if (!matchTitle && !matchCode && !matchTools && !matchSteps && !matchRevenue) {
            return false;
          }
        }
        return true;
      })
      .sort((a, b) => {
        if (filters.sortBy === 'revenue_desc') {
          return b.estimatedMonthlyRevenue - a.estimatedMonthlyRevenue;
        }
        if (filters.sortBy === 'cost_asc') {
          return a.upfrontCost - b.upfrontCost;
        }
        if (filters.sortBy === 'risk_asc') {
          return a.riskScore - b.riskScore;
        }
        // Default: numeric sort by code (e.g. 1.1 < 1.10)
        const parseCode = (c: string) => {
          const parts = c.split('.').map(Number);
          return (parts[0] || 0) * 1000 + (parts[1] || 0);
        };
        return parseCode(a.code) - parseCode(b.code);
      });
  }, [allVectors, filters]);

  // Aggregate KPI computations
  const totalMonthlyPotential = useMemo(() => {
    return allVectors.reduce((acc, v) => acc + v.estimatedMonthlyRevenue, 0);
  }, [allVectors]);

  const avgStartupCapital = useMemo(() => {
    if (allVectors.length === 0) return 0;
    return Math.round(allVectors.reduce((acc, v) => acc + v.upfrontCost, 0) / allVectors.length);
  }, [allVectors]);

  const medianRisk = useMemo(() => {
    const scores = allVectors.map(v => v.riskScore).sort((a, b) => a - b);
    const mid = Math.floor(scores.length / 2);
    return scores.length % 2 !== 0 ? scores[mid] : ((scores[mid - 1] + scores[mid]) / 2);
  }, [allVectors]);

  // Export Complete Strategy Playbook (.md file download)
  const handleExportPlaybook = () => {
    const activeSelected = allVectors.filter(v => portfolioVectorIds.includes(v.id));
    const activeList = activeSelected.length > 0 ? activeSelected : allVectors.slice(0, 10);
    const totalRev = activeList.reduce((acc, v) => acc + v.estimatedMonthlyRevenue, 0);
    const totalCost = activeList.reduce((acc, v) => acc + v.upfrontCost, 0);

    let markdown = `# 2026 IRL CASH FLOW VECTORS – EXECUTION PLAYBOOK\n`;
    markdown += `Generated on: ${new Date().toLocaleDateString()} | Target Monthly Run-Rate: $${totalRev.toLocaleString()}/mo\n`;
    markdown += `Total Initial Capital Required: $${totalCost.toLocaleString()}\n\n`;
    markdown += `---\n\n`;
    markdown += `## PORTFOLIO SUMMARY\n`;
    markdown += `Active Vectors: ${activeList.length}\n`;
    markdown += `Annualized Run-Rate: $${(totalRev * 12).toLocaleString()}\n\n`;

    markdown += `| Vector ID | Name | Category | Monthly Revenue | Upfront Cost | Risk |\n`;
    markdown += `|---|---|---|---|---|---|\n`;
    activeList.forEach(v => {
      const cat = CATEGORIES.find(c => c.id === v.category);
      markdown += `| #${v.code} | ${v.title} | ${cat?.shortName || v.category} | ${v.revenueString} | ${v.costString} | ${v.riskScore}/10 |\n`;
    });

    markdown += `\n---\n\n## STEP-BY-STEP IMPLEMENTATION ROADMAP\n\n`;
    activeList.forEach((v, idx) => {
      const cat = CATEGORIES.find(c => c.id === v.category);
      markdown += `### ${idx + 1}. #${v.code} - ${v.title}\n`;
      markdown += `- **Category**: ${cat?.name}\n`;
      markdown += `- **Target Monthly Cash Flow**: ${v.revenueString}\n`;
      markdown += `- **Capital & Risk**: ${v.costString} | Risk: ${v.riskScore}/10 | Scalability: ${v.scalability}\n`;
      markdown += `- **Required 2026 Tools**: ${v.tools.join(', ')}\n\n`;
      markdown += `**Execution Checklist:**\n`;
      v.steps.forEach((s, sIdx) => {
        const isDone = (completedStepsMap[v.id] || []).includes(sIdx);
        markdown += `- [${isDone ? 'x' : ' '}] Step ${sIdx + 1}: ${s}\n`;
      });
      markdown += `\n`;
    });

    markdown += `---\n\n## 2026 OPERATIONAL RULES\n`;
    markdown += `1. **Automation-First**: Automate client onboarding and pipeline management via n8n / Make.\n`;
    markdown += `2. **Anti-Detection**: Use isolated browser environments (AdsPower) and dedicated residential proxies for social scaling.\n`;
    markdown += `3. **Cash Compounding**: Reinvest 30% of sweat-equity cash flows into high-margin B2B retainers.\n`;

    const blob = new Blob([markdown], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `2026-Cash-Flow-Vectors-Playbook.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans transition-colors relative selection:bg-rose-900/50 selection:text-rose-200">
      
      {/* Ominous Anonymous Mask Ambient Background Layer */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20 dark:opacity-25 bg-cover bg-center bg-no-repeat mix-blend-screen"
        style={{ backgroundImage: `url('/src/assets/images/anonymous_mask_bg_1793914336825.jpg')` }}
      />

      {/* Cybernetic Scanlines & Vignette Overlay */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(2,6,23,0.85)_100%)]" />
      <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.3)_51%)] bg-[length:100%_4px] opacity-40" />

      {/* Subtle Ominous Ambient Glow Orbs */}
      <div className="fixed top-20 left-1/4 w-[500px] h-[500px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-10 right-1/4 w-[600px] h-[600px] bg-emerald-950/15 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Top Sticky Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        portfolioCount={portfolioVectorIds.length}
        currency={currency}
        setCurrency={setCurrency}
        onOpenCustomVectorModal={() => setIsCustomModalOpen(true)}
        onExportPlaybook={handleExportPlaybook}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 relative z-10">
        
        {/* TAB 1: Vectors Directory Explorer */}
        {activeTab === 'explorer' && (
          <div className="space-y-6">
            {/* Top Statistics Hero Banner */}
            <StatsBanner
              totalVectors={allVectors.length}
              totalMonthlyPotential={totalMonthlyPotential}
              avgStartupCapital={avgStartupCapital}
              medianRisk={medianRisk}
              currency={currency}
              onQuickPresetSelect={handleLoadPreset}
            />

            {/* Filter & Search Bar */}
            <FilterBar
              filters={filters}
              setFilters={setFilters}
              totalMatches={filteredVectors.length}
              currency={currency}
              onResetFilters={handleResetFilters}
            />

            {/* Vectors Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
              {filteredVectors.length === 0 ? (
                <div className="py-20 text-center text-slate-500 dark:text-slate-400 space-y-3">
                  <Grid3X3 className="w-10 h-10 mx-auto text-slate-400" />
                  <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                    No cash flow vectors match your filter criteria
                  </p>
                  <p className="text-xs">
                    Try broadening your risk score, search terms, or capital budget.
                  </p>
                  <button
                    onClick={handleResetFilters}
                    className="mt-2 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                  >
                    Reset All Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                  {filteredVectors.map(vector => (
                    <VectorCard
                      key={vector.id}
                      vector={vector}
                      isInPortfolio={portfolioVectorIds.includes(vector.id)}
                      onTogglePortfolio={handleTogglePortfolio}
                      onSelectVector={setSelectedVector}
                      currency={currency}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 2: Portfolio Allocation Builder */}
        {activeTab === 'portfolio' && (
          <PortfolioBuilder
            portfolioVectorIds={portfolioVectorIds}
            allVectors={allVectors}
            onRemoveFromPortfolio={handleTogglePortfolio}
            onClearPortfolio={handleClearPortfolio}
            onLoadPreset={handleLoadPreset}
            onSelectVector={setSelectedVector}
            completedStepsMap={completedStepsMap}
            currency={currency}
            onOpenCustomVectorModal={() => setIsCustomModalOpen(true)}
            onExportPlaybook={handleExportPlaybook}
          />
        )}

        {/* TAB 3: 2D Risk-Return Strategy Matrix */}
        {activeTab === 'matrix' && (
          <RiskReturnMatrix
            vectors={allVectors}
            onSelectVector={setSelectedVector}
            onTogglePortfolio={handleTogglePortfolio}
            portfolioVectorIds={portfolioVectorIds}
            currency={currency}
          />
        )}

        {/* TAB 4: Personalized Allocation Wizard */}
        {activeTab === 'calculator' && (
          <RoiCalculator
            allVectors={allVectors}
            onApplyRecommendedPortfolio={(ids) => {
              setPortfolioVectorIds(ids);
              confetti({ particleCount: 40, spread: 60 });
              setActiveTab('portfolio');
            }}
            currency={currency}
            onSelectVector={setSelectedVector}
          />
        )}

        {/* TAB 5: Operational Playbook & Security Protocols */}
        {activeTab === 'operations' && (
          <OperationalNotice
            onLoadBenchmark={() => handleLoadPreset('benchmark_2026')}
            currency={currency}
          />
        )}

        {/* TAB 6: 100 Advanced Features & APT Red-Ops Center */}
        {activeTab === 'apt_redops' && (
          <AptRedOpsCenter
            onExportCapabilitiesDoc={() => {
              let md = `# 100 ADVANCED CAPABILITIES, SCRIPTABLE MODULES & APT RED-OPS PLAYBOOK (2026)\n\n`;
              md += `Generated: ${new Date().toISOString()}\nTotal Modules: ${ADVANCED_100_FEATURES.length}\n\n---\n\n`;
              ADVANCED_100_FEATURES.forEach(f => {
                md += `## #${f.num}. ${f.title} [${f.category} | Phase: ${f.aptPhase}]\n`;
                md += `**Threat Context:** ${f.threatActorContext}\n\n`;
                md += `**Red-Team Playbook:** ${f.redTeamPlaybook}\n\n`;
                md += `**Impact Metric:** ${f.impactMetric}\n\n`;
                md += `\`\`\`javascript\n${f.scriptSnippet}\n\`\`\`\n\n---\n\n`;
              });
              const blob = new Blob([md], { type: 'text/markdown' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = '100-Advanced-Capabilities-APT-Playbook.md';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              URL.revokeObjectURL(url);
            }}
          />
        )}

      </main>

      {/* Vector Detail / Execution Roadmap Modal */}
      {selectedVector && (
        <VectorDetailModal
          vector={selectedVector}
          onClose={() => setSelectedVector(null)}
          isInPortfolio={portfolioVectorIds.includes(selectedVector.id)}
          onTogglePortfolio={handleTogglePortfolio}
          currency={currency}
          completedSteps={completedStepsMap[selectedVector.id] || []}
          onToggleStep={handleToggleStep}
        />
      )}

      {/* Custom Vector Creation Modal */}
      <CustomVectorModal
        isOpen={isCustomModalOpen}
        onClose={() => setIsCustomModalOpen(false)}
        onAddCustomVector={handleAddCustomVector}
        currency={currency}
        existingCount={customVectors.length}
      />

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-6 text-center text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white">2026 IRL CASH FLOW VECTORS</span>
            <span>•</span>
            <span>Version 5.0 Full Spectrum Exploitation</span>
          </div>
          <div>
            <span>100+ Digital, AI, Supply Chain, and DeFi Non-Real Estate Blueprints</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
