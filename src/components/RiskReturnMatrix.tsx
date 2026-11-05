import React from 'react';
import { 
  ScatterChart, 
  Scatter, 
  XAxis, 
  YAxis, 
  ZAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid,
  Cell
} from 'recharts';
import { Sparkles, ShieldAlert, TrendingUp, Zap, Target } from 'lucide-react';
import { VectorItem } from '../types';
import { CATEGORIES } from '../data/categories';
import { Currency, formatCurrency } from '../utils/formatters';

interface RiskReturnMatrixProps {
  vectors: VectorItem[];
  onSelectVector: (vector: VectorItem) => void;
  onTogglePortfolio: (vectorId: string) => void;
  portfolioVectorIds: string[];
  currency: Currency;
}

export const RiskReturnMatrix: React.FC<RiskReturnMatrixProps> = ({
  vectors,
  onSelectVector,
  onTogglePortfolio,
  portfolioVectorIds,
  currency,
}) => {
  // Format data for Recharts Scatter plot
  const scatterData = vectors.map(v => {
    const cat = CATEGORIES.find(c => c.id === v.category);
    return {
      id: v.id,
      code: v.code,
      title: v.title,
      risk: v.riskScore,
      revenue: v.estimatedMonthlyRevenue,
      cost: v.upfrontCost,
      category: cat?.shortName || v.category,
      color: cat?.color || '#3b82f6',
      vector: v,
    };
  });

  const CustomScatterTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900 border border-slate-700 text-white p-3 rounded-2xl shadow-xl max-w-xs text-xs">
          <div className="flex items-center justify-between gap-2 font-bold mb-1">
            <span className="text-blue-400">#{data.code}</span>
            <span className="text-slate-400 font-normal">{data.category}</span>
          </div>
          <p className="font-semibold text-slate-100 mb-2">{data.title}</p>
          <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-800">
            <div>
              <span className="text-slate-400 block">Est. Revenue</span>
              <span className="font-bold text-emerald-400">{formatCurrency(data.revenue, currency)}/mo</span>
            </div>
            <div>
              <span className="text-slate-400 block">Risk Rating</span>
              <span className="font-bold text-amber-400">{data.risk} / 10</span>
            </div>
          </div>
          <div className="mt-2.5 pt-2 border-t border-slate-800 text-[10px] text-slate-400 italic">
            Click to inspect full execution blueprint
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-2">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>2D Risk vs. Cash Flow Yield Matrix</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Strategy & Allocation Matrix
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          Identify asymmetric arbitrage vectors. Spot the "Sweet Spot" quadrant where operational risk is minimal but monthly cash yield is maximized.
        </p>
      </div>

      {/* Quadrant Guide Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
        
        {/* Sweet Spot */}
        <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/50">
          <div className="flex items-center gap-2 font-bold text-emerald-800 dark:text-emerald-300 mb-1">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>The Golden Quadrant</span>
          </div>
          <p className="text-emerald-700/90 dark:text-emerald-400/90">
            Low Risk (1-3) & High Revenue ($2k-$5k/mo). Highest capital efficiency (e.g. AI Call Centers, YouTube Automation, B2B Lead Gen).
          </p>
        </div>

        {/* Fast Bootstrap */}
        <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200/80 dark:border-blue-800/50">
          <div className="flex items-center gap-2 font-bold text-blue-800 dark:text-blue-300 mb-1">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>Fast Bootstrap</span>
          </div>
          <p className="text-blue-700/90 dark:text-blue-400/90">
            Low Risk & Fast Turnaround ($500-$1.5k/mo). Sweat-equity vectors to generate initial $1,000 bankroll (e.g. Resume Rewriting, POD).
          </p>
        </div>

        {/* High Alpha & Leverage */}
        <div className="p-4 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200/80 dark:border-purple-800/50">
          <div className="flex items-center gap-2 font-bold text-purple-800 dark:text-purple-300 mb-1">
            <Target className="w-4 h-4 text-purple-600" />
            <span>High Leverage & Scale</span>
          </div>
          <p className="text-purple-700/90 dark:text-purple-400/90">
            Moderate Risk (4-6) & High Scale ($5k-$10k/mo). Requires small capital or technical setup (e.g. Wholesale Amazon, FBA Arbitrage).
          </p>
        </div>

        {/* Speculative Alpha */}
        <div className="p-4 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/50">
          <div className="flex items-center gap-2 font-bold text-amber-800 dark:text-amber-300 mb-1">
            <ShieldAlert className="w-4 h-4 text-amber-600" />
            <span>Speculative Alpha</span>
          </div>
          <p className="text-amber-700/90 dark:text-amber-400/90">
            Higher Risk (7-9) with explosive upside (e.g. MEV Bots, Flash Loans, NFT/Token flips). Allocate max 15% of capital.
          </p>
        </div>

      </div>

      {/* 2D Interactive Scatter Chart Container */}
      <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Vector Risk-Return Distribution
            </h3>
            <p className="text-xs text-slate-500">
              X-Axis: Risk Rating (1-10) • Y-Axis: Estimated Monthly Revenue ($USD) • Bubble size: Capital efficiency
            </p>
          </div>
          <span className="text-xs font-semibold text-slate-400 hidden sm:block">
            {vectors.length} Data Points Mapped
          </span>
        </div>

        <div className="h-[420px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 10 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.15} />
              <XAxis 
                type="number" 
                dataKey="risk" 
                name="Risk Score" 
                domain={[0, 10]} 
                unit="/10"
                stroke="#94a3b8"
                fontSize={11}
              />
              <YAxis 
                type="number" 
                dataKey="revenue" 
                name="Monthly Revenue" 
                domain={[0, 11000]}
                unit="$"
                stroke="#94a3b8"
                fontSize={11}
                tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
              />
              <ZAxis type="number" dataKey="cost" range={[60, 220]} name="Upfront Cost" />
              <Tooltip content={<CustomScatterTooltip />} />
              <Scatter 
                data={scatterData} 
                onClick={(node) => onSelectVector(node.vector)}
                cursor="pointer"
              >
                {scatterData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={entry.color} 
                    stroke={portfolioVectorIds.includes(entry.id) ? '#22c55e' : '#fff'}
                    strokeWidth={portfolioVectorIds.includes(entry.id) ? 3 : 1}
                  />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Legend & Categories */}
      <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
        <span className="text-slate-400">Category Legend:</span>
        <div className="flex flex-wrap gap-3">
          {CATEGORIES.map(c => (
            <div key={c.id} className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
              <span className="w-3 h-3 rounded-full" style={{ backgroundColor: c.color }} />
              <span>{c.shortName}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
