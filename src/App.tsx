/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Building2, 
  Ruler, 
  Layers, 
  Map as MapIcon, 
  Home, 
  HardHat, 
  Compass, 
  Layout, 
  Grid3X3, 
  Wallpaper, 
  Lamp, 
  TreePine, 
  Phone, 
  Clock, 
  MapPin, 
  ArrowUpRight,
  ArrowRight,
  Star,
  CheckCircle2,
  Quote
} from 'lucide-react';

const Reveal = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: any; title: string; description?: string; delay: number }) => (
  <Reveal delay={delay}>
    <div className="group p-8 border border-white/5 bg-[#111] hover:border-[#FF4500]/50 transition-all duration-500 rounded-3xl flex flex-col h-full shadow-2xl">
      <div className="w-12 h-12 rounded-full bg-white/5 group-hover:bg-[#FF4500]/10 flex items-center justify-center mb-6 transition-colors">
        <Icon className="w-6 h-6 text-[#FF4500]" />
      </div>
      <h3 className="text-2xl font-serif mb-3 tracking-tight text-white/90">{title}</h3>
      <p className="text-base text-gray-400 flex-grow font-light leading-relaxed">
        {description || "High-precision engineering and design solutions tailored for your architectural needs."}
      </p>
      <div className="mt-8 flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[#FF4500] opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Details</span>
        <ArrowUpRight className="w-4 h-4" />
      </div>
    </div>
  </Reveal>
);

