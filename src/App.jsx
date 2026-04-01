import React, { useState, useEffect } from 'react'
import {
  ChevronDown,
  Menu,
  X,
  Database,
  Cpu,
  Cloud,
  TrendingUp,
  CheckCircle,
  Monitor,
  Zap,
  Globe,
  Settings,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Linkedin,
  Shield,
  Layers,
  BarChart3,
  Server,
  Activity,
  Workflow,
  Sparkles,
  Rocket,
  Boxes,
  ZapIcon,
  Factory,
  ShoppingCart,
  Anchor,
  Droplets,
  Heart,
  Truck,
  Leaf,
  Container,
  Stethoscope,
  Bitcoin,
  Search,
  Check,
  CreditCard,
  Target,
  FlaskConical,
  RefreshCcw,
  Hammer,
  ChevronRight,
  Circle,
  Users,
  ArrowUp
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Routes, Route, Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { title } from 'framer-motion/client'

function cn(...inputs) {
  return twMerge(clsx(inputs))
}

const Navbar = ({ onOpenModal }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeMenu, setActiveMenu] = useState(null)
  const [activeTab, setActiveTab] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesData = [
    {
      title: "Data & Analytics",
      content: [
        { title: "Snowflake & Databricks Experts", desc: "We design and optimize high-performance Snowflake and Databricks platforms to accelerate analytics and enable AI-ready data foundations." },
        { title: "Modern Data Architecture", desc: "Build scalable, cloud-native data architectures that unify sources, improve governance, and support real-time decision making." },
        { title: "Advanced AI Analytics", desc: "Turn data into intelligence with predictive analytics, machine learning, and advanced BI that drives measurable business outcomes." },
        { title: "Predictive Maintenance", desc: "Reduce downtime and extend asset life with AI-driven maintenance strategies." }
      ]
    },
    { title: "Artificial Intelligence (AI) / Machine Learning (ML)", content: [{ title: "Generative AI", desc: "Harness LLMs for automation." }, { title: "Custom ML Models", desc: "Tailored algorithms for specific needs." }, { title: "Custom AI Development", desc: "Smart conversational interfaces that leverage AI to deliver human-like interactions, automate customer engagement, and provide real-time support across multiple platforms, improving user experience and operational efficiency. " }, { title: "Advanced Solutions", desc: "Tailored machine learning models designed to address specific business challenges, enabling intelligent automation, accurate predictions, and scalable solutions aligned with your unique goals and data." }] },
    { title: "Business Intelligence", content: [{ title: "Visual Dashboards", desc: "Insights that matter." }, { title: "Strategic BI", desc: "Data-driven leadership solutions." }, { title: "Data Visualization & Reporting", desc: "Create interactive dashboards and detailed reports that simplify complex data, enabling stakeholders to quickly understand insights and make informed decisions." }, { title: "Predictive Analytics", desc: "Leverage historical data and advanced algorithms to forecast future trends, identify risks, and optimize decision-making for better business outcomes. " }] },
    { title: "Salesforce", content: [{ title: "CRM Excellence", desc: "Sales cloud and automation." }, { title: "Salesforce Analytics", desc: "Unlock sales insights." }, { title: "CRM Implementation & Customization", desc: "Design and implement tailored Salesforce solutions that align with business processes, improving customer management and operational efficiency." }, { title: "Sales & Service Automation", desc: "Automate workflows, lead management, and customer support processes to enhance productivity, reduce manual effort, and improve customer experience." }] },
    {
      title: "Application Modernization",
      content: [
        { title: "Cloud Native App Development", desc: "Build scalable, high-performance applications designed for the cloud." },
        { title: "Monolith to Microservices", desc: "Transform complex legacy systems into agile, independent services." },
        { title: "CI/CD & DevSecOps", desc: "Automate delivery pipelines with integrated security at every step." }
      ]
    },
    {
      title: "Business Apps",
      content: [
        { title: "Power Apps & Low-Code", desc: "Rapidly build custom apps to solve business challenges." },
        { title: "Microsoft Teams Integration", desc: "Boost collaboration with apps directly inside Teams." },
        { title: "Power Automate", desc: "Streamline workflows and eliminate repetitive manual tasks." }
      ]
    },
    {
      title: "Enterprise Integration",
      content: [
        { title: "API Management & Strategy", desc: "Connect your ecosystem with robust, secure, and scalable high-performance APIs." },
        { title: "Real-Time Connectivity", desc: "Ensure data flows seamlessly across all your enterprise platforms." },
        { title: "Legacy Integration", desc: "Bridge the gap between modern cloud apps and legacy systems." }
      ]
    }
  ]

  const industriesData = [
    { title: "Power, Utilities, & Energies", desc: "AI-powered innovations for intelligent energy management, demand forecasting, and grid efficiency." },
    { title: "Retail & Consumer Packaged Goods", desc: "Personalized experiences and intelligent supply chain management." },
    { title: "Communications, Media, and Entertainment", desc: "Connected media solutions and consumer insights." },
    { title: "Banking, Financial Services, and Insurance", desc: "Secure, data-driven operations for fintech and banking." },
    { title: "Oil & Gas", desc: "Intelligent drilling and operational efficiency." },
    { title: "Manufacturing", desc: "Smart production with AI and IoT." },
    { title: "Healthcare & Life Sciences", desc: "AI-led patient insights." },
    { title: "Sustainability", desc: "Accelerating decarbonization." }
  ]

  const scrollTo = (id) => {
    if (id.includes('#')) {
      const [path, hash] = id.split('#')
      const targetPath = path.startsWith('/') ? path : '/' + path
      if (location.pathname !== targetPath) {
        navigate(targetPath + '#' + hash)
        return
      }
      id = hash
    } else if (location.pathname !== '/') {
      navigate('/#' + id)
      return
    }
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
      setActiveMenu(null)
    }
  }

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '')
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const offset = 80;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = el.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100)
    }
  }, [location])

  return (
    <header className={cn(
      "sticky top-0 left-0 w-full transition-all duration-500 z-[1000]",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-[0px_10px_30px_rgba(0,0,0,0.05)] border-b border-gray-100 py-2" : "bg-white py-4"
    )}>
      <div className="container mx-auto px-6 max-w-[1320px] flex items-center">
        <div className="flex-shrink-0">
          <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="https://datamatrixiq.com/media/cyqpirwk/untitled-design-1-1.png" alt="DataMatrixIQ" className="h-[56px] w-auto" />
          </Link>
        </div>

        <nav className="hidden lg:block ml-16">
          <ul className="flex items-center gap-2 list-none font-nav text-[16px] font-bold text-[#212529]">
            {/* 1. Services - Mega Menu */}
            <li className="relative group" onMouseEnter={() => { setActiveMenu('services'); setActiveTab(0); }} onMouseLeave={() => setActiveMenu(null)}>
              <Link to="/services" className={cn("px-4 py-4 hover:text-[#0c67c4] flex items-center gap-1 transition-colors text-black", (activeMenu === 'services' || location.pathname === '/services') && "text-[#0c67c4]")}>
                Services <ChevronDown size={20} className={cn("transition-transform duration-300", activeMenu === 'services' ? "rotate-180 translate-y-[1px]" : "translate-y-[1px]")} />
              </Link>
              <AnimatePresence>
                {activeMenu === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    className="absolute top-[90%] left-0 md:left-[-20px] w-[1100px] bg-white shadow-[0_10px_60px_rgba(0,0,0,0.1)] rounded-2xl flex p-6 border border-gray-100 z-[1100]"
                  >
                    <div className="w-[400px] shrink-0 bg-[#f3f9ff] rounded-xl p-3 flex flex-col gap-1.5 h-[500px]">
                      {servicesData.map((s, i) => (
                        <button key={i} onMouseEnter={() => setActiveTab(i)} className={cn("w-full text-left px-4 py-3.5 rounded-xl transition-all font-bold text-[14px] relative flex items-center min-h-[64px]", activeTab === i ? "bg-white text-[#0c67c4] shadow-sm" : "text-[#495057] hover:bg-white/50")}>
                          <span className="leading-[1.4] pr-10 block">{s.title}</span>
                          {activeTab === i && <ChevronRight size={14} className="absolute right-4 top-1/2 -translate-y-1/2 shrink-0" />}
                        </button>
                      ))}
                    </div>
                    <div className="flex-grow pl-10 py-6 grid grid-cols-2 gap-x-10 gap-y-8 h-[500px] overflow-y-auto">
                      {servicesData[activeTab].content.map((c, i) => (
                        <div key={i} className="group">
                          <h4 className="font-bold text-[#2d465e] text-[16px] mb-3 transition-colors flex items-center gap-2 font-nunito"><Circle size={6} className="fill-[#0c67c4] text-[#0c67c4]" /> {c.title}</h4>
                          <p className="text-[#212529] text-[13px] leading-relaxed font-roboto">{c.desc}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* 2. Partnerships - Internal anchor */}
            <li className="relative group" onMouseEnter={() => setActiveMenu('partnerships')} onMouseLeave={() => setActiveMenu(null)}>
              <Link to="/about-us#partnership" className={cn("px-4 py-4 hover:text-[#0c67c4] flex items-center gap-1 transition-colors text-black", activeMenu === 'partnerships' && "text-[#0c67c4]")}>
                Partnerships <ChevronDown size={20} className={cn("transition-transform", activeMenu === 'partnerships' && "rotate-180")} />
              </Link>
              <AnimatePresence>
                {activeMenu === 'partnerships' && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-[100%] left-[-150px] w-[850px] bg-white shadow-[0_10px_60px_rgba(0,0,0,0.1)] rounded-2xl flex p-12 border border-gray-100 items-center">
                    <div className="w-[45%] pr-10">
                      <h3 className="text-[#0c67c4] text-[18px] font-bold leading-relaxed">We leverage world-class platforms like AWS, Snowflake, Microsoft, and Salesforce to build reliable and future-ready data ecosystems.</h3>
                    </div>
                    <div className="w-[55%] flex items-center justify-center p-6 bg-[#f3f9ff] rounded-2xl">
                      <img src="https://datamatrixiq.com/img/service-image.png" alt="Partners" className="w-full h-auto object-contain" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* 3. Industries - Dedicated Page */}
            <li className="relative group" onMouseEnter={() => { setActiveMenu('industries'); setActiveTab(0); }} onMouseLeave={() => setActiveMenu(null)}>
              <Link to="/industries" className={cn("px-4 py-4 hover:text-[#0c67c4] flex items-center gap-1 transition-colors text-black", (activeMenu === 'industries' || location.pathname === '/industries') && "text-[#0c67c4]")}>
                Industries <ChevronDown size={20} className={cn("transition-transform", activeMenu === 'industries' && "rotate-180")} />
              </Link>
              <AnimatePresence>
                {activeMenu === 'industries' && (
                  <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 15 }} className="absolute top-[100%] left-[-300px] w-[950px] bg-white shadow-[0_10px_60px_rgba(0,0,0,0.1)] rounded-2xl flex p-8 border border-gray-100">
                    <div className="w-[350px] border-r border-[#dee2e6] flex flex-col gap-1 pr-6">
                      {industriesData.map((ind, i) => (
                        <Link to="/industries" key={i} onMouseEnter={() => setActiveTab(i)} onClick={() => setActiveMenu(null)} className={cn("text-left p-4 rounded-xl transition-all font-bold text-[14px] block", activeTab === i ? "bg-[#e7f1ff] text-[#0c67c4]" : "text-[#495057] hover:bg-[#f3f9ff]")}>
                          {ind.title}
                        </Link>
                      ))}
                    </div>
                    <div className="flex-grow pl-14 py-12">
                      <h3 className="text-[#2d465e] font-bold text-[28px] mb-8 font-nunito">{industriesData[activeTab].title}</h3>
                      <p className="text-[#212529] text-[16px] font-roboto leading-relaxed">{industriesData[activeTab].desc}</p>
                      <Link to="/industries" onClick={() => setActiveMenu(null)} className="mt-8 inline-flex items-center gap-2 text-[#0c67c4] font-bold hover:underline">Explore All Industries <ArrowRight size={16} /></Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            {/* Direct Multi-Page Links */}
            <li><Link to="/about-us" className={cn("px-4 py-4 hover:text-[#0c67c4] transition-colors text-black", location.pathname === '/about-us' && "text-[#0c67c4]")}>About Us</Link></li>
            <li><Link to="/clients" className={cn("px-4 py-4 hover:text-[#0c67c4] transition-colors text-black", location.pathname === '/clients' && "text-[#0c67c4]")}>Clients</Link></li>
            <li><Link to="/core-capabilities" className={cn("px-4 py-4 hover:text-[#0c67c4] transition-colors text-black", location.pathname === '/core-capabilities' && "text-[#0c67c4]")}>Capabilities</Link></li>
          </ul>
        </nav>

        <div className="hidden lg:block ml-auto">
          <Link
            to="/contact-us"
            className="bg-[#0c67c4] text-white px-8 py-2.5 rounded-full font-bold text-[15px] shadow-sm hover:translate-y-[-1px] transition-all hover:shadow-lg active:scale-95 text-center inline-block"
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden ml-auto p-2 text-[#2d465e]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 top-[70px] bg-white z-[900] lg:hidden overflow-y-auto"
          >
            <div className="p-8 flex flex-col gap-6 items-center text-center">
              <Link to="/services" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[#2d465e] font-nunito border-b border-gray-100 pb-4 w-full">Services</Link>
              <Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[#2d465e] font-nunito border-b border-gray-100 pb-4 w-full">About Us</Link>
              <Link to="/industries" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[#2d465e] font-nunito border-b border-gray-100 pb-4 w-full">Industries</Link>
              <Link to="/clients" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[#2d465e] font-nunito border-b border-gray-100 pb-4 w-full">Clients</Link>
              <Link to="/core-capabilities" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-[#2d465e] font-nunito border-b border-gray-100 pb-4 w-full">Capabilities</Link>
              <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="bg-[#0c67c4] text-white py-4 rounded-2xl font-bold text-xl text-center shadow-lg mt-4 w-full">Book a Call</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

const HeroModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="relative bg-white w-full max-w-2xl rounded-[1.5rem] shadow-2xl p-10 z-[2001]">
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-600"><X size={24} /></button>
          <h2 className="text-[24px] font-bold text-[#2d465e] text-center mb-10 font-nunito">Book a Free Consultation</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name *" className="w-full bg-[#f3f9ff] border-none px-6 py-4 rounded-xl text-sm outline-none" required />
              <input type="text" placeholder="Last Name *" className="w-full bg-[#f3f9ff] border-none px-6 py-4 rounded-xl text-sm outline-none" required />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input type="email" placeholder="Email *" className="w-full bg-[#f3f9ff] border-none px-6 py-4 rounded-xl text-sm outline-none" required />
              <input type="tel" placeholder="Contact Number *" className="w-full bg-[#f3f9ff] border-none px-6 py-4 rounded-xl text-sm outline-none" required />
            </div>
            <textarea placeholder="Message *" rows={4} className="w-full bg-[#f3f9ff] border-none px-6 py-4 rounded-xl text-sm outline-none" required></textarea>
            <div className="text-center">
              <button type="submit" className="bg-[#0c67c4] text-white px-12 py-3.5 rounded-full font-bold shadow-lg">Submit</button>
            </div>
          </form>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
)

const Hero = ({ onOpenModal }) => (
  <section className="relative min-h-[600px] lg:h-[750px] flex items-center justify-center overflow-hidden">
    <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover">
      <source src="https://datamatrixiq.com/media/wbcfm4uw/home_banner_video12.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-[#0d1b2a]/50 z-10" />
    <div className="container mx-auto px-6 relative z-20 text-white max-w-[1320px] py-20">
      <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8 }} className="max-w-4xl">
        <h1 className="text-[32px] md:text-[48px] lg:text-[48px] font-bold !text-white leading-[1.2] mb-6 md:mb-8 font-nunito tracking-tight pt-4 md:pt-10">
          Transforming Your Data & Saleforce Journey with AI.
        </h1>
        <p className="text-[16px] md:text-[20px] !text-white/90 mb-8 md:mb-12 max-w-2xl font-roboto leading-[1.6]">
          With data made simple, DataMatrixIQ paves the way to a scalable, smarter and more powerful data journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
          <Link to="/services" className="bg-[#0c67c4] text-white px-8 md:px-12 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg shadow-2xl hover:bg-[#0a56a3] transition-all flex items-center justify-center">Learn More</Link>
          <Link to="/contact-us" className="border-2 border-white/40 text-white px-8 md:px-12 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center">Book a Call</Link>
        </div>
      </motion.div>
    </div>
  </section>
)

const ServicesPreview = () => {
  const services = [
    { title: "Data & Analytics", desc: "Build intelligent, scalable data ecosystems with modern ETL and governance.", icon: <Database /> },
    { title: "Artificial Intelligence (AI) / Machine Learning (ML)", desc: "Infuse intelligence through predictive models, GenAI, and automation.", icon: <Cpu /> },
    { title: "Business Intelligence", desc: "Fast-track transformation with pre-built frameworks and visual dashboards.", icon: <Zap /> },
    { title: "Salesforce", desc: "Deliver real-time insights with CRM excellence and visualization tools.", icon: <BarChart3 /> },
    { title: "Application Modernization", desc: "Reimagine legacy systems for agility, cloud performance, and scale.", icon: <RefreshCcw /> },
    { title: "Business Apps", desc: "Empower teams using low-code automation on the Microsoft ecosystem.", icon: <Monitor /> },
    { title: "Enterprise Integration", desc: "Connect data, apps, and workflows for unified intelligence.", icon: <Workflow /> },
  ]
  return (
    <section id="services" className="py-16 md:py-24 bg-gradient-to-b from-white to-[#f6f8fa]">
      <div className="container mx-auto px-6 max-w-[1320px]">
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-4 font-nunito text-center">Empowering Enterprises Through Intelligent Solutions</h2>
        <div className="w-14 h-[3px] bg-[#0c67c4] mx-auto mb-6"></div>
        <p className="text-center text-[#212529] font-roboto text-[15px] md:text-[16px] leading-[1.6] max-w-3xl mx-auto">At DataMatrixIQ, we help organizations unlock the power of AI, data, and cloud to accelerate innovation, optimize operations, and drive sustainable growth.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-20">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-10 group rounded-[2.5rem] border border-gray-100 bg-white shadow-sm flex flex-col items-center text-center hover:bg-[#0c67c4] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group"
            >
              <div className="text-[#0c67c4] group-hover:text-white mb-8 transform transition-all duration-500 scale-125 group-hover:scale-110">{s.icon}</div>
              <h3 className="text-[18px] font-bold text-[#2d465e] group-hover:text-white mb-4 font-nunito">{s.title}</h3>
              <p className="text-[#212529] text-[13px] group-hover:text-white/90 leading-relaxed font-roboto">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className='mt-10 flex flex-col items-center'>
          <Link to="/services" className='gap-2 bg-[#0c67c4] text-white px-4 flex items-center py-2 rounded-full font-bold text-sm shadow-xl hover:bg-blue-500 transition-all'>
            Explore All Services
            <ArrowRight className='w-3 h-3' />
          </Link>
          <p className='text-slate-700 text-center text-sm mt-4'>From data to decisions - we deliver intelligence that drives measurable impact.</p>
        </div>
      </div>
    </section>
  )
}

const CapabilitySection = () => {
  const tools = [
    { title: "Data & Analytics Platforms", items: "Snowflake, Databricks, BigQuery, AWS, Azure, GCP", icon: <Database size={40} /> },
    { title: "AI/ML Frameworks", items: "OpenAI, PyTorch, TensorFlow, Scikit-learn, Hugging Face", icon: <Cpu size={40} /> },
    { title: "BI & CRM Analytics", items: "Salesforce CRM, Power BI, Tableau, Sigma, CRM Analytics", icon: <BarChart3 size={40} /> },
  ]
  return (
    <section id="capabilities" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-[1320px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-4 font-nunito">Technology & Tools</h2>
          <div className="w-14 h-[3px] bg-[#0c67c4] mx-auto mb-8 md:mb-10"></div>
          <p className="text-[#212529] font-roboto text-[15px] md:text-[16px] leading-[1.6]">We build scalable and future-ready data platforms using today's most trusted tools:</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((t, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white text-black p-16 rounded-[4rem] text-center flex flex-col items-center gap-8 hover:-translate-y-3 transition-all shadow-xl"
            >
              <div className="mb-2 text-[#0c67c4]">{t.icon}</div>
              <h3 className="text-[20px] font-bold font-nunito text-[#2d465e]">{t.title}</h3>
              <p className="text-[#212529] text-[14px] leading-relaxed font-roboto">{t.items}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const IndustriesGrid = () => {
  const industries = [
    { title: "Power & Energy", desc: "AI-powered grid efficiency and smart energy forecasting.", icon: <ZapIcon /> },
    { title: "Retail & CPG", desc: "Personalized experiences and intelligent supply chains.", icon: <ShoppingCart /> },
    { title: "Banking & Finance", desc: "Predictive insights and secure, data-driven operations.", icon: <CreditCard /> },
    { title: "Manufacturing", desc: "Smarter production through AI and IoT automation.", icon: <Factory /> },
    { title: "Healthcare", desc: "AI-led patient insights and improved clinical outcomes.", icon: <Activity /> },
    { title: "Sustainability", desc: "Accelerating decarbonization through AI intelligence.", icon: <RefreshCcw /> },
    { title: "Mining", desc: "Data-driven mining for efficiency and sustainability.", icon: <Hammer /> },
  ]
  return (
    <section id="industries" className="py-20 md:py-32 bg-[#f9fcff]">
      <div className="container mx-auto px-6 max-w-[1320px]">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-4 font-nunito">Transforming Industries with Data Intelligence</h2>
          <div className="w-14 h-[3px] bg-[#0c67c4] mx-auto mb-8 md:mb-10"></div>
          <p className="text-[#212529] max-w-5xl mx-auto text-[15px] md:text-[16px] leading-[1.6] font-roboto">From energy to finance, retail to healthcare - DataMatrixIQ helps enterprises harness AI and data innovation to operate smarter, scale faster, and grow sustainably.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={i}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-12 rounded-[2.5rem] border border-gray-100 bg-white shadow-sm flex flex-col items-center text-center hover:border-[#0c67c4] transition-all group"
            >
              <div className="text-[#0c67c4] mb-8 transform scale-[1.8] group-hover:scale-[2.1] transition-transform">{ind.icon}</div>
              <h3 className="text-[17px] font-bold text-[#2d465e] mb-4 font-nunito">{ind.title}</h3>
              <p className="text-[#212529] text-[13px] leading-relaxed font-roboto">{ind.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const PartnershipSection = () => (
  <section id="partnership" className="py-32 bg-[#f3f9ff]">
    <div className="container mx-auto px-6 max-w-[1320px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 md:mb-24"
      >
        <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-4 font-nunito">Partnerships</h2>
        <div className="w-14 h-[3px] bg-[#0c67c4] mx-auto mb-8"></div>
        <p className="text-[#0c67c4] font-bold text-[16px] md:text-[18px] mb-6 font-nunito tracking-wide">We believe strong partnerships amplify success</p>
        <p className="text-[#212529] max-w-4xl mx-auto text-[15px] md:text-[16px] leading-[1.6] font-roboto">
          By working closely with our partners, we ensure our clients benefit from cutting-edge technology combined with trusted expertise. Our deep-rooted relationships with leading cloud providers and technology platforms allow us to deliver high-performance, future-ready solutions tailored to your unique business needs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center mt-12 bg-white p-12 rounded-[3rem] border border-gray-100 shadow-xl max-w-5xl mx-auto hover:-translate-y-2 transition-transform"
      >
        <img src="https://datamatrixiq.com/img/service-image.png" alt="Our Partners" className="w-full h-auto object-contain" />
      </motion.div>

      <p className="text-center mt-20 text-[#212529] font-bold italic font-roboto text-[14px]">
        "Our partners are integral to our mission of accelerating digital transformation through intelligent data solutions."
      </p>
    </div>
  </section>
)

const TeamSection = () => {
  const team = [
    { id: "shalu-mahawal", name: "Shalu Mahawal", role: "Founder & CEO", desc: "Sets the vision and drives strategic growth of Data Matrix IQ.", img: "https://datamatrixiq.com/media/le2bbmm0/profile1.png", linkedin: "https://www.linkedin.com/in/mahawals/", email: "contact@datamatrixiq.com", phone: "+61 451 110 993", bio: "Shalu's bio - Cofounder and Marketing Specialist with 25+ years of experience across customer service, marketing, customer care, and account management across the UK, New Zealand, and Australia. Specializes in IT solution sales and support, including CRM/CSM platforms, Salesforce, hosting, and data-driven solutions.<br><br>Known for consultative selling, account growth, and multi-team project coordination, and for building long-term client partnerships that drive measurable business outcomes. As Cofounder, leads teams and helps define and execute the strategic vision and growth roadmap for DataMatrixIQ." },
    { id: "harsha-mahawal", name: "Harsha Mahawal", role: "Principal Data Consultant", desc: "Leads data strategy and solution delivery across the ANZ region.", img: "https://datamatrixiq.com/media/44gd51ch/profile_2.png", linkedin: "https://www.linkedin.com/in/harshamahawal/", email: "contact@datamatrixiq.com", phone: "+61 451 110 993", bio: "Harsha is a veteran data consultant specializing in large-scale data architecture and analytics. He leads technical delivery across Australia and New Zealand, helping enterprises unlock the power of their data through modern cloud platforms and intelligent automation." },
    { id: "zack-ristov", name: "Zack Ristov", role: "Australia Business Head", desc: "Drives strategic business expansion and technology partnerships across the APAC region.", img: "https://aussiemigrationservices.com.au/wp-content/uploads/2024/01/AI_Zack_Ristov_891_edited-800x800-1.webp", linkedin: "https://www.linkedin.com/in/zack-ristov/", email: "contact@datamatrixiq.com", phone: "+61 449 602 007", bio: "Zack is a Co-Founder and Director at DataMatrixIQ, bringing over 20 years of experience in business development, IT consultancy, and project management. He holds an MBA from RMIT University and is instrumental in driving the company's growth and client satisfaction strategies across Australia and New Zealand." },
    { id: "alan-jennings", name: "Alan Jennings", role: "Presales Director", desc: "Manages regional operations and client relationships in New Zealand.", img: "https://datamatrixiq.com/media/k0gguotm/profile_4-1-removebg-preview.jpg", linkedin: "https://www.linkedin.com/in/jenningsa/", email: "contact@datamatrixiq.com", phone: "+61 451 110 993", bio: "Alan brings extensive expertise in presales strategy and client relationship management. With a strong focus on the New Zealand market, he bridges the gap between complex technical solutions and business objectives, ensuring clients receive tailored, high-impact data strategies." },
    { id: "emiliano-giovannoni", name: "Emiliano Giovannoni", role: "Principal Consultant Partner, Australia", desc: "Leads brand positioning and demand generation initiatives.", img: "https://datamatrixiq.com/media/npjplt2j/profile2.png", linkedin: "https://www.linkedin.com/in/emilianogiovannoni/", email: "contact@datamatrixiq.com", phone: "+61 451 110 993", bio: "Emiliano is a strategic consultant focused on market growth and branding. He partners with DataMatrixIQ to drive regional expansion in Australia, leveraging his deep understanding of demand generation and enterprise solution positioning." },
    { id: "venkat-valappady", name: "Venkat Valappady", role: "Principal Data Governance Consultant", desc: "Builds and supports data solutions to meet business needs.", img: "https://datamatrixiq.com/media/jebpbnka/linkedin-new-111.png", linkedin: "https://www.linkedin.com/in/venkatvv/", email: "contact@datamatrixiq.com", phone: "+61 451 110 993", bio: "Venkat specializes in data governance, security, and compliance. He ensures that DataMatrixIQ's clients can trust their data through robust framework implementations, rigorous quality standards, and intelligent lineage tracking." },
    { id: "Arjun Uddagiri", name: "Arjun Uddagiri", role: "Developing Partner & AI Architect", desc: "Transforming Vision into Scalable Impact.", img: "/assets/Arjun.png", linkedin: "https://www.linkedin.com/in/arjun-uddagiri-8585891b3/", email: "contact@datamatrixiq.com", phone: "+91 88856 00899", bio: "As a visionary entrepreneur and principal leader of Future Forbes Pvt. Ltd., I am dedicated to blending technology, innovation, and leadership to foster meaningful impact. Committed to cultivating an ecosystem that empowers individuals through growth, skill-building, and sustainable career advancement.My journey is grounded in deep technological expertise, strategic management, and collaborative partnerships. I focus on translating innovation into actionable results that create lasting value for people and organizations.Passionate about bridging industry and academia, mentoring emerging talent, and spearheading initiatives that prepare the next generation for the demands of a rapidly evolving digital economy.My core mission centers on entrepreneurship, leadership development, and crafting future-ready opportunities that unlock potential and accelerate performance in a dynamic world. " }
  ]
  return (
    <section id="team" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6 max-w-[1320px]">
        <div className="text-center mb-12 flex justify-center">
          <p className="text-[#212529] font-roboto text-[16px] md:text-[18px] leading-[1.6] max-w-2xl">The Data Matrix IQ team consists of skilled professionals including:</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 md:gap-y-16 gap-x-8 justify-center">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="relative mb-6">
                <div className="w-[180px] h-[180px] rounded-full overflow-hidden border border-gray-100 shadow-sm relative">
                  <img src={m.img} className="w-full h-full object-cover" alt={m.name} />
                </div>
                {m.linkedin && (
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute bottom-1 right-1 bg-[#0077b5] text-white w-10 h-10 rounded-full flex items-center justify-center border-[3.5px] border-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] hover:scale-110 transition-transform z-10"
                  >
                    <Linkedin size={18} fill="currentColor" />
                  </a>
                )}
              </div>
              <span className="text-[20px] font-bold text-[#212529] font-nunito mb-3">{m.name}</span>
              <div className="border-[1.5px] border-[#212529] px-6 py-2 mb-6 min-h-[44px] flex items-center justify-center w-full max-w-[260px] rounded-md">
                <p className="text-[#212529] text-[15px] font-bold font-roboto leading-snug">{m.role}</p>
              </div>
              <p className="text-[#212529] text-[13px] leading-relaxed font-roboto mb-6 px-4">{m.desc}</p>
              <Link to={`/team-profile/${m.id}`} className="text-[#0c67c4] font-bold text-[15px] hover:underline transition-all">View Profile</Link>
            </motion.div>
          ))}
        </div>
        <div className="mt-20 text-center bg-white border border-gray-100 shadow-sm py-12 rounded-[2rem]">
          <p className="text-[#2d465e] font-bold font-nunito text-xl">We work as an extension of our clients' teams – focused on collaboration, accountability, and results.</p>
        </div>
      </div>
    </section>
  )
}

const TeamProfilePage = () => {
  const { id } = useParams()
  const team = [
    { id: "shalu-mahawal", name: "Shalu Mahawal", role: "Founder & CEO", img: "https://datamatrixiq.com/media/le2bbmm0/profile1.png", linkedin: "https://www.linkedin.com/in/mahawals/", email: "contact@datamatrixiq.com", phone: "+61 451 110 993", bio: "Shalu's bio - Cofounder and Marketing Specialist with 25+ years of experience across customer service, marketing, customer care, and account management across the UK, New Zealand, and Australia. Specializes in IT solution sales and support, including CRM/CSM platforms, Salesforce, hosting, and data-driven solutions.<br><br>Known for consultative selling, account growth, and multi-team project coordination, and for building long-term client partnerships that drive measurable business outcomes. As Cofounder, leads teams and helps define and execute the strategic vision and growth roadmap for DataMatrixIQ." },
    { id: "harsha-mahawal", name: "Harsha Mahawal", role: "Principal Data Consultant", img: "https://datamatrixiq.com/media/44gd51ch/profile_2.png", linkedin: "https://www.linkedin.com/in/harshamahawal/", email: "contact@datamatrixiq.com", phone: "+61 451 110 993", bio: "Harsha is a veteran data consultant specializing in large-scale data architecture and analytics. He leads technical delivery across Australia and New Zealand, helping enterprises unlock the power of their data through modern cloud platforms and intelligent automation." },
    { id: "zack-ristov", name: "Zack Ristov", role: "Australia Business Head", img: "https://aussiemigrationservices.com.au/wp-content/uploads/2024/01/AI_Zack_Ristov_891_edited-800x800-1.webp", linkedin: "https://www.linkedin.com/in/zack-ristov/", email: "contact@datamatrixiq.com", phone: "+61 449 602 007", bio: "Zack is a Co-Founder and Director at DataMatrixIQ, bringing over 20 years of experience in business development, IT consultancy, and project management. He holds an MBA from RMIT University and is instrumental in driving the company's growth and client satisfaction strategies across Australia and New Zealand." },
    { id: "alan-jennings", name: "Alan Jennings", role: "Presales Director", img: "https://datamatrixiq.com/media/k0gguotm/profile_4-1-removebg-preview.jpg", linkedin: "https://www.linkedin.com/in/jenningsa/", email: "contact@datamatrixiq.com", phone: "+61 451 110 993", bio: "Alan brings extensive expertise in presales strategy and client relationship management. With a strong focus on the New Zealand market, he bridges the gap between complex technical solutions and business objectives, ensuring clients receive tailored, high-impact data strategies." },
    { id: "emiliano-giovannoni", name: "Emiliano Giovannoni", role: "Principal Consultant Partner, Australia", img: "https://datamatrixiq.com/media/npjplt2j/profile2.png", linkedin: "https://www.linkedin.com/in/emilianogiovannoni/", email: "contact@datamatrixiq.com", phone: "+61 451 110 993", bio: "Emiliano is a strategic consultant focused on market growth and branding. He partners with DataMatrixIQ to drive regional expansion in Australia, leveraging his deep understanding of demand generation and enterprise solution positioning." },
    { id: "venkat-valappady", name: "Venkat Valappady", role: "Principal Data Governance Consultant", img: "https://datamatrixiq.com/media/jebpbnka/linkedin-new-111.png", linkedin: "https://www.linkedin.com/in/venkatvv/", email: "contact@datamatrixiq.com", phone: "+61 451 110 993", bio: "Venkat specializes in data governance, security, and compliance. He ensures that DataMatrixIQ's clients can trust their data through robust framework implementations, rigorous quality standards, and intelligent lineage tracking." },
    { id: "Arjun Uddagiri", name: "Arjun Uddagiri", role: "Developing Partner & AI Architect", img: "/assets/Arjun.png", linkedin: "https://www.linkedin.com/in/arjun-uddagiri-8585891b3/", email: "contact@datamatrixiq.com", phone: "+91 88856 00899", bio: "As a visionary entrepreneur and principal leader of Future Forbes Pvt. Ltd., I am dedicated to blending technology, innovation, and leadership to foster meaningful impact. Committed to cultivating an ecosystem that empowers individuals through growth, skill-building, and sustainable career advancement.My journey is grounded in deep technological expertise, strategic management, and collaborative partnerships. I focus on translating innovation into actionable results that create lasting value for people and organizations.Passionate about bridging industry and academia, mentoring emerging talent, and spearheading initiatives that prepare the next generation for the demands of a rapidly evolving digital economy.My core mission centers on entrepreneurship, leadership development, and crafting future-ready opportunities that unlock potential and accelerate performance in a dynamic world. " }
  ]
  const member = team.find(m => m.id === id) || team[0]

  useEffect(() => { window.scrollTo(0, 0) }, [id])

  return (
    <div className="bg-white pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Sidebar */}
          <div className="lg:w-4/12">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <div className="relative mb-10">
                <div className="w-full aspect-square rounded-full overflow-hidden shadow-xl border-4 border-white">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-6 right-6 bg-[#0077b5] text-white w-14 h-14 rounded-full flex items-center justify-center border-[4px] border-white shadow-2xl hover:scale-110 transition-transform z-10"
                >
                  <Linkedin size={24} fill="currentColor" />
                </a>
              </div>
              <h1 className="text-3xl font-bold text-[#212529] mb-4 font-nunito">{member.name}</h1>
              <div className="border-[1.5px] border-[#2d465e] px-6 py-2 mb-10 inline-flex items-center justify-center rounded-lg">
                <p className="text-[#2d465e] text-[16px] font-bold font-roboto leading-snug">{member.role}</p>
              </div>

              <div className="flex flex-col gap-4">
                <a href={member.linkedin} target="_blank" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#0077b5] group-hover:text-white transition-all text-[#0077b5]">
                    <Linkedin size={20} />
                  </div>
                  <span className="font-bold text-[#212529] font-inter group-hover:text-[#0c67c4] transition-colors">LinkedIn</span>
                </a>
                <a href={`mailto:${member.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#0d1b2a] group-hover:text-white transition-all text-[#0d1b2a]">
                    <Mail size={20} />
                  </div>
                  <span className="font-bold text-[#212529] font-inter group-hover:text-[#0c67c4] transition-colors">{member.email}</span>
                </a>
                <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center group-hover:bg-[#0c67c4] group-hover:text-white transition-all text-[#0c67c4]">
                    <Phone size={20} />
                  </div>
                  <span className="font-bold text-[#212529] font-inter group-hover:text-[#0c67c4] transition-colors">{member.phone}</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content */}
          <div className="lg:w-8/12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className="inline-block relative mb-10">
                <h2 className="text-[32px] font-bold text-[#2d465e] font-nunito relative z-10">Profile</h2>
                <div className="absolute -bottom-2 left-0 w-full h-1/2 bg-[#0c67c4]/5 -z-0"></div>
              </div>
              <div className="text-[#212529] text-[18px] font-roboto leading-[1.8] space-y-6" dangerouslySetInnerHTML={{ __html: member.bio }} />

              <div className="mt-20 pt-10 border-t border-gray-100">
                <Link to="/about-us" className="inline-flex items-center gap-2 text-[#0c67c4] font-bold hover:underline font-inter">
                  <ArrowRight size={18} className="rotate-180" /> Back to Team
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}


const AboutSection = ({ showTitle = true }) => (
  <section id="about" className="py-20 md:py-32 bg-white">
    <div className="container mx-auto px-6 max-w-[1320px]">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div>
          {showTitle && (
            <div className="mb-8 md:mb-10">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-2 font-nunito">About Us</h2>
              <div className="w-14 h-[3px] bg-[#0c67c4]"></div>
            </div>
          )}
          <h3 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-6 md:mb-10 font-nunito">Who We Are</h3>
          <p className="text-[15px] md:text-[16px] text-[#212529] mb-8 md:mb-14 font-roboto leading-[1.6]">
            DataMatrixIQ is a results-driven delivery powerhouse across Data Engineering, Salesforce, Cloud, and Cybersecurity, trusted to execute complex, high-value transformation programs end to end. We architect and operationalise modern, scalable data platforms that unify fragmented systems, strengthen data trust, and eliminate operational bottlenecks.
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="border-l-4 border-[#0c67c4] pl-6">
              <h4 className="font-bold text-[#2d465e] text-[18px] mb-4 font-nunito">Senior-Led Expertise</h4>
              <p className="text-[#212529] text-[14px] leading-[1.6] font-roboto">Deep expertise across Snowflake, Databricks, AWS, Azure, and AI- with hands-on senior oversight.</p>
            </div>
            <div className="border-l-4 border-[#0c67c4] pl-6">
              <h4 className="font-bold text-[#2d465e] text-[18px] mb-4 font-nunito">Efficient Hybrid Delivery</h4>
              <p className="text-[#212529] text-[14px] leading-[1.6] font-roboto">ANZ delivery powerhouse with scalable offshore engineering for cost-effective, high-quality delivery.</p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img src="https://datamatrixiq.com/media/nakdfkns/about-5.webp" className="rounded-[4rem] shadow-2xl border-4 border-white" />
          <div className="absolute -bottom-16 -left-16 w-2/3 border-8 border-white rounded-[4rem] shadow-2xl overflow-hidden z-20 hidden md:block">
            <img src="https://datamatrixiq.com/media/45qn5vu5/about-2.webp" className="w-full" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
)

const AboutPage = ({ onOpenModal }) => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace('#', ''));
      if (el) {
        window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [hash]);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-white py-24 lg:py-32 border-b border-gray-100 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-[1320px] relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="lg:w-6/12">
              <h1 className="text-[48px] font-bold text-[#2d465e] mb-10 font-nunito leading-[1.2]">About Us</h1>
              <div className="description text-[16px] leading-[1.6] font-roboto">
                <p className="text-[#2d465e] font-bold text-[20px] mb-6 font-nunito leading-[1.4]">
                  Data Matrix IQ <span className="text-[#212529] font-normal">is a technology and data-driven delivery powerhouse firm helping organizations modernize, scale, and innovate using data, analytics, cloud, and intelligent digital solutions.</span>
                </p>
                <p className="text-[#212529] mb-8">
                  We partner with businesses across industries to solve complex challenges through data engineering, AI & machine learning, enterprise analytics, cloud infrastructure, and application modernization. Our focus is on delivering practical, secure, and scalable solutions that create measurable business value.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="lg:w-6/12 flex justify-center">
              <img src="https://datamatrixiq.com/media/5c2m4hty/datamatrixiq.png" alt="Data Pipeline" className="max-w-[85%] h-auto mix-blend-multiply drop-shadow-[0_10px_30px_rgba(0,0,0,0.08)]" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities / What Sets Us Apart */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-12 lg:p-14 rounded-[3.5rem] shadow-[0_10px_50px_rgba(12,103,196,0.08)] border border-gray-100/50 hover:-translate-y-2 transition-transform duration-500"
            >
              <h2 className="text-[32px] font-bold text-[#2d465e] mb-10 font-nunito">What Sets Us Apart</h2>
              <ul className="space-y-6">
                {[
                  "Business-first, outcome-driven approach",
                  "Strong expertise across data, analytics, cloud, and AI",
                  "Secure, scalable, and future-ready solutions",
                  "Agile delivery with transparent collaboration",
                  "Industry-aligned and client-focused execution"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-[#212529] font-roboto text-[18px] font-medium">
                    <CheckCircle size={24} className="text-[#0c67c4] flex-shrink-0 mt-0.5" /> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <img src="https://datamatrixiq.com/media/txvjgbbr/illustration-1.webp" alt="Illustration" className="w-[85%] h-auto hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <PartnershipSection />

      {/* Our Team Section */}
      <TeamSection />

      {/* Build What's Next CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-6/12 bg-gradient-to-br from-[#0c67c4] to-[#0a54a0] text-white p-14 rounded-[3.5rem] shadow-[0_20px_60px_rgba(12,103,196,0.3)]">
              <h3 className="text-[32px] font-bold mb-8 font-nunito leading-[1.2]">Let's Build What's Next</h3>
              <p className="opacity-90 leading-[1.6] font-roboto text-[18px] mb-6">
                At Data Matrix IQ, we don't just implement technology - we create capabilities that help businesses succeed.
              </p>
              <p className="font-bold text-[18px] mb-10 font-nunito text-white/90 leading-[1.4]">
                Let's partner to unlock the full potential of your data and digital ecosystem.
              </p>
            </div>
            <div className="lg:w-6/12">
              <img src="https://datamatrixiq.com/media/eekhtg4h/marvin-meyer.jpg" className="w-[110%] h-auto -ml-10 rounded-[3rem] shadow-[0_10px_40px_rgba(0,0,0,0.15)] object-cover" alt="Culture" />
            </div>
          </div>
        </div>
      </section>

      {/* Schedule A Call (Call To Action 2) */}
      <section className="py-20 bg-[#0d83fd] text-white text-center relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1320px] relative z-10">
          <h6 className="text-[3rem] lg:text-[4.5rem] font-bold mb-8 font-nunito leading-tight">Schedule a Call</h6>
          <p className="text-xl text-white/90 mb-14 max-w-3xl mx-auto font-roboto leading-relaxed">
            Let's Build Your Data Foundation Together. Struggling with slow insights, outdated pipelines, or disconnected platforms? Let's design a solution that scales with your needs and accelerates your business.
          </p>
          <Link to="/contact-us" className="border-2 border-white/20 bg-white/10 text-white backdrop-blur-sm px-16 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-[#0d1b2a] transition-all shadow-2xl hover:shadow-white/20 active:scale-95 flex items-center justify-center mx-auto w-fit">Book a Call</Link>
        </div>
      </section>
    </div>
  )
}

const CapabilitiesPage = ({ onOpenModal }) => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const capabilities = [
    {
      title: "Data Engineering & Analytics",
      desc: "Build scalable, AI-ready data platforms.",
      icon: <Database className="w-6 h-6" />,
      bullets: [
        "ETL/ELT pipelines (batch & real-time)",
        "Data warehouses & lakehouse architectures",
        "Cloud data platforms (AWS, Azure, GCP)",
        "Streaming pipelines & performance optimization",
        "Data governance, quality & security frameworks"
      ],
      footer: "Trusted data foundations for analytics and AI."
    },
    {
      title: "Salesforce & Customer Platforms",
      desc: "Modern CRM ecosystems powered by unified data.",
      icon: <Users className="w-6 h-6" />,
      bullets: [
        "Salesforce implementations & integrations",
        "Sales, Service, Marketing & Industry Cloud",
        "Agentforce 360 & Data 360",
        "Salesforce AI & analytics",
        "Managed services & optimization"
      ],
      footer: "Connected customer journeys and real-time insights."
    },
    {
      title: "Advisory, Engineering & Managed Services",
      desc: "End-to-end platform lifecycle support.",
      icon: <Settings className="w-6 h-6" />,
      bullets: [
        "Architecture strategy & modernization",
        "Platform implementation & integration",
        "Quality engineering & testing",
        "L2/L3 production support",
        "DevOps, CI/CD & release management"
      ],
      footer: "Seamless delivery from planning to production."
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden bg-white">
        <div className="container mx-auto px-6 max-w-[1320px] relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2"
            >
              <h1 className="text-[32px] md:text-[48px] font-bold text-[#2d465e] mb-6 md:mb-10 font-nunito leading-[1.2]">
                Powering Data, Cloud & Digital <br className="hidden md:block" /> <span className="text-[#0c67c4]">Transformation</span>
              </h1>
              <p className="text-[16px] text-[#212529] mb-12 font-roboto leading-[1.6] max-w-2xl">
                At Data Matrix IQ, we help organizations modernize platforms, unify data, and build intelligent systems. Our capabilities span Data Engineering, Salesforce, Cloud, and DevOps, delivering measurable outcomes from strategy through execution.
              </p>
              <Link
                to="/contact-us"
                className="bg-[#0c67c4] text-white px-10 md:px-16 py-3.5 md:py-5 rounded-full font-bold text-base md:text-lg shadow-2xl hover:bg-[#0a56a3] transition-all active:scale-95 inline-block text-center w-full sm:w-auto"
              >
                Book a Call
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-1/2 relative"
            >
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <img
                  src="https://datamatrixiq.com/media/beudzqss/andrew-neel-cckf4tshauw-unsplash.jpg"
                  alt="Capabilities Hero"
                  className="rounded-[3rem] shadow-2xl w-full"
                />
              </motion.div>
              <div className="absolute -inset-4 bg-[#0c67c4]/5 rounded-[4rem] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Header */}
      <section className="py-20 bg-[#f8f9fa] border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1320px] text-center">
          <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-4 md:mb-6 font-nunito">Core Capabilities</h2>
          <p className="text-[16px] text-[#212529] font-roboto max-w-3xl mx-auto italic leading-[1.6]">
            Empowering your digital transformation with specialized engineering and strategic platform management.
          </p>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full flex flex-col overflow-hidden"
              >
                <div className="p-12 pb-6">
                  <div className="w-16 h-16 bg-[#e7f1ff] rounded-2xl flex items-center justify-center text-[#0c67c4] mb-8">
                    {cap.icon}
                  </div>
                  <h3 className="text-[24px] font-bold text-[#2d465e] mb-4 font-nunito">{cap.title}</h3>
                  <p className="text-[16px] text-[#212529] font-bold mb-8 font-roboto leading-[1.6]">{cap.desc}</p>
                  <ul className="space-y-4 mb-10">
                    {cap.bullets.map((b, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-[#212529] font-medium font-roboto text-[14px] leading-[1.6]">
                        <ChevronRight size={16} className="text-[#0c67c4] mt-0.5 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-auto bg-[#f3f9ff] py-6 px-12 text-[#2d465e] font-medium text-sm border-t border-gray-50 rounded-b-[2.5rem]">
                  {cap.footer}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Single Source of Truth */}
      <section className="relative py-40 overflow-hidden">
        <div
          className="absolute inset-0 bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url('https://datamatrixiq.com/media/nakdfkns/about-5.webp')` }}
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        <div className="container mx-auto px-6 max-w-[1320px] relative z-20 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[32px] md:text-[3.5rem] font-bold mb-6 font-nunito text-[#0c67c4]">Single Source of Truth</h2>
            <p className="text-2xl mb-16 font-roboto max-w-4xl mx-auto font-medium">
              We connect Salesforce + Snowflake + Data Cloud to create a unified data ecosystem.
            </p>
            <div className="grid md:grid-cols-2 gap-x-16 gap-y-10 max-w-4xl mx-auto mb-16">
              {[
                "Zero-ETL data sharing",
                "Unified customer profiles",
                "AI-driven automation",
                "High-performance analytics"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 text-[18px] justify-center font-bold">
                  <div className="w-2.5 h-2.5 bg-white rounded-full" /> {item}
                </div>
              ))}
            </div>
            <p className="text-xl italic font-roboto text-white/90 border-t border-white/20 pt-10 inline-block font-medium">
              One trusted data foundation powering smarter decisions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-6 font-nunito leading-tight">Engagement Models</h2>
              <p className="text-[16px] text-[#212529] mb-10 font-roboto leading-[1.6]">Choose how you work with us:</p>
              <ul className="space-y-6">
                {[
                  { title: "Outcome-Based Delivery", desc: "We own results end-to-end" },
                  { title: "DMI-Led Scrum Teams", desc: "We drive execution" },
                  { title: "Client-Led Teams", desc: "We integrate into your delivery" },
                  { title: "Team Extension", desc: "Scale quickly with expert talent" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2.5 h-2.5 bg-[#0c67c4] rounded-full mt-2 shrink-0" />
                    <p className="text-[16px] text-[#212529] font-bold font-roboto leading-[1.6]">
                      <span className="text-black">{item.title}</span> – <span className="text-[#212529] font-normal">{item.desc}</span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img src="https://datamatrixiq.com/media/5fwbq3px/features-illustration-1.webp" alt="Engagement Models" className="w-[85%] h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Delivery Advantage */}
      <section className="py-24 bg-[#f8f9fa] overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-[28px] md:text-[3rem] font-bold text-[#2d465e] mb-4 font-nunito leading-tight">Our Delivery Advantage</h2>
              <p className="text-xl text-[#0c67c4] font-bold mb-10 font-roboto">Local Strategy. Global Scale.</p>
              <ul className="space-y-6">
                {[
                  "Leadership across Australia & New Zealand",
                  "Agile engineering teams in New Zealand",
                  "Global delivery excellence from India",
                  "50+ certified practitioners across Data, Cloud & Salesforce"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="w-2.5 h-2.5 bg-[#0c67c4] rounded-full mt-2 shrink-0" />
                    <p className="text-lg text-gray-700 font-bold font-roboto">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <img src="https://datamatrixiq.com/media/tmpcl3vp/features-illustration-2.webp" alt="Delivery Advantage" className="w-[85%] h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Build What’s Next */}
      <section className="py-32 bg-[#011d2e] text-white text-center">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <h2 className="text-[28px] md:text-[3rem] lg:text-[4rem] font-bold mb-6 md:mb-8 font-nunito">Ready to Build What’s Next?</h2>
          <p className="text-2xl text-white/80 font-roboto max-w-4xl mx-auto mb-16 leading-relaxed">
            Partner with Data Matrix IQ to modernize your data and digital platforms. Let’s transform your business with intelligent technology.
          </p>
          <Link
            to="/contact-us"
            className="bg-[#0c67c4] text-white px-16 py-5 rounded-full font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl inline-block text-center"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  )
}

const Footer = ({ onOpenModal }) => {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <footer id="contact-section" className="bg-white pt-24 pb-8 border-t border-gray-100 relative">
      <div className="container mx-auto px-6 max-w-[1320px]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">

          {/* Column 1: Logo and Tagline (4/12) */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img
                src="https://datamatrixiq.com/media/cyqpirwk/untitled-design-1-1.png"
                className="h-[50px] mb-6"
                alt="DataMatrixIQ Logo"
              />
            </Link>
            <p className="text-gray-500 text-[15px] font-medium font-roboto">
              Your Strategic Data Engineering Partner
            </p>
          </div>

          {/* Column 2: Useful Links (3/12) */}
          <div className="md:col-span-3">
            <h4 className="font-extrabold text-[#0c67c4] text-[16px] mb-8 font-nunito">Useful Links</h4>
            <div className="flex flex-col gap-5 text-[#212529] font-medium text-[15px] font-roboto">
              <Link to="/about-us" className="hover:text-[#0c67c4] transition-colors">About-Us</Link>
              <Link to="/services" className="hover:text-[#0c67c4] transition-colors">Services</Link>
              <Link to="/industries" className="hover:text-[#0c67c4] transition-colors">Industries</Link>
              <Link to="/clients" className="hover:text-[#0c67c4] transition-colors">Clients</Link>
            </div>
          </div>

          {/* Column 3: Contact Us (5/12) */}
          <div className="md:col-span-5">
            <h4 className="font-extrabold text-[#0c67c4] text-[16px] mb-8 font-nunito">Contact Us</h4>
            <div className="flex flex-col gap-6 text-[15px] font-roboto">
              <a href="mailto:contact@datamatrixiq.com" className="text-[#0c67c4] font-bold hover:underline transition-all">
                contact@datamatrixiq.com
              </a>
              <div className="flex items-start gap-4 text-[#212529]">
                <img src="https://datamatrixiq.com/img/australia.png" className="w-6 h-auto mt-1" alt="AUS" />
                <p className="font-medium">
                  - Head Office Wyndham City, Melbourne, Australia <a href="tel:+61451110993" className="text-[#0c67c4] font-bold">(+61 451 110 993)</a>
                </p>
              </div>

              <div className="flex items-start gap-4 text-[#212529]">
                <img src="https://datamatrixiq.com/img/new-zealand.png" className="w-6 h-auto mt-1" alt="NZ" />
                <p className="font-medium">
                  - Wellington CBD, New Zealand <a href="tel:+64212270086" className="text-[#0c67c4] font-bold">(+64 212 270 086)</a>
                </p>
              </div>
              <div className="flex items-start gap-4 text-[#212529]">
                <img src="/assets/indian.png" className="w-6 h-auto mt-1" alt="IN" />
                <p className="font-medium">
                  - Development Centre 1-23, Anjaiah nagar, Gachibowli, Hyderabad, Telangana, India <a href="tel:+918885600899" className="text-[#0c67c4] font-bold">(+91 88856 00899)</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-100 pt-12 flex flex-col items-center text-center gap-4">
          <p className="text-gray-500 font-bold text-[14px] font-nunito">
            © 2026 <span className="text-gray-800">DataMatrixIQ</span> All Rights Reserved
          </p>
          <div className="flex items-center gap-2 text-[#0c67c4] font-bold text-[14px] font-nunito">
            <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
            <span className="text-gray-300">|</span>
            <Link to="/terms-of-use" className="hover:underline">Terms of Use</Link>
          </div>
        </div>
      </div>

      {/* Back to Top Toggle (floating) */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-10 right-10 w-12 h-12 bg-[#0c67c4] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-blue-700 transition-all z-[1000]"
      >
        <ArrowUp size={24} />
      </button>
    </footer>
  )
}


const ServicesPage = ({ onOpenModal }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const snapshot = [
    { title: "Data Engineering", desc: "Build intelligent data pipelines and scalable ecosystems.", icon: <Database /> },
    { title: "AI & ML", desc: "Infuse intelligence through predictive models and GenAI.", icon: <Cpu /> },
    { title: "App Modernization", desc: "Reimagine legacy systems into modern cloud-ready apps.", icon: <RefreshCcw /> },
    { title: "Business Apps", desc: "Power productivity with low-code and collaboration tools.", icon: <Zap /> },
    { title: "Enterprise Analytics", desc: "Scale automation and data analysis across the enterprise.", icon: <BarChart3 /> },
    { title: "Cloud & Security", desc: "Build secure, compliant, and well-architected cloud foundations.", icon: <Cloud /> },
    { title: "Enterprise Integration", desc: "Connect silos and enable real-time connectivity.", icon: <Workflow /> },
    { title: "Business Intelligence", desc: "Fast-track transformation with visual dashboards.", icon: <BarChart3 /> },
    { title: "Accelerators", desc: "Speed transformation with pre-built AI and migration frameworks.", icon: <Cpu /> }
  ]

  const detailedSections = [
    {
      id: "data-engineering",
      title: "Build a future-ready data backbone.",
      subtitle: "Data Engineering",
      desc: "Transform your data ecosystem into a high-performance, governed, and insight-driven powerhouse. We architect modern data solutions that satisfy today's reporting needs while powering tomorrow's AI innovation.",
      items: ["Enterprise Data Strategy & Governance", "ETL/ELT Pipeline Automation", "Modern Data Platforms (Snowflake, Databricks, BigQuery)"],
      img: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop",
      icon: <Database />,
      bg: "bg-[#f3f9ff]"
    },
    {
      id: "ai-ml",
      title: "Turn Insights into Action.",
      subtitle: "AI & ML Solutions",
      desc: "Go beyond basic analytics. We help enterprises embed intelligence directly into their operations through scalable machine learning models and generative AI frameworks.",
      items: ["Predictive Analytics & Forecasting", "Natural Language Processing (NLP)", "Generative AI & LLM Integration"],
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
      icon: <Cpu />,
      bg: "bg-white"
    },
    {
      id: "app-modernization",
      title: "Reimagine your legacy. Reinvent your future.",
      subtitle: "Application Modernization",
      desc: "Upgrade legacy systems into modern, agile, and cloud-ready applications — engineered for speed, security, and scalability. We help you transition from monolithic architectures to high-performance microservices.",
      items: ["Cloud Native App Development", "Monolith to Microservices Transition", "CI/CD & DevSecOps Implementation"],
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      icon: <RefreshCcw />,
      bg: "bg-[#f3f9ff]"
    },
    {
      id: "salesforce",
      title: "Maximize the ROI of Your Salesforce Ecosystem.",
      subtitle: "Salesforce Data Engineering",
      desc: "Unify customer data across every touchpoint with Salesforce Data Cloud, enabling real-time insights, personalization, and smarter engagement powered by AI-driven analytics.",
      items: ["Salesforce Data Cloud Implementation", "Tableau & CRM Analytics Integration", "Intelligent Automation within Salesforce"],
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2000&auto=format&fit=crop",
      icon: <Cloud />,
      bg: "bg-white"
    },
    {
      id: "cloud-security",
      title: "Cloud Confidence. Enterprise Strength.",
      subtitle: "Cloud & Cybersecurity",
      desc: "Build secure, scalable, and compliant cloud environments that empower digital transformation. We ensure your infrastructure is not just powerful, but also protected by the highest security standards.",
      items: ["Enterprise Landing Zone (ELZ) Setup", "Multi-Cloud Migration & Management", "Proactive Security & Compliance Frameworks"],
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=2000&auto=format&fit=crop",
      icon: <Workflow />,
      bg: "bg-[#f3f9ff]"
    }
  ]

  return (
    <div className="bg-white">
      <section className="bg-gradient-to-r from-[#f3f9ff] to-white py-32 overflow-hidden relative border-b border-gray-100">
        <div className="container mx-auto px-6 max-w-[1320px] relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="lg:w-7/12">
              <h1 className="text-[32px] md:text-[48px] font-bold text-[#2d465e] mb-6 md:mb-8 font-nunito leading-[1.2]">
                AI-First Data and Salesforce Engineering - Built for Scale, Intelligence, and Growth
              </h1>
              <p className="text-[16px] text-[#212529] max-w-4xl mb-12 font-roboto leading-[1.6]">
                DataMatrixIQ empowers enterprises with intelligent data, AI, and cloud-driven solutions - transforming operations, decisions, and outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <button
                  onClick={() => { document.getElementById('snapshot').scrollIntoView({ behavior: 'smooth' }) }}
                  className="bg-[#0c67c4] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:bg-blue-600 transition-all text-center w-full sm:w-auto"
                >
                  Explore Our Capabilities
                </button>
                <button onClick={onOpenModal} className="bg-[#0c67c4] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:bg-blue-600 transition-all text-center w-full sm:w-auto">Book a Call</button>
              </div>
            </motion.div>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} className="lg:w-5/12 flex justify-center">
              <div className="relative">
                <img src="https://datamatrixiq.com/media/atkgiqtn/1_z76xqgephixy522fnjlltq.gif" alt="Services Hero" className="w-full h-auto rounded-3xl shadow-2xl relative z-10" />
                <div className="absolute -inset-4 bg-[#0c67c4]/10 rounded-[2.5rem] scale-110" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="snapshot" className="py-32 bg-white">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="text-center mb-24">
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-4 md:mb-6 font-nunito">Quick Services Snapshot</h2>
            <div className="w-14 h-[3px] bg-[#0c67c4] mx-auto mb-10"></div>
            <p className="text-[#212529] text-[16px] max-w-2xl mx-auto font-roboto leading-[1.6]">An instant overview of our service pillars - engineered for the modern enterprise.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {snapshot.map((s, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-[2.5rem] hover:shadow-xl transition-all group hover:border-[#0c67c4] bg-white text-center flex flex-col items-center">
                <div className="text-[#0c67c4] mb-6 transform scale-[1.4] transition-transform group-hover:scale-[1.6]">{s.icon}</div>
                <h3 className="text-sm font-bold text-[#2d465e] mb-3 font-nunito leading-tight">{s.title}</h3>
                <p className="text-[#212529] text-[11px] leading-relaxed font-roboto">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {detailedSections.map((sec, i) => (
        <section key={sec.id} className={cn("py-20 md:py-32", sec.bg)}>
          <div className="container mx-auto px-6 max-w-[1320px]">
            <div className={cn("flex flex-col lg:flex-row items-center gap-20", i % 2 !== 0 && "lg:flex-row-reverse")}>
              <motion.div
                initial={{ x: i % 2 === 0 ? -30 : 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="lg:w-1/2"
              >
                <div className="text-[#0c67c4] mb-6 font-bold uppercase tracking-widest text-sm font-inter flex items-center gap-3">
                  <span className="w-8 h-[2px] bg-[#0c67c4]"></span> {sec.subtitle}
                </div>
                <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-6 md:mb-8 font-nunito leading-[1.4]">{sec.title}</h2>
                <p className="text-[#212529] text-[16px] leading-[1.6] mb-10 font-roboto">{sec.desc}</p>
                <ul className="space-y-6">
                  {sec.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-[#212529] font-bold text-[18px] font-roboto">
                      <div className="bg-[#0c67c4] p-1 rounded-full"><CheckCircle size={14} className="text-white" /></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <div className="lg:w-1/2 w-full flex justify-center">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="w-full aspect-video bg-white rounded-[4rem] shadow-2xl flex items-center justify-center border-8 border-gray-50 relative overflow-hidden group"
                >
                  <img src={sec.img} alt={sec.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-[#0c67c4]/10 group-hover:bg-transparent transition-colors" />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="py-32 bg-[#0c67c4] text-white">
        <div className="container mx-auto px-6 max-w-[1320px] text-center">
          <h2 className="text-[28px] md:text-[32px] lg:text-[48px] font-bold mb-8 md:mb-10 font-nunito leading-[1.2] !text-white">Empower Your Business <br className="hidden md:block" /> with Data Intelligence.</h2>
          <p className="text-[20px] opacity-90 mb-14 max-w-3xl mx-auto font-roboto leading-[1.6] !text-white">
            From strategy to execution, DataMatrixIQ enables enterprises to scale smarter, innovate faster, and sustain success through data and AI.
          </p>
          <Link
            to="/contact-us"
            className="bg-white/15 border-2 border-white text-white px-16 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#0c67c4] transition-all shadow-2xl inline-block"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  )
}

const ClientsPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  return (
    <div className="bg-white min-h-screen">
      <section className="py-32">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-6 md:mb-10 font-nunito leading-[1.2] text-center">Trusted by Forward-Thinking Organizations</h2>
            <p className="text-[16px] text-[#212529] max-w-4xl mx-auto mb-20 font-roboto leading-[1.6]">
              At DataMatrixIQ, we’re proud to partner with ambitious businesses across industries, helping them unlock the power of data, cloud, and AI to drive measurable outcomes.
            </p>
            <div className="bg-white p-12 rounded-[4rem] border border-gray-100 shadow-2xl">
              <img
                src="https://datamatrixiq.com/img/datamatrix-client.png"
                className="mx-auto w-full transition-all duration-700"
                alt="Client Logos"
              />
            </div>
            <p className="text-gray-400 mt-16 max-w-2xl mx-auto italic font-inter text-sm">
              A snapshot of organizations we’ve partnered with across technology, finance, healthcare, and enterprise services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-32 bg-[#f3f9ff]">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-8 md:mb-12 font-nunito leading-[1.2]">Why Clients Choose DataMatrixIQ</h2>
              <div className="space-y-12">
                {[
                  { title: "Deep Engineering Expertise", desc: "Specialists in Data & AI engineering, Snowflake, Salesforce, and Cloud platforms (AWS, Azure, GCP)." },
                  { title: "Practical, Business-Focused Solutions", desc: "We don’t just build systems—we solve real business problems with measurable impact." },
                  { title: "True Partnership Approach", desc: "We work as an extension of your team, providing transparent communication and agile delivery." },
                  { title: "Scalable & Future-Ready Architecture", desc: "Our solutions are designed to grow with your business." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <h3 className="text-[20px] font-bold text-[#2d465e] mb-4 font-nunito">{item.title}</h3>
                    <p className="text-[16px] text-[#212529] font-roboto leading-[1.6]">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <img
                src="https://datamatrixiq.com/media/vnsabjs2/portfolio-page-title-bg.webp"
                className="rounded-[3rem] shadow-2xl relative z-10 w-full h-auto"
                alt="Data Strategy"
              />
              <div className="absolute -inset-4 bg-[#0c67c4]/10 rounded-[4rem] group-hover:scale-105 transition-transform" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const ContactPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const offices = [
    {
      country: "Australia",
      flag: "https://datamatrixiq.com/img/australia.png",
      phone: "+61 451 110 993",
      email: "contact@datamatrixiq.com",
      address: "Head Office - Wyndham City, Melbourne, Australia",
      delay: 0.1,
    },
    {
      country: "New Zealand",
      flag: "https://datamatrixiq.com/img/new-zealand.png",
      phone: "+64 22 038 6786",
      email: "contact@datamatrixiq.com",
      address: "Wellington CBD, New Zealand",
      delay: 0.2
    }
  ]

  return (
    <div className="bg-[#f3f9ff] min-h-screen">
      <section className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-6 max-w-[1320px] text-center mb-16 pt-10">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-[36px] md:text-[48px] font-bold text-[#2d465e] mb-6 font-nunito">Contact</h1>
            <p className="text-[16px] text-[#212529] max-w-4xl mx-auto font-roboto leading-[1.6]">
              Let's start a conversation about your goals.Our experts are ready to deliver measurable results.
            </p>
          </motion.div>
        </div>

        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
            {offices.map((office, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: office.delay }}
                className="bg-[#0c67c4] text-white p-10 rounded-[2.5rem] shadow-2xl border border-white/10 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-500"
              >
                <h2 className="text-3xl font-bold text-white font-nunito mb-12">{office.country}</h2>
                <div className="flex flex-col gap-10 w-full">
                  <div className="flex flex-col items-center group/item">
                    <div className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center mb-4 transition-all group-hover/item:bg-white group-hover/item:text-[#0c67c4]">
                      <Phone className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-white/70 text-sm font-nunito uppercase tracking-widest mb-2">Phone Number</h4>
                    <a href={`tel:${office.phone.replace(/\s/g, '')}`} className="text-white text-lg font-bold hover:underline">{office.phone}</a>
                  </div>
                  <div className="flex flex-col items-center group/item">
                    <div className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center mb-4 transition-all group-hover/item:bg-white group-hover/item:text-[#0c67c4]">
                      <Mail className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-white/70 text-sm font-nunito uppercase tracking-widest mb-2">Email Address</h4>
                    <a href={`mailto:${office.email}`} className="text-white text-lg font-bold hover:underline">{office.email}</a>
                  </div>
                  <div className="flex flex-col items-center group/item">
                    <div className="w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center mb-4 transition-all group-hover/item:bg-white group-hover/item:text-[#0c67c4]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="font-bold text-white/70 text-sm font-nunito uppercase tracking-widest mb-2">Our Location</h4>
                    <p className="text-white text-lg font-bold max-w-[280px]">{office.address}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 lg:p-16 shadow-[0_20px_80px_rgba(0,0,0,0.08)] border border-gray-50"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-[#2d465e] mb-2 font-nunito">Get In Touch</h3>
              <p className="text-[#2d465e] font-inter text-md">Have a project in mind? Tell us more.</p>
              <p className="text-gray-500 font-inter text-md mt-1">Use the form below and our team will get back to you within 24 hours.</p>
            </div>

            <form className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="First Name *" className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl outline-none focus:border-[#0c67c4] transition-all font-inter" required />
              <input type="text" placeholder="Last Name *" className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl outline-none focus:border-[#0c67c4] transition-all font-inter" required />
              <input type="email" placeholder="Your Email *" className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl outline-none focus:border-[#0c67c4] transition-all font-inter" required />
              <input type="tel" placeholder="Phone Number *" className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl outline-none focus:border-[#0c67c4] transition-all font-inter" required />
              <div className="md:col-span-2">
                <select className="w-full bg-white border border-gray-200 px-6 py-4 rounded-xl outline-none focus:border-[#0c67c4] transition-all font-inter text-gray-500" defaultValue="" required>
                  <option value="" disabled hidden>Services *</option>
                  <option value="Data Engineering">Data Engineering</option>
                  <option value="AI & Machine Learning">AI & Machine Learning</option>
                  <option value="Application Modernization">Application Modernization</option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <textarea placeholder="Message" rows={4} className="md:col-span-2 w-full bg-white border border-gray-200 px-6 py-4 rounded-xl outline-none focus:border-[#0c67c4] transition-all font-inter resize-none" required></textarea>
              <div className="md:col-span-2 text-center mt-6">
                <button type="submit" className="bg-[#0c67c4] text-white px-12 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all">Send Message</button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const ScheduleACall = ({ onOpenModal }) => (
  <section className="bg-white pb-24 border-t border-gray-100">
    <div className="container mx-auto px-6 max-w-[1320px]">
      <div className="bg-[#0c67c4] text-white p-10 md:p-24 rounded-[2.5rem] md:rounded-[4rem] text-center shadow-2xl relative overflow-hidden">
        <h2 className="text-[32px] md:text-[48px] font-bold mb-6 md:mb-8 font-nunito !text-white">Schedule a Call</h2>
        <p className="max-w-4xl mx-auto mb-14 text-[20px] opacity-90 leading-[1.6] font-roboto !text-white">Let’s Build Your Data Foundation Together. Struggling with slow insights, outdated pipelines, or disconnected platforms? Let’s design a solution that scales.</p>
        <Link
          to="/contact-us"
          className="bg-white/15 border-2 border-white text-white px-16 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0c67c4] transition-all font-inter inline-block"
        >
          Book a Call
        </Link>
      </div>
    </div>
  </section>
)

const HomePage = ({ onOpenModal }) => (
  <>
    <Hero onOpenModal={onOpenModal} />
    <ServicesPreview />
    <CapabilitySection />
    <IndustriesGrid />
    <AboutSection />
    <ScheduleACall onOpenModal={onOpenModal} />
  </>
)

const IndustriesPage = () => {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const allIndustries = [
    { title: "Power, Utilities & Energy", desc: "Smart energy through AI forecasting, demand response, and grid analytics for a sustainable future.", icon: <Zap /> },
    { title: "Retail & CPG", desc: "Personalized shopping experiences and intelligent supply chain management through AI and data.", icon: <ShoppingCart /> },
    { title: "Banking, Financial Services & Insurance", desc: "Transforming BFSI with predictive insights, risk management, fraud detection, and digital trust.", icon: <CreditCard /> },
    { title: "Media & Entertainment", desc: "Intelligent content delivery, audience analytics, and next-gen media experiences powered by AI.", icon: <Monitor /> },
    { title: "Oil & Gas", desc: "AI-powered exploration, production optimization, and predictive maintenance at industrial scale.", icon: <Droplets /> },
    { title: "Manufacturing", desc: "Smart factories powered by IoT, AI automation, and real-time data-driven production insights.", icon: <Factory /> },
    { title: "ITES", desc: "AI-enhanced IT and managed service excellence for digital-first enterprise transformation.", icon: <Server /> },
    { title: "Renewables", desc: "Driving clean energy innovation with AI optimization for solar, wind and storage assets.", icon: <Leaf /> },
    { title: "Sustainability", desc: "Data-led decarbonization strategies for a greener, more resilient planet and supply chain.", icon: <Globe /> },
    { title: "Mining", desc: "AI-powered safety, operations, and resource management for smarter and more efficient mining.", icon: <Hammer /> },
    { title: "Healthcare & Life Sciences", desc: "Clinical analytics, patient intelligence, and AI-driven precision medicine for better outcomes.", icon: <Activity /> },
  ]

  const featured = [
    { title: "Power & Energy", sub: "Smart grid & forecasting solutions.", icon: <Zap size={40} /> },
    { title: "Retail & CPG", sub: "Personalized experiences & supply intelligence.", icon: <ShoppingCart size={40} /> },
    { title: "Banking & Finance", sub: "Predictive risk & secure operations.", icon: <CreditCard size={40} /> },
    { title: "Healthcare", sub: "Clinical analytics & patient intelligence.", icon: <Activity size={40} /> },
  ]

  const partners = ["Fivetran", "Sigma", "Prophecy", "AWS", "Salesforce", "Microsoft", "Snowflake", "Collibra"]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="relative py-28 lg:py-40 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-[1320px] relative z-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left Column: Text Content */}
            <motion.div
              initial={{ x: -60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:w-[60%]"
            >
              <h1 className="text-[32px] md:text-[48px] font-bold text-[#2d465e] mb-6 md:mb-10 font-nunito leading-[1.2] tracking-tight">
                Intelligence That Transforms <br className="hidden lg:block" /> Every Industry.
              </h1>
              <p className="text-[16px] text-[#212529] mb-14 font-roboto leading-[1.6] max-w-2xl">
                From energy to healthcare, from retail to finance — we bring AI and data-driven innovation that fuels growth, resilience, and sustainability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                <a
                  href="#industries-grid"
                  onClick={e => { e.preventDefault(); document.getElementById('industries-grid')?.scrollIntoView({ behavior: 'smooth' }) }}
                  className="bg-[#0c67c4] text-white px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg shadow-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-2 group w-full sm:w-auto"
                >
                  Explore Industries <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  to="/contact-us"
                  className="border-2 border-[#0c67c4] text-[#0c67c4] px-8 md:px-10 py-3.5 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-[#0c67c4] hover:text-white transition-all shadow-md text-center w-full sm:w-auto"
                >
                  Book a Call
                </Link>
              </div>
            </motion.div>

            {/* Right Column: Featured Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:w-[40%] w-full"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-[#0c67c4]/5 rounded-[3rem] blur-2xl" />
                <div className="relative bg-white p-6 lg:p-10 rounded-[2.5rem] shadow-[0_20px_100px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-700">
                  <img
                    src="https://datamatrixiq.com/media/g4ipsjwu/industries_banner.png"
                    alt="Industries Roadmap"
                    className="w-full h-auto object-contain "
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intelligence Everywhere Grid */}
      <section id="industries-grid" className="py-20 md:py-32 bg-[#f3f9ff]">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="text-center mb-20">
            <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-4 font-nunito">Intelligence Everywhere</h2>
            <div className="w-14 h-[3px] bg-[#0c67c4] mx-auto mb-8" />
            <p className="text-[#212529] max-w-3xl mx-auto text-[16px] leading-[1.6] font-roboto">11 industries — one unified approach to intelligence.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allIndustries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all group cursor-pointer"
              >
                <div className="w-16 h-16 bg-[#e7f1ff] rounded-2xl flex items-center justify-center mb-8 text-[#0c67c4] group-hover:bg-[#0c67c4] group-hover:text-white transition-all">
                  {ind.icon}
                </div>
                <h3 className="text-[18px] font-bold text-[#2d465e] mb-4 font-nunito">{ind.title}</h3>
                <p className="text-[#212529] text-[13px] leading-relaxed font-roboto">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Industries Slider */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="flex items-end justify-between mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-4 font-nunito">Featured Industries</h2>
              <div className="w-14 h-[3px] bg-[#0c67c4] mb-4" />
              <p className="text-[#212529] font-roboto text-[16px]">Transforming Industries with Data Intelligence</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featured.map((f, i) => (
              <motion.div
                key={i}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] border border-gray-100 bg-white hover:shadow-2xl hover:border-[#0c67c4] hover:-translate-y-2 transition-all group flex flex-col items-center text-center"
              >
                <div className="mb-8 text-[#0c67c4] transform group-hover:scale-110 transition-transform">{f.icon}</div>
                <h3 className="text-[20px] font-bold text-[#2d465e] mb-4 font-nunito">{f.title}</h3>
                <p className="text-[#212529] text-[14px] font-roboto leading-relaxed">{f.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DataMatrixIQ */}
      <section className="py-20 md:py-32 bg-[#f3f9ff]">
        <div className="container mx-auto px-6 max-w-[1320px]">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-[24px] md:text-[32px] font-bold text-[#2d465e] mb-6 md:mb-8 font-nunito leading-[1.2]">Why Global Enterprises Choose DataMatrixIQ</h2>
              <p className="text-[#212529] text-[16px] mb-12 font-roboto leading-[1.6]">
                Deep industry understanding combined with AI innovation. Proven accelerators for faster deployment. Secure, scalable, cloud-first architecture. Commitment to ethical AI and sustainability.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-12">
                {[
                  { title: "Deep Industry Understanding", icon: <Target size={20} /> },
                  { title: "Proven Accelerators", icon: <Rocket size={20} /> },
                  { title: "Secure Scalable Architecture", icon: <Shield size={20} /> },
                  { title: "Ethical AI Commitment", icon: <CheckCircle size={20} /> },
                ].map((p, i) => (
                  <div key={i} className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-[#0c67c4] transition-all">
                    <div className="text-[#0c67c4] shrink-0">{p.icon}</div>
                    <span className="font-bold text-[#2d465e] text-sm font-nunito">{p.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white p-12 pr-12 pb-16 rounded-[4rem] shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col items-center justify-center">
                <h3 className="text-xl font-bold text-[#2d465e] mb-14 font-nunito text-center">Our Technology Partners</h3>
                <img src="https://datamatrixiq.com/img/service-image.png" alt="Technology Partners" className="w-[110%] h-auto object-contain transform scale-105" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-[#0d1b2a] to-[#0c67c4] text-white">
        <div className="container mx-auto px-6 max-w-[1320px] text-center">
          <h2 className="text-[32px] md:text-[48px] font-bold mb-6 md:mb-8 font-nunito leading-[1.2] !text-white">Let's Redefine What's Possible<br className="hidden md:block" />in Your Industry.</h2>
          <p className="text-[18px] opacity-80 mb-14 max-w-2xl mx-auto font-roboto leading-[1.6] !text-white">
            Partner with DataMatrixIQ to harness data, AI, and innovation that transform performance, sustainability, and growth.
          </p>
          <Link
            to="/contact-us"
            className="bg-white/15 border-2 border-white text-white px-16 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-[#0c67c4] transition-all shadow-2xl inline-block"
          >
            Book a Call
          </Link>
        </div>
      </section>
    </div>
  )
}

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen bg-white font-roboto text-[#212529] antialiased">
      <Navbar onOpenModal={openModal} />
      <Routes>
        <Route path="/" element={<HomePage onOpenModal={openModal} />} />
        <Route path="/services" element={<ServicesPage onOpenModal={openModal} />} />
        <Route path="/about-us" element={<AboutPage onOpenModal={openModal} />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/core-capabilities" element={<CapabilitiesPage onOpenModal={openModal} />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/team-profile/:id" element={<TeamProfilePage />} />
        <Route path="/privacy-policy" element={<HomePage onOpenModal={openModal} />} />
        <Route path="/terms-of-use" element={<HomePage onOpenModal={openModal} />} />
        <Route path="*" element={<HomePage onOpenModal={openModal} />} />
      </Routes>
      <HeroModal isOpen={isModalOpen} onClose={closeModal} />
      <Footer onOpenModal={openModal} />
    </div>
  )
}

export default App
