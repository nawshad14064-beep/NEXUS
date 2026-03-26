import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Layout, 
  Zap, 
  Users, 
  MessageSquare, 
  Globe, 
  Menu, 
  X,
  Star,
  ShieldCheck,
  Clock,
  Sparkles
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-primary via-secondary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
              <Zap className="text-white w-6 h-6 fill-white" />
            </div>
            <span className="font-black text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">NEXUS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Services</a>
            <a href="#benefits" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Benefits</a>
            <a href="#testimonials" className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors">Testimonials</a>
            <a 
              href="#contact" 
              className="bg-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all"
            >
              Get Started
            </a>
          </div>

          <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-b border-slate-100 px-4 py-8 flex flex-col gap-6 shadow-2xl"
          >
            <a href="#services" onClick={() => setIsOpen(false)} className="text-xl font-bold text-slate-900">Services</a>
            <a href="#benefits" onClick={() => setIsOpen(false)} className="text-xl font-bold text-slate-900">Benefits</a>
            <a href="#testimonials" onClick={() => setIsOpen(false)} className="text-xl font-bold text-slate-900">Testimonials</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="bg-gradient-to-r from-primary to-secondary text-white px-5 py-4 rounded-2xl text-center font-bold shadow-lg shadow-primary/20">Get Started</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-32 px-4 overflow-hidden bg-mesh-light">
    {/* Animated Background Blobs */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[10%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px]" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-accent/15 rounded-full blur-[120px]" 
      />
    </div>

    <div className="max-w-7xl mx-auto text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
          <Sparkles className="w-4 h-4" />
          Web Development for SaaS
        </div>
        <h1 className="text-6xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[0.95] text-balance">
          We build products <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">that scale revenue.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed font-medium">
          Nexus Digital helps SaaS startups turn complex ideas into high-performance web applications that convert.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a 
            href="#contact" 
            className="w-full sm:w-auto bg-slate-900 text-white px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:bg-primary hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all"
          >
            Book a Strategy Call <ArrowRight className="w-6 h-6" />
          </a>
          <a 
            href="#services" 
            className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-900 px-10 py-5 rounded-2xl font-bold text-xl hover:border-primary hover:text-primary transition-all"
          >
            View Our Work
          </a>
        </div>
        
        {/* Trust Badges */}
        <div className="mt-24 pt-12 border-t border-slate-200/50 flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="font-black text-2xl tracking-tighter">STRIPE</div>
          <div className="font-black text-2xl tracking-tighter">VERCEL</div>
          <div className="font-black text-2xl tracking-tighter">LINEAR</div>
          <div className="font-black text-2xl tracking-tighter">NOTION</div>
        </div>
      </motion.div>
    </div>
  </section>
);