const ProjectCard = ({ image, title, category }: { image: string, title: string, category: string }) => (
  <Reveal>
    <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-white/60 mb-2">{category}</span>
        <h4 className="text-2xl text-white font-serif italic mb-4">{title}</h4>
        <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
    </div>
  </Reveal>
);

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);
  const heroY = useTransform(scrollY, [0, 600], [0, 100]);
  const smoothHeroY = useSpring(heroY, { damping: 20, stiffness: 100 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { icon: Building2, title: "Surveying Engineering", description: "Accurate land surveying and topological mapping for construction readiness." },
    { icon: HardHat, title: "Construction Management", description: "End-to-end supervision and management of construction projects." },
    { icon: Ruler, title: "Structural Engineering", description: "Robust structural design ensuring safety and longevity of buildings." },
    { icon: Compass, title: "Engineering Consultant", description: "Expert technical advice and feasibility studies for your projects." },
    { icon: Home, title: "2D & 3D Home Plan", description: "Detailed architectural planning with immersive 3D visualizations." },
    { icon: Layers, title: "2D-3D Floor Plan", description: "Optimized floor layouts for residential and commercial spaces." },
    { icon: Grid3X3, title: "BIM Services", description: "Building Information Modeling for smarter construction workflows." },
    { icon: Layout, title: "Elevation Design", description: "Stunning front elevation designs that define your building's character." },
    { icon: Wallpaper, title: "Exterior Design", description: "Aesthetic exterior treatments and cladding solutions." },
    { icon: Lamp, title: "Interior Design", description: "Modern, functional, and soulful interior spaces tailored to you." },
    { icon: TreePine, title: "Landscape Design", description: "Integration of nature and architecture for harmonious environments." },
    { icon: MapIcon, title: "Map Service", description: "Official map preparation and documentation for approvals." }
  ];

  const timings = [
    { day: "Wednesday", time: "10:00 AM – 8:30 PM" },
    { day: "Thursday", time: "10:00 AM – 8:30 PM" },
    { day: "Friday", time: "10:00 AM – 8:30 PM" },
    { day: "Saturday", time: "10:00 AM – 8:30 PM" },
    { day: "Sunday", time: "Closed", closed: true },
    { day: "Monday", time: "10:00 AM – 8:30 PM" },
    { day: "Tuesday", time: "10:00 AM – 8:30 PM" },
  ];

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-[#FF4500] selection:text-white font-sans text-white overflow-x-hidden">
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-4 bg-[#050505]/80 backdrop-blur-md border-b border-white/5' 
            : 'py-8 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tighter flex flex-col leading-none">
            <span className="font-serif italic text-2xl text-white">BUILDOMN STUDIO</span>
            <span className="text-[10px] tracking-[0.4em] uppercase opacity-50 mt-1 text-white">Civil & Construction</span>
          </a>
          
          <div className="hidden md:flex items-center space-x-10">
            <a href="#services" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#portfolio" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Projects</a>
            <a href="#about" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#contact" className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>

          <a href="tel:980007xxxx" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest bg-white text-black px-6 py-3 rounded-full hover:scale-105 transition-all">
            <Phone className="w-3 h-3" />
            <span>980007xxxx</span>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#050505]">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <div className="absolute top-0 left-0 w-full h-full opacity-60 mix-blend-screen">
            <img 
              src="https://framerusercontent.com/images/9zvwRJAavKKacVyhFCwHyXW1U.png?width=1536&height=1024" 
              alt="Atmosphere" 
              className="w-full h-full object-cover object-center opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505] z-10"></div>
        </div>

        {/* Floating Surrealist Elements */}
        <motion.div 
          className="absolute -left-[10%] top-[-10%] md:left-[-5%] md:top-[-15%] w-[50vw] md:w-[40vw] max-w-[800px] z-10 pointer-events-none mix-blend-hard-light opacity-80"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 2, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src="https://framerusercontent.com/images/KNhiA5A2ykNYqNkj04Hk6BVg5A.png?width=1540&height=1320" 
            alt="Hand Reaching" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div 
          className="absolute -right-[10%] bottom-[-10%] md:right-[-5%] md:bottom-[-5%] w-[45vw] md:w-[35vw] max-w-[700px] z-10 pointer-events-none mix-blend-hard-light opacity-80"
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -2, 0]
          }}
          transition={{ 
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img 
            src="https://framerusercontent.com/images/X89VFCABCEjjZ4oLGa3PjbOmsA.png?width=1542&height=1002" 
            alt="Hand Receiving" 
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="container mx-auto px-6 relative z-20 text-center flex flex-col items-center justify-center h-full">
          <motion.div style={{ opacity: heroOpacity, y: smoothHeroY }} className="max-w-4xl mx-auto">
            <Reveal>
              <h1 className="text-6xl md:text-8xl font-medium leading-[1.1] tracking-tight mb-8 text-[#ffe0e0] mix-blend-overlay font-serif" 
                  style={{ textShadow: '0 0 12px rgba(255,255,255,0.71)' }}>
                BUILDOMN. <br />
                <span className="italic font-light text-[#ffe0e0]">Studio & Construction.</span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.4}>
              <p className="text-lg md:text-xl text-[#ffe0e0]/90 max-w-xl mx-auto mb-16 font-light tracking-wide leading-relaxed mix-blend-overlay"
                 style={{ textShadow: '0 0 12px rgba(255,255,255,0.71)' }}>
                Satna's premier engineering consultant. We turn the unseen into the unforgettable architectural reality.
              </p>
            </Reveal>

            <Reveal delay={0.6}>
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#services" className="px-10 py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-all">
                    Enter the Archive
                  </a>
                  <a href="#contact" className="px-10 py-5 border border-white/20 backdrop-blur-sm rounded-full font-bold uppercase tracking-widest text-xs hover:bg-white/10 transition-all text-white">
                    Start Project
                  </a>
                </div>
                
                <div className="flex items-center gap-4 text-[10px] md:text-xs text-white/40 uppercase tracking-widest font-mono">
                  <span>NYC, USA</span>
                  <span className="w-px h-3 bg-white/20"></span>
                  <span>OMNAG OO</span>
                </div>
              </div>
            </Reveal>
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="services" className="py-32 bg-[#050505] relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
            <div className="max-w-2xl">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 tracking-tight text-white/90">
                  Engineering <br /> <span className="italic font-light">Elegance</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-gray-500 font-light text-lg">
                  Precision in every line. We remove the noise so your structure resonates with absolute technical clarity.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <div className="text-right">
                <div className="text-3xl font-serif leading-none mb-1 text-[#FF4500]">01</div>
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-40">Section One</div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((s, idx) => (
              <ServiceCard key={idx} icon={s.icon} title={s.title} description={s.description} delay={idx * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-32 bg-[#141414] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-24">
            <Reveal>
              <span className="text-xs font-mono uppercase tracking-[0.4em] text-[#FF4500] font-bold mb-4 block">Portfolio</span>
              <h2 className="text-5xl md:text-7xl font-serif mb-8">Selected Works</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/40 max-w-xl mx-auto font-light">
                A showcase of our precision in 3D planning and structural execution across omnag oo and surrounding regions.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProjectCard 
              image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000"
              title="Modern Luxury Villa"
              category="3D Elevation & Interior"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1000"
              title="Commercial Complex"
              category="Structural Design"
            />
            <ProjectCard 
              image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000"
              title="The Green Landscape"
              category="Landscape & Exterior"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/3">
              <Reveal>
                <h2 className="text-4xl md:text-6xl font-serif mb-8 italic text-white/90">Testimonials</h2>
                <div className="w-12 h-12 bg-white/5 text-[#FF4500] flex items-center justify-center rounded-full">
                  <Quote className="w-6 h-6" />
                </div>
              </Reveal>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-6 p-8 border border-white/5 rounded-3xl bg-[#111]">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FF4500] text-[#FF4500]" />)}
                  </div>
                  <p className="text-xl font-light leading-relaxed italic text-gray-300">
                    "Buildomn Studio delivered exactly what we visioned. Their 3D home plan was so detailed, it made the construction process much smoother."
                  </p>
                  <div className="mt-4">
                    <span className="font-bold uppercase tracking-widest text-[10px] text-white">Mr. Rajesh Kumar</span>
                    <span className="block text-[10px] opacity-40 text-gray-400">Residential Client</span>
                  </div>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="flex flex-col gap-6 p-8 border border-white/5 rounded-3xl bg-[#111]">
                  <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#FF4500] text-[#FF4500]" />)}
                  </div>
                  <p className="text-xl font-light leading-relaxed italic text-gray-300">
                    "The structural engineering advice provided by Buildomn Studio saved us significant costs while increasing building safety. Highly recommended."
                  </p>
                  <div className="mt-4">
                    <span className="font-bold uppercase tracking-widest text-[10px] text-white">Amit Singh</span>
                    <span className="block text-[10px] opacity-40 text-gray-400">Commercial Developer</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section id="contact" className="py-32 bg-[#050505] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
            <div>
              <Reveal>
                <h2 className="text-5xl md:text-7xl font-serif mb-12 text-white/90">Get in <span className="italic font-light">Touch</span></h2>
              </Reveal>
              
              <div className="space-y-12">
                <Reveal delay={0.1}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-[#FF4500]" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2 scale-y-95 text-[#FF4500]">Our Office</h4>
                      <p className="text-gray-400 font-light leading-relaxed">
                        omnag oo
                      </p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.2}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-[#FF4500]" />
                    </div>
                    <div>
                      <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2 scale-y-95 text-[#FF4500]">Inquiries</h4>
                      <p className="text-2xl font-serif text-white">980007xxxx</p>
                    </div>
                  </div>
                </Reveal>

                <Reveal delay={0.3}>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-[#FF4500]" />
                    </div>
                    <div className="w-full">
                      <h4 className="font-bold uppercase tracking-widest text-[10px] mb-4 scale-y-95 text-[#FF4500]">Working Hours</h4>
                      <div className="grid grid-cols-1 gap-2 max-w-md">
                        {timings.map((t, idx) => (
                          <div key={idx} className="flex justify-between text-xs font-light border-b border-white/5 pb-2">
                            <span className={t.closed ? "opacity-30" : "text-gray-300"}>{t.day}</span>
                            <span className={t.closed ? "text-[#FF4500] font-bold" : "text-gray-500"}>{t.time}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="bg-[#111] p-12 rounded-3xl shadow-xl border border-white/5">
              <Reveal delay={0.4}>
                <h3 className="text-3xl font-serif mb-8 italic text-white/90">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 text-gray-400">Your Name</label>
                      <input type="text" className="w-full bg-white/5 rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#FF4500] outline-none transition-all text-white" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 text-gray-400">Phone Number</label>
                      <input type="tel" className="w-full bg-white/5 rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#FF4500] outline-none transition-all text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 text-gray-400">Service Interested In</label>
                    <select className="w-full bg-white/5 rounded-xl px-6 py-4 outline-none appearance-none text-white">
                      <option className="bg-[#111]">2D/3D Home Plan</option>
                      <option className="bg-[#111]">Construction Management</option>
                      <option className="bg-[#111]">Interior Design</option>
                      <option className="bg-[#111]">Structural Engineering</option>
                      <option className="bg-[#111]">Other Services</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold opacity-40 text-gray-400">Project Description</label>
                    <textarea rows={4} className="w-full bg-white/5 rounded-xl px-6 py-4 focus:ring-2 focus:ring-[#FF4500] outline-none transition-all text-white" />
                  </div>
                  <button className="w-full py-5 bg-white text-black rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#FF4500] hover:text-white transition-all">
                    Request Consultation
                  </button>
                </form>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[500px] w-full grayscale contrast-125 opacity-30 relative pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=2000" 
          alt="Map context" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#111] p-4 rounded-full shadow-2xl border border-white/10">
            <MapPin className="w-8 h-8 text-[#FF4500]" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-[#050505] relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="w-full md:w-auto">
              <h2 className="text-[10vw] leading-[0.8] tracking-tighter text-white/10 font-bold select-none pointer-events-none uppercase">
                BUILDOMN.
              </h2>
            </div>
            
            <div className="flex flex-col gap-8 text-right self-end">
              <div className="flex flex-col gap-4 text-gray-400">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              </div>
              <p className="text-sm text-gray-600">© 2024 Buildomn Studio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

