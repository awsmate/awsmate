import React, { useEffect, useState } from 'react';

const App = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      setScrollProgress((currentScroll / totalScroll) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-blue-600 z-[100] transition-all duration-300" 
        style={{ width: `${scrollProgress}%` }}
      ></div>

      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 transition-all">
        <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src="/logo.png" alt="Ashana Pro Logo" className="w-10 h-10 object-contain group-hover:rotate-6 transition-transform duration-300" />
          <span className="text-xl font-bold tracking-tight">Ashana Pro</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
          <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
          <a href="https://calendly.com/mme-etik" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-5 py-2.5 rounded-full hover:bg-blue-700 transition-all shadow-md shadow-blue-100 active:scale-95">
            Book a Demo
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-24 md:py-40 max-w-7xl mx-auto text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full bg-blue-50 rounded-full blur-[120px] opacity-40 -z-10"></div>
        <div className="animate-slide-up">
          <div className="inline-block px-4 py-1.5 mb-6 bg-blue-50 text-blue-600 rounded-full text-sm font-bold tracking-wide uppercase border border-blue-100">
            The Done-For-You Growth Engine
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.05]">
            Scale Your B2B Business <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-400">Without the Overhead</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
            Stop the manual grind. We build and manage your lead generation, social presence, and sales websites so you can focus on one thing: closing deals.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a href="https://calendly.com/mme-etik" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-blue-600 text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 hover:-translate-y-1 active:translate-y-0">
              Start Scaling Now
            </a>
            <a href="#services" className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-50 transition-all hover:border-blue-200">
              Explore Our Services
            </a>
          </div>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="group transition-all duration-300">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 group-hover:scale-110 transition-transform">24/7</div>
            <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs">AI Prospecting</p>
          </div>
          <div className="group transition-all duration-300">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 group-hover:scale-110 transition-transform">100%</div>
            <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs">B2B Focused</p>
          </div>
          <div className="group transition-all duration-300">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 group-hover:scale-110 transition-transform">150+</div>
            <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs">Meetings/Mo Goal</p>
          </div>
          <div className="group transition-all duration-300">
            <div className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2 group-hover:scale-110 transition-transform">Zero</div>
            <p className="text-gray-500 font-semibold uppercase tracking-widest text-xs">Hiring Overhead</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-50 py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Core Services</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto font-medium">A comprehensive growth stack designed to turn your business into a sales powerhouse.</p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Lead Gen */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-blue-100/50 transition-all duration-500 flex flex-col group hover:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 relative z-10">Lead Gen Systems</h3>
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed relative z-10">
                Full-funnel lead generation using AI agents and multi-channel outreach. We handle scraping, qualification, and book meetings directly on your calendar.
              </p>
              
              <div className="pt-8 border-t border-gray-100 mt-auto relative z-10">
                <div className="bg-blue-50 p-6 rounded-2xl mb-6 border border-blue-100">
                  <p className="text-blue-700 font-bold leading-snug">
                    "Is your sales team spending too much time prospecting instead of closing?"
                  </p>
                </div>
                <a href="https://calendly.com/mme-etik" target="_blank" rel="noopener noreferrer" className="block w-full bg-blue-600 text-white text-center font-bold py-4 rounded-2xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 active:scale-95">
                  Book a Demo
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500 flex flex-col group hover:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 relative z-10">Social Media Mgmt</h3>
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed relative z-10">
                Comprehensive strategy, content creation, and engagement. Build authority and stay top-of-mind with your prospects through consistent, high-quality social presence.
              </p>

              <div className="pt-8 border-t border-gray-100 mt-auto relative z-10">
                <div className="bg-purple-50 p-6 rounded-2xl mb-6 border border-purple-100">
                  <p className="text-purple-700 font-bold leading-snug">
                    "Is your business invisible to the clients who are looking for you?"
                  </p>
                </div>
                <a href="https://calendly.com/mme-etik" target="_blank" rel="noopener noreferrer" className="block w-full bg-purple-600 text-white text-center font-bold py-4 rounded-2xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-100 active:scale-95">
                  Book a Demo
                </a>
              </div>
            </div>

            {/* Website Creation */}
            <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 hover:shadow-2xl hover:shadow-green-100/50 transition-all duration-500 flex flex-col group hover:-translate-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-50 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 transform group-hover:rotate-6 relative z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h3 className="text-2xl font-extrabold mb-4 relative z-10">Website Creation</h3>
              <p className="text-gray-500 mb-8 flex-grow leading-relaxed relative z-10">
                High-converting, SEO-optimized, sales-focused websites. We build the engine that turns visitors into qualified leads with professional design and full ownership.
              </p>

              <div className="pt-8 border-t border-gray-100 mt-auto relative z-10">
                <div className="bg-green-50 p-6 rounded-2xl mb-6 border border-green-100">
                  <p className="text-green-700 font-bold leading-snug">
                    "Do you think your business is too good not to have an online presence?"
                  </p>
                </div>
                <a href="https://calendly.com/mme-etik" target="_blank" rel="noopener noreferrer" className="block w-full bg-green-600 text-white text-center font-bold py-4 rounded-2xl hover:bg-green-700 transition-all shadow-lg shadow-green-100 active:scale-95">
                  Book a Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-32 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-20 tracking-tight">How We Scale You</h2>
        <div className="grid md:grid-cols-3 gap-16">
          <div className="relative group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">1</div>
            <h4 className="text-xl font-bold mb-2">Build the Engine</h4>
            <p className="text-gray-500 font-medium">We set up your custom lead gen and social systems in days, not months.</p>
            <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-blue-50"></div>
          </div>
          <div className="relative group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">2</div>
            <h4 className="text-xl font-bold mb-2">Automate Outreach</h4>
            <p className="text-gray-500 font-medium">Our AI agents engage 24/7, qualifying prospects and building authority.</p>
            <div className="hidden md:block absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-[2px] bg-blue-50"></div>
          </div>
          <div className="group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">3</div>
            <h4 className="text-xl font-bold mb-2">Close the Deals</h4>
            <p className="text-gray-500 font-medium">You wake up to qualified meetings on your calendar. You close, we scale.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 px-6 max-w-7xl mx-auto bg-blue-600 rounded-[3rem] text-white overflow-hidden relative shadow-2xl shadow-blue-200">
        <div className="grid md:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="inline-block px-4 py-1.5 mb-6 bg-blue-500/30 backdrop-blur-sm text-white rounded-full text-sm font-bold tracking-wide uppercase border border-blue-400">
              The Visionary
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Empowering B2B Growth</h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed font-medium">
              Mohamed Ebraheem founded Ashana Pro with a clear mission: remove the friction from B2B sales. With 2+ years of top-achieving sales experience, he built the agency he wished he had as a closer.
            </p>
            <div className="flex items-center gap-6 p-6 bg-white/10 backdrop-blur-sm rounded-3xl w-fit border border-white/20">
              <div className="w-20 h-20 bg-blue-400 rounded-2xl flex items-center justify-center font-black text-white text-3xl shadow-xl">ME</div>
              <div>
                <p className="text-xl font-bold">Mohamed Ebraheem</p>
                <p className="text-blue-200 font-semibold uppercase tracking-widest text-xs">CEO, Ashana Pro</p>
              </div>
            </div>
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold mb-8">Ready to transform your sales process?</h3>
            <p className="text-blue-100 text-lg mb-10 leading-relaxed font-medium">
              Stop worrying about where your next lead is coming from. Let's build the engine that powers your growth.
            </p>
            <a href="https://calendly.com/mme-etik" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-full text-xl font-bold hover:bg-blue-50 transition-all shadow-2xl hover:-translate-y-1 active:translate-y-0">
              Let's Talk
            </a>
          </div>
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-400 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-white rounded-full opacity-10 blur-3xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-20 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-12">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <img src="/logo.png" alt="Ashana Pro Logo" className="w-8 h-8 object-contain group-hover:rotate-6 transition-transform" />
              <span className="text-2xl font-bold tracking-tight">Ashana Pro</span>
            </div>
            
            <div className="flex gap-6">
              <a href="https://www.linkedin.com/company/ashana-pro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://www.instagram.com/ashanapro/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-600 hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441c.795 0 1.439-.645 1.439-1.441s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://x.com/ashanapro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-black hover:text-white transition-all shadow-sm">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.facebook.com/ashanapro" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all shadow-sm">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>

            <div className="flex gap-10 text-sm font-bold text-gray-600">
              <a href="#services" className="hover:text-blue-600 transition-colors uppercase tracking-widest">Services</a>
              <a href="#about" className="hover:text-blue-600 transition-colors uppercase tracking-widest">About</a>
              <a href="https://calendly.com/mme-etik" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline uppercase tracking-widest">Book Demo</a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-gray-50">
            <div className="text-gray-400 font-medium text-sm">
              © {new Date().getFullYear()} Ashana Pro. All rights reserved.
            </div>
            <div className="flex items-center gap-8 text-gray-400 text-sm font-medium">
              <a href="mailto:hello@ashanapro.com" className="hover:text-blue-600 transition-colors">hello@ashanapro.com</a>
              <span className="hidden md:inline w-1 h-1 bg-gray-200 rounded-full"></span>
              <span>+1 (555) 000-0000</span>
            </div>
            <div className="flex items-center gap-4 text-gray-400 text-sm font-medium">
              <a href="https://www.linkedin.com/in/mme-etik" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors flex items-center gap-1">
                Founder <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
