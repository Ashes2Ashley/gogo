import React from 'react';
import { 
  Check, 
  Plus, 
  ArrowUpRight, 
  Clock, 
  DollarSign, 
  ShieldAlert, 
  Zap, 
  Sparkles,
  BookOpen
} from 'lucide-react';
import { VectorItem } from '../types';
import { CATEGORIES } from '../data/categories';
import { Currency, formatCurrency, getRiskColorClass, getScalabilityBadge } from '../utils/formatters';

interface VectorCardProps {
  vector: VectorItem;
  isInPortfolio: boolean;
  onTogglePortfolio: (vectorId: string) => void;
  onSelectVector: (vector: VectorItem) => void;
  currency: Currency;
}

export const VectorCard: React.FC<VectorCardProps> = ({
  vector,
  isInPortfolio,
  onTogglePortfolio,
  onSelectVector,
  currency,
}) => {
  const category = CATEGORIES.find(c => c.id === vector.category);
  const riskStyle = getRiskColorClass(vector.riskScore);
  const scalBadge = getScalabilityBadge(vector.scalability);

  return (
    <div className="group relative bg-slate-900/85 backdrop-blur-md rounded-2xl border border-slate-800/90 hover:border-rose-900/60 p-5 shadow-lg hover:shadow-2xl hover:shadow-rose-950/20 transition-all flex flex-col justify-between">
      
      {/* Top Header Row */}
      <div>
        <div className="flex items-start justify-between gap-2 mb-3">
          
          {/* Vector Code & Category Tag */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900">
              #{vector.code}
            </span>
            <span className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${category?.badgeBg || 'bg-slate-100 text-slate-700'}`}>
              {category?.shortName || vector.category}
            </span>
            {vector.recommendedInBenchmark && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-semibold bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950/50 dark:text-amber-300 dark:border-amber-800">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Benchmark Pick
              </span>
            )}
          </div>

          {/* Risk Level Badge */}
          <div className={`flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs font-semibold border ${riskStyle.badge}`}>
            <span>Risk {vector.riskScore}/10</span>
          </div>
        </div>

        {/* Vector Title */}
        <h3 
          onClick={() => onSelectVector(vector)}
          className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-2"
        >
          {vector.title}
        </h3>

        {/* Financial Metrics Strip */}
        <div className="mt-4 grid grid-cols-2 gap-2 bg-slate-50 dark:bg-slate-800/60 p-3 rounded-xl border border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">
              Revenue Model
            </span>
            <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 truncate block" title={vector.revenueString}>
              {vector.revenueString}
            </span>
          </div>
          <div>
            <span className="text-[11px] text-slate-500 dark:text-slate-400 font-medium block">
              Upfront / Operational
            </span>
            <span className="text-sm font-bold text-slate-700 dark:text-slate-300 truncate block" title={vector.costString}>
              {vector.costString}
            </span>
          </div>
        </div>

        {/* Step Preview Snippet */}
        <div className="mt-3.5 space-y-1.5">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            Execution Flow (Step 1 Preview)
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
            {vector.steps[0]}
          </p>
        </div>

        {/* Tech Stack Chips */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {vector.tools.slice(0, 3).map((tool, idx) => (
            <span 
              key={idx} 
              className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-md border border-slate-200/60 dark:border-slate-700"
            >
              {tool}
            </span>
          ))}
          {vector.tools.length > 3 && (
            <span className="px-1.5 py-0.5 text-[11px] text-slate-400">
              +{vector.tools.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-5 pt-3.5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-3">
        
        {/* Time to First Dollar Tag */}
        <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>{vector.timeToFirstDollar}</span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          
          {/* Deep Dive Details Button */}
          <button
            onClick={() => onSelectVector(vector)}
            className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            title="Inspect Step-by-Step Blueprint & Calculator"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          {/* Add / Remove from Portfolio Button */}
          <button
            onClick={() => onTogglePortfolio(vector.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
              isInPortfolio
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs'
                : 'bg-blue-50 text-blue-700 hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-300 dark:hover:bg-blue-900/60 border border-blue-200 dark:border-blue-800'
            }`}
          >
            {isInPortfolio ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>In Engine</span>
              </>
            ) : (
              <>
                <Plus className="w-3.5 h-3.5" />
                <span>Add to Portfolio</span>
              </>
            )}
          </button>
        </div>

      </div>

    </div>
  );
};
