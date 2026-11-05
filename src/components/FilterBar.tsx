import React from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  Layers, 
  Bot, 
  Truck, 
  Database, 
  Coins, 
  ShoppingBag, 
  Zap, 
  Cpu, 
  Video, 
  Wrench,
  Check,
  X,
  Sparkles
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { CategoryId, FilterState, Scalability } from '../types';
import { Currency, formatCurrency } from '../utils/formatters';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  totalMatches: number;
  currency: Currency;
  onResetFilters: () => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  Layers: <Layers className="w-3.5 h-3.5" />,
  Bot: <Bot className="w-3.5 h-3.5" />,
  Truck: <Truck className="w-3.5 h-3.5" />,
  Database: <Database className="w-3.5 h-3.5" />,
  Coins: <Coins className="w-3.5 h-3.5" />,
  ShoppingBag: <ShoppingBag className="w-3.5 h-3.5" />,
  Zap: <Zap className="w-3.5 h-3.5" />,
  Cpu: <Cpu className="w-3.5 h-3.5" />,
  Video: <Video className="w-3.5 h-3.5" />,
  Wrench: <Wrench className="w-3.5 h-3.5" />,
};

export const FilterBar: React.FC<FilterBarProps> = ({
  filters,
  setFilters,
  totalMatches,
  currency,
  onResetFilters,
}) => {
  const [showAdvanced, setShowAdvanced] = React.useState(false);

  const handleCategoryClick = (catId: CategoryId | 'all') => {
    setFilters(prev => ({
      ...prev,
      selectedCategory: prev.selectedCategory === catId ? 'all' : catId,
    }));
  };

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-16 z-30 shadow-xs transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        
        {/* Search & Main Controls Row */}
        <div className="flex flex-col md:flex-row gap-3 items-stretch md:items-center justify-between">
          
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search vectors by tool (Claude, ElevenLabs, Aave, Keepa...), title, or keywords..."
              value={filters.searchQuery}
              onChange={e => setFilters(prev => ({ ...prev, searchQuery: e.target.value }))}
              className="w-full pl-10 pr-9 py-2 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
            {filters.searchQuery && (
              <button
                onClick={() => setFilters(prev => ({ ...prev, searchQuery: '' }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Filter Buttons & Sort */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 md:pb-0">
            
            {/* Recommended Benchmark Toggle */}
            <button
              onClick={() => setFilters(prev => ({ ...prev, recommendedOnly: !prev.recommendedOnly }))}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                filters.recommendedOnly
                  ? 'bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-700 ring-2 ring-blue-500/20'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>2026 Benchmark Top 10</span>
            </button>

            {/* Sort Dropdown */}
            <select
              value={filters.sortBy}
              onChange={e => setFilters(prev => ({ ...prev, sortBy: e.target.value as FilterState['sortBy'] }))}
              className="px-3 py-2 rounded-xl text-xs font-medium bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            >
              <option value="code_asc">Vector ID (Default)</option>
              <option value="revenue_desc">Highest Monthly Revenue</option>
              <option value="cost_asc">Lowest Startup Cost</option>
              <option value="risk_asc">Lowest Risk (Safest)</option>
            </select>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-colors border ${
                showAdvanced || filters.maxRisk < 10 || filters.maxCost < 5000 || filters.scalability !== 'all'
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800'
                  : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        {/* Category Horizontal Scroll Pills */}
        <div className="flex items-center gap-1.5 mt-3 overflow-x-auto pb-1 no-scrollbar text-xs font-medium">
          <button
            onClick={() => handleCategoryClick('all')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all border ${
              filters.selectedCategory === 'all'
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-xs font-semibold'
                : 'bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800/80 dark:text-slate-300 border-slate-200 dark:border-slate-700'
            }`}
          >
            All Vectors ({totalMatches})
          </button>

          {CATEGORIES.map(cat => {
            const isSelected = filters.selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs font-semibold'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800/80 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                }`}
              >
                <span>{CATEGORY_ICONS[cat.icon]}</span>
                <span>{cat.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Advanced Filters Expandable Drawer */}
        {showAdvanced && (
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-xs animate-in fade-in duration-200">
            
            {/* Risk Slider */}
            <div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400 font-medium mb-1.5">
                <span>Max Risk Level:</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">{filters.maxRisk} / 10</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={filters.maxRisk}
                onChange={e => setFilters(prev => ({ ...prev, maxRisk: Number(e.target.value) }))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>1 (Ultra Safe)</span>
                <span>5 (Moderate)</span>
                <span>10 (High Alpha)</span>
              </div>
            </div>

            {/* Max Startup Capital Slider */}
            <div>
              <div className="flex justify-between text-slate-600 dark:text-slate-400 font-medium mb-1.5">
                <span>Max Initial Capital:</span>
                <span className="font-bold text-slate-900 dark:text-slate-100">
                  {filters.maxCost >= 5000 ? 'Any Budget' : formatCurrency(filters.maxCost, currency)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="5000"
                step="100"
                value={filters.maxCost}
                onChange={e => setFilters(prev => ({ ...prev, maxCost: Number(e.target.value) }))}
                className="w-full accent-emerald-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>$0 (Sweat Equity)</span>
                <span>$1,000</span>
                <span>$5k+</span>
              </div>
            </div>

            {/* Scalability Filter */}
            <div>
              <label className="block text-slate-600 dark:text-slate-400 font-medium mb-1.5">
                Scalability Rating:
              </label>
              <select
                value={filters.scalability}
                onChange={e => setFilters(prev => ({ ...prev, scalability: e.target.value as FilterState['scalability'] }))}
                className="w-full px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
              >
                <option value="all">All Scalability Levels</option>
                <option value="Extreme">Extreme (Infinite software/Web3 leverage)</option>
                <option value="High">High (Scale with team/APIs)</option>
                <option value="Medium">Medium (Semi-automated)</option>
              </select>
            </div>

            {/* Reset Actions */}
            <div className="flex items-end justify-end">
              <button
                onClick={onResetFilters}
                className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 underline font-medium"
              >
                Reset All Filters
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
