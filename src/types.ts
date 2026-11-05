export type CategoryId = 
  | 'digital_arbitrage'
  | 'ai_automation'
  | 'supply_chain'
  | 'data_privacy'
  | 'defi_crypto'
  | 'ecommerce_retail'
  | 'gig_services'
  | 'emerging_tech'
  | 'content_creation'
  | 'miscellaneous';

export interface CategoryInfo {
  id: CategoryId;
  name: string;
  shortName: string;
  icon: string;
  color: string;
  badgeBg: string;
  badgeBorder: string;
  description: string;
}

export type RiskLevel = 'Low' | 'Moderate' | 'High' | 'Speculative';
export type Scalability = 'Low' | 'Medium' | 'High' | 'Extreme';

export interface VectorItem {
  id: string;
  code: string; // e.g. "1.1", "2.3"
  title: string;
  category: CategoryId;
  revenueString: string;
  estimatedMonthlyRevenue: number; // normalized monthly USD
  costString: string;
  upfrontCost: number; // normalized USD
  riskScore: number; // 1 to 10
  riskLevel: RiskLevel;
  scalability: Scalability;
  timeToFirstDollar: string; // e.g. "24-48 Hours", "1-2 Weeks"
  steps: string[];
  tools: string[];
  description?: string;
  unitEconomics?: {
    label: string;
    unitName: string;
    defaultQuantity: number;
    unitPrice: number;
    unitCost: number;
  };
  operationalTips?: string[];
  recommendedInBenchmark?: boolean;
}

export interface PortfolioItem {
  vectorId: string;
  customUnits: number;
  completedSteps: number[]; // index of steps completed
  notes: string;
  addedAt: string;
}

export interface PortfolioPreset {
  id: string;
  name: string;
  description: string;
  targetProfile: string;
  vectorIds: string[];
  benchmarkStats?: {
    totalRevenue: number;
    totalCost: number;
    avgRisk: number;
  };
}

export interface FilterState {
  searchQuery: string;
  selectedCategory: CategoryId | 'all';
  maxRisk: number;
  maxCost: number;
  minRevenue: number;
  scalability: 'all' | Scalability;
  recommendedOnly: boolean;
  sortBy: 'recommended' | 'revenue_desc' | 'cost_asc' | 'risk_asc' | 'code_asc';
}
