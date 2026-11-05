import React from 'react';
import { 
  ShieldCheck, 
  Terminal, 
  Lock, 
  AlertTriangle, 
  Cpu, 
  CheckCircle2, 
  ExternalLink,
  Layers,
  Sparkles
} from 'lucide-react';
import { PRESET_PORTFOLIOS } from '../data/cashFlowVectors';
import { Currency, formatCurrency } from '../utils/formatters';

interface OperationalNoticeProps {
  onLoadBenchmark: () => void;
  currency: Currency;
}

export const OperationalNotice: React.FC<OperationalNoticeProps> = ({
  onLoadBenchmark,
  currency,
}) => {
  const benchmarkPreset = PRESET_PORTFOLIOS[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900 text-white dark:bg-white dark:text-slate-900 mb-2">
          <Terminal className="w-3.5 h-3.5" />
          <span>2026 Operational Blueprint & Security Architecture</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Execution Playbook & Protocol
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-2xl">
          High-margin non-real estate cash generation requires modern execution rigor, anti-detection hygiene, 
          and scalable automation stacks.
        </p>
      </div>

      {/* Official 2026 Benchmark Portfolio Table (Verbatim from specification) */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Official 2026 Benchmark Portfolio Recommendation
              </h3>
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Diversified across 6 major sectors to minimize single-point failure while generating $9,700/mo net run-rate.
            </p>
          </div>

          <button
            onClick={onLoadBenchmark}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-colors shadow-xs"
          >
            <span>Load This Allocation ($9.7k/mo)</span>
          </button>
        </div>

        {/* Benchmark Allocation Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
                <th className="pb-3 pr-4">Method</th>
                <th className="pb-3 px-4">Category</th>
                <th className="pb-3 px-4 text-right">Revenue / mo</th>
                <th className="pb-3 px-4 text-center">Risk</th>
                <th className="pb-3 pl-4 text-right">Upfront Cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 font-medium text-slate-700 dark:text-slate-200">
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">AI Content Arbitrage</td>
                <td className="py-3 px-4 text-slate-500">Digital</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatCurrency(1000, currency)}</td>
                <td className="py-3 px-4 text-center"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">2/10</span></td>
                <td className="py-3 pl-4 text-right">{formatCurrency(50, currency)}</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">Crypto Airdrop Farming</td>
                <td className="py-3 px-4 text-slate-500">DeFi</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatCurrency(1000, currency)}</td>
                <td className="py-3 px-4 text-center"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">3/10</span></td>
                <td className="py-3 pl-4 text-right">{formatCurrency(0, currency)}</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">Dropshipping (AI)</td>
                <td className="py-3 px-4 text-slate-500">E-Commerce</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatCurrency(1500, currency)}</td>
                <td className="py-3 px-4 text-center"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold">5/10</span></td>
                <td className="py-3 pl-4 text-right">{formatCurrency(200, currency)}</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">AI Chatbot Service</td>
                <td className="py-3 px-4 text-slate-500">AI & Automation</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatCurrency(1000, currency)}</td>
                <td className="py-3 px-4 text-center"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">2/10</span></td>
                <td className="py-3 pl-4 text-right">{formatCurrency(100, currency)}</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">Amazon FBA Arbitrage</td>
                <td className="py-3 px-4 text-slate-500">Supply Chain</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatCurrency(2000, currency)}</td>
                <td className="py-3 px-4 text-center"><span className="px-2 py-0.5 rounded bg-orange-50 text-orange-700 font-bold">6/10</span></td>
                <td className="py-3 pl-4 text-right">{formatCurrency(500, currency)}</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">Lead Generation</td>
                <td className="py-3 px-4 text-slate-500">Data</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatCurrency(800, currency)}</td>
                <td className="py-3 px-4 text-center"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">3/10</span></td>
                <td className="py-3 pl-4 text-right">{formatCurrency(100, currency)}</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">YouTube Automation</td>
                <td className="py-3 px-4 text-slate-500">Content</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatCurrency(1000, currency)}</td>
                <td className="py-3 px-4 text-center"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">2/10</span></td>
                <td className="py-3 pl-4 text-right">{formatCurrency(50, currency)}</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">Print-on-Demand</td>
                <td className="py-3 px-4 text-slate-500">E-Commerce</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatCurrency(600, currency)}</td>
                <td className="py-3 px-4 text-center"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">3/10</span></td>
                <td className="py-3 pl-4 text-right">{formatCurrency(0, currency)}</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">Data Labeling</td>
                <td className="py-3 px-4 text-slate-500">Data</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatCurrency(500, currency)}</td>
                <td className="py-3 px-4 text-center"><span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 font-bold">1/10</span></td>
                <td className="py-3 pl-4 text-right">{formatCurrency(50, currency)}</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-bold text-slate-900 dark:text-white">Crypto Yield Farming</td>
                <td className="py-3 px-4 text-slate-500">DeFi</td>
                <td className="py-3 px-4 text-right text-emerald-600 dark:text-emerald-400 font-bold">{formatCurrency(300, currency)}</td>
                <td className="py-3 px-4 text-center"><span className="px-2 py-0.5 rounded bg-amber-50 text-amber-700 font-bold">4/10</span></td>
                <td className="py-3 pl-4 text-right">{formatCurrency(0, currency)}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-900 dark:border-slate-700 font-extrabold text-slate-900 dark:text-white">
                <td className="pt-3 pr-4 text-sm">TOTAL BENCHMARK PORTFOLIO</td>
                <td className="pt-3 px-4 text-slate-400">Balanced 10 Vectors</td>
                <td className="pt-3 px-4 text-right text-emerald-600 dark:text-emerald-400 text-sm">
                  {formatCurrency(9700, currency)}/mo
                </td>
                <td className="pt-3 px-4 text-center text-blue-600 font-bold">2.8 / 10 Avg</td>
                <td className="pt-3 pl-4 text-right text-sm">
                  {formatCurrency(1050, currency)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Operational Directives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Anti-Detection & Traffic Obfuscation */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
            <Lock className="w-4 h-4" />
            <span>Infrastructure & Anti-Detection Architecture</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>Isolated Browser Fingerprinting:</strong> Utilize AdsPower / Dolphin Anty with dedicated residential proxy pipelines for multi-account social or e-commerce scaling.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>Decentralized Non-Custodial Security:</strong> For Web3 & DeFi airdrop vectors, separate funding origins via centralized exchange intermediate sub-accounts to prevent sybil cluster linking.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
              <span><strong>End-to-End Local Encryption:</strong> Maintain local SQLite/IndexedDB encrypted state for customer contact vaults.</span>
            </li>
          </ul>
        </div>

        {/* Scalability & Reinvestment Compounding */}
        <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Cpu className="w-4 h-4" />
            <span>Automation & Compounding Multipliers</span>
          </div>
          <ul className="text-xs text-slate-300 space-y-2 leading-relaxed">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Automate First-Mile Repetitive Tasks:</strong> Delegate data scraping, video captioning, and initial client qualification to n8n / Make autonomous event triggers.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Reinvestment Waterfall:</strong> Funnel early 30%-50% earnings from sweat-equity vectors (e.g. POD, Resumes) into high-ticket B2B retainer infrastructure.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
              <span><strong>Zero Real-Estate Overhead:</strong> 100% cloud & digital asset sovereignty ensures maximum capital mobility and agility.</span>
            </li>
          </ul>
        </div>

      </div>

    </div>
  );
};
