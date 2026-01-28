
import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Target, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  TrendingUp, 
  ChevronRight, 
  Briefcase, 
  Search, 
  Smartphone,
  MessageSquare, 
  ShieldCheck,
  Zap,
  Clock,
  Award,
  CreditCard,
  Flag,
  Activity,
  Tag,
  SearchCode,
  ExternalLink,
  Monitor,
  Layout,
  Table as TableIcon,
  Phone,
  Menu,
  X,
  Map,
  CalendarDays,
  FlaskConical,
  Beaker,
  Layers,
  Megaphone,
  Factory,
  Database,
  Globe2,
  Cpu,
  BarChart3,
  SearchCheck,
  Code2,
  Server,
  ZapIcon
} from 'lucide-react';

// --- Types ---
interface PriceTier {
  title: string;
  investment: string;
  duration: string;
  keywords: string;
  adsCredit: string;
  featured?: boolean;
  coverage: string;
  seoFeatures: string[];
}

interface RoadmapStep {
  month: string;
  title: string;
  description: string;
  icon: React.ElementType;
  items: string[];
}

interface KeywordGroup {
  region: string;
  code: string;
  count: string;
  samples: string[];
}

// --- Components ---

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Strategy', href: '#objectives' },
    { name: 'SEO Features', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Keywords', href: '#keywords' },
    { name: 'Export Plans', href: '#pricing' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-white shadow-xl py-3' : 'bg-white/10 backdrop-blur-md py-5 border-b border-white/20'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="bg-orange-600 p-2 rounded-xl shadow-lg shadow-orange-600/20">
              <FlaskConical className="text-white w-6 h-6" />
            </div>
            <div>
              <span className={`font-black text-xl tracking-tight uppercase ${scrolled || mobileMenuOpen ? 'text-slate-900' : 'text-white'}`}>Online Promotion House</span>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${scrolled ? 'text-slate-600 hover:text-orange-600' : 'text-white/80 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <button 
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="text-slate-900 w-7 h-7" />
            ) : (
              <Menu className={`${scrolled ? 'text-slate-900' : 'text-white'} w-7 h-7`} />
            )}
          </button>
        </div>

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100 py-8 bg-white' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-6 items-center px-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-lg font-black text-slate-800 uppercase tracking-widest hover:text-orange-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

const SectionHeader: React.FC<{ title: string; subtitle: string; light?: boolean }> = ({ title, subtitle, light }) => (
  <div className="text-center mb-16">
    <h2 className={`text-3xl md:text-5xl font-black mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>{title}</h2>
    <div className="w-20 h-1.5 bg-orange-600 mx-auto rounded-full mb-6"></div>
    <p className={`max-w-3xl mx-auto text-lg md:text-xl font-medium ${light ? 'text-white/80' : 'text-slate-500'}`}>{subtitle}</p>
  </div>
);

const App: React.FC = () => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreSeoFeatures = [
    { title: "Technical SEO Audit", icon: SearchCheck, desc: "Comprehensive analysis of BTC Pharm's technical infrastructure for US/UK crawlers." },
    { title: "Meta Data Optimization", icon: Code2, desc: "Precision-crafted titles and descriptions targeting technical chemical buyers." },
    { title: "Schema Markup", icon: Server, desc: "Implementing JSON-LD for rich snippets and high-authority search appearance." },
    { title: "Site Speed Optimization", icon: ZapIcon, desc: "Core Web Vitals enhancement to ensure low bounce rates for Western markets." },
    { title: "On-Page Content Strategy", icon: Layout, desc: "Keyword-rich landing pages for specialized products like Piperidine ethanol." },
    { title: "High-Authority Backlinking", icon: ExternalLink, desc: "Generating technical backlinks from industrial and chemical directories." }
  ];

  const pricingTiers: PriceTier[] = [
    { 
      title: "USA & UK Starter Export Plan", 
      investment: "₹7,50,000", 
      duration: "1 Year Validity", 
      keywords: "50 Organic Promotion Keywords (USA/UK Focus)", 
      adsCredit: "Includes ₹3,00,000 Google Ads Credit",
      coverage: "Targeted Market Entry (US + UK)",
      seoFeatures: ["Basic Technical SEO Audit", "Targeted Meta Tagging", "Sitemap Optimization", "Keyword Mapping (50)", "Google Ads Management"]
    },
    { 
      title: "Global Dominance Plan (Responsive)", 
      investment: "₹10,00,000", 
      duration: "1 Year Validity", 
      keywords: "100 Organic Promotion Keywords (USA/UK Focus)", 
      adsCredit: "Includes ₹3,00,000 Google Ads Credit",
      featured: true, 
      coverage: "Maximum Market Authority (US + UK)",
      seoFeatures: ["Advanced Technical SEO Suite", "Full Schema Integration", "Competitor Gap SEO Analysis", "Keyword Mapping (100)", "Dedicated Account Management", "Monthly ROI Reporting"]
    },
  ];

  const productKeywords: KeywordGroup[] = [
    {
      region: "United Kingdom (UK)",
      code: "GB",
      count: "Google.co.uk",
      samples: [
        "Piperidine ethanol supplier UK",
        "Piperidine ethanol exporter UK",
        "3-Fluoropiperidin-4-one hydrochloride exporter UK",
        "4,4-Difluoropiperidine hydrochloride bulk supplier",
        "1-Piperidinamine hydrochloride exporter London",
        "Ethyl 3-oxo-1-phenylmethyl-4-piperidinecarboxylate supplier",
        "tert-Butyl 2,4-dioxopiperidine-1-carboxylate exporter UK",
        "Industrial chemical exporter London",
        "Pharma intermediate bulk supplier UK",
        "Specialty chemical exporter Manchester"
      ]
    },
    {
      region: "United States (USA)",
      code: "US",
      count: "Google.com",
      samples: [
        "Piperidine ethanol supplier USA",
        "Piperidine ethanol exporter USA",
        "1-Benzyl-4,4-difluoropiperidine exporter USA",
        "2-(4,4-Difluoropiperidin-1-yl)acetonitrile supplier USA",
        "4-Fluoropiperidine bulk exporter New Jersey",
        "tert-Butyl 4-aminomethyl piperidine-1-carboxylate supplier",
        "Boc-3-dimethylamino-methylene-4-oxopiperidine exporter",
        "Fine chemical exporter California",
        "Pharma chemical supplier New York",
        "Technical intermediates exporter USA"
      ]
    },
    {
      region: "Global B2B (USA/UK Targeting)",
      code: "INT",
      count: "Direct Export Inquiries",
      samples: [
        "Piperidine ethanol bulk export price",
        "3-Fluoropiperidin-4-one bulk exporter USA",
        "BTC Pharm product exporter UK",
        "4,4-Difluoropiperidine industrial supplier",
        "High purity pharma intermediates exporter",
        "Bulk chemical wholesale supplier",
        "Certified chemical exporter to USA",
        "Technical intermediate supplier",
        "Industrial chemical exporter UK",
        "Direct factory price intermediates supplier"
      ]
    }
  ];

  const roadmap: RoadmapStep[] = [
    {
      month: "Month 1",
      title: "Market Analysis",
      description: "Mapping search intent for BTC Pharm products in the USA and UK industrial landscape.",
      icon: Search,
      items: ["US/UK Technical Keyword Selection", "On-Page SEO Audit", "Mobile Performance Fixes", "Competitor Analysis"]
    },
    {
      month: "Month 2 - 3",
      title: "Traffic Activation",
      description: "Deploying Google Search Ads and Initial SEO content for priority product lines.",
      icon: Megaphone,
      items: ["USA/UK Targeted Ad Campaigns", "Technical Meta Implementation", "Landing Page Optimization", "Rich Snippet Setup"]
    },
    {
      month: "Month 4 - 6",
      title: "Ranking Authority",
      description: "Scaling organic visibility for 50-100 technical keywords across Western search engines.",
      icon: Globe2,
      items: ["Backlink Campaign Strategy", "Organic Rank Scaling", "B2B Directory Visibility", "Technical Trust Building"]
    },
    {
      month: "Month 6+",
      title: "Export Scaling",
      description: "Optimizing the lead funnel to maximize direct inquiries from USA and UK procurement officers.",
      icon: TrendingUp,
      items: ["Lead Quality Optimization", "Performance Review", "Market Expansion Strategy", "Export Lead Management"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center orange-gradient overflow-hidden pt-20">
        <div className="absolute inset-0">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-black/5 rounded-full blur-[100px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2.5 rounded-full mb-8 backdrop-blur-md border border-white/30">
              <span className="w-2.5 h-2.5 bg-white rounded-full animate-pulse shadow-glow"></span>
              <span className="text-xs font-black uppercase tracking-[0.2em]">USA & UK Export Promotion Plan</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight">
              Export <br />
              <span className="text-orange-200">BTC Pharm Global</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 leading-relaxed max-w-2xl font-medium">
              We position your industrial products like <strong>Piperidine ethanol</strong> at the top of Google results for the <strong>USA and UK</strong>. Dominating 50 to 100 organic keywords.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#pricing" onClick={(e) => handleLinkClick(e as any, '#pricing')} className="bg-white text-orange-600 hover:bg-orange-50 px-10 py-5 rounded-2xl font-black text-lg transition-all shadow-2xl flex items-center gap-3 group">
                View Export Plans <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#features" onClick={(e) => handleLinkClick(e as any, '#features')} className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-black text-lg transition-all flex items-center gap-3">
                SEO Technical Features
              </a>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="absolute -inset-10 bg-black/10 rounded-[4rem] blur-[60px] rotate-6"></div>
            <div className="relative bg-white/5 backdrop-blur-xl rounded-[3rem] p-10 border border-white/20 shadow-inner overflow-hidden">
              <div className="flex items-center gap-3 mb-6 bg-white/10 p-4 rounded-2xl border border-white/10">
                <div className="w-3.5 h-3.5 rounded-full bg-red-500 shadow-lg"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-yellow-500 shadow-lg"></div>
                <div className="w-3.5 h-3.5 rounded-full bg-green-500 shadow-lg"></div>
                <div className="flex-1 ml-4 bg-white/20 px-5 py-2 rounded-xl text-[11px] font-mono text-white/70 flex items-center gap-2 border border-white/10">
                  <Search size={14} /> google.com/search?q=Piperidine+ethanol+supplier+USA
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1532187875605-18e88fe84165?auto=format&fit=crop&q=80&w=1000" 
                  alt="Industrial Chemical Lab" 
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Features Section */}
      <section className="py-32 bg-slate-50 scroll-mt-24" id="features">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Core SEO Implementation" 
            subtitle="Our technical SEO suite is designed to make BTC Pharm visible to bulk industrial buyers in the USA and UK."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreSeoFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 group">
                <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-colors duration-300">
                  <feat.icon className="text-orange-600 group-hover:text-white transition-colors" size={32} />
                </div>
                <h4 className="text-2xl font-black text-slate-900 mb-3">{feat.title}</h4>
                <p className="text-slate-500 font-medium leading-relaxed text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-32 bg-white scroll-mt-24" id="roadmap">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="USA & UK Export Roadmap" 
            subtitle="A structured 1 Year journey to capture high-value pharma intermediate inquiries."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {roadmap.map((step, idx) => (
              <div key={idx} className="bg-slate-50 p-10 rounded-[3rem] hover:bg-orange-50 border border-slate-100 transition-all group shadow-sm flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="bg-orange-600 p-5 rounded-3xl shadow-xl shadow-orange-600/20 text-white">
                    <step.icon size={32} />
                  </div>
                  <span className="text-orange-600 font-black text-xs uppercase tracking-[0.2em] pt-2">{step.month}</span>
                </div>
                <h4 className="text-2xl font-black mb-4 text-slate-900">{step.title}</h4>
                <p className="text-slate-500 text-sm mb-8 leading-relaxed font-medium">{step.description}</p>
                <div className="mt-auto">
                  <ul className="space-y-4">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-700 font-bold">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Proof Section */}
      <section className="py-32 bg-slate-50 scroll-mt-24" id="proof">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Search Dominance Preview" 
            subtitle="Seeing how we rank BTC Pharm products across specialized Western industrial search results."
          />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group">
              <div className="absolute -inset-10 bg-orange-600/5 rounded-[4rem] blur-[80px] opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative bg-white rounded-[3rem] shadow-2xl border border-slate-200 overflow-hidden transform group-hover:-translate-y-4 transition-all duration-500">
                <div className="bg-slate-100 px-8 py-5 border-b border-slate-200 flex items-center gap-5">
                   <div className="flex-1 bg-white rounded-xl px-5 py-2 text-xs text-slate-400 border border-slate-200 flex items-center justify-between font-mono">
                     <span>https://www.google.co.uk/search?q=Piperidine+ethanol+bulk+supply</span>
                     <ExternalLink size={14} />
                   </div>
                </div>
                <div className="p-10 space-y-10">
                  <div className="space-y-4">
                    <div className="text-xs text-orange-600 flex items-center gap-2 uppercase font-black tracking-[0.2em]">
                      <Megaphone size={14} /> Google Ads (USA & UK Target)
                    </div>
                    <div className="text-blue-700 text-2xl font-bold hover:underline cursor-pointer tracking-tight">
                      Ad · High Purity Piperidine ethanol Supplier - BTC Pharm Global
                    </div>
                    <div className="text-green-800 text-sm font-medium">https://www.btcpharm.com › products › technical</div>
                    <div className="text-slate-600 text-base leading-relaxed max-w-lg font-medium">
                      Immediate export supply for high purity Piperidine ethanol. Fast shipping to UK/USA markets. Industrial and Lab grades. Get an instant quote!
                    </div>
                    <div className="flex gap-6 pt-4">
                       <span className="bg-orange-100 text-orange-700 text-xs px-4 py-2 rounded-xl font-black uppercase tracking-widest border border-orange-200">AD POSITION: #1</span>
                       <span className="bg-blue-50 text-blue-700 text-xs px-4 py-2 rounded-xl font-black uppercase tracking-widest border border-blue-100">Market: US/UK</span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 right-6 bg-slate-900 text-white p-5 rounded-2xl shadow-2xl flex items-center gap-3 group-hover:scale-110 transition-transform">
                   <Monitor size={28} className="text-orange-500" />
                   <span className="text-xs font-black uppercase tracking-widest">Live Preview</span>
                </div>
              </div>
            </div>

            <div>
              <div className="inline-block bg-orange-100 text-orange-700 px-6 py-2 rounded-full text-sm font-black uppercase tracking-[0.2em] mb-8">Export Dominance</div>
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">USA & UK Market Authority</h3>
              <p className="text-slate-500 text-xl mb-12 leading-relaxed font-medium">
                We bridge the gap between your manufacturing facility and procurement officers in London, New York, and beyond.
              </p>
              
              <div className="space-y-6">
                {[
                  { market: "Google Ads (USA/UK)", goal: "₹3 Lac included credit", status: "Immediate Results", icon: Target },
                  { market: "Technical SEO Suite", goal: "On-page & Backend optimization", status: "Built for Chemical buyers", icon: SearchCode },
                  { market: "Keyword Dominance", goal: "Up to 100 Organic Keywords", status: "Keywords according to the Selected SEO Plan", icon: FlaskConical }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 bg-white p-8 rounded-[2rem] border border-slate-100 hover:border-orange-600 transition-all shadow-sm hover:shadow-xl group">
                    <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-300">
                      <item.icon size={28} />
                    </div>
                    <div>
                      <div className="font-black text-slate-900 text-lg tracking-tight mb-1">{item.market}</div>
                      <div className="text-sm text-slate-500 font-bold">{item.goal} — <span className="text-orange-600 uppercase tracking-widest text-[10px] ml-2">{item.status}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keywords Sample Section */}
      <section className="py-32 bg-white scroll-mt-24" id="keywords">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="Strategic Export Keywords" 
            subtitle="Precision-tuned target keywords based on your current product catalog and search demand in the USA and UK."
          />
          
          <div className="grid lg:grid-cols-3 gap-10">
            {productKeywords.map((group, idx) => (
              <div key={idx} className="bg-[#f8fafc] rounded-[3rem] p-10 shadow-sm border border-slate-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                <div className="flex items-center gap-6 mb-10">
                  <div className="text-5xl font-black text-slate-900/10 select-none group-hover:text-orange-600/20 transition-colors">
                    {group.code}
                  </div>
                  <div>
                    <h4 className="text-2xl font-black text-slate-900 tracking-tight">{group.region}</h4>
                    <div className="flex items-center gap-1.5 text-orange-600 font-black text-[10px] uppercase tracking-[0.1em] mt-1">
                      <Target size={12} className="text-orange-600" /> ON {group.count}
                    </div>
                  </div>
                </div>

                <div className="bg-[#fff9f5] rounded-3xl p-8 mb-10 border border-orange-100 relative group-hover:border-orange-300 transition-all">
                  <div className="text-3xl font-black text-orange-600 mb-2 leading-none">Export Search</div>
                  <p className="text-[11px] text-orange-600/80 italic font-medium uppercase">Direct B2B Industrial Queries.</p>
                </div>
                
                <div className="flex flex-col gap-3">
                  {group.samples.map((keyword, i) => (
                    <div key={i} className="flex items-center gap-3 text-slate-600 text-sm font-bold group/item hover:text-orange-600 transition-colors">
                      <div className="w-1.5 h-1.5 bg-orange-500/30 rounded-full group-hover/item:bg-orange-500 transition-all"></div>
                      {keyword}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-slate-50 scroll-mt-24" id="pricing">
        <div className="container mx-auto px-6">
          <SectionHeader 
            title="USA & UK Export Plans" 
            subtitle="Focused investment levels to capture the Western market for BTC Pharm."
          />
          
          <div className="grid lg:grid-cols-2 gap-10 mb-24 max-w-5xl mx-auto">
            {pricingTiers.map((tier, idx) => (
              <div 
                key={idx} 
                className={`relative bg-white rounded-[3.5rem] p-12 transition-all duration-500 flex flex-col h-full overflow-hidden ${tier.featured ? 'ring-[6px] ring-orange-600 shadow-2xl scale-105 z-10' : 'shadow-xl border border-slate-100 hover:-translate-y-4'}`}
              >
                {tier.featured && (
                  <div className="absolute top-0 right-0 bg-orange-600 text-white text-[10px] font-black px-8 py-3 rounded-bl-[2rem] uppercase tracking-[0.3em]">
                    Maximum Reach
                  </div>
                )}
                <div className="mb-10">
                  <h4 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">{tier.title}</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black text-orange-600">{tier.investment}</span>
                    <span className="text-slate-500 font-black text-xs uppercase tracking-widest">+ GST</span>
                  </div>
                  <div className="mt-4 flex flex-col gap-2">
                    <div className="flex items-center gap-2 text-orange-500 font-black text-xs uppercase tracking-widest">
                      <TrendingUp size={16} /> {tier.keywords}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 font-black text-xs uppercase tracking-widest">
                      <Megaphone size={16} /> {tier.adsCredit}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                  <div className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <ShieldCheck size={14} className="text-orange-500" /> Included SEO Features
                  </div>
                  <div className="grid grid-cols-1 gap-3">
                    {tier.seoFeatures.map((feat, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-slate-700 font-bold">
                        <CheckCircle2 size={14} className="text-orange-500 flex-shrink-0" />
                        {feat}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4 mb-12 flex-grow">
                   <div className="flex items-center gap-4 text-sm text-slate-700 font-bold">
                    <Globe size={18} className="text-orange-500 flex-shrink-0" />
                    Strict USA & UK Geofencing
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-700 font-bold">
                    <BarChart3 size={18} className="text-orange-500 flex-shrink-0" />
                    Monthly Export Lead Reports
                  </div>
                  <div className="flex items-center gap-4 text-sm text-slate-700 font-bold">
                    <Clock size={18} className="text-orange-500 flex-shrink-0" />
                    1 Year Dedicated Support
                  </div>
                </div>
                <button className={`w-full py-5 rounded-2xl font-black text-lg uppercase tracking-widest transition-all ${tier.featured ? 'bg-orange-600 text-white shadow-2xl shadow-orange-600/40 hover:scale-105' : 'bg-slate-900 text-white hover:bg-black'}`}>
                  Initiate Strategy
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-32 px-6">
        <div className="container mx-auto">
          <div className="bg-white rounded-[2rem] overflow-hidden shadow-2xl relative">
            <div className="bg-[#f04a40] text-white py-4 px-8 text-center">
              <p className="text-xs md:text-sm font-black uppercase tracking-[0.1em]">
                Authorized USA & UK Export Growth Strategy for BTC Pharm
              </p>
            </div>

            <div className="p-10 md:p-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
              <div className="space-y-12">
                <div className="flex items-center gap-4">
                  <div className="bg-slate-900 p-3 rounded-xl">
                    <FlaskConical className="text-white w-8 h-8" />
                  </div>
                  <div>
                    <h2 className="text-slate-900 font-black text-2xl uppercase tracking-tighter leading-none">Online Promotion House</h2>
                    <p className="text-orange-600 text-[10px] font-black uppercase tracking-[0.4em] mt-1">Export Growth Partners</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <span className="text-slate-600 font-bold text-lg">kitty@onlinepromotionhouse.com</span>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center text-slate-400 group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Phone size={20} />
                    </div>
                    <span className="text-slate-600 font-bold text-lg">+91 6262914149</span>
                  </div>
                </div>
              </div>

              <div className="text-left md:text-right border-t md:border-t-0 md:border-l border-slate-100 pt-10 md:pt-0 md:pl-20">
                <h3 className="text-slate-900 font-light italic text-6xl md:text-8xl mb-4" style={{ fontFamily: 'serif' }}>
                  Kitty Bagga
                </h3>
                <div className="h-0.5 bg-slate-200 w-full mb-4"></div>
                <p className="text-slate-400 text-xs font-black uppercase tracking-[0.3em]">Authorized Representative</p>
              </div>
            </div>

            <div className="px-10 md:px-20 py-8 bg-slate-50 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
                © 2026 Online Promotion House - All Rights Reserved
              </div>
              <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
                <span className="text-slate-300">Confidential Proposal</span>
                <span className="text-slate-400">BTC Pharm USA & UK Strategy</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
