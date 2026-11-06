import React from 'react';
import { TrendingUp, DollarSign, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import { Currency, formatCurrency } from '../utils/formatters';

interface StatsBannerProps {
  totalVectors: number;
  totalMonthlyPotential: number;
  avgStartupCapital: number;
  medianRisk: number;
  currency: Currency;
  onQuickPresetSelect: (presetId: string) => void;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({
  totalVectors,
  totalMonthlyPotential,
  avgStartupCapital,
  medianRisk,
  currency,
  onQuickPresetSelect,
}) => {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-950/90 to-slate-900/40 text-white border-b border-rose-950/30 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        
        {/* Top Header & Tagline */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-rose-950/50 text-rose-300 border border-rose-800/50 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-ping" />
              <span className="font-mono">ANONYMOUS RECON: 2026 FULL-SPECTRUM PROTOCOLS</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-mono flex items-center gap-3">
              <span>2026 IRL CASH FLOW VECTORS</span>
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl font-sans">
              100+ low-barrier, high-scalability cash generation methods across AI, Digital Arbitrage, 
              DeFi, Supply Chain, and Emerging Tech — zero physical real estate, 100% sovereign execution.
            </p>
          </div>

          {/* Quick CTA to load benchmark portfolio */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onQuickPresetSelect('benchmark_2026')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02]"
            >
              <span>Load 2026 Benchmark Portfolio</span>
              <span className="bg-blue-700/60 px-2 py-0.5 rounded text-xs">
                {formatCurrency(9700, currency)}/mo
              </span>
            </button>

            <button
              onClick={() => onQuickPresetSelect('apt_redops_jump')}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-rose-600 to-amber-600 hover:from-rose-500 hover:to-amber-500 text-white text-sm font-semibold shadow-lg shadow-rose-600/25 transition-all hover:scale-[1.02]"
            >
              <span>100 Advanced APT & Red Ops</span>
              <span className="bg-rose-900/60 text-white px-2 py-0.5 rounded text-xs font-mono font-bold">100/100</span>
            </button>
          </div>
        </div>

        {/* 4 Quantitative Key Metric Highlights */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6">
          
          <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold">Active Vectors</span>
              <Cpu className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">
              {totalVectors}+
            </div>
            <p className="text-xs text-slate-400 mt-1">Across 10 distinct market domains</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold">Tracked Monthly Potential</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400">
              {formatCurrency(totalMonthlyPotential, currency)}
            </div>
            <p className="text-xs text-slate-400 mt-1">Aggregate monthly vector ceiling</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold">Avg Startup Capital</span>
              <DollarSign className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-amber-400">
              {formatCurrency(avgStartupCapital, currency)}
            </div>
            <p className="text-xs text-slate-400 mt-1">Low-friction bootstrap entry points</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-800 rounded-2xl p-4 sm:p-5">
            <div className="flex items-center justify-between text-slate-400 mb-2">
              <span className="text-xs uppercase tracking-wider font-semibold">Median Risk Score</span>
              <ShieldAlert className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-sky-400">
              {medianRisk} <span className="text-xs font-normal text-slate-400">/ 10</span>
            </div>
            <p className="text-xs text-slate-400 mt-1">Quantified execution safety score</p>
          </div>

        </div>

      </div>
    </div>
  );
};
