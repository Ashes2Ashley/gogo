import { CategoryId, CategoryInfo } from '../types';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'digital_arbitrage',
    name: '1. Digital Arbitrage & Flipping',
    shortName: 'Digital Arbitrage',
    icon: 'Layers',
    color: '#0284c7', // sky-600
    badgeBg: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/60',
    badgeBorder: 'border-sky-300',
    description: 'Exploiting pricing inefficiencies, algorithmic spreads, and asset re-packaging across digital platforms.',
  },
  {
    id: 'ai_automation',
    name: '2. AI & Automation Services',
    shortName: 'AI & Automation',
    icon: 'Bot',
    color: '#8b5cf6', // violet-600
    badgeBg: 'bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-300 dark:border-violet-800/60',
    badgeBorder: 'border-violet-300',
    description: 'High-margin B2B workflow replacement, voice synthesis, autonomous agents, and lead pipelines.',
  },
  {
    id: 'supply_chain',
    name: '3. Supply Chain & Logistics',
    shortName: 'Supply Chain',
    icon: 'Truck',
    color: '#ea580c', // orange-600
    badgeBg: 'bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/60',
    badgeBorder: 'border-orange-300',
    description: 'FBA arbitrage, liquidations, B2B wholesale pallets, dead stock clearance, and cross-border routing.',
  },
  {
    id: 'data_privacy',
    name: '4. Data & Privacy Vectors',
    shortName: 'Data & Intel',
    icon: 'Database',
    color: '#059669', // emerald-600
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/60',
    badgeBorder: 'border-emerald-300',
    description: 'Scraping as a service, dataset packaging, AI training labeling, lead enrichment, and public records.',
  },
  {
    id: 'defi_crypto',
    name: '5. DeFi & Crypto Protocols',
    shortName: 'DeFi & Crypto',
    icon: 'Coins',
    color: '#ca8a04', // yellow-600
    badgeBg: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-300 dark:border-amber-800/60',
    badgeBorder: 'border-amber-300',
    description: 'On-chain yield farming, flash loans, airdrop multi-wallet farming, staking, and arbitrage bots.',
  },
  {
    id: 'ecommerce_retail',
    name: '6. E-Commerce & Retail',
    shortName: 'E-Commerce',
    icon: 'ShoppingBag',
    color: '#db2777', // pink-600
    badgeBg: 'bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800/60',
    badgeBorder: 'border-pink-300',
    description: 'Print-on-demand, wholesale digital stores, marketplace flipping, KDP publishing, and bundle sales.',
  },
  {
    id: 'gig_services',
    name: '7. Gig Economy & Services',
    shortName: 'Gig & Local Services',
    icon: 'Zap',
    color: '#2563eb', // blue-600
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/60',
    badgeBorder: 'border-blue-300',
    description: 'AI-assisted freelancing, remote executive assistance, virtual event hosting, and specialized local gigs.',
  },
  {
    id: 'emerging_tech',
    name: '8. Emerging Tech & Security',
    shortName: 'Emerging Tech',
    icon: 'Cpu',
    color: '#7c3aed', // purple-600
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/60',
    badgeBorder: 'border-purple-300',
    description: 'Model fine-tuning, prompt marketplaces, RPA engineering, IoT security audits, and autonomous pipelines.',
  },
  {
    id: 'content_creation',
    name: '9. Content Creation & Influencer',
    shortName: 'Content & Media',
    icon: 'Video',
    color: '#dc2626', // red-600
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/40 dark:text-rose-300 dark:border-rose-800/60',
    badgeBorder: 'border-rose-300',
    description: 'Faceless YouTube channels, paid Substack newsletters, AI stock photography, and direct-response copy.',
  },
  {
    id: 'miscellaneous',
    name: '10. Miscellaneous & Physical Arbitrage',
    shortName: 'Miscellaneous',
    icon: 'Wrench',
    color: '#4b5563', // gray-600
    badgeBg: 'bg-stone-100 text-stone-700 border-stone-200 dark:bg-stone-800/40 dark:text-stone-300 dark:border-stone-700/60',
    badgeBorder: 'border-stone-300',
    description: 'Electronics upcycling, solar cleaning, junk removal, virtual CFO advisory, and eco-mining rigs.',
  },
];
