import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useSpring, useInView, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Target, 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Linkedin, 
  Instagram, 
  Twitter, 
  Facebook, 
  Mail, 
  Phone, 
  Calendar,
  Zap,
  Users,
  ShieldCheck,
  TrendingUp,
  ExternalLink,
  Menu,
  X
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <motion.img 
            src="/logo.png" 
            alt="Ashana Pro Logo" 
            className="h-10 w-auto"
            whileHover={{ rotate: 10, scale: 1.1 }}
          />
          <span className={`text-2xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            Ashana <span className="text-blue-600">Pro</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-bold uppercase tracking-widest text-slate-600 hover:text-blue-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <motion.a 
            href="https://calendly.com/mme-etik" 
            target="_blank" 
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all"
          >
            Book a Demo
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl p-6 flex flex-col gap-6 md:hidden border-t"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-slate-700 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://calendly.com/mme-etik" 
              className="bg-blue-600 text-white p-4 rounded-2xl text-center font-bold shadow-xl"
            >
              Book a Demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const AnimatedCounter = ({ value, label, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="p-8 bg-white/50 backdrop-blur-sm rounded-[2rem] border border-blue-50 shadow-xl shadow-blue-50/50">
      <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-500 font-bold uppercase tracking-widest text-xs">
        {label}
      </div>
    </div>
  );
};

const ServiceCard = ({ title, struggle, icon: Icon, features, colorClass, gradient }) => {
  return (
    <motion.div 
      whileHover={{ y: -15, scale: 1.02 }}
      className="relative p-10 bg-white rounded-[3rem] shadow-2xl shadow-slate-200 border border-slate-100 flex flex-col h-full group overflow-hidden"
    >
      <div className={`absolute top-0 right-0 w-40 h-40 opacity-10 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${gradient} rounded-full -mr-20 -mt-20`}></div>
      
      <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-8 bg-gradient-to-br ${gradient} text-white shadow-xl transform group-hover:rotate-6 transition-transform duration-500`}>
        <Icon size={36} />
      </div>

      <h3 className="text-3xl font-black mb-4 text-slate-900 leading-tight">{title}</h3>
      
      <div className={`p-6 rounded-2xl mb-8 border leading-snug italic font-bold ${colorClass}`}>
        "{struggle}"
      </div>

      <ul className="space-y-4 mb-10 flex-grow">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-slate-600 font-medium">
            <CheckCircle2 size={18} className="text-blue-500 mt-1 flex-shrink-0" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <motion.a 
        href="https://calendly.com/mme-etik" 
        target="_blank" 
        rel="noopener noreferrer"
        whileHover={{ x: 5 }}
        className={`flex items-center justify-center gap-3 w-full py-5 rounded-2xl text-white font-bold text-lg shadow-xl transition-all bg-gradient-to-r ${gradient}`}
      >
        Book a Demo <ArrowRight size={20} />
      </motion.a>

      {/* Gamified Achievement Badge */}
      <div className="absolute top-8 right-8 bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all translate-y-4 group-hover:translate-y-0">
        Premium Service
      </div>
    </motion.div>
  );
};

