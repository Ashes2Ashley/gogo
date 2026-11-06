import React from 'react';
import { 
  TrendingUp, 
  Briefcase, 
  Grid3X3, 
  SlidersHorizontal, 
  ShieldCheck, 
  PlusCircle, 
  FileText,
  DollarSign
} from 'lucide-react';
import { Currency } from '../utils/formatters';

export type ActiveTab = 'explorer' | 'portfolio' | 'matrix' | 'calculator' | 'operations' | 'apt_redops';

interface NavbarProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  portfolioCount: number;
  currency: Currency;
  setCurrency: (c: Currency) => void;
  onOpenCustomVectorModal: () => void;
  onExportPlaybook: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (dark: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  portfolioCount,
  currency,
  setCurrency,
  onOpenCustomVectorModal,
  onExportPlaybook,
  isDarkMode,
  setIsDarkMode,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-rose-950/40 bg-slate-950/85 backdrop-blur-xl transition-colors shadow-2xl shadow-black/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo and Version Badge */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('explorer')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-rose-700 via-rose-950 to-slate-950 border border-rose-600/40 flex items-center justify-center shadow-lg shadow-rose-900/30 text-rose-300 font-mono font-black tracking-wider text-sm transition-transform group-hover:scale-105">
                26
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-base sm:text-lg text-white tracking-wider font-mono">
                    CASH FLOW VECTORS
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-950/80 text-rose-300 border border-rose-800/80">
                    OMINOUS v5.0
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                  Autonomous IRL Shadow Operations Engine
                </p>
              </div>
            </button>
          </div>

          {/* Navigation Tabs */}
          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 text-sm font-medium">
            <button
              onClick={() => setActiveTab('explorer')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'explorer'
                  ? 'bg-slate-800 text-white shadow-sm font-semibold border border-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Grid3X3 className="w-4 h-4 text-slate-400" />
              <span>Vectors Directory</span>
            </button>

            <button
              onClick={() => setActiveTab('portfolio')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all relative ${
                activeTab === 'portfolio'
                  ? 'bg-slate-800 text-white shadow-sm font-semibold border border-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <Briefcase className="w-4 h-4 text-emerald-400" />
              <span>Portfolio Builder</span>
              {portfolioCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-emerald-600 rounded-full font-mono">
                  {portfolioCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'matrix'
                  ? 'bg-slate-800 text-white shadow-sm font-semibold border border-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <TrendingUp className="w-4 h-4 text-sky-400" />
              <span>Strategy Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'calculator'
                  ? 'bg-slate-800 text-white shadow-sm font-semibold border border-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4 text-amber-400" />
              <span>Allocation Wizard</span>
            </button>

            <button
              onClick={() => setActiveTab('operations')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'operations'
                  ? 'bg-slate-800 text-white shadow-sm font-semibold border border-slate-700'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-rose-400" />
              <span>2026 Playbook</span>
            </button>

            <button
              onClick={() => setActiveTab('apt_redops')}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-lg transition-all ${
                activeTab === 'apt_redops'
                  ? 'bg-gradient-to-r from-rose-700 to-rose-900 text-white shadow-lg shadow-rose-950/60 font-bold border border-rose-500/50'
                  : 'text-rose-400 hover:bg-rose-950/40 font-semibold'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
              <span>APT & Red Ops (100)</span>
            </button>
          </nav>

          {/* Quick Actions & Preferences */}
          <div className="flex items-center gap-2">
            
            {/* Currency Selector */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-900 rounded-lg p-0.5 border border-slate-200 dark:border-slate-800 text-xs font-semibold">
              {(['USD', 'EUR', 'GBP'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  onClick={() => setCurrency(curr)}
                  className={`px-2 py-1 rounded transition-colors ${
                    currency === curr
                      ? 'bg-white dark:bg-slate-800 text-blue-600 dark:text-blue-400 shadow-xs'
                      : 'text-slate-500 hover:text-slate-800 dark:text-slate-400'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>

            {/* Reset / Clean Live Ops Button */}
            <button
              onClick={() => {
                if (window.confirm('Purge all session cache, mock counters, and reset system to clean administrative Live Ops state?')) {
                  localStorage.removeItem('cf_module_registry');
                  localStorage.removeItem('cf_completed_steps');
                  window.location.reload();
                }
              }}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold rounded-lg text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors border border-emerald-200 dark:border-emerald-800"
              title="Purge test telemetry and initialize clean Live Operations"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Live Ops Clean</span>
            </button>

            {/* Custom Vector Button */}
            <button
              onClick={onOpenCustomVectorModal}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors border border-slate-200 dark:border-slate-700"
              title="Add a custom cash flow vector"
            >
              <PlusCircle className="w-3.5 h-3.5 text-blue-500" />
              <span>Add Vector</span>
            </button>

            {/* Export Plan Button */}
            <button
              onClick={onExportPlaybook}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-blue-600 hover:bg-blue-700 text-white shadow-sm transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Export Plan</span>
            </button>

            {/* Mobile Portfolio Badge Shortcut */}
            <button
              onClick={() => setActiveTab('portfolio')}
              className="md:hidden relative p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200"
            >
              <Briefcase className="w-5 h-5" />
              {portfolioCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {portfolioCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden items-center justify-between overflow-x-auto py-2 border-t border-slate-100 dark:border-slate-800/60 no-scrollbar text-xs">
          <button
            onClick={() => setActiveTab('explorer')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'explorer' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-semibold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Vectors Directory
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'portfolio' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-semibold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Portfolio ({portfolioCount})
          </button>
          <button
            onClick={() => setActiveTab('matrix')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'matrix' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-semibold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Strategy Matrix
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'calculator' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-semibold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Allocation Wizard
          </button>
          <button
            onClick={() => setActiveTab('operations')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap ${
              activeTab === 'operations' ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 font-semibold' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            Playbook
          </button>
          <button
            onClick={() => setActiveTab('apt_redops')}
            className={`px-3 py-1.5 rounded-md whitespace-nowrap font-bold ${
              activeTab === 'apt_redops' ? 'bg-rose-600 text-white' : 'text-rose-600 dark:text-rose-400'
            }`}
          >
            APT Red Ops (100)
          </button>
        </div>
      </div>
    </header>
  );
};
