import React, { useState } from 'react';
import { 
  SlidersHorizontal, 
  Sparkles, 
  DollarSign, 
  Clock, 
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Briefcase,
  Layers
} from 'lucide-react';
import { VectorItem, CategoryId } from '../types';
import { CATEGORIES } from '../data/categories';
import { Currency, formatCurrency } from '../utils/formatters';

interface RoiCalculatorProps {
  allVectors: VectorItem[];
  onApplyRecommendedPortfolio: (vectorIds: string[]) => void;
  currency: Currency;
  onSelectVector: (vector: VectorItem) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({
  allVectors,
  onApplyRecommendedPortfolio,
  currency,
  onSelectVector,
}) => {
  // Wizard state inputs
  const [budget, setBudget] = useState<number>(500);
  const [weeklyHours, setWeeklyHours] = useState<number>(15);
  const [riskTolerance, setRiskTolerance] = useState<'low' | 'moderate' | 'high'>('moderate');
  const [selectedDomains, setSelectedDomains] = useState<CategoryId[]>([
    'ai_automation',
    'digital_arbitrage',
    'ecommerce_retail',
  ]);

  const toggleDomain = (catId: CategoryId) => {
    setSelectedDomains(prev => 
      prev.includes(catId) 
        ? prev.filter(c => c !== catId)
        : [...prev, catId]
    );
  };

  // Algorithm to compute matching vectors
  const maxRiskScore = riskTolerance === 'low' ? 3 : riskTolerance === 'moderate' ? 6 : 9;

  // Filter vectors matching criteria
  const candidateVectors = allVectors.filter(v => {
    const matchesDomain = selectedDomains.length === 0 || selectedDomains.includes(v.category);
    const matchesRisk = v.riskScore <= maxRiskScore;
    const matchesBudget = v.upfrontCost <= budget;
    return matchesDomain && matchesRisk && matchesBudget;
  });

  // Sort candidate vectors by capital efficiency (revenue / (cost + 50) / risk)
  const sortedCandidates = [...candidateVectors].sort((a, b) => {
    const scoreA = (a.estimatedMonthlyRevenue / (a.upfrontCost + 50)) / (a.riskScore || 1);
    const scoreB = (b.estimatedMonthlyRevenue / (b.upfrontCost + 50)) / (b.riskScore || 1);
    return scoreB - scoreA;
  });

  // Greedily pick top vectors that fit within total budget
  let runningCost = 0;
  const recommendedVectors: VectorItem[] = [];

  for (const vec of sortedCandidates) {
    if (recommendedVectors.length >= 6) break;
    if (runningCost + vec.upfrontCost <= Math.max(budget, 200)) {
      recommendedVectors.push(vec);
      runningCost += vec.upfrontCost;
    }
  }

  const projectedMonthlyYield = recommendedVectors.reduce((acc, v) => acc + v.estimatedMonthlyRevenue, 0);
  const calculatedTotalCost = recommendedVectors.reduce((acc, v) => acc + v.upfrontCost, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Personalized Allocation Engine</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          2026 Strategy & ROI Matcher
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          Enter your available startup capital, time commitment, and preferred sectors. 
          Our algorithm dynamically crafts the highest-probability cash flow portfolio for your constraints.
        </p>
      </div>

      {/* Two-Column Layout: Controls on Left, Live Matching Results on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Sliders & Criteria */}
        <div className="lg:col-span-5 bg-white dark:bg-slate-900 p-6 sm:p-7 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xs space-y-6">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-blue-500" />
            <span>Your Personal Constraints</span>
          </h3>

          {/* Budget Slider */}
          <div>
            <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 mb-2 font-medium">
              <span>Starting Liquid Capital:</span>
              <span className="text-base font-extrabold text-emerald-600 dark:text-emerald-400">
                {formatCurrency(budget, currency)}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="5000"
              step="50"
              value={budget}
              onChange={e => setBudget(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>$0 (Pure Hustle)</span>
              <span>$1,000</span>
              <span>$5,000+</span>
            </div>
          </div>

          {/* Time Commitment Slider */}
          <div>
            <div className="flex justify-between text-xs text-slate-600 dark:text-slate-300 mb-2 font-medium">
              <span>Available Time per Week:</span>
              <span className="text-base font-extrabold text-blue-600 dark:text-blue-400">
                {weeklyHours} Hours / Week
              </span>
            </div>
            <input
              type="range"
              min="5"
              max="50"
              step="5"
              value={weeklyHours}
              onChange={e => setWeeklyHours(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 mt-1">
              <span>5 hrs (Side Gig)</span>
              <span>20 hrs (Part-Time)</span>
              <span>40+ hrs (Full-Time)</span>
            </div>
          </div>

          {/* Risk Tolerance Toggle */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
              Risk Profile & Drawdown Tolerance:
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['low', 'moderate', 'high'] as const).map(tier => (
                <button
                  key={tier}
                  onClick={() => setRiskTolerance(tier)}
                  className={`py-2 px-2 rounded-xl text-xs font-semibold capitalize transition-all border ${
                    riskTolerance === tier
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 border-transparent shadow-xs'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {tier} (Risk ≤{tier === 'low' ? 3 : tier === 'moderate' ? 6 : 9})
                </button>
              ))}
            </div>
          </div>

          {/* Preferred Sectors Multiselect */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-300 mb-2">
              Preferred Market Domains:
            </label>
            <div className="flex flex-wrap gap-1.5 max-h-40 overflow-y-auto no-scrollbar">
              {CATEGORIES.map(c => {
                const isSelected = selectedDomains.includes(c.id);
                return (
                  <button
                    key={c.id}
                    onClick={() => toggleDomain(c.id)}
                    className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all border ${
                      isSelected
                        ? 'bg-blue-50 text-blue-700 border-blue-300 dark:bg-blue-950/60 dark:text-blue-300 dark:border-blue-700 font-semibold'
                        : 'bg-slate-50 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {c.shortName}
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Column: Tailored Recommendation Box & Vector List */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Top Recommendation Summary Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 text-white p-6 sm:p-7 rounded-3xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div>
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Algorithm Match Results
                </span>
                <h4 className="text-lg sm:text-xl font-extrabold text-white mt-0.5">
                  Optimized {weeklyHours}h/wk Cash Flow Engine
                </h4>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                {recommendedVectors.length} Vectors Matched
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-5">
              <div>
                <span className="text-[11px] text-slate-400 uppercase block">Expected Cash Flow</span>
                <span className="text-2xl font-extrabold text-emerald-400 block mt-0.5">
                  {formatCurrency(projectedMonthlyYield, currency)}/mo
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 uppercase block">Total Capital Outlay</span>
                <span className="text-2xl font-extrabold text-slate-100 block mt-0.5">
                  {formatCurrency(calculatedTotalCost, currency)}
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 uppercase block">Annualized Run-Rate</span>
                <span className="text-2xl font-extrabold text-blue-400 block mt-0.5">
                  {formatCurrency(projectedMonthlyYield * 12, currency)}
                </span>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-800 flex items-center justify-between gap-4">
              <span className="text-xs text-slate-400">
                Ready to execute this custom diversified allocation?
              </span>
              <button
                onClick={() => onApplyRecommendedPortfolio(recommendedVectors.map(v => v.id))}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5" />
                <span>Load into Portfolio Builder</span>
              </button>
            </div>
          </div>

          {/* Matched Vectors List */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Recommended Vector Allocation Breakdown:
            </h4>

            {recommendedVectors.map((vec, i) => {
              const category = CATEGORIES.find(c => c.id === vec.category);
              return (
                <div
                  key={vec.id}
                  onClick={() => onSelectVector(vec)}
                  className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-400 dark:hover:border-blue-600 transition-all cursor-pointer flex items-center justify-between gap-4 shadow-2xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-100 dark:bg-slate-800 font-mono font-bold text-xs flex items-center justify-center text-slate-700 dark:text-slate-300">
                      {i + 1}
                    </span>
                    <div>
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        {vec.title}
                      </h5>
                      <span className="text-xs text-slate-500">
                        {category?.shortName} • Tools: {vec.tools.slice(0, 2).join(', ')}
                      </span>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 block">
                      {vec.revenueString}
                    </span>
                    <span className="text-xs text-slate-400">
                      Cost: {vec.costString}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
};
