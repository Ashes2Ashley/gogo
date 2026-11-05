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

export type ActiveTab = 'explorer' | 'portfolio' | 'matrix' | 'calculator' | 'operations';

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
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Logo and Version Badge */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setActiveTab('explorer')}
              className="flex items-center gap-2.5 text-left group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 flex items-center justify-center shadow-md shadow-blue-500/20 text-white font-bold tracking-wider text-sm transition-transform group-hover:scale-105">
                26
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white tracking-tight">
                    CASH FLOW VECTORS
                  </span>
                  <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                    v5.0 2026 Edition
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                  Non-Real Estate IRL Execution Engine
                </p>
              </div>
            </button>
          </div>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-900 p-1 rounded-xl border border-slate-200 dark:border-slate-800 text-sm font-medium">
            <button
              onClick={() => setActiveTab('explorer')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'explorer'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Grid3X3 className="w-4 h-4" />
              <span>Vectors Directory</span>
            </button>

            <button
              onClick={() => setActiveTab('portfolio')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all relative ${
                activeTab === 'portfolio'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Portfolio Builder</span>
              {portfolioCount > 0 && (
                <span className="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white bg-blue-600 rounded-full">
                  {portfolioCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('matrix')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'matrix'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <TrendingUp className="w-4 h-4" />
              <span>Strategy Matrix</span>
            </button>

            <button
              onClick={() => setActiveTab('calculator')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'calculator'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span>Allocation Wizard</span>
            </button>

            <button
              onClick={() => setActiveTab('operations')}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all ${
                activeTab === 'operations'
                  ? 'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-sm font-semibold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>2026 Playbook</span>
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
        </div>
      </div>
    </header>
  );
};
