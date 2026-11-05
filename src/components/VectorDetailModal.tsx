import React, { useState } from 'react';
import { 
  X, 
  CheckSquare, 
  Square, 
  Sliders, 
  ExternalLink, 
  ShieldAlert, 
  Sparkles, 
  Layers, 
  DollarSign, 
  Clock, 
  Plus, 
  Check, 
  Copy,
  Lightbulb
} from 'lucide-react';
import { VectorItem } from '../types';
import { CATEGORIES } from '../data/categories';
import { Currency, formatCurrency, getRiskColorClass, getScalabilityBadge } from '../utils/formatters';

interface VectorDetailModalProps {
  vector: VectorItem | null;
  onClose: () => void;
  isInPortfolio: boolean;
  onTogglePortfolio: (vectorId: string) => void;
  currency: Currency;
  completedSteps: number[];
  onToggleStep: (vectorId: string, stepIndex: number) => void;
}

export const VectorDetailModal: React.FC<VectorDetailModalProps> = ({
  vector,
  onClose,
  isInPortfolio,
  onTogglePortfolio,
  currency,
  completedSteps,
  onToggleStep,
}) => {
  if (!vector) return null;

  const category = CATEGORIES.find(c => c.id === vector.category);
  const riskStyle = getRiskColorClass(vector.riskScore);
  const scalBadge = getScalabilityBadge(vector.scalability);

  // Dynamic unit economics slider state
  const defaultUnits = vector.unitEconomics?.defaultQuantity || 3;
  const unitPrice = vector.unitEconomics?.unitPrice || vector.estimatedMonthlyRevenue;
  const unitCost = vector.unitEconomics?.unitCost || vector.upfrontCost;
  const [unitsQuantity, setUnitsQuantity] = useState<number>(defaultUnits);
  const [customPrice, setCustomPrice] = useState<number>(unitPrice);
  const [copied, setCopied] = useState(false);

  const calculatedRevenue = unitsQuantity * customPrice;
  const calculatedCost = unitsQuantity * unitCost;
  const calculatedNetProfit = calculatedRevenue - calculatedCost;
  const calculatedMargin = calculatedRevenue > 0 ? Math.round((calculatedNetProfit / calculatedRevenue) * 100) : 0;

  const handleCopyBlueprint = () => {
    const text = `2026 CASH FLOW VECTOR: #${vector.code} - ${vector.title}\nCategory: ${category?.name}\nRevenue Model: ${vector.revenueString}\nUpfront Cost: ${vector.costString}\nRisk Score: ${vector.riskScore}/10\n\nExecution Steps:\n${vector.steps.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\nRequired Tools:\n${vector.tools.join(', ')}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Modal Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-900/70">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span className="px-3 py-1 rounded-xl text-xs font-mono font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900">
              VECTOR #{vector.code}
            </span>
            <span className={`px-3 py-1 rounded-xl text-xs font-medium border ${category?.badgeBg}`}>
              {category?.name}
            </span>
            <span className={`px-2.5 py-1 rounded-xl text-xs font-semibold border ${riskStyle.badge}`}>
              Risk {vector.riskScore} / 10
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyBlueprint}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              title="Copy Execution Blueprint"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Main Title & Value Proposition */}
          <div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
              {vector.title}
            </h2>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase">Estimated Revenue</span>
                <span className="text-base font-bold text-emerald-600 dark:text-emerald-400 block mt-0.5">
                  {vector.revenueString}
                </span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase">Upfront / Operational</span>
                <span className="text-base font-bold text-slate-800 dark:text-slate-200 block mt-0.5">
                  {vector.costString}
                </span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase">Time to 1st Dollar</span>
                <span className="text-base font-bold text-blue-600 dark:text-blue-400 block mt-0.5">
                  {vector.timeToFirstDollar}
                </span>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/60 p-3.5 rounded-2xl border border-slate-100 dark:border-slate-800">
                <span className="text-[11px] font-semibold text-slate-400 block uppercase">Scalability Index</span>
                <span className="text-base font-bold text-purple-600 dark:text-purple-400 block mt-0.5">
                  {vector.scalability}
                </span>
              </div>
            </div>
          </div>

          {/* Step-by-Step Execution Blueprint with Interactive Progress Checklist */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                  <span>Execution Checklist & Step-by-Step Action Plan</span>
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                    {completedSteps.length} of {vector.steps.length} Complete
                  </span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Check off steps as you implement them to track live roadmap progress.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {vector.steps.map((step, idx) => {
                const isCompleted = completedSteps.includes(idx);
                return (
                  <div
                    key={idx}
                    onClick={() => onToggleStep(vector.id, idx)}
                    className={`flex items-start gap-3.5 p-3.5 rounded-2xl border transition-all cursor-pointer ${
                      isCompleted
                        ? 'bg-emerald-50/70 border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800/60'
                        : 'bg-slate-50 dark:bg-slate-800/50 border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-blue-700'
                    }`}
                  >
                    <div className="mt-0.5 text-blue-600 dark:text-blue-400 shrink-0">
                      {isCompleted ? (
                        <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-400" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mb-0.5">
                        Step {idx + 1}
                      </div>
                      <p className={`text-sm leading-relaxed ${
                        isCompleted
                          ? 'line-through text-slate-500 dark:text-slate-400'
                          : 'text-slate-800 dark:text-slate-200 font-medium'
                      }`}>
                        {step}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Interactive Unit Economics Calculator */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white p-6 rounded-3xl border border-slate-800 shadow-lg">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-400" />
                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                  Live Unit Economics Modeler ({vector.unitEconomics?.label || 'Cash Flow Calculator'})
                </h4>
              </div>
              <span className="text-xs text-slate-400">
                Simulate scaling targets
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
              
              {/* Slider 1: Units / Clients */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-2 font-medium">
                  <span>{vector.unitEconomics?.unitName || 'Monthly Units / Retainers'}:</span>
                  <span className="text-blue-400 font-bold">{unitsQuantity}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={unitsQuantity}
                  onChange={e => setUnitsQuantity(Number(e.target.value))}
                  className="w-full accent-blue-500 cursor-pointer"
                />
              </div>

              {/* Slider 2: Price / Fee Per Unit */}
              <div>
                <div className="flex justify-between text-xs text-slate-300 mb-2 font-medium">
                  <span>Revenue Per Unit:</span>
                  <span className="text-emerald-400 font-bold">{formatCurrency(customPrice, currency)}</span>
                </div>
                <input
                  type="range"
                  min={Math.max(10, Math.round(unitPrice * 0.2))}
                  max={Math.max(500, Math.round(unitPrice * 3))}
                  step="10"
                  value={customPrice}
                  onChange={e => setCustomPrice(Number(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer"
                />
              </div>

            </div>

            {/* Calculated Results Strip */}
            <div className="mt-6 pt-4 border-t border-slate-800 grid grid-cols-3 gap-3 text-center">
              <div>
                <span className="text-[11px] text-slate-400 block uppercase">Gross Revenue</span>
                <span className="text-lg font-bold text-white block mt-0.5">
                  {formatCurrency(calculatedRevenue, currency)}/mo
                </span>
              </div>
              <div>
                <span className="text-[11px] text-slate-400 block uppercase">Estimated Costs</span>
                <span className="text-lg font-bold text-rose-400 block mt-0.5">
                  {formatCurrency(calculatedCost, currency)}/mo
                </span>
              </div>
              <div>
                <span className="text-[11px] text-emerald-400 font-semibold block uppercase">Net Profit ({calculatedMargin}%)</span>
                <span className="text-xl font-extrabold text-emerald-400 block mt-0.5">
                  {formatCurrency(calculatedNetProfit, currency)}/mo
                </span>
              </div>
            </div>

          </div>

          {/* Required Software Stack & Operational Precautions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* 2026 Tech Stack */}
            <div className="bg-slate-50 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
                <Layers className="w-4 h-4 text-blue-500" />
                <span>Required 2026 Tech & Tool Stack</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {vector.tools.map((tool, i) => (
                  <div 
                    key={i} 
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 shadow-2xs"
                  >
                    <span>{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Operational & Risk Guidance */}
            <div className="bg-amber-50/50 dark:bg-amber-950/20 p-5 rounded-2xl border border-amber-200/60 dark:border-amber-900/40">
              <h4 className="text-sm font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2 mb-2">
                <Lightbulb className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>2026 Operational Advantage</span>
              </h4>
              <ul className="text-xs text-amber-800/90 dark:text-amber-200/80 space-y-1.5 list-disc list-inside">
                <li>Automate first-mile outreach and asset production to preserve founder bandwidth.</li>
                <li>Operate isolated digital profiles to prevent platform contagion or account restrictions.</li>
                <li>Reinvest early cash flows into high-margin B2B retainers.</li>
              </ul>
            </div>

          </div>

        </div>

        {/* Modal Bottom Sticky Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Vector Status: <span className="font-semibold text-slate-900 dark:text-white">{isInPortfolio ? 'Active in Engine' : 'Available'}</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            >
              Close Blueprint
            </button>

            <button
              onClick={() => onTogglePortfolio(vector.id)}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold shadow-sm transition-all ${
                isInPortfolio
                  ? 'bg-rose-600 hover:bg-rose-700 text-white'
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              }`}
            >
              {isInPortfolio ? (
                <>
                  <X className="w-4 h-4" />
                  <span>Remove from Portfolio</span>
                </>
              ) : (
                <>
                  <Plus className="w-4 h-4" />
                  <span>Add to Portfolio Engine</span>
                </>
              )}
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