const ProblemSection = () => (
  <section className="py-32 bg-white relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight text-slate-900">
            Stop losing users to <br />
            <span className="text-accent italic">slow, outdated</span> interfaces.
          </h2>
          <p className="text-xl text-slate-600 mb-10 leading-relaxed font-medium">
            Most SaaS products fail not because of their features, but because of poor user experience. If your app feels clunky, your users will leave.
          </p>
          <ul className="space-y-6">
            {[
              { text: "High bounce rates due to slow load times", color: "text-accent" },
              { text: "Confusing UX leading to support tickets", color: "text-primary" },
              { text: "Mobile experience that feels like an afterthought", color: "text-secondary" },
              { text: "Difficult to scale codebase", color: "text-slate-900" }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <div className={cn("w-6 h-6 rounded-full flex items-center justify-center mt-1 shrink-0 bg-slate-100 group-hover:bg-accent/10 transition-colors")}>
                  <X className="w-4 h-4 text-accent" />
                </div>
                <span className="text-slate-700 font-bold text-lg">{item.text}</span>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary via-secondary to-accent rounded-[3rem] blur-2xl opacity-20 animate-pulse" />
          <div className="relative bg-slate-900 p-10 rounded-[2.5rem] shadow-2xl border border-white/10 overflow-hidden">
            <div className="flex gap-2 mb-8">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="space-y-8">
              <div className="h-6 w-3/4 bg-white/10 rounded-full" />
              <div className="aspect-video w-full bg-white/5 rounded-3xl flex items-center justify-center border border-white/5">
                <div className="flex flex-col items-center gap-4">
                  <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                  <div className="text-white/30 font-mono text-sm tracking-widest uppercase">Optimizing...</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="h-24 bg-white/5 rounded-2xl border border-white/5" />
                <div className="h-24 bg-white/5 rounded-2xl border border-white/5" />
                <div className="h-24 bg-white/5 rounded-2xl border border-white/5" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => {
  const services = [
    {
      title: "UI/UX Design",
      desc: "User-centric interfaces designed to reduce friction and maximize engagement.",
      icon: <Layout className="w-7 h-7" />,
      color: "from-primary to-indigo-600",
      shadow: "shadow-primary/20"
    },
    {
      title: "Full-Stack Dev",
      desc: "Scalable, secure, and lightning-fast web applications built with modern tech.",
      icon: <Code2 className="w-7 h-7" />,
      color: "from-secondary to-teal-600",
      shadow: "shadow-secondary/20"
    },
    {
      title: "Performance Audit",
      desc: "Optimization strategies to ensure your app loads in under 1 second.",
      icon: <Zap className="w-7 h-7" />,
      color: "from-accent to-rose-600",
      shadow: "shadow-accent/20"
    }
  ];

  return (
    <section id="services" className="py-32 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-black mb-6 text-slate-900">Our Core Services</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Everything you need to build, launch, and scale your digital product.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className={cn(
                "p-10 bg-white border border-slate-100 rounded-[2.5rem] transition-all duration-300 group relative overflow-hidden",
                "hover:shadow-2xl", s.shadow
              )}
            >
              <div className={cn(
                "w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br text-white shadow-lg",
                s.color, s.shadow
              )}>
                {s.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 text-slate-900">{s.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg font-medium">{s.desc}</p>
              
              {/* Decorative Gradient Line */}
              <div className={cn("absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity", s.color)} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => (
  <section id="testimonials" className="py-32 bg-slate-900 text-white relative overflow-hidden">
    {/* Background Accents */}
    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/2" />

    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row gap-20 items-center">
        <div className="lg:w-1/3">
          <h2 className="text-5xl font-black mb-8 leading-tight">Trusted by <br /><span className="text-secondary">founders</span> worldwide.</h2>
          <div className="flex items-center gap-2 mb-6">
            {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">Average rating of 4.9/5 based on 50+ high-growth SaaS projects.</p>
        </div>
        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-8">
          {[
            {
              quote: "Nexus Digital transformed our MVP into a world-class product. Our conversion rate jumped by 40% in the first month.",
              author: "Sarah Chen",
              role: "CEO at FlowState",
              color: "border-primary/30"
            },
            {
              quote: "The speed and attention to detail are unmatched. They don't just write code; they understand business goals.",
              author: "Marcus Thorne",
              role: "CTO at CloudScale",
              color: "border-accent/30"
            }
          ].map((t, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.02 }}
              className={cn("p-10 bg-white/5 backdrop-blur-sm border rounded-[2.5rem] relative group", t.color)}
            >
              <MessageSquare className="absolute top-6 right-8 w-10 h-10 text-white/5 group-hover:text-white/10 transition-colors" />
              <p className="text-xl mb-10 italic text-slate-200 leading-relaxed font-medium">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10" />
                <div>
                  <div className="font-black text-lg">{t.author}</div>
                  <div className="text-sm text-slate-500 font-bold uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contact" className="py-32 px-4 bg-white relative">
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-[3rem] blur opacity-25" />
          <div className="relative bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-slate-100">
            <div className="text-center mb-14">
              <h2 className="text-4xl md:text-5xl font-black mb-6 text-slate-900">Ready to build something <span className="text-primary">great?</span></h2>
              <p className="text-xl text-slate-600 font-medium">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-green-100">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-3xl font-black mb-3 text-slate-900">Message Sent!</h3>
                <p className="text-xl text-slate-600 font-medium">We'll be in touch very soon.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-10 text-primary font-bold text-lg hover:underline underline-offset-8"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Full Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-primary focus:ring-0 outline-none transition-all font-medium text-lg"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Work Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="john@company.com"
                      className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-primary focus:ring-0 outline-none transition-all font-medium text-lg"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black text-slate-700 uppercase tracking-widest">Project Details</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="Tell us about your project goals..."
                    className="w-full px-6 py-4 rounded-2xl border-2 border-slate-100 focus:border-primary focus:ring-0 outline-none transition-all resize-none font-medium text-lg"
                  />
                </div>
                <button 
                  disabled={status === 'loading'}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black text-xl hover:bg-primary hover:shadow-2xl hover:shadow-primary/40 hover:-translate-y-1 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                  <ArrowRight className="w-6 h-6" />
                </button>
                
                <div className="flex items-center justify-center gap-8 pt-6 text-xs text-slate-400 font-black uppercase tracking-[0.2em]">
                  <div className="flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-green-500" /> Secure</div>
                  <div className="flex items-center gap-2"><Clock className="w-5 h-5 text-primary" /> 24h Response</div>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-20 border-t border-slate-100 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
            <Zap className="text-white w-5 h-5 fill-white" />
          </div>
          <span className="font-black text-xl tracking-tighter">NEXUS</span>
        </div>
        <div className="flex flex-wrap justify-center gap-10 text-sm font-bold text-slate-500 uppercase tracking-widest">
          <a href="#" className="hover:text-primary transition-colors">Privacy</a>
          <a href="#" className="hover:text-primary transition-colors">Terms</a>
          <a href="#" className="hover:text-primary transition-colors">Twitter</a>
          <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
        </div>
        <p className="text-sm text-slate-400 font-medium">© 2026 Nexus Digital. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <Services />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
