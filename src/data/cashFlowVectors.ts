import { VectorItem, RiskLevel } from '../types';

function getRiskLevel(score: number): RiskLevel {
  if (score <= 3) return 'Low';
  if (score <= 5) return 'Moderate';
  if (score <= 7) return 'High';
  return 'Speculative';
}

export const CASH_FLOW_VECTORS: VectorItem[] = [
  // ==========================================
  // 1. DIGITAL ARBITRAGE & FLIPPING
  // ==========================================
  {
    id: 'vec_1_1',
    code: '1.1',
    title: 'AI-Generated Content Arbitrage',
    category: 'digital_arbitrage',
    revenueString: '$2,000/mo per channel',
    estimatedMonthlyRevenue: 2000,
    costString: '$100 (API credits)',
    upfrontCost: 100,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Extreme',
    timeToFirstDollar: '3-7 Days',
    recommendedInBenchmark: true,
    tools: ['GPT-5 / Claude', 'Canva AI', 'ElevenLabs', 'Buffer', 'Later', 'CapCut API'],
    steps: [
      'Use GPT-5 / Claude 4 to generate 100+ short-form scripts (TikTok, Reels, Shorts) per day on trending viral niches.',
      'Batch create visual assets with Canva AI or Midjourney and generate natural voiceovers with ElevenLabs.',
      'Schedule automated posting across 3+ platforms using Later, Buffer, or Ayrshare API.',
      'Monetise via platform creator reward funds, high-converting affiliate links, and sponsored brand integrations.',
      'Scale horizontally by spinning up 10+ faceless channels across finance, tech, wellness, and oddity niches.',
      'Unit benchmark: 0.05 per view → 50k views/day = $1,000 to $2,000/mo per established channel.'
    ],
    unitEconomics: {
      label: 'Channel Operations',
      unitName: 'Active Channels',
      defaultQuantity: 2,
      unitPrice: 1000,
      unitCost: 50,
    },
    operationalTips: [
      'Use multi-account anti-detect browser profiles (AdsPower/Dolphin) to prevent shadowbans across channels.',
      'Automate captioning with sub-pixel word highlight animations for 30%+ higher retention rates.'
    ]
  },
  {
    id: 'vec_1_2',
    code: '1.2',
    title: 'Domain Name Flipping & SEO Arbitrage',
    category: 'digital_arbitrage',
    revenueString: '$10,000 per flip',
    estimatedMonthlyRevenue: 3300,
    costString: '$50 per domain',
    upfrontCost: 50,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'High',
    timeToFirstDollar: '2-4 Weeks',
    tools: ['ExpiredDomains.net', 'Ahrefs', 'GoDaddy Auctions', 'Namecheap', 'Sedo', 'Flippa'],
    steps: [
      'Use ExpiredDomains.net to filter domains with high backlink authority, clean history, and high search volume.',
      'Validate Ahrefs Domain Rating (DR 30+), clean anchor text, and commercial niche relevance.',
      'Acquire at auctions (GoDaddy, Namecheap, DropCatch) for $30-$80.',
      'Build a lightweight, clean 3-page AI-generated niche site to elevate buyer perceived value.',
      'List on Sedo, Afternic, and Flippa with a Buy-It-Now (BIN) price 8x-15x acquisition cost.',
      'Perform direct outbound cold outreach to top competing business owners in the domain niche.'
    ],
    unitEconomics: {
      label: 'Monthly Domain Flips',
      unitName: 'Domains Flipped / Mo',
      defaultQuantity: 1,
      unitPrice: 3500,
      unitCost: 150,
    }
  },
  {
    id: 'vec_1_3',
    code: '1.3',
    title: 'Social Media Account Arbitrage',
    category: 'digital_arbitrage',
    revenueString: '$500 per account ($2,500/mo)',
    estimatedMonthlyRevenue: 2500,
    costString: '$20 (proxies, aging)',
    upfrontCost: 20,
    riskScore: 5,
    riskLevel: getRiskLevel(5),
    scalability: 'High',
    timeToFirstDollar: '2-3 Weeks',
    tools: ['Residential Proxies', 'Anti-detect Browsers', 'Fameswap', 'PlayerUp', 'SocialBee'],
    steps: [
      'Register and age Instagram/TikTok accounts using clean residential proxies and fingerprint spoofing.',
      'Populate with high-quality viral reposts or AI-curated niche media to build organic engagement.',
      'Curate followers safely to 10k-50k threshold in high-CPM niches: fitness, crypto, luxury, beauty.',
      'List accounts on verified marketplaces such as Fameswap, PlayerUp, and Telegram escrow groups.',
      'Scale operation to 10-20 accounts cycling through production monthly.'
    ],
    unitEconomics: {
      label: 'Account Sales',
      unitName: 'Accounts Sold / Mo',
      defaultQuantity: 5,
      unitPrice: 500,
      unitCost: 25,
    }
  },
  {
    id: 'vec_1_4',
    code: '1.4',
    title: 'NFT Flipping on Base / Solana',
    category: 'digital_arbitrage',
    revenueString: '$5,000 per trade',
    estimatedMonthlyRevenue: 2500,
    costString: 'Variable ($150-$500 mint)',
    upfrontCost: 300,
    riskScore: 7,
    riskLevel: getRiskLevel(7),
    scalability: 'High',
    timeToFirstDollar: '24-72 Hours',
    tools: ['Magic Eden', 'OpenSea', 'NFTGo', 'Nansen Alerts', 'Sniper Bots', 'Phantom / Rabby'],
    steps: [
      'Monitor launchpads on low-gas L2s/L1s (Base, Solana, Monad) for hyped creator collections.',
      'Use NFTGo and Dune dashboards to analyze holder distribution, rarity, and floor price velocity.',
      'Secure whitelist/allowlist tiers via community quests and early participation.',
      'Execute immediate secondary market listings post-reveal for 2x-5x mint price.',
      'Set automated stop-loss limit orders and rotate realized SOL/ETH profits into fresh mint cycles.'
    ]
  },
  {
    id: 'vec_1_5',
    code: '1.5',
    title: 'Crypto Airdrop Farming',
    category: 'digital_arbitrage',
    revenueString: '$10,000 per season ($2,000/mo avg)',
    estimatedMonthlyRevenue: 2000,
    costString: '$100 (gas & bridging fees)',
    upfrontCost: 100,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'Extreme',
    timeToFirstDollar: '3-8 Weeks',
    recommendedInBenchmark: true,
    tools: ['DappRadar', 'Airdrops.io', 'Rabby Wallet', 'Bungee Exchange', 'LayerZero / Wormhole'],
    steps: [
      'Track confirmed and rumored token generation events (TGE) on DappRadar, DefiLlama, and Airdrops.io.',
      'Perform systematic organic interactions: bridge assets, provide LP, swap tokens, sign smart contracts.',
      'Operate multi-wallet structure (10-30 wallets) with non-linked funding paths (CEX withdrawals).',
      'Engage in developer testnets and L2 rollup test stages for zero-capital reward allocations.',
      'Claim reward tokens upon TGE distribution and execute staggered limit sales on spot exchanges.'
    ],
    unitEconomics: {
      label: 'Airdrop Multi-Wallet',
      unitName: 'Active Farming Wallets',
      defaultQuantity: 15,
      unitPrice: 150,
      unitCost: 10,
    }
  },
  {
    id: 'vec_1_6',
    code: '1.6',
    title: 'Digital Product Flipping (PLR Rebranding)',
    category: 'digital_arbitrage',
    revenueString: '$1,000/mo',
    estimatedMonthlyRevenue: 1000,
    costString: '$50 (PLR licensing)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Extreme',
    timeToFirstDollar: '48 Hours',
    tools: ['IDPLR', 'PLR.me', 'Jasper / Claude', 'Gumroad', 'Payhip', 'Canva'],
    steps: [
      'Acquire Private Label Rights (PLR) guides, frameworks, spreadsheets, and design templates.',
      'Rebrand, update, and enhance content using LLMs for 2026 relevancy and visual elegance.',
      'Create high-converting mockups and product pages on Gumroad, Payhip, and Etsy.',
      'Bundle 5-10 complementary assets into high-perceived-value "Executive Toolkits".',
      'Deploy organic Pinterest pins, X threads, and micro-influencer affiliate partnerships.'
    ]
  },
  {
    id: 'vec_1_7',
    code: '1.7',
    title: 'Print-on-Demand Arbitrage',
    category: 'digital_arbitrage',
    revenueString: '$1,500/mo',
    estimatedMonthlyRevenue: 1500,
    costString: '$0 (Zero inventory model)',
    upfrontCost: 0,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'High',
    timeToFirstDollar: '5-10 Days',
    tools: ['Canva Pro', 'Midjourney v6', 'Printful', 'Printify', 'Redbubble', 'Etsy'],
    steps: [
      'Identify micro-trend spikes using Google Trends, TikTok Creative Center, and Etsy search analytics.',
      'Synthesize hyper-niche artwork and slogans with Midjourney and Canva vector tooling.',
      'Sync automated listings across Redbubble, TeePublic, and Etsy via Printful/Printify integration.',
      'Optimize keyword metadata, tags, and mockups for marketplace organic search algorithms.',
      'Reinvest early sales into $5/day hyper-targeted Meta/TikTok ad experiments.'
    ]
  },
  {
    id: 'vec_1_8',
    code: '1.8',
    title: 'SaaS Subscription Reseller Arbitrage',
    category: 'digital_arbitrage',
    revenueString: '$800/mo to $2,500/mo',
    estimatedMonthlyRevenue: 1500,
    costString: '$50-$97 reseller tier',
    upfrontCost: 97,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'Extreme',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['GoHighLevel', 'SendGrid', 'Stripe Billing', 'Custom Domain DNS'],
    steps: [
      'Obtain agency/white-label reseller licenses for essential SaaS tools (GoHighLevel, email servers).',
      'Brand the platform with custom logo, domain, and pre-configured industry snapshots (dentists, gyms).',
      'Sell turnkey software subscriptions directly to local businesses at $97-$297/month recurring.',
      'Bundle automated onboarding and monthly SMS/email credit packages.',
      'Maintain 90%+ net profit margins on recurring Stripe recurring billing.'
    ]
  },
  {
    id: 'vec_1_9',
    code: '1.9',
    title: 'Online Course Synthesis & Flipping',
    category: 'digital_arbitrage',
    revenueString: '$3,000 per course launch',
    estimatedMonthlyRevenue: 2000,
    costString: '$100 (creation tooling)',
    upfrontCost: 100,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'Extreme',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['Claude 4', 'Synthesia', 'Teachable', 'Udemy', 'Gumroad', 'Descript'],
    steps: [
      'Research high-demand skill gaps (AI prompt workflows, algorithmic trading, local business automation).',
      'Generate comprehensive curricula, video scripts, code notebooks, and action worksheets using LLMs.',
      'Record high-fidelity walkthroughs or avatar presentations with Descript and ElevenLabs.',
      'Publish on Udemy to capture built-in marketplace traffic at competitive pricing.',
      'Upsell backend buyers to a $497 premium cohort or 1-on-1 implementation package.'
    ]
  },
  {
    id: 'vec_1_10',
    code: '1.10',
    title: 'Dropshipping with AI-Optimized Sourcing',
    category: 'digital_arbitrage',
    revenueString: '$5,000/mo',
    estimatedMonthlyRevenue: 5000,
    costString: '$300 (store setup & test ads)',
    upfrontCost: 300,
    riskScore: 5,
    riskLevel: getRiskLevel(5),
    scalability: 'Extreme',
    timeToFirstDollar: '3-5 Days',
    tools: ['EcomHunt', 'AliExpress Dropship Center', 'Shopify', 'CJ Dropshipping', 'TikTok Ads'],
    steps: [
      'Scrape trending breakout products with high perceived markup using EcomHunt and winning ad spy tools.',
      'Generate studio-grade product mockups and lifestyle videos with Midjourney and AI video renderers.',
      'Deploy a frictionless 1-product landing page on Shopify with one-click upsells.',
      'Launch AI-generated short video ads directly targeting impulse purchase demographics.',
      'Fulfill orders automatically through CJ Dropshipping or local 3PL fast-ship agents.'
    ]
  },

  // ==========================================
  // 2. AI & AUTOMATION SERVICES
  // ==========================================
  {
    id: 'vec_2_1',
    code: '2.1',
    title: 'AI Call Center Automation (Voice Agents)',
    category: 'ai_automation',
    revenueString: '$2,000/mo per client',
    estimatedMonthlyRevenue: 4000,
    costString: '$100 (Twilio + AI Voice API)',
    upfrontCost: 100,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'Extreme',
    timeToFirstDollar: '3-7 Days',
    recommendedInBenchmark: true,
    tools: ['VAPI', 'Retell AI', 'Twilio Voice', 'Make.com', 'Zapier', 'OpenAI Realtime API'],
    steps: [
      'Configure an ultra-low-latency voice agent on VAPI/Retell equipped with customized business knowledge bases.',
      'Target high-ticket emergency home service niches (plumbers, HVAC, roofers, tow trucks, locksmiths).',
      'Demonstrate a live demo number where the bot books an appointment directly into Google Calendar in 10 seconds.',
      'Charge $1,500 setup fee + $500 to $1,000/month retainer + usage fees.',
      'Integrate with Make.com to push CRM leads into Jobber, Housecall Pro, or ServiceTitan.'
    ],
    unitEconomics: {
      label: 'Voice Clients',
      unitName: 'Active Monthly Clients',
      defaultQuantity: 4,
      unitPrice: 1000,
      unitCost: 120,
    }
  },
  {
    id: 'vec_2_2',
    code: '2.2',
    title: 'AI-Generated B2B Lead Generation Pipeline',
    category: 'ai_automation',
    revenueString: '$3,000/mo',
    estimatedMonthlyRevenue: 3000,
    costString: '$200 (scraping & mailbox warmup)',
    upfrontCost: 200,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'High',
    timeToFirstDollar: '5-10 Days',
    recommendedInBenchmark: true,
    tools: ['Apollo.io', 'Instantly.ai', 'Smartlead', 'Claude 3.5 Sonnet', 'MillionVerifier'],
    steps: [
      'Extract decision-maker emails and LinkedIn profiles from Apollo.io and Clay based on buying signals.',
      'Clean data through MillionVerifier to guarantee <1% bounce rate and protect domain reputations.',
      'Use LLM prompts with dynamic data variables to craft hyper-personalized cold outreach hooks.',
      'Orchestrate multi-inbox sender rotation across 10+ Google Workspace secondary domains on Instantly.',
      'Sell qualified booked sales calls directly to B2B agencies for $150-$300 per meeting.'
    ],
    unitEconomics: {
      label: 'Booked Calls Delivery',
      unitName: 'Qualified Calls / Mo',
      defaultQuantity: 15,
      unitPrice: 200,
      unitCost: 15,
    }
  },
  {
    id: 'vec_2_3',
    code: '2.3',
    title: 'AI Video Repurposing Agency',
    category: 'ai_automation',
    revenueString: '$1,500/mo per client',
    estimatedMonthlyRevenue: 3000,
    costString: '$50 (Opus / Submagic credits)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'High',
    timeToFirstDollar: '48 Hours',
    tools: ['Opus Clip', 'Submagic', 'Descript', 'CapCut', 'Airtable'],
    steps: [
      'Ingest long-form YouTube podcasts, webinars, and keynotes into Opus Clip and Submagic.',
      'Extract top viral hooks, auto-generate dynamic animated emoji captions, and format 9:16 vertical video.',
      'Package 30 edited shorts per month per creator for a flat $1,000-$1,500 retainer.',
      'Distribute directly to TikTok, IG Reels, and YouTube Shorts with scheduled cross-posting.',
      'Scale by onboarding 3-5 creators and utilizing a streamlined Airtable review portal.'
    ]
  },
  {
    id: 'vec_2_4',
    code: '2.4',
    title: 'AI Social Media Management Agency',
    category: 'ai_automation',
    revenueString: '$2,000/mo per client',
    estimatedMonthlyRevenue: 4000,
    costString: '$100 (tools)',
    upfrontCost: 100,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'High',
    timeToFirstDollar: '1 Week',
    tools: ['Jasper / Copy.ai', 'Midjourney', 'Metricool', 'Buffer', 'Canva'],
    steps: [
      'Build brand voice profiles and visual style guides for local SMBs (lawyers, real estate agents, clinics).',
      'Generate 30 days of high-converting social graphics, carousels, and captions in a single 2-hour batch.',
      'Schedule automated omnichannel publishing via Metricool or Buffer.',
      'Charge $800 to $1,500/month per business for complete hands-off social presence management.',
      'Provide automated monthly analytics reports highlighting follower growth and lead inbound inquiries.'
    ]
  },
  {
    id: 'vec_2_5',
    code: '2.5',
    title: 'AI Chatbot Integration for E-Commerce',
    category: 'ai_automation',
    revenueString: '$1,000/mo per client',
    estimatedMonthlyRevenue: 2000,
    costString: '$50 (Botpress/Voiceflow)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Extreme',
    timeToFirstDollar: '3-5 Days',
    recommendedInBenchmark: true,
    tools: ['Botpress', 'Voiceflow', 'Shopify API', 'OpenAI Assistant API', 'Zendesk'],
    steps: [
      'Develop intelligent customer support agents using Botpress or Voiceflow connected to store order data.',
      'Equip the bot to handle order tracking, returns, inventory queries, and custom upsell recommendations.',
      'Embed widget into Shopify, WooCommerce, and Magento stores in minutes.',
      'Charge $1,000 upfront setup + $300-$500/month recurring maintenance and SLA support.',
      'Deliver measurable 60%+ reduction in human support ticket volume.'
    ],
    unitEconomics: {
      label: 'Chatbot Retainers',
      unitName: 'Active Store Clients',
      defaultQuantity: 3,
      unitPrice: 500,
      unitCost: 40,
    }
  },
  {
    id: 'vec_2_6',
    code: '2.6',
    title: 'AI Data Extraction (Scraping as a Service)',
    category: 'ai_automation',
    revenueString: '$2,000/mo',
    estimatedMonthlyRevenue: 2000,
    costString: '$50 (proxies & Apify)',
    upfrontCost: 50,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'Extreme',
    timeToFirstDollar: '3-7 Days',
    tools: ['Apify', 'Scrapy', 'Playwright', 'BrightData', 'DataHub'],
    steps: [
      'Deploy automated crawlers to harvest e-commerce catalog pricing, real estate MLS data, and B2B directories.',
      'Process unorganized HTML through LLM parsing to yield clean JSON/CSV feeds.',
      'Offer automated daily/weekly webhook syncs to hedge funds, marketing agencies, and price aggregators.',
      'Charge monthly API access subscriptions starting at $300-$1,000/month per data stream.'
    ]
  },
  {
    id: 'vec_2_7',
    code: '2.7',
    title: 'AI Email Marketing Automation',
    category: 'ai_automation',
    revenueString: '$800/mo per client',
    estimatedMonthlyRevenue: 2400,
    costString: '$50 (Klaviyo / ESP)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'High',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['Klaviyo', 'ActiveCampaign', 'GPT-5 Copy Engine', 'Litmus'],
    steps: [
      'Audit existing e-commerce Klaviyo setups for abandoned cart, welcome series, and VIP winback flows.',
      'Deploy AI-personalized dynamic copywriting and predictive sending times.',
      'Run continuous multi-variant A/B subject line tests with LLM generation.',
      'Charge $500-$1,000/month per store + 10% revenue share on attributed email revenue.'
    ]
  },
  {
    id: 'vec_2_8',
    code: '2.8',
    title: 'AI Resume & Executive Dossier Optimization',
    category: 'ai_automation',
    revenueString: '$200 per client ($2,000/mo)',
    estimatedMonthlyRevenue: 2000,
    costString: '$20 (AI credits)',
    upfrontCost: 20,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'Medium',
    timeToFirstDollar: '24 Hours',
    tools: ['Rezi', 'ResumeWorded', 'Claude 3.5 Sonnet', 'Canva Pro', 'Fiverr Pro'],
    steps: [
      'Parse client career history and target job descriptions using ATS keyword optimization models.',
      'Generate quantifiable, high-impact bullet points and executive summary statements.',
      'Produce matching cover letters and optimized LinkedIn headline/about sections.',
      'Deliver complete turnkey packages on Fiverr Pro, Upwork, or direct niche landing pages for $150-$350.'
    ]
  },
  {
    id: 'vec_2_9',
    code: '2.9',
    title: 'AI Translation & Localization Service',
    category: 'ai_automation',
    revenueString: '$1,000/mo to $3,000/mo',
    estimatedMonthlyRevenue: 2000,
    costString: '$50 (DeepL Pro / GPT-4)',
    upfrontCost: 50,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'Extreme',
    timeToFirstDollar: '48 Hours',
    tools: ['DeepL Pro API', 'GPT-4 Translation', 'WPML', 'Poedit'],
    steps: [
      'Offer corporate website, app documentation, and marketing localization to cross-border brands.',
      'Execute high-fidelity translations using DeepL and LLM cultural context adapters.',
      'Perform human-in-the-loop validation for nuance and brand voice fidelity.',
      'Charge $0.08 to $0.15 per word or retainers for ongoing blog/changelog translations.'
    ]
  },
  {
    id: 'vec_2_10',
    code: '2.10',
    title: 'AI Voiceover Production for Media/Ads',
    category: 'ai_automation',
    revenueString: '$500 per project ($2,500/mo)',
    estimatedMonthlyRevenue: 2500,
    costString: '$50 (ElevenLabs subscription)',
    upfrontCost: 50,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'High',
    timeToFirstDollar: '24 Hours',
    tools: ['ElevenLabs VoiceLab', 'Audacity', 'Voice123', 'Upwork'],
    steps: [
      'Create and license hyper-realistic AI voice models with custom tone, pacing, and emotional inflections.',
      'Deliver broadcast-ready audio for corporate explainers, audiobooks, commercials, and video game mods.',
      'Offer rapid 2-hour turnaround guarantees on voiceover marketplaces.',
      'Charge $100-$300 per commercial minute with negligible production overhead.'
    ]
  },

  // ==========================================
  // 3. SUPPLY CHAIN & LOGISTICS
  // ==========================================
  {
    id: 'vec_3_1',
    code: '3.1',
    title: 'Amazon FBA Product Sourcing Arbitrage',
    category: 'supply_chain',
    revenueString: '$5,000/mo',
    estimatedMonthlyRevenue: 5000,
    costString: '$1,000 (initial inventory)',
    upfrontCost: 1000,
    riskScore: 6,
    riskLevel: getRiskLevel(6),
    scalability: 'High',
    timeToFirstDollar: '2-3 Weeks',
    recommendedInBenchmark: true,
    tools: ['Keepa', 'Jungle Scout', 'SellerAmp', 'Amazon Seller Central', 'Alibaba'],
    steps: [
      'Use Keepa and SellerAmp to pinpoint products with low sales rank, consistent price history, and minimal Buy Box competition.',
      'Source high-margin stock from liquidation brokers, wholesale distributors, or direct factory suppliers.',
      'Prep, label, and dispatch inventory directly to Amazon FBA fulfillment centers.',
      'Deploy AI to generate high-converting title, 5-bullet highlights, and backend search terms.',
      'Utilize dynamic repricing software to capture Buy Box rotations at maximum margin.'
    ],
    unitEconomics: {
      label: 'Inventory Turnover',
      unitName: 'Units Sold / Mo',
      defaultQuantity: 250,
      unitPrice: 35,
      unitCost: 15,
    }
  },
  {
    id: 'vec_3_2',
    code: '3.2',
    title: 'Retail Arbitrage via Online Liquidation',
    category: 'supply_chain',
    revenueString: '$2,000/mo',
    estimatedMonthlyRevenue: 2000,
    costString: '$500 (liquidation pallet)',
    upfrontCost: 500,
    riskScore: 5,
    riskLevel: getRiskLevel(5),
    scalability: 'Medium',
    timeToFirstDollar: '3-5 Days',
    tools: ['DirectLiquidation', 'BulkLiquidation', 'PriceCharting', 'BarcodeLookup', 'eBay / FB Marketplace'],
    steps: [
      'Purchase overstock and customer-return pallets from Tier-1 retailers (Target, Amazon, Best Buy).',
      'Scan manifest barcodes using PriceCharting and BarcodeLookup to value inventory before unboxing.',
      'Grade condition, test electronics, and photograph for instant marketplace listings.',
      'Sell high-value items individually on eBay and bundle lower-tier items for local cash sales on Facebook Marketplace.'
    ]
  },
  {
    id: 'vec_3_3',
    code: '3.3',
    title: 'Dropshipping with AI Predictive Selection',
    category: 'supply_chain',
    revenueString: '$3,000/mo',
    estimatedMonthlyRevenue: 3000,
    costString: '$300 (ad spend & Shopify)',
    upfrontCost: 300,
    riskScore: 5,
    riskLevel: getRiskLevel(5),
    scalability: 'Extreme',
    timeToFirstDollar: '3-7 Days',
    tools: ['Ecomhunt', 'DSers', 'Midjourney', 'TikTok Ads Manager', 'CJ Dropshipping'],
    steps: [
      'Scrape viral engagement spikes on TikTok Creative Center to isolate winning consumer goods.',
      'Generate lifestyle studio imagery and 3D product renders with Midjourney.',
      'Deploy clean high-speed landing pages on Shopify with DSers fulfillment automation.',
      'Scale profitable ad sets with AI-generated video variations and lookalike audiences.'
    ]
  },
  {
    id: 'vec_3_4',
    code: '3.4',
    title: 'Wholesale Reselling on Amazon (B2B)',
    category: 'supply_chain',
    revenueString: '$10,000/mo',
    estimatedMonthlyRevenue: 10000,
    costString: '$5,000 (wholesale inventory)',
    upfrontCost: 5000,
    riskScore: 6,
    riskLevel: getRiskLevel(6),
    scalability: 'High',
    timeToFirstDollar: '3-4 Weeks',
    tools: ['WholesaleCentral', 'Brand Outbound Script', 'Amazon Brand Registry', 'Aura Repricer'],
    steps: [
      'Establish authorized reseller agreements with established consumer brands via WholesaleCentral.',
      'Negotiate bulk wholesale pricing at 40%-60% below Amazon MAP (Minimum Advertised Price).',
      'Deliver stock into Amazon warehouses via prep centers for automated shipping.',
      'Use automated repricers (Aura/Bqool) to dominate sales volume while maintaining margin agreements.'
    ]
  },
  {
    id: 'vec_3_5',
    code: '3.5',
    title: 'Pallet Flipping (B2B Brokerage)',
    category: 'supply_chain',
    revenueString: '$10,000 per transaction batch',
    estimatedMonthlyRevenue: 4000,
    costString: '$2,000 per pallet batch',
    upfrontCost: 2000,
    riskScore: 7,
    riskLevel: getRiskLevel(7),
    scalability: 'High',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['B2B Liquidation Brokers', 'FreightQuote', 'Facebook Groups', 'Warehouse Storage'],
    steps: [
      'Contract full truckloads or multi-pallet returns directly from major enterprise retailers.',
      'Conduct manifest auditing and sorting without breaking retail seals where possible.',
      'Broker wholesale pallets directly to regional discount stores, flea market vendors, and eBay power sellers.',
      'Earn $500-$1,500 markup per pallet with high turnover velocity.'
    ]
  },
  {
    id: 'vec_3_6',
    code: '3.6',
    title: 'Dead Stock Clearance Brokering',
    category: 'supply_chain',
    revenueString: '$5,000/mo',
    estimatedMonthlyRevenue: 5000,
    costString: '$1,000 (buyout deposit)',
    upfrontCost: 1000,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'Medium',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['Cold Outbound to Retailers', 'eBay Motors / General', 'Mercari', 'Square POS'],
    steps: [
      'Contact local independent boutiques, hardware stores, and hobby shops to acquire unsold dead stock.',
      'Purchase inventory lots at 10%-20% of original wholesale value to clear their warehouse space.',
      'List specialized vintage or discontinued items on eBay with international shipping enabled.',
      'Achieve 300%-500% gross ROI on liquidated hard goods.'
    ]
  },
  {
    id: 'vec_3_7',
    code: '3.7',
    title: 'Cross-Border Arbitrage (US ➔ EU / LatAm)',
    category: 'supply_chain',
    revenueString: '$2,000/mo',
    estimatedMonthlyRevenue: 2000,
    costString: '$300 (freight setup)',
    upfrontCost: 300,
    riskScore: 5,
    riskLevel: getRiskLevel(5),
    scalability: 'High',
    timeToFirstDollar: '2 Weeks',
    tools: ['ShipStation', 'Shopify Multi-Currency', 'IOSS Tax Portal', 'Local Payment Gateways'],
    steps: [
      'Identify popular US consumer products with high search interest but absent local distribution in Europe/LatAm.',
      'Configure localized Shopify store with multi-currency checkout (Klarna, iDEAL, Pix).',
      'Route international fulfillment through ShipStation with automated customs declarations.',
      'Capture higher price premiums due to regional supply scarcity.'
    ]
  },

  // ==========================================
  // 4. DATA & PRIVACY VECTORS
  // ==========================================
  {
    id: 'vec_4_1',
    code: '4.1',
    title: 'Data Brokering (Anonymized Market Datasets)',
    category: 'data_privacy',
    revenueString: '$5,000/mo',
    estimatedMonthlyRevenue: 5000,
    costString: '$100 (scraping infrastructure)',
    upfrontCost: 100,
    riskScore: 7,
    riskLevel: getRiskLevel(7),
    scalability: 'Extreme',
    timeToFirstDollar: '2-4 Weeks',
    tools: ['Scrapy', 'Residential Proxies', 'DataCleanse', 'Datarade', 'Snowflake Marketplace'],
    steps: [
      'Collect public pricing, product availability, review sentiment, and hiring trend datasets.',
      'Anonymize, normalize, and strip any personally identifiable information (PII).',
      'Package curated data packages onto marketplaces such as Datarade and Snowflake.',
      'Sell recurring monthly API updates to investment firms, competitor analysis teams, and hedge funds.'
    ]
  },
  {
    id: 'vec_4_2',
    code: '4.2',
    title: 'Data Labeling Service for AI Training',
    category: 'data_privacy',
    revenueString: '$2,000/mo',
    estimatedMonthlyRevenue: 2000,
    costString: '$50 (Label Studio setup)',
    upfrontCost: 50,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'High',
    timeToFirstDollar: '3-5 Days',
    recommendedInBenchmark: true,
    tools: ['Label Studio', 'CVAT', 'Upwork Enterprise', 'Crowdsourced QA'],
    steps: [
      'Set up annotation pipelines for computer vision (bounding boxes, segmentation) and LLM RLHF ranking.',
      'Pitch AI startups needing domain-specific training sets (medical imaging, robotics, legal docs).',
      'Coordinate distributed annotator teams with strict QA verification checks.',
      'Charge $0.05 to $0.50 per labeled sample or retainers for ongoing model validation.'
    ],
    unitEconomics: {
      label: 'Dataset Batches',
      unitName: 'Annotated Batches / Mo',
      defaultQuantity: 4,
      unitPrice: 500,
      unitCost: 80,
    }
  },
  {
    id: 'vec_4_3',
    code: '4.3',
    title: 'B2B Lead Enrichment & Intent Scraping',
    category: 'data_privacy',
    revenueString: '$3,000/mo',
    estimatedMonthlyRevenue: 3000,
    costString: '$200 (enrichment APIs)',
    upfrontCost: 200,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'Extreme',
    timeToFirstDollar: '3-7 Days',
    recommendedInBenchmark: true,
    tools: ['Clay.com', 'LinkedIn Sales Nav', 'Clearbit API', 'BuiltWith', 'Instantly'],
    steps: [
      'Extract high-intent company signals: newly raised funding, recent tech stack migrations, executive departures.',
      'Enrich records with verified decision-maker emails, direct mobile numbers, and personalized context on Clay.',
      'Deliver warm outbound lists to enterprise SaaS sales teams on weekly subscription retainers ($1,500/mo).',
      'Maintain 85%+ net margin with automated API trigger recipes.'
    ],
    unitEconomics: {
      label: 'Enriched Lists',
      unitName: 'Monthly Retainer Clients',
      defaultQuantity: 2,
      unitPrice: 1500,
      unitCost: 150,
    }
  },
  {
    id: 'vec_4_4',
    code: '4.4',
    title: 'Resume & Niche Job Scraping Feed',
    category: 'data_privacy',
    revenueString: '$1,000/mo to $2,500/mo',
    estimatedMonthlyRevenue: 1500,
    costString: '$50 (proxies)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Extreme',
    timeToFirstDollar: '1 Week',
    tools: ['Apify Scrapers', 'Airtable', 'Telegram Bot / Discord Bot', 'Stripe Customer Portal'],
    steps: [
      'Scrape niche job boards and public developer profiles for specialized tech talent (Rust, AI engineers, Solidity).',
      'Filter for candidates actively updating portfolios and seeking immediate roles.',
      'Publish an exclusive daily talent alert feed for boutique recruiters and staffing agencies.',
      'Charge $99-$299/month per recruiting seat for private feed access.'
    ]
  },
  {
    id: 'vec_4_5',
    code: '4.5',
    title: 'Web Scraping as a Custom Service (B2B)',
    category: 'data_privacy',
    revenueString: '$2,000/mo per retainer',
    estimatedMonthlyRevenue: 3000,
    costString: '$100 (proxies & servers)',
    upfrontCost: 100,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'High',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['Scrapy', 'BrightData Rotating Proxies', 'FastAPI', 'PostgreSQL / Supabase'],
    steps: [
      'Offer bespoke web data harvesting for enterprise clients facing anti-bot protections (Cloudflare, Akamai).',
      'Engineer resilient scraping workflows utilizing headless browser clusters and residential IPs.',
      'Expose structured REST/GraphQL endpoints for clients to query refreshed datasets automatically.',
      'Charge $2,500 setup fee + $500/month recurring maintenance per pipeline.'
    ]
  },
  {
    id: 'vec_4_6',
    code: '4.6',
    title: 'CRM Data Cleaning & Deduplication',
    category: 'data_privacy',
    revenueString: '$1,500/mo',
    estimatedMonthlyRevenue: 1500,
    costString: '$50 (cloud compute)',
    upfrontCost: 50,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'High',
    timeToFirstDollar: '48 Hours',
    tools: ['Python Pandas', 'OpenAI Embedding API', 'HubSpot API', 'Salesforce API'],
    steps: [
      'Connect to messy SME HubSpot or Salesforce databases with thousands of duplicate and outdated contacts.',
      'Run vector similarity scripts to merge duplicates, normalize phone numbers, and verify active domains.',
      'Enrich missing industry codes, revenue estimates, and job titles automatically.',
      'Charge $0.10 to $0.25 per cleaned record or flat $1,000 per database overhaul.'
    ]
  },

  // ==========================================
  // 5. DEFI & CRYPTO PROTOCOLS
  // ==========================================
  {
    id: 'vec_5_1',
    code: '5.1',
    title: 'Stablecoin Yield Farming (Aave / Morpho)',
    category: 'defi_crypto',
    revenueString: '$1,000/mo (per $10k capital)',
    estimatedMonthlyRevenue: 1000,
    costString: '$0 (protocol gas)',
    upfrontCost: 0,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'Extreme',
    timeToFirstDollar: '24 Hours',
    recommendedInBenchmark: true,
    tools: ['Aave v3', 'Morpho Blue', 'Compound', 'DefiLlama Yields', 'DeBank'],
    steps: [
      'Deposit USDC, USDT, or DAI into overcollateralized lending markets on high-throughput chains (Arbitrum, Base).',
      'Optimize allocations for 8%-18% blended APY combining base lending interest + token incentives.',
      'Employ delta-neutral hedging strategies to eliminate market volatility risk.',
      'Compound yields weekly to maximize exponential compounding returns.'
    ],
    unitEconomics: {
      label: 'Capital Allocation',
      unitName: 'Capital Deployed ($1k chunks)',
      defaultQuantity: 10,
      unitPrice: 100,
      unitCost: 5,
    }
  },
  {
    id: 'vec_5_2',
    code: '5.2',
    title: 'Peer-to-Peer Overcollateralized Lending',
    category: 'defi_crypto',
    revenueString: '$500/mo per $5k deployed',
    estimatedMonthlyRevenue: 500,
    costString: '$0 (zero platform cost)',
    upfrontCost: 0,
    riskScore: 6,
    riskLevel: getRiskLevel(6),
    scalability: 'High',
    timeToFirstDollar: '24 Hours',
    tools: ['Nexo', 'YouHodler', 'NFTfi', 'Arcade.xyz'],
    steps: [
      'Provide liquidity on peer-to-peer lending platforms backed by high-liquid bluechip crypto collateral (BTC, ETH).',
      'Enforce maximum 50%-60% Loan-to-Value (LTV) ratios to eliminate liquidation default risks.',
      'Collect 10%-15% fixed APR interest directly in stablecoins.',
      'Automate loan rollover agreements to maintain continuous cash generation.'
    ]
  },
  {
    id: 'vec_5_3',
    code: '5.3',
    title: 'Flash Loan Arbitrage (DEX Spreads)',
    category: 'defi_crypto',
    revenueString: '$5,000 per major trade event',
    estimatedMonthlyRevenue: 2500,
    costString: '$0 collateral (gas fees only)',
    upfrontCost: 50,
    riskScore: 8,
    riskLevel: getRiskLevel(8),
    scalability: 'Extreme',
    timeToFirstDollar: '1-3 Days',
    tools: ['Aave Flashloans', 'dYdX', 'Uniswap v3', 'Curve Finance', 'Solidity Bot'],
    steps: [
      'Deploy smart contract to borrow uncollateralized millions in stablecoins via Aave flash loan within a single block.',
      'Execute atomic triangular arbitrage between Uniswap, SushiSwap, and Curve when price divergence exceeds gas fees.',
      'Repay flash loan principal + 0.05% fee and deposit net profit into cold wallet.',
      'Zero liquidation risk since failed transactions revert automatically.'
    ]
  },
  {
    id: 'vec_5_4',
    code: '5.4',
    title: 'Proof-of-Stake Validator Staking',
    category: 'defi_crypto',
    revenueString: '$500/mo per $10k staked',
    estimatedMonthlyRevenue: 500,
    costString: '$0 (native protocol)',
    upfrontCost: 0,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'Extreme',
    timeToFirstDollar: '24 Hours',
    tools: ['Lido Finance', 'Rocket Pool', 'Jito SOL', 'Ledger Hardware Wallet'],
    steps: [
      'Stake native Layer-1 assets (ETH, SOL, SUI, AVAX) with decentralized validator pools.',
      'Earn 4%-9% annualized staking yields paid continuously per epoch.',
      'Utilize Liquid Staking Tokens (stETH, JitoSOL) to deploy assets into secondary yield pools for double-dipping.',
      'Store private keys securely in non-custodial hardware devices.'
    ]
  },
  {
    id: 'vec_5_5',
    code: '5.5',
    title: 'Crypto Card Cashback Arbitrage',
    category: 'defi_crypto',
    revenueString: '$500/mo on regular business expenses',
    estimatedMonthlyRevenue: 500,
    costString: '$0 (zero upfront)',
    upfrontCost: 0,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Medium',
    timeToFirstDollar: 'Instant',
    tools: ['Coinbase Card', 'Crypto.com Card', 'Bybit Card', 'Curve App'],
    steps: [
      'Route all business ad spend, SaaS subscriptions, and inventory purchases through crypto debit cards.',
      'Capture 2%-8% immediate cashback rewards paid in liquid cryptocurrencies.',
      'Auto-convert rewards to USDC on a daily basis to lock in risk-free profit.',
      'Combine with stacking rewards programs and merchant cashback portals.'
    ]
  },
  {
    id: 'vec_5_6',
    code: '5.6',
    title: 'Crypto Exchange Referral Farming',
    category: 'defi_crypto',
    revenueString: '$1,000/mo recurring commission',
    estimatedMonthlyRevenue: 1000,
    costString: '$0 (organic distribution)',
    upfrontCost: 0,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Extreme',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['Binance Partner', 'Bybit Affiliates', 'GMX Referrals', 'Hyperliquid Affiliates'],
    steps: [
      'Join tier-1 perpetual DEX and CEX affiliate programs (Hyperliquid, Bybit, GMX).',
      'Create high-value trading guides, algorithmic bot tutorials, and yield farming spreadsheets.',
      'Earn 20%-50% lifetime commission on referee trading fee volume.',
      'Generate perpetual passive income as active traders execute high volume.'
    ]
  },
  {
    id: 'vec_5_7',
    code: '5.7',
    title: 'DEX Concentrated Liquidity Provision (IL-Aware)',
    category: 'defi_crypto',
    revenueString: '$500/mo per $5k deployed',
    estimatedMonthlyRevenue: 500,
    costString: '$0',
    upfrontCost: 0,
    riskScore: 6,
    riskLevel: getRiskLevel(6),
    scalability: 'High',
    timeToFirstDollar: '24 Hours',
    tools: ['Uniswap v3/v4', 'Aerodrome Base', 'Raydium CLMM', 'Zapper', 'Aperture Finance'],
    steps: [
      'Provide concentrated liquidity within tight price bands for high-volume trading pairs (USDC/USDT, ETH/USDC).',
      'Capture 30%-80% annualized swap fee volume within active price intervals.',
      'Use automated rebalancing tools (Aperture) to auto-adjust ranges and minimize impermanent loss.',
      'Harvest trading fees continuously.'
    ]
  },
  {
    id: 'vec_5_8',
    code: '5.8',
    title: 'Token Presale & Fair Launch Flipping',
    category: 'defi_crypto',
    revenueString: '$5,000 per successful presale',
    estimatedMonthlyRevenue: 2500,
    costString: 'Variable ($500-$1,000 entry)',
    upfrontCost: 500,
    riskScore: 8,
    riskLevel: getRiskLevel(8),
    scalability: 'High',
    timeToFirstDollar: '24-48 Hours',
    tools: ['Pump.fun / Raydium', 'DAO Maker', 'CoinList', 'Photon Trading Bot'],
    steps: [
      'Screen early launchpad allocations and viral token fair launches on Solana/Base.',
      'Verify liquidity locks, contract renunciation, and top holder distribution with security audit bots.',
      'Execute immediate sniper purchases at launch and scale out 50% at 2x and remainder at 5x-10x.',
      'Preserve initial principal on every winning trade.'
    ]
  },
  {
    id: 'vec_5_9',
    code: '5.9',
    title: 'MEV Bot & Arbitrage Relay Operation',
    category: 'defi_crypto',
    revenueString: '$1,000/day ($15,000/mo potential)',
    estimatedMonthlyRevenue: 8000,
    costString: '$500 (dedicated node & gas)',
    upfrontCost: 500,
    riskScore: 9,
    riskLevel: getRiskLevel(9),
    scalability: 'Extreme',
    timeToFirstDollar: '3-7 Days',
    tools: ['Flashbots Builder', 'MEV-Share', 'Rust / Go', 'Alchemy / QuickNode', 'Private RPCs'],
    steps: [
      'Deploy low-latency mempool listener bots in Rust to monitor unconfirmed transactions for arbitrage.',
      'Submit private bundle transactions via Flashbots builder to prevent frontrunning and zero revert costs.',
      'Capture backrunning and DEX-to-DEX price discrepancies with microsecond execution.',
      'Route profits automatically to decentralized multisig vaults.'
    ]
  },
  {
    id: 'vec_5_10',
    code: '5.10',
    title: 'ASIC/GPU Crypto Mining with Optimized Power',
    category: 'defi_crypto',
    revenueString: '$500/mo per machine',
    estimatedMonthlyRevenue: 1500,
    costString: '$3,000-$5,000 (hardware)',
    upfrontCost: 4000,
    riskScore: 6,
    riskLevel: getRiskLevel(6),
    scalability: 'Medium',
    timeToFirstDollar: '1 Week',
    tools: ['WhatToMine', 'F2Pool / NiceHash', 'Bitmain Antminer', 'HiveOS'],
    steps: [
      'Acquire efficient ASIC miners (Antminer S21) or multi-GPU AI compute rigs.',
      'Host in low-cost electricity zones (<$0.05/kWh) or co-location hosting centers.',
      'Mine top-profitability proof-of-work tokens with auto-switching algorithms.',
      'Sell mined coins on spot rallies or lend to earn secondary yield.'
    ]
  },
  {
    id: 'vec_5_11',
    code: '5.11',
    title: 'DeFi Protocol Insurance Underwriting Yield',
    category: 'defi_crypto',
    revenueString: '$300/mo to $800/mo',
    estimatedMonthlyRevenue: 500,
    costString: '$0 (zero cost)',
    upfrontCost: 0,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'High',
    timeToFirstDollar: '24 Hours',
    tools: ['Nexus Mutual', 'InsurAce', 'Uno Re', 'DefiLlama'],
    steps: [
      'Deposit capital into decentralized insurance capital pools (Nexus Mutual) providing coverage on battle-tested protocols.',
      'Collect steady policy premiums paid by institutional DeFi users seeking smart contract insurance.',
      'Earn 8%-14% steady APR with low correlation to broader crypto market volatility.'
    ]
  },

  // ==========================================
  // 6. E-COMMERCE & RETAIL
  // ==========================================
  {
    id: 'vec_6_1',
    code: '6.1',
    title: 'Print-on-Demand with Etsy & AI Mockups',
    category: 'ecommerce_retail',
    revenueString: '$1,500/mo',
    estimatedMonthlyRevenue: 1500,
    costString: '$0 (zero upfront inventory)',
    upfrontCost: 0,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'High',
    timeToFirstDollar: '3-7 Days',
    recommendedInBenchmark: true,
    tools: ['Everbee', 'Canva Pro', 'Midjourney', 'Printful', 'Etsy SEO'],
    steps: [
      'Use Everbee to identify low-competition, high-search velocity keywords in apparel, mugs, and wall art.',
      'Generate stunning, distinctive graphic designs using Midjourney and vectorize in Canva.',
      'Connect Etsy store directly to Printful for 100% automated production and direct-to-consumer fulfillment.',
      'Optimize product titles, 13 search tags, and lifestyle mockup photography.',
      'Scale catalog to 100+ optimized listings to generate steady organic daily orders.'
    ],
    unitEconomics: {
      label: 'Monthly Print Orders',
      unitName: 'Orders Shipped / Mo',
      defaultQuantity: 75,
      unitPrice: 28,
      unitCost: 12,
    }
  },
  {
    id: 'vec_6_2',
    code: '6.2',
    title: 'Wholesale Brand E-Commerce (Shopify + 3PL)',
    category: 'ecommerce_retail',
    revenueString: '$10,000/mo',
    estimatedMonthlyRevenue: 10000,
    costString: '$2,000 (inventory & packaging)',
    upfrontCost: 2000,
    riskScore: 6,
    riskLevel: getRiskLevel(6),
    scalability: 'High',
    timeToFirstDollar: '3-4 Weeks',
    tools: ['Alibaba Verified', 'Shopify Plus', 'ShipBob 3PL', 'Klaviyo', 'TikTok Shop'],
    steps: [
      'Manufacture custom-branded private label goods with proprietary packaging from Alibaba verified suppliers.',
      'Store inventory in domestic 3PL warehouses (ShipBob) for 2-day delivery capabilities.',
      'Launch branded Shopify storefront paired with TikTok Shop live creator affiliate network.',
      'Achieve 65%+ gross product margins with scalable recurring customer retention flows.'
    ]
  },
  {
    id: 'vec_6_3',
    code: '6.3',
    title: 'eBay & FB Marketplace Vintage / Tech Flipping',
    category: 'ecommerce_retail',
    revenueString: '$2,000/mo',
    estimatedMonthlyRevenue: 2000,
    costString: '$500 (sourcing capital)',
    upfrontCost: 500,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'Medium',
    timeToFirstDollar: '24-48 Hours',
    tools: ['PriceCharting', 'eBay Sold Listings', 'Facebook Marketplace', 'PirateShip'],
    steps: [
      'Source undervalued gaming consoles, audio gear, vintage electronics, and power tools from thrift stores and garage sales.',
      'Cross-reference exact completed sales prices using eBay Sold filter.',
      'Clean, polish, and shoot high-contrast product images.',
      'List with competitive Buy-It-Now pricing and calculate discounted shipping labels via PirateShip.'
    ]
  },
  {
    id: 'vec_6_4',
    code: '6.4',
    title: 'Local Classifieds Fast Arbitrage (Craigslist/OfferUp)',
    category: 'ecommerce_retail',
    revenueString: '$1,500/mo',
    estimatedMonthlyRevenue: 1500,
    costString: '$300 (floating cash)',
    upfrontCost: 300,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'Medium',
    timeToFirstDollar: '24 Hours',
    tools: ['OfferUp Alerts', 'Craigslist RSS', 'Local Pickup', 'Instant Cash'],
    steps: [
      'Set automated keyword alerts on OfferUp and Craigslist for "moving sale", "must go today", "estate liquidation".',
      'Negotiate aggressive immediate cash offers on high-liquidity items (bicycles, Apple products, musical instruments).',
      'Clean and re-photograph in professional lighting and re-list on the same platforms at market retail price.',
      'Achieve same-day cash turnaround cycles.'
    ]
  },
  {
    id: 'vec_6_5',
    code: '6.5',
    title: 'Amazon KDP Low-Content Books & Planners',
    category: 'ecommerce_retail',
    revenueString: '$1,000/mo',
    estimatedMonthlyRevenue: 1000,
    costString: '$50 (book cover & Canva)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Extreme',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['Book Bolt', 'Canva Pro', 'Amazon KDP Portal', 'Midjourney'],
    steps: [
      'Use Book Bolt to find lucrative low-content niches: habit trackers, niche fitness logs, gratitude journals.',
      'Generate elegant manuscript interiors and eye-catching wrap-around book covers.',
      'Publish zero-cost print-on-demand books directly onto Amazon KDP with global distribution.',
      'Collect monthly author royalties on complete autopilot.'
    ]
  },
  {
    id: 'vec_6_6',
    code: '6.6',
    title: 'Audiobook Narration Production (ACX/Audible)',
    category: 'ecommerce_retail',
    revenueString: '$1,000 per completed book',
    estimatedMonthlyRevenue: 2000,
    costString: '$0 (zero cost)',
    upfrontCost: 0,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'High',
    timeToFirstDollar: '2 Weeks',
    tools: ['ElevenLabs Studio', 'Audacity / RX10', 'ACX Portal', 'ID3 Tag Editor'],
    steps: [
      'Partner with independent authors on ACX looking to convert written books into audiobooks on Audible.',
      'Generate expressive, studio-mastered narration using ElevenLabs voice cloning and audio cleanup tools.',
      'Ensure strict ACX compliance (RMS volume, noise floor < -60dB, 192kbps MP3).',
      'Earn $500-$1,500 per completed audio project or split ongoing 50% royalty shares.'
    ]
  },
  {
    id: 'vec_6_7',
    code: '6.7',
    title: 'Digital Product Mega-Bundles (PLR & Templates)',
    category: 'ecommerce_retail',
    revenueString: '$800/mo to $2,000/mo',
    estimatedMonthlyRevenue: 1200,
    costString: '$50 (bundle assets)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Extreme',
    timeToFirstDollar: '48 Hours',
    tools: ['Gumroad', 'Payhip', 'Notion Templates', 'Figma Assets'],
    steps: [
      'Assemble massive bundle packs (e.g., 500+ Notion agency templates, 1,000+ UI components, 200+ marketing prompts).',
      'Package in a single seamless vault checkout with lifetime updates.',
      'Price at an irresistible impulse price point ($29-$49) with high perceived $500+ retail value.',
      'Drive organic traffic through viral social resource lists.'
    ]
  },

  // ==========================================
  // 7. GIG ECONOMY & SERVICES
  // ==========================================
  {
    id: 'vec_7_1',
    code: '7.1',
    title: 'AI-Supercharged Freelance Agency (Fiverr/Upwork)',
    category: 'gig_services',
    revenueString: '$3,000/mo to $6,000/mo',
    estimatedMonthlyRevenue: 4000,
    costString: '$0 (software subscriptions only)',
    upfrontCost: 0,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'High',
    timeToFirstDollar: '3-5 Days',
    tools: ['Upwork Pro', 'Fiverr Studio', 'Claude 3.5 Sonnet', 'Cursor IDE', 'v0.dev'],
    steps: [
      'Offer high-ticket technical services: full-stack web prototypes, AI bot development, copy audit packages.',
      'Execute client deliverables 5x-10x faster using modern AI code generators (Cursor, v0) and LLMs.',
      'Maintain 5-star review velocity by delivering in 24 hours what competitors take 2 weeks to build.',
      'Transition top one-off clients into monthly retainer maintenance contracts.'
    ]
  },
  {
    id: 'vec_7_2',
    code: '7.2',
    title: 'Remote Executive Assistant (AI-Powered)',
    category: 'gig_services',
    revenueString: '$1,500/mo per client',
    estimatedMonthlyRevenue: 3000,
    costString: '$100 (tools)',
    upfrontCost: 100,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Medium',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['Superhuman', 'Motion Calendar', 'ChatGPT Plus', 'Otter.ai', 'Notion'],
    steps: [
      'Position yourself as an elite AI-augmented executive partner managing inbox zero, scheduling, and travel logistics.',
      'Use AI voice assistants and summarization tools to draft executive briefing dossiers.',
      'Charge $750-$1,500/month per executive for 5-10 hours of leveraged weekly support.',
      'Manage 3-4 non-conflicting executives simultaneously.'
    ]
  },
  {
    id: 'vec_7_3',
    code: '7.3',
    title: 'Virtual Corporate Event & Webinar Producer',
    category: 'gig_services',
    revenueString: '$2,000 per event ($4,000/mo)',
    estimatedMonthlyRevenue: 4000,
    costString: '$100 (Zoom Events / Whova)',
    upfrontCost: 100,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'Medium',
    timeToFirstDollar: '2 Weeks',
    tools: ['Zoom Events', 'Whova', 'OBS Studio', 'Slido', 'Canva'],
    steps: [
      'Produce seamless digital summits, corporate town halls, and investor webinars for remote companies.',
      'Manage speaker green rooms, interactive polls (Slido), broadcast overlays, and recording distribution.',
      'Charge $1,500-$3,000 flat fee per half-day event production.'
    ]
  },
  {
    id: 'vec_7_4',
    code: '7.4',
    title: 'Online Tutoring & Test Prep (AI-Assisted)',
    category: 'gig_services',
    revenueString: '$1,000/mo',
    estimatedMonthlyRevenue: 1000,
    costString: '$0 (zero cost)',
    upfrontCost: 0,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'Medium',
    timeToFirstDollar: '48 Hours',
    tools: ['Wyzant', 'Chegg Tutors', 'Claude 4 for Custom Quizzes', 'Miro Whiteboard'],
    steps: [
      'Tutor students in lucrative STEM, coding, and standardized test domains (SAT/ACT, AP Calculus, Python).',
      'Generate personalized diagnostic quizzes and step-by-step problem explanations in seconds with AI.',
      'Charge $50-$100 per 1-hour session on Wyzant and build private direct-client rosters.'
    ]
  },
  {
    id: 'vec_7_5',
    code: '7.5',
    title: 'High-End Pet Sitting & Dog Walking (Rover Scaler)',
    category: 'gig_services',
    revenueString: '$1,000/mo to $2,500/mo',
    estimatedMonthlyRevenue: 1500,
    costString: '$0 (zero cost)',
    upfrontCost: 0,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Medium',
    timeToFirstDollar: '48 Hours',
    tools: ['Rover App', 'Wag', 'Nextdoor Local Ads', 'Square Invoicing'],
    steps: [
      'Create a verified 5-star profile on Rover targeting affluent urban and suburban zip codes.',
      'Offer premium overnight house-sitting and scheduled midday walks for high-income professionals.',
      'Build a trusted recurring client network and hire subcontract walkers to expand capacity.'
    ]
  },
  {
    id: 'vec_7_6',
    code: '7.6',
    title: 'Luxury House Sitting (Rent Elimination Arbitrage)',
    category: 'gig_services',
    revenueString: '$500/mo side income + $2,000/mo saved rent',
    estimatedMonthlyRevenue: 2500,
    costString: '$0 ($100 membership)',
    upfrontCost: 100,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'Medium',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['TrustedHousesitters', 'Nomador', 'Airbnb Profile Reviews'],
    steps: [
      'Apply for long-term luxury home and estate sits on TrustedHousesitters in prime metropolitan areas.',
      'Eliminate primary rent and utility expenses entirely while working remotely.',
      'Earn additional stipends for plant care, pool maintenance, and pet care.'
    ]
  },
  {
    id: 'vec_7_7',
    code: '7.7',
    title: 'Personal Shopping & Corporate Errands (TaskRabbit)',
    category: 'gig_services',
    revenueString: '$800/mo to $1,500/mo',
    estimatedMonthlyRevenue: 1000,
    costString: '$0',
    upfrontCost: 0,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Low',
    timeToFirstDollar: '24 Hours',
    tools: ['TaskRabbit', 'Instacart Shopper', 'Google Maps Routing'],
    steps: [
      'Execute urgent boutique deliveries, corporate catering pickups, and specialized hardware store runs.',
      'Charge $35-$65/hour on TaskRabbit with same-day client payouts.'
    ]
  },
  {
    id: 'vec_7_8',
    code: '7.8',
    title: 'Mobile Car Detailing & Paint Correction',
    category: 'gig_services',
    revenueString: '$1,500/mo to $4,000/mo',
    estimatedMonthlyRevenue: 2500,
    costString: '$300 (pro supplies & extractor)',
    upfrontCost: 300,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'High',
    timeToFirstDollar: '24-48 Hours',
    tools: ['Chemical Guys Supplies', 'Bissell Extractor', 'Nextdoor Ads', 'Square Card Reader'],
    steps: [
      'Equip a portable trunk setup with foam cannon, carpet extractor, ceramic spray, and microfiber gear.',
      'Run localized promotions on Nextdoor and Facebook Groups offering mobile driveway detailing.',
      'Charge $150-$300 per vehicle package and upsell ceramic paint sealant coatings.'
    ]
  },
  {
    id: 'vec_7_9',
    code: '7.9',
    title: 'Local Niche Tour Host (Airbnb Experiences)',
    category: 'gig_services',
    revenueString: '$800/mo to $2,000/mo',
    estimatedMonthlyRevenue: 1200,
    costString: '$0',
    upfrontCost: 0,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'Medium',
    timeToFirstDollar: '1 Week',
    tools: ['Airbnb Experiences', 'TripAdvisor Experiences', 'Instagram Reels'],
    steps: [
      'Craft unique culinary, photography, or architectural walking routes in your city.',
      'Host 2-hour small-group experiences 2-3 times per week at $45-$85 per person.',
      'Leverage Airbnb’s global tourist traffic for organic inbound bookings.'
    ]
  },

  // ==========================================
  // 8. EMERGING TECH & SECURITY
  // ==========================================
  {
    id: 'vec_8_1',
    code: '8.1',
    title: 'Enterprise AI Model Fine-Tuning (Open Source/LoRA)',
    category: 'emerging_tech',
    revenueString: '$5,000 per client project',
    estimatedMonthlyRevenue: 5000,
    costString: '$100 (GPU cloud compute)',
    upfrontCost: 100,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'High',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['Unsloth / Axolotl', 'Llama 3 / Mistral', 'RunPod / Lambda Labs', 'Weights & Biases'],
    steps: [
      'Fine-tune open-weights models (Llama 3.1, Qwen) on proprietary enterprise documents (legal, medical, insurance).',
      'Optimize using 4-bit LoRA/QLoRA via Unsloth for ultra-fast and cost-effective GPU training runs on RunPod.',
      'Deliver self-hosted Ollama/vLLM endpoints that guarantee total data privacy and zero vendor lock-in.',
      'Charge $3,000-$8,000 per custom model deployment.'
    ]
  },
  {
    id: 'vec_8_2',
    code: '8.2',
    title: 'AI Prompt Engineering & Template Marketplace',
    category: 'emerging_tech',
    revenueString: '$500 per pack ($1,500/mo)',
    estimatedMonthlyRevenue: 1500,
    costString: '$0 (zero cost)',
    upfrontCost: 0,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'Extreme',
    timeToFirstDollar: '24 Hours',
    tools: ['PromptBase', 'Gumroad', 'Midjourney', 'Claude Artifacts'],
    steps: [
      'Develop battle-tested, parameterized prompt systems for Midjourney v6 photorealism, code generation, and sales copy.',
      'Publish verified prompts on PromptBase and bundle into industry mega-packs on Gumroad.',
      'Capture continuous passive purchases with 80%+ profit margins.'
    ]
  },
  {
    id: 'vec_8_3',
    code: '8.3',
    title: 'Royalty-Free AI Music & Soundscapes',
    category: 'emerging_tech',
    revenueString: '$800/mo passive streaming/licenses',
    estimatedMonthlyRevenue: 800,
    costString: '$50 (Suno/Udio subscription)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Extreme',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['Suno AI', 'Udio', 'AudioJungle', 'Pond5', 'DistroKid'],
    steps: [
      'Generate original instrumental lofi, corporate ambient, and cinematic background music tracks with Suno/Udio.',
      'Master audio output and register tracks on stock licensing libraries (AudioJungle, Pond5) and DistroKid for Spotify streams.',
      'Earn royalties per commercial sync license and monthly streaming fractions.'
    ]
  },
  {
    id: 'vec_8_4',
    code: '8.4',
    title: 'Deepfake / AI Cloned Voiceover for Ad Agencies',
    category: 'emerging_tech',
    revenueString: '$1,000 per campaign',
    estimatedMonthlyRevenue: 3000,
    costString: '$50 (ElevenLabs Pro)',
    upfrontCost: 50,
    riskScore: 5,
    riskLevel: getRiskLevel(5),
    scalability: 'High',
    timeToFirstDollar: '3-5 Days',
    tools: ['ElevenLabs VoiceLab', 'Pro Audio Daw', 'Legal Release Waivers'],
    steps: [
      'Contract licensed voice actors to create custom cloned voice models with full legal commercial waivers.',
      'Generate multi-lingual regional ad variants for marketing agencies with zero re-recording delays.',
      'Bill $500-$1,500 per localized ad campaign.'
    ]
  },
  {
    id: 'vec_8_5',
    code: '8.5',
    title: 'Automated Legal Document & NDA Drafting Tool',
    category: 'emerging_tech',
    revenueString: '$500 per document ($2,000/mo)',
    estimatedMonthlyRevenue: 2000,
    costString: '$0 (zero cost)',
    upfrontCost: 0,
    riskScore: 5,
    riskLevel: getRiskLevel(5),
    scalability: 'High',
    timeToFirstDollar: '48 Hours',
    tools: ['Claude 3.5 Sonnet', 'DocuSign API', 'Legal Template Databases'],
    steps: [
      'Draft standard commercial agreements, NDAs, independent contractor pacts, and SaaS SLAs for startups.',
      'Offer rapid turnarounds under strict disclaimer frameworks and partner with practicing attorneys for final review.',
      'Charge flat per-document pricing.'
    ]
  },
  {
    id: 'vec_8_6',
    code: '8.6',
    title: 'AI Medical & Clinic Triage Chatbot',
    category: 'emerging_tech',
    revenueString: '$2,000/mo per clinic',
    estimatedMonthlyRevenue: 4000,
    costString: '$100 (HIPAA-compliant hosting)',
    upfrontCost: 100,
    riskScore: 8,
    riskLevel: getRiskLevel(8),
    scalability: 'High',
    timeToFirstDollar: '3-4 Weeks',
    tools: ['HIPAA-compliant AWS Bedrock', 'Voiceflow', 'EMR/EHR Webhooks'],
    steps: [
      'Deploy pre-screening symptom intake bots that direct patients to appropriate urgent care vs appointment slots.',
      'Ensure strict data privacy and regulatory compliance.',
      'Charge monthly software maintenance retainers to private healthcare practices.'
    ]
  },
  {
    id: 'vec_8_7',
    code: '8.7',
    title: 'RPA & Workflow Automation Consulting (Make / Zapier / n8n)',
    category: 'emerging_tech',
    revenueString: '$5,000 per implementation',
    estimatedMonthlyRevenue: 5000,
    costString: '$100 (tools)',
    upfrontCost: 100,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'High',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['n8n Self-Hosted', 'Make.com', 'Zapier Enterprise', 'Python Scripts'],
    steps: [
      'Map out manual data re-entry bottlenecks across client invoicing, inventory, and customer onboarding systems.',
      'Build end-to-end autonomous event-driven workflows utilizing n8n and Make webhooks.',
      'Deliver audited systems that save businesses 40+ human labor hours per week.',
      'Charge $3,000-$10,000 project fees + $500/month monitoring retainers.'
    ]
  },
  {
    id: 'vec_8_8',
    code: '8.8',
    title: 'IoT Security Testing & White-Hat Bug Bounties',
    category: 'emerging_tech',
    revenueString: '$2,000 per engagement',
    estimatedMonthlyRevenue: 3000,
    costString: '$500 (hardware & SDR tools)',
    upfrontCost: 500,
    riskScore: 5,
    riskLevel: getRiskLevel(5),
    scalability: 'Medium',
    timeToFirstDollar: '2-3 Weeks',
    tools: ['Flipper Zero / HackRF', 'Wireshark', 'Burp Suite', 'HackerOne'],
    steps: [
      'Audit consumer IoT hardware (smart cameras, connected locks, industrial sensors) for firmware flaws and exposed ports.',
      'Submit coordinated vulnerability disclosures via HackerOne/Bugcrowd for lucrative bug bounty payouts.',
      'Offer private penetration testing assessments to hardware manufacturers.'
    ]
  },

  // ==========================================
  // 9. CONTENT CREATION & INFLUENCER
  // ==========================================
  {
    id: 'vec_9_1',
    code: '9.1',
    title: 'Faceless YouTube Channel Empire Automation',
    category: 'content_creation',
    revenueString: '$5,000/mo ($1,000/mo starter)',
    estimatedMonthlyRevenue: 3000,
    costString: '$50 (API tooling)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Extreme',
    timeToFirstDollar: '2-4 Weeks',
    recommendedInBenchmark: true,
    tools: ['Claude 4', 'ElevenLabs', 'Midjourney', 'CapCut / Premiere', 'TubeBuddy'],
    steps: [
      'Pick evergreen, high-CPM niches (personal finance, historical documentaries, technology analysis, luxury).',
      'Generate compelling 8-12 minute video scripts with high narrative retention curves using LLMs.',
      'Synthesize hyper-realistic deep voiceovers and match with curated cinematic AI b-roll footage.',
      'Publish 3 long-form videos per week with clickable A/B tested thumbnails.',
      'Monetize through YouTube AdSense revenue, high-paying sponsor placements, and digital course upsells.'
    ],
    unitEconomics: {
      label: 'Channel Ad Revenue',
      unitName: 'Active Niche Channels',
      defaultQuantity: 2,
      unitPrice: 1500,
      unitCost: 75,
    }
  },
  {
    id: 'vec_9_2',
    code: '9.2',
    title: 'Niche Newsletter Flipping (Substack / Beehiiv)',
    category: 'content_creation',
    revenueString: '$1,000/mo recurring + $15,000 exit',
    estimatedMonthlyRevenue: 1500,
    costString: '$0 (free tiers)',
    upfrontCost: 0,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'High',
    timeToFirstDollar: '2-3 Weeks',
    tools: ['Beehiiv', 'Substack', 'SparkLoop', 'Duuce Newsletter Marketplace'],
    steps: [
      'Curate a hyper-focused weekly industry digest (AI in biotech, real estate tech, renewable energy).',
      'Grow email subscribers using cross-recommendations via SparkLoop and targeted X/LinkedIn threads.',
      'Monetize via Beehiiv Ad Network sponsorships ($25-$50 CPM) and premium paid subscriber tiers ($10/mo).',
      'Flip the newsletter on Duuce at 24x-36x monthly recurring revenue.'
    ]
  },
  {
    id: 'vec_9_3',
    code: '9.3',
    title: 'Podcast Transcription & Viral Show Notes Service',
    category: 'content_creation',
    revenueString: '$500 per episode ($2,000/mo)',
    estimatedMonthlyRevenue: 2000,
    costString: '$50 (Whisper / Otter)',
    upfrontCost: 50,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'High',
    timeToFirstDollar: '48 Hours',
    tools: ['OpenAI Whisper', 'Claude 3.5 Sonnet', 'Notion', 'Substack'],
    steps: [
      'Run podcast audio through OpenAI Whisper for timestamped transcriptions.',
      'Prompt LLMs to extract key memorable quotes, actionable frameworks, and SEO-optimized blog show notes.',
      'Deliver ready-to-publish newsletter summaries and tweet threads to podcasters within 2 hours of recording.',
      'Retain 4-6 podcast shows on monthly retainer packages ($400/mo each).'
    ]
  },
  {
    id: 'vec_9_4',
    code: '9.4',
    title: 'Stock Photography & 3D Assets (AI-Generated)',
    category: 'content_creation',
    revenueString: '$800/mo passive royalty stream',
    estimatedMonthlyRevenue: 800,
    costString: '$50 (Midjourney subscription)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Extreme',
    timeToFirstDollar: '2 Weeks',
    tools: ['Midjourney v6', 'Upscayl 4x', 'Adobe Stock Contributor', 'Freepik'],
    steps: [
      'Generate high-demand commercial stock imagery: diverse corporate teams, clean medical labs, abstract 3D textures.',
      'Upscale images to 8K resolution with crisp detail using AI upscalers.',
      'Upload 1,000+ categorized assets with detailed metadata tags to Adobe Stock, Shutterstock, and Freepik.',
      'Earn continuous monthly royalties on every download.'
    ]
  },
  {
    id: 'vec_9_5',
    code: '9.5',
    title: 'Direct-Response Copywriting for E-Commerce',
    category: 'content_creation',
    revenueString: '$2,000 per sales page project',
    estimatedMonthlyRevenue: 4000,
    costString: '$50 (research tools)',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'High',
    timeToFirstDollar: '3-5 Days',
    tools: ['Claude 3.5 Sonnet', 'Foreplay.co Ad Spy', 'Figma', 'ConvertKit'],
    steps: [
      'Analyze winning direct response sales letters and VSLs (Video Sales Letters) in competitive health/fitness niches.',
      'Synthesize persuasive long-form landing pages, advertorials, and email sequences with psychological triggers.',
      'Charge $1,500-$3,000 flat project fee + 2% rev-share bonuses on front-end funnel revenue.'
    ]
  },
  {
    id: 'vec_9_6',
    code: '9.6',
    title: 'Executive Book Ghostwriting (AI-Assisted)',
    category: 'content_creation',
    revenueString: '$2,000 to $5,000 per book',
    estimatedMonthlyRevenue: 3500,
    costString: '$50',
    upfrontCost: 50,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'Medium',
    timeToFirstDollar: '2-3 Weeks',
    tools: ['Claude 4 (200k Context)', 'Grammarly Pro', 'Scrivener', 'Descript'],
    steps: [
      'Interview startup founders and consultants to record raw voice thoughts and personal case studies.',
      'Transcribe and synthesize into structured book chapters with professional narrative pacing.',
      'Deliver complete 150-page manuscripts ready for KDP or traditional publishing submissions.',
      'Charge $3,000-$8,000 per finished manuscript.'
    ]
  },
  {
    id: 'vec_9_7',
    code: '9.7',
    title: 'Executive Social Media Content Curation',
    category: 'content_creation',
    revenueString: '$500/mo to $1,500/mo per client',
    estimatedMonthlyRevenue: 2500,
    costString: '$50 (scheduling tools)',
    upfrontCost: 50,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'High',
    timeToFirstDollar: '1 Week',
    tools: ['Taplio', 'Hypefury', 'Perplexity Pro', 'Canva'],
    steps: [
      'Curate breaking industry research and craft insightful LinkedIn thought-leadership posts for tech executives.',
      'Schedule 5 weekly posts and engage with industry leaders in comments.',
      'Charge $750-$1,500/month per executive on 6-month retainers.'
    ]
  },

  // ==========================================
  // 10. MISCELLANEOUS & PHYSICAL ARBITRAGE
  // ==========================================
  {
    id: 'vec_10_1',
    code: '10.1',
    title: 'Electronics Upcycling & Component Salvage',
    category: 'miscellaneous',
    revenueString: '$1,000/mo to $3,000/mo',
    estimatedMonthlyRevenue: 1500,
    costString: '$200 (soldering & replacement parts)',
    upfrontCost: 200,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'Medium',
    timeToFirstDollar: '3-5 Days',
    tools: ['Soldering Station', 'eBay Electronics', 'Local E-Waste Centers', 'iFixit Guides'],
    steps: [
      'Collect discarded laptops, audio receivers, gaming consoles, and broken LCD monitors from e-waste drops.',
      'Diagnose blown capacitors or replace cheap battery/screen modules using iFixit repair guides.',
      'Resell fully restored units on eBay with warranty guarantees.',
      'Extract and scrap high-grade gold/copper connectors from unrepairable circuit boards.'
    ]
  },
  {
    id: 'vec_10_2',
    code: '10.2',
    title: 'Residential Solar Panel Cleaning Service',
    category: 'miscellaneous',
    revenueString: '$800/mo to $2,500/mo',
    estimatedMonthlyRevenue: 1800,
    costString: '$100 (telescopic brush & deionized water)',
    upfrontCost: 100,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'High',
    timeToFirstDollar: '24-48 Hours',
    tools: ['Telescopic Water Pole', 'Deionizing Filter', 'Nextdoor Local Marketing', 'Square Invoicing'],
    steps: [
      'Market to residential solar owners whose panel efficiency drops 15%-25% due to dust and pollen accumulation.',
      'Perform gentle deionized pure-water cleanings with extendable ground poles (no roof ladder danger required).',
      'Charge $150-$250 per residential system and sign quarterly recurring maintenance contracts.'
    ]
  },
  {
    id: 'vec_10_3',
    code: '10.3',
    title: 'Same-Day Junk Removal & Salvage Hauling',
    category: 'miscellaneous',
    revenueString: '$2,000/mo to $5,000/mo',
    estimatedMonthlyRevenue: 3000,
    costString: '$300 (truck rental / fuel)',
    upfrontCost: 300,
    riskScore: 3,
    riskLevel: getRiskLevel(3),
    scalability: 'Medium',
    timeToFirstDollar: '24 Hours',
    tools: ['Pickup Truck / U-Haul', 'Work Gloves', 'Nextdoor App', 'Local Scrap Yard'],
    steps: [
      'Advertise same-day estate cleanouts, garage clearings, and appliance removals on Nextdoor and Craigslist.',
      'Charge $150-$450 per truckload haul fee.',
      'Sort reusable furniture and working electronics to flip on Facebook Marketplace for secondary cash profit.'
    ]
  },
  {
    id: 'vec_10_4',
    code: '10.4',
    title: 'Waterless Eco Mobile Car Washing (Corporate Lots)',
    category: 'miscellaneous',
    revenueString: '$800/mo to $2,000/mo',
    estimatedMonthlyRevenue: 1400,
    costString: '$100 (eco polymers & microfibers)',
    upfrontCost: 100,
    riskScore: 2,
    riskLevel: getRiskLevel(2),
    scalability: 'High',
    timeToFirstDollar: '48 Hours',
    tools: ['Optimum No Rinse (ONR)', 'Sprayer Bottles', 'Fluffy Microfibers', 'Square POS'],
    steps: [
      'Partner with corporate office parks and co-working spaces to wash employees’ cars while they work inside.',
      'Use high-lubricity waterless polymer spray washes that leave zero ground runoff or messy water puddles.',
      'Clean 6-10 cars in a single afternoon at $35-$50 per vehicle.'
    ]
  },
  {
    id: 'vec_10_5',
    code: '10.5',
    title: 'Ethical Specialty Dog Breeding & Welfare',
    category: 'miscellaneous',
    revenueString: '$2,000 per litter ($1,500/mo avg)',
    estimatedMonthlyRevenue: 1500,
    costString: '$500 (vet health tests, genetic screening)',
    upfrontCost: 500,
    riskScore: 5,
    riskLevel: getRiskLevel(5),
    scalability: 'Low',
    timeToFirstDollar: '3-6 Months',
    tools: ['OFA Health Clearances', 'AKC Registration', 'Good Dog Breeder Platform'],
    steps: [
      'Raise health-tested, genetically screened ethical working/family companion breeds with full OFA certifications.',
      'Place puppies with vetted forever homes with lifetime take-back guarantees.',
      'Maintain rigorous animal welfare and transparent enrichment standards.'
    ]
  },
  {
    id: 'vec_10_6',
    code: '10.6',
    title: 'Urban Beekeeping & Raw Honey Sales',
    category: 'miscellaneous',
    revenueString: '$800/mo seasonal',
    estimatedMonthlyRevenue: 800,
    costString: '$300 (Langstroth hive kit & bees)',
    upfrontCost: 300,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'Medium',
    timeToFirstDollar: '3-4 Months',
    tools: ['Langstroth Hive', 'Centrifugal Extractor', 'Mason Jars', 'Farmers Market Booth'],
    steps: [
      'Establish 2-4 Langstroth bee colonies in backyard or pollinator-friendly rooftops.',
      'Harvest raw, unfiltered local honey and craft artisanal beeswax lip balms and candles.',
      'Sell at local farmers markets and specialty food shops for $18-$25 per premium jar.'
    ]
  },
  {
    id: 'vec_10_7',
    code: '10.7',
    title: 'Crypto Mining with Renewable Solar Power',
    category: 'miscellaneous',
    revenueString: '$500/mo to $1,200/mo',
    estimatedMonthlyRevenue: 800,
    costString: '$2,000 (solar setup + ASIC)',
    upfrontCost: 2000,
    riskScore: 5,
    riskLevel: getRiskLevel(5),
    scalability: 'Medium',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['Off-grid Solar Inverter', 'ASIC / GPU Rig', 'Mining Pool', 'Hardware Wallet'],
    steps: [
      'Pair off-grid solar panels directly with efficient crypto miners to achieve $0.00/kWh marginal electricity costs.',
      'Mine during peak solar generation hours and auto-convert rewards to stablecoins or store long-term.',
      'Dramatically increase mining payback and profitability.'
    ]
  },
  {
    id: 'vec_10_8',
    code: '10.8',
    title: 'Virtual Fractional CFO Service (AI-Powered)',
    category: 'miscellaneous',
    revenueString: '$5,000/mo ($1,500/mo per client)',
    estimatedMonthlyRevenue: 5000,
    costString: '$200 (software stack)',
    upfrontCost: 200,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'High',
    timeToFirstDollar: '1-2 Weeks',
    tools: ['QuickBooks Online', 'Fathom Financial', 'Claude 4 Analysis', 'Loom Video'],
    steps: [
      'Provide monthly cash flow forecasting, unit economics analysis, and tax strategy to growing SMBs ($500k-$5M revenue).',
      'Generate automated executive financial visual dashboards with Fathom and LLM variance commentary.',
      'Deliver a monthly 15-minute Loom video walking the CEO through key levers.',
      'Retain 3-5 clients at $1,250-$2,000/month.'
    ]
  },
  {
    id: 'vec_10_9',
    code: '10.9',
    title: 'Online Reputation & Digital Asset Management',
    category: 'miscellaneous',
    revenueString: '$1,000/mo per client ($3,000/mo)',
    estimatedMonthlyRevenue: 3000,
    costString: '$100 (monitoring tools)',
    upfrontCost: 100,
    riskScore: 4,
    riskLevel: getRiskLevel(4),
    scalability: 'High',
    timeToFirstDollar: '1 Week',
    tools: ['Brand24', 'Google Alerts', 'Schema Markup', 'Medium / Substack Outlets'],
    steps: [
      'Monitor brand and executive search queries for negative reviews or defamatory mentions using Brand24.',
      'Create high-authority positive media assets (interviews, podcasts, Wiki entries, verified profiles) to rank in top Google SERP spots.',
      'Charge $1,000-$2,500/month recurring retainers to protect executive and corporate reputations.'
    ]
  },
  {
    id: 'vec_10_10',
    code: '10.10',
    title: 'Resume & LinkedIn Profile Executive Revamp',
    category: 'miscellaneous',
    revenueString: '$500 per client ($2,500/mo)',
    estimatedMonthlyRevenue: 2500,
    costString: '$20 (AI credits)',
    upfrontCost: 20,
    riskScore: 1,
    riskLevel: getRiskLevel(1),
    scalability: 'Medium',
    timeToFirstDollar: '24 Hours',
    tools: ['Claude 3.5 Sonnet', 'Canva Executive Templates', 'LinkedIn Creator Mode'],
    steps: [
      'Perform comprehensive audit of client resume, portfolio, and LinkedIn algorithm visibility.',
      'Rewrite all experience bullets using quantifiable impact metrics and industry keywords.',
      'Format in clean, modern executive typography.',
      'Charge $350-$750 per complete career transformation package.'
    ]
  }
];