const Step = ({ number, title, description, isLast }) => {
  return (
    <div className="relative flex flex-col items-center text-center group">
      <motion.div 
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-24 h-24 bg-blue-600 text-white rounded-3xl flex items-center justify-center text-4xl font-black shadow-2xl shadow-blue-200 z-10 mb-8"
      >
        {number}
      </motion.div>
      <h4 className="text-2xl font-black mb-4 text-slate-900">{title}</h4>
      <p className="text-slate-500 font-medium leading-relaxed px-4">{description}</p>
      
      {!isLast && (
        <div className="hidden lg:block absolute top-12 left-[calc(50%+4rem)] w-[calc(100%-8rem)] h-[4px] bg-gradient-to-r from-blue-600 to-blue-100 rounded-full"></div>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#FDFEFF] text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      <Navbar />

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-2 bg-blue-600 z-[60] origin-left"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <header className="relative pt-32 pb-24 md:pt-52 md:pb-40 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-60 -z-10"></div>
        <div className="absolute top-1/2 -left-24 w-64 h-64 bg-indigo-100 rounded-full blur-[100px] opacity-40 -z-10"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100 shadow-sm">
              <Zap size={14} fill="currentColor" /> B2B Growth Engine
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-8 text-slate-900">
              Scale Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Business</span> <br />
              Without Overhead
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 mb-12 leading-relaxed font-medium max-w-xl">
              Ashana Pro is your done-for-you growth partner. We automate your prospecting, manage your online authority, and build your digital sales floor.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a 
                href="https://calendly.com/mme-etik"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-10 py-6 rounded-[2rem] text-xl font-black shadow-2xl shadow-blue-200 transition-all flex items-center justify-center gap-3"
              >
                Book Your Strategy Call <Calendar size={24} />
              </motion.a>
              <motion.a 
                href="#services"
                whileHover={{ scale: 1.05 }}
                className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-6 rounded-[2rem] text-xl font-black transition-all flex items-center justify-center gap-3 hover:bg-slate-50"
              >
                See Our Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl shadow-blue-200 rotate-2 border-[12px] border-white">
              <img src="/banner.png" alt="Ashana Pro Growth" className="w-full h-auto object-cover" />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-[3rem] -z-10 rotate-12 opacity-20 blur-2xl"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-600 rounded-[3rem] -z-10 -rotate-12 opacity-20 blur-2xl"></div>
          </motion.div>
        </div>
      </header>

      {/* Metrics Section */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatedCounter value="50" label="Leads Generated" suffix="+" />
          <AnimatedCounter value="98" label="Delivery Rate" suffix="%" />
          <AnimatedCounter value="150" label="Meetings/Mo Goal" suffix="+" />
          <AnimatedCounter value="0" label="Hiring Friction" suffix="%" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Premium Growth Services</h2>
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto">
              Everything you need to turn your B2B business into an unstoppable client acquisition machine.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12">
            <ServiceCard 
              title="Lead Gen Systems"
              struggle="Is your sales team spending too much time prospecting instead of closing?"
              icon={Target}
              gradient="from-blue-600 to-blue-400"
              colorClass="bg-blue-50 text-blue-700 border-blue-100"
              features={[
                "AI-Powered Prospecting 24/7",
                "Multi-Channel Outreach (Email, SMS)",
                "Qualified Meeting Booking",
                "Automated Follow-ups",
                "Full CRM Integration"
              ]}
            />
            <ServiceCard 
              title="Social Media Mgmt"
              struggle="Is your business invisible to the clients who are looking for you?"
              icon={Users}
              gradient="from-indigo-600 to-blue-500"
              colorClass="bg-indigo-50 text-indigo-700 border-indigo-100"
              features={[
                "B2B Authority Strategy",
                "Daily High-Value Content",
                "Social Engagement & Replies",
                "Multi-Platform Management",
                "Brand Reputation Monitoring"
              ]}
            />
            <ServiceCard 
              title="Website Creation"
              struggle="Do you think your business is too good not to have a website that sells for you?"
              icon={Globe}
              gradient="from-slate-900 to-slate-700"
              colorClass="bg-slate-50 text-slate-700 border-slate-200"
              features={[
                "Conversion-First Design",
                "SEO & Performance Optimized",
                "Sales Floor Architecture",
                "Full Ownership Transfer",
                "Responsive Mobile Experience"
              ]}
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-6 bg-slate-900 text-white overflow-hidden relative">
        {/* Animated Background */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[150px]"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Your Road To Success</h2>
            <p className="text-xl text-slate-400 font-medium max-w-2xl mx-auto">
              Our 3-step process ensures your growth engine is built right and scales fast.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-20">
            <Step 
              number="1"
              title="We Build Your System"
              description="Our experts configure your custom lead gen and social systems to align perfectly with your B2B offer."
            />
            <Step 
              number="2"
              title="We Generate & Qualify"
              description="Our AI agents work around the clock to find, qualify, and engage your ideal prospects on autopilot."
            />
            <Step 
              number="3"
              title="You Close the Deals"
              description="Wake up to a calendar full of pre-qualified meetings. You focus on closing, we handle the volume."
              isLast
            />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mt-32 p-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-[4rem] text-center shadow-2xl"
          >
            <h3 className="text-3xl md:text-5xl font-black mb-10">Ready to automate your growth?</h3>
            <a href="https://calendly.com/mme-etik" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-16 py-7 rounded-full text-2xl font-black shadow-2xl hover:scale-105 transition-all">
              Claim Your Strategy Call
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6">
        <div className="max-w-7xl mx-auto bg-white rounded-[4rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative p-12 md:p-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-blue-50 text-blue-600 rounded-full text-xs font-black uppercase tracking-widest border border-blue-100 shadow-sm">
                The Visionary Behind Ashana
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter text-slate-900 leading-tight">Empowering B2B Founders</h2>
              <p className="text-xl text-slate-500 mb-10 leading-relaxed font-medium">
                Mohamed Ebraheem founded Ashana Pro with a single goal: to give B2B businesses the same high-level sales systems used by billion-dollar firms, without the massive overhead.
              </p>
              <p className="text-xl text-slate-500 mb-12 leading-relaxed font-medium">
                With 2+ years of top-achieving sales experience across multiple industries, Mohamed understands that the key to scaling is consistency and automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 w-full sm:w-fit">
                <div className="flex flex-col justify-center">
                  <p className="text-2xl font-black text-slate-900 leading-none">Mohamed Ebraheem</p>
                  <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mt-2">CEO, Ashana Pro</p>
                  <div className="flex gap-4 mt-4">
                    <a href="https://www.linkedin.com/in/awsmate/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-full min-h-[400px] lg:min-h-full">
              <img src="/founder.jpg" alt="Mohamed Ebraheem" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent lg:hidden"></div>
              <div className="absolute bottom-10 left-10 text-white lg:hidden">
                <p className="text-2xl font-black">Mohamed Ebraheem</p>
                <p className="text-blue-400 font-bold">CEO & Founder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="bg-slate-50 pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 mb-24">
            <div>
              <div className="flex items-center gap-3 mb-10 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <img src="/logo.png" alt="Ashana Pro Logo" className="h-12 w-auto" />
                <span className="text-3xl font-black tracking-tighter text-slate-900">
                  Ashana <span className="text-blue-600">Pro</span>
                </span>
              </div>
              <p className="text-xl text-slate-500 font-medium mb-10 max-w-md">
                The premier growth partner for B2B businesses ready to dominate their market through automated lead systems and authority building.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/company/109667154/admin/dashboard/" },
                  { icon: Instagram, href: "https://www.instagram.com/ashana.pro/" },
                  { icon: Twitter, href: "https://x.com/proashana" },
                  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61591263486185" },
                ].map((social, i) => (
                  <motion.a 
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-slate-400 hover:text-blue-600 hover:shadow-xl transition-all border border-slate-100"
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="bg-white p-10 md:p-16 rounded-[4rem] shadow-2xl shadow-slate-200 border border-slate-100">
              <h3 className="text-3xl font-black mb-10 text-slate-900">Get In Touch</h3>
              <div className="space-y-8">
                <a href="mailto:mohamed.ashanapro@gmail.com" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Email Us</p>
                    <p className="text-xl font-black text-slate-900">mohamed.ashanapro@gmail.com</p>
                  </div>
                </a>
                
                <div className="flex flex-col sm:flex-row gap-6">
                  <a href="tel:+14582453965" className="flex items-center gap-6 group flex-1">
                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Call Us</p>
                      <p className="text-lg font-black text-slate-900">+1 (458) 245-3965</p>
                    </div>
                  </a>
                  <a href="https://wa.me/14582453965" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group flex-1">
                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">WhatsApp</p>
                      <p className="text-lg font-black text-slate-900">Message Now</p>
                    </div>
                  </a>
                </div>

                <a href="https://www.linkedin.com/in/awsmate/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest">Connect with Founder</p>
                    <p className="text-xl font-black text-slate-900">Mohamed Ebraheem</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-slate-400 font-bold text-sm uppercase tracking-widest">
              © {new Date().getFullYear()} Ashana Pro. Built for B2B Domination.
            </div>
            <div className="flex gap-8 text-slate-400 font-bold text-sm uppercase tracking-widest">
              <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
              <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
              <a href="https://calendly.com/mme-etik" className="text-blue-600 hover:text-blue-700 transition-colors">Book Strategy Call</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
