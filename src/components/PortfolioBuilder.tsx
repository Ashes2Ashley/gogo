import React, { useState } from 'react';
import { 
  Briefcase, 
  Trash2, 
  Sparkles, 
  DollarSign, 
  TrendingUp, 
  ShieldAlert, 
  Clock, 
  Download, 
  CheckCircle2, 
  ArrowRight,
  Layers,
  FileText,
  Sliders,
  PlusCircle
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { VectorItem, PortfolioPreset } from '../types';
import { PRESET_PORTFOLIOS } from '../data/cashFlowVectors';
import { CATEGORIES } from '../data/categories';
import { Currency, formatCurrency, getRiskColorClass } from '../utils/formatters';

interface PortfolioBuilderProps {
  portfolioVectorIds: string[];
  allVectors: VectorItem[];
  onRemoveFromPortfolio: (vectorId: string) => void;
  onClearPortfolio: () => void;
  onLoadPreset: (presetId: string) => void;
  onSelectVector: (vector: VectorItem) => void;
  completedStepsMap: Record<string, number[]>;
  currency: Currency;
  onOpenCustomVectorModal: () => void;
  onExportPlaybook: () => void;
}

export const PortfolioBuilder: React.FC<PortfolioBuilderProps> = ({
  portfolioVectorIds,
  allVectors,
  onRemoveFromPortfolio,
  onClearPortfolio,
  onLoadPreset,
  onSelectVector,
  completedStepsMap,
  currency,
  onOpenCustomVectorModal,
  onExportPlaybook,
}) => {
  const [reinvestmentRate, setReinvestmentRate] = useState<number>(30); // 30% monthly reinvestment

  // Get active vector objects
  const activeVectors = allVectors.filter(v => portfolioVectorIds.includes(v.id));

  // Compute aggregate statistics
  const totalMonthlyRevenue = activeVectors.reduce((acc, v) => acc + v.estimatedMonthlyRevenue, 0);
  const totalUpfrontCost = activeVectors.reduce((acc, v) => acc + v.upfrontCost, 0);
  const weightedRisk = activeVectors.length > 0
    ? Number((activeVectors.reduce((acc, v) => acc + v.riskScore, 0) / activeVectors.length).toFixed(1))
    : 0;
  
  // Payback period (days)
  const dailyCashFlow = totalMonthlyRevenue / 30;
  const paybackDays = dailyCashFlow > 0 ? Math.ceil(totalUpfrontCost / dailyCashFlow) : 0;

  // Category breakdown for chart
  const categoryDistribution = CATEGORIES.map(cat => {
    const vectorsInCat = activeVectors.filter(v => v.category === cat.id);
    const catRevenue = vectorsInCat.reduce((acc, v) => acc + v.estimatedMonthlyRevenue, 0);
    return {
      name: cat.shortName,
      value: catRevenue,
      color: cat.color,
      count: vectorsInCat.length,
    };
  }).filter(item => item.value > 0);

  // 12-Month Cumulative Cash Flow Projection
  const monthlyProjectionData = Array.from({ length: 12 }).map((_, monthIdx) => {
    const month = monthIdx + 1;
    // Compounding growth based on reinvestment
    const growthFactor = Math.pow(1 + (reinvestmentRate / 100) * 0.08, monthIdx);
    const projectedMonthly = Math.round(totalMonthlyRevenue * growthFactor);
    const cumulative = Math.round(projectedMonthly * month - totalUpfrontCost);

    return {
      month: `M${month}`,
      monthlyRevenue: projectedMonthly,
      cumulativeCashFlow: Math.max(0, cumulative),
    };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Portfolio Header & Presets Bar */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800 mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>2026 Multi-Vector Cash Generation Engine</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Custom Portfolio Allocation Studio
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
            Mix and match high-yield vectors to build a resilient, non-real estate cash flow machine. 
            Simulate 12-month returns, capital outlays, and execution checklists.
          </p>
        </div>

        {/* Portfolio Presets Quick-Switcher */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block sm:inline">
            Load Strategy:
          </span>
          {PRESET_PORTFOLIOS.map(preset => (
            <button
              key={preset.id}
              onClick={() => onLoadPreset(preset.id)}
              className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-blue-950 dark:hover:text-blue-300 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 transition-all"
              title={preset.description}
            >
              {preset.name.split(' ')[0]} {preset.name.split(' ')[1] || ''}
            </button>
          ))}
        </div>
      </div>

      {/* 4 Core Financial Metrics KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        
        {/* Total Monthly Cash Flow */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">Projected Cash Flow</span>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
            {formatCurrency(totalMonthlyRevenue, currency)}
            <span className="text-xs font-normal text-slate-400"> /mo</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {formatCurrency(totalMonthlyRevenue * 12, currency)} annual run-rate
          </p>
        </div>

        {/* Total Startup Capital Required */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">Total Capital Outlay</span>
            <DollarSign className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {formatCurrency(totalUpfrontCost, currency)}
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Across {activeVectors.length} active vectors
          </p>
        </div>

        {/* Weighted Risk Score */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">Weighted Risk Index</span>
            <ShieldAlert className="w-4 h-4 text-sky-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-sky-600 dark:text-sky-400">
            {weightedRisk} <span className="text-xs font-normal text-slate-400">/ 10</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {weightedRisk <= 3 ? 'Conservative' : weightedRisk <= 5 ? 'Balanced Diversified' : 'Aggressive Alpha'}
          </p>
        </div>

        {/* Estimated Payback Duration */}
        <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
          <div className="flex items-center justify-between text-slate-500 dark:text-slate-400 mb-2">
            <span className="text-xs uppercase tracking-wider font-semibold">Capital Payback Period</span>
            <Clock className="w-4 h-4 text-purple-500" />
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold text-purple-600 dark:text-purple-400">
            {paybackDays} <span className="text-xs font-normal text-slate-400">Days</span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Breakeven velocity based on run-rate
          </p>
        </div>

      </div>

      {/* Interactive Charts Strip: 12-Month Cumulative Cash Flow & Category Spread */}
      {activeVectors.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* 12-Month Projection Area Chart */}
          <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  12-Month Compounding Cash Flow Projection
                </h3>
                <p className="text-xs text-slate-500">
                  Includes organic scaling & monthly profit reinvestment
                </p>
              </div>

              {/* Reinvestment Rate Slider */}
              <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800 p-2 rounded-xl border border-slate-200/60 dark:border-slate-700">
                <Sliders className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                  Reinvestment: {reinvestmentRate}%
                </span>
                <input
                  type="range"
                  min="0"
                  max="70"
                  step="5"
                  value={reinvestmentRate}
                  onChange={e => setReinvestmentRate(Number(e.target.value))}
                  className="w-20 accent-blue-600 cursor-pointer"
                />
              </div>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyProjectionData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="cashFlowGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0.0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#334155" opacity={0.2} />
                  <XAxis dataKey="month" stroke="#94a3b8" fontSize={11} tickLine={false} />
                  <YAxis 
                    stroke="#94a3b8" 
                    fontSize={11} 
                    tickLine={false} 
                    tickFormatter={(val) => `$${(val / 1000).toFixed(0)}k`}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0f172a', 
                      borderColor: '#1e293b', 
                      borderRadius: '12px', 
                      color: '#fff',
                      fontSize: '12px'
                    }} 
                  />
                  <Area 
                    type="monotone" 
                    dataKey="monthlyRevenue" 
                    name="Monthly Cash Flow"
                    stroke="#10b981" 
                    strokeWidth={2.5} 
                    fillOpacity={1} 
                    fill="url(#cashFlowGrad)" 
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Category Distribution Pie */}
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                Portfolio Diversification
              </h3>
              <p className="text-xs text-slate-500 mb-4">
                Revenue spread across market domains
              </p>

              <div className="h-44 w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={categoryDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={75}
                      paddingAngle={3}
                      dataKey="value"
                    >
                      {categoryDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: any) => formatCurrency(Number(value), currency)}
                      contentStyle={{ 
                        backgroundColor: '#0f172a', 
                        borderColor: '#1e293b', 
                        borderRadius: '8px', 
                        color: '#fff',
                        fontSize: '11px'
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="space-y-1.5 mt-2 max-h-28 overflow-y-auto no-scrollbar text-xs">
              {categoryDistribution.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="truncate max-w-[120px]">{item.name} ({item.count})</span>
                  </div>
                  <span className="font-semibold">{formatCurrency(item.value, currency)}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}

      {/* Active Vectors Table / Cards */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 shadow-xs">
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <span>Active Portfolio Vectors</span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                {activeVectors.length} Selected
              </span>
            </h3>
          </div>

          <div className="flex items-center gap-3">
            {activeVectors.length > 0 && (
              <button
                onClick={onClearPortfolio}
                className="text-xs text-rose-600 hover:text-rose-700 font-medium transition-colors"
              >
                Clear All
              </button>
            )}
            <button
              onClick={onExportPlaybook}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export Execution Plan</span>
            </button>
          </div>
        </div>

        {activeVectors.length === 0 ? (
          <div className="py-12 text-center text-slate-500 dark:text-slate-400 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mx-auto text-slate-400">
              <Briefcase className="w-6 h-6" />
            </div>
            <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
              Your Cash Flow Portfolio is Empty
            </p>
            <p className="text-xs max-w-md mx-auto">
              Select vectors from the directory or load a battle-tested preset above to assemble your 2026 execution stack.
            </p>
            <button
              onClick={() => onLoadPreset('benchmark_2026')}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-colors"
            >
              <span>Load 2026 Recommended Benchmark ($9.7k/mo)</span>
            </button>
          </div>
        ) : (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {activeVectors.map(vec => {
              const category = CATEGORIES.find(c => c.id === vec.category);
              const completed = completedStepsMap[vec.id] || [];
              const progressPct = Math.round((completed.length / vec.steps.length) * 100);

              return (
                <div key={vec.id} className="py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  
                  {/* Left Column: Code, Title, Category */}
                  <div className="flex items-start gap-3">
                    <span className="px-2.5 py-1 rounded-lg text-xs font-mono font-bold bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 mt-0.5">
                      #{vec.code}
                    </span>
                    <div>
                      <h4 
                        onClick={() => onSelectVector(vec)}
                        className="text-sm font-bold text-slate-900 dark:text-white hover:text-blue-600 cursor-pointer transition-colors"
                      >
                        {vec.title}
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                        <span className={`px-2 py-0.5 rounded-md text-[11px] font-medium border ${category?.badgeBg}`}>
                          {category?.shortName}
                        </span>
                        <span>•</span>
                        <span>{vec.tools.slice(0, 3).join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  {/* Middle Column: Metrics & Execution Progress */}
                  <div className="flex items-center gap-6 text-xs">
                    <div>
                      <span className="text-slate-400 block font-medium">Monthly Rev</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">
                        {vec.revenueString}
                      </span>
                    </div>

                    <div>
                      <span className="text-slate-400 block font-medium">Startup Cost</span>
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {vec.costString}
                      </span>
                    </div>

                    <div className="min-w-[100px]">
                      <div className="flex justify-between text-slate-500 mb-1">
                        <span>Roadmap</span>
                        <span className="font-semibold">{progressPct}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full transition-all"
                          style={{ width: `${progressPct}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2 self-end md:self-center">
                    <button
                      onClick={() => onSelectVector(vec)}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                      Inspect Blueprint
                    </button>
                    <button
                      onClick={() => onRemoveFromPortfolio(vec.id)}
                      className="p-1.5 rounded-xl text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
                      title="Remove from portfolio"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
};