export const PRESET_PORTFOLIOS = [
  {
    id: 'benchmark_2026',
    name: '2026 Recommended Benchmark Portfolio',
    description: 'The exact diversified $9,700/mo recommended vector portfolio from the 2026 Version 5.0 guide.',
    targetProfile: 'Balanced Diversification ($1k initial capital, min risk, max scale)',
    vectorIds: [
      'vec_1_1',  // AI Content Arbitrage ($1,000, Risk 2, Cost $50)
      'vec_1_5',  // Crypto Airdrop Farming ($1,000, Risk 3, Cost $0)
      'vec_1_10', // Dropshipping AI ($1,500, Risk 5, Cost $200)
      'vec_2_5',  // AI Chatbot Service ($1,000, Risk 2, Cost $100)
      'vec_3_1',  // Amazon FBA Arbitrage ($2,000, Risk 6, Cost $500)
      'vec_4_3',  // Lead Generation Data ($800, Risk 3, Cost $100)
      'vec_9_1',  // YouTube Automation ($1,000, Risk 2, Cost $50)
      'vec_6_1',  // Print on Demand ($600, Risk 3, Cost $0)
      'vec_4_2',  // Data Labeling ($500, Risk 1, Cost $50)
      'vec_5_1',  // Crypto Yield Farming ($300, Risk 4, Cost $0)
    ],
    benchmarkStats: {
      totalRevenue: 9700,
      totalCost: 1050,
      avgRisk: 2.8,
    }
  },
  {
    id: 'zero_capital_bootstrap',
    name: 'Zero-Capital Bootstrap Stack',
    description: 'Maximum sweat-equity vectors requiring <$150 upfront capital with high cash conversion speed.',
    targetProfile: 'Bootstrappers & Beginners with $0 - $150 starting capital',
    vectorIds: [
      'vec_1_6', // Digital Product PLR ($50)
      'vec_1_7', // POD Arbitrage ($0)
      'vec_2_8', // AI Resume Writing ($20)
      'vec_2_10',// AI Voiceover ($50)
      'vec_6_5', // Amazon KDP ($50)
      'vec_7_1', // AI Freelance Agency ($0)
      'vec_9_3', // Podcast Show Notes ($50)
    ]
  },
  {
    id: 'ai_b2b_agency',
    name: 'Pure AI Automation & B2B Agency Stack',
    description: 'High-ticket monthly software retainers and autonomous AI pipelines for business clients.',
    targetProfile: 'Tech-savvy operators looking for $5k-$15k/mo recurring retainers',
    vectorIds: [
      'vec_2_1', // Voice Agents ($4k)
      'vec_2_2', // B2B Lead Gen ($3k)
      'vec_2_5', // AI Chatbots ($2k)
      'vec_8_1', // Model Fine-Tuning ($5k)
      'vec_8_7', // RPA Consulting ($5k)
    ]
  },
  {
    id: 'defi_passive_yield',
    name: 'DeFi & On-Chain Yield Compounding',
    description: 'Passive capital efficiency, airdrop multi-wallet harvesting, and low-volatility yield loops.',
    targetProfile: 'Crypto-native capital compounders and protocol farmers',
    vectorIds: [
      'vec_5_1', // Stablecoin Yield ($1k)
      'vec_5_4', // Proof of Stake ($500)
      'vec_5_5', // Card Cashback ($500)
      'vec_5_6', // Referral Farming ($1k)
      'vec_1_5', // Airdrop Farming ($2k)
    ]
  },
  {
    id: 'physical_irl_arbitrage',
    name: 'Physical & Local IRL Arbitrage',
    description: 'Tangible, recession-proof local cash flows with high immediate cash margins.',
    targetProfile: 'Hands-on operators wanting immediate cash turnover in their local area',
    vectorIds: [
      'vec_3_2',  // Liquidation Pallets ($2k)
      'vec_6_3',  // eBay Tech Flipping ($2k)
      'vec_7_8',  // Mobile Detailing ($2.5k)
      'vec_10_2', // Solar Panel Cleaning ($1.8k)
      'vec_10_3', // Junk Removal ($3k)
    ]
  }
];
