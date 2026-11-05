import React, { useState } from 'react';
import { X, Plus, Sparkles, Layers, DollarSign, ShieldAlert } from 'lucide-react';
import { VectorItem, CategoryId, Scalability } from '../types';
import { CATEGORIES } from '../data/categories';
import { Currency, formatCurrency } from '../utils/formatters';

interface CustomVectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddCustomVector: (vector: VectorItem) => void;
  currency: Currency;
  existingCount: number;
}

export const CustomVectorModal: React.FC<CustomVectorModalProps> = ({
  isOpen,
  onClose,
  onAddCustomVector,
  currency,
  existingCount,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<CategoryId>('ai_automation');
  const [revenue, setRevenue] = useState<number>(2000);
  const [cost, setCost] = useState<number>(100);
  const [riskScore, setRiskScore] = useState<number>(3);
  const [scalability, setScalability] = useState<Scalability>('High');
  const [timeToFirstDollar, setTimeToFirstDollar] = useState('1-2 Weeks');
  const [toolsInput, setToolsInput] = useState('Claude 3.5, Make.com, Stripe');
  const [stepsInput, setStepsInput] = useState('1. Set up workflow\n2. Target niche clients\n3. Deliver high-speed results');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;

    const steps = stepsInput
      .split('\n')
      .map(s => s.replace(/^\d+[\.\)]\s*/, '').trim())
      .filter(Boolean);

    const tools = toolsInput
      .split(',')
      .map(t => t.trim())
      .filter(Boolean);

    const newVector: VectorItem = {
      id: `custom_${Date.now()}`,
      code: `C.${existingCount + 1}`,
      title: title.trim(),
      category,
      revenueString: `${formatCurrency(revenue, currency)}/mo`,
      estimatedMonthlyRevenue: revenue,
      costString: cost === 0 ? '$0' : formatCurrency(cost, currency),
      upfrontCost: cost,
      riskScore,
      riskLevel: riskScore <= 3 ? 'Low' : riskScore <= 6 ? 'Moderate' : 'High',
      scalability,
      timeToFirstDollar,
      tools: tools.length > 0 ? tools : ['Modern 2026 AI Tooling'],
      steps: steps.length > 0 ? steps : ['Deploy streamlined automated workflow.', 'Scale distribution channel.'],
    };

    onAddCustomVector(newVector);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-xl bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-7 space-y-6"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-sm">
              +
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Add Custom Cash Flow Vector
              </h3>
              <p className="text-xs text-slate-500">
                Incorporate your own proprietary 2026 business models
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          
          {/* Vector Title */}
          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
              Vector Name / Title:
            </label>
            <input
              type="text"
              required
              placeholder="e.g. AI-Powered Medical Device Technical Writing"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/20"
            />
          </div>

          {/* Category & Scalability */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                Category:
              </label>
              <select
                value={category}
                onChange={e => setCategory(e.target.value as CategoryId)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              >
                {CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>{c.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                Scalability:
              </label>
              <select
                value={scalability}
                onChange={e => setScalability(e.target.value as Scalability)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              >
                <option value="Medium">Medium</option>
                <option value="High">High</option>
                <option value="Extreme">Extreme</option>
              </select>
            </div>
          </div>

          {/* Revenue & Cost */}
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                Est. Monthly Rev ($):
              </label>
              <input
                type="number"
                min="0"
                step="50"
                value={revenue}
                onChange={e => setRevenue(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                Upfront Cost ($):
              </label>
              <input
                type="number"
                min="0"
                step="10"
                value={cost}
                onChange={e => setCost(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
                Risk Rating (1-10):
              </label>
              <input
                type="number"
                min="1"
                max="10"
                value={riskScore}
                onChange={e => setRiskScore(Number(e.target.value))}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Tools */}
          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
              Required Tools (comma separated):
            </label>
            <input
              type="text"
              placeholder="e.g. Claude 3.5, Airtable, Apollo.io"
              value={toolsInput}
              onChange={e => setToolsInput(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
            />
          </div>

          {/* Action Steps */}
          <div>
            <label className="block text-slate-700 dark:text-slate-300 font-semibold mb-1">
              Execution Steps (one per line):
            </label>
            <textarea
              rows={3}
              placeholder="1. Build initial pipeline&#10;2. Launch targeted outbound&#10;3. Deliver client results"
              value={stepsInput}
              onChange={e => setStepsInput(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 rounded-xl font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-xs"
            >
              <Plus className="w-4 h-4" />
              <span>Save & Add Vector</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
