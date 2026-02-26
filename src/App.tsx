import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Star, MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2, Shield, Zap, Award, ChevronDown } from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'nav-sticky py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
        <a href="#" className="text-2xl font-bold font-heading tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span>Smoke<span className="text-accent">.</span></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2">
            Get Started
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden nav-sticky border-t border-white/10 mt-4"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-medium text-gray-300 hover:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="btn-primary px-6 py-3 rounded-xl text-center font-semibold mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full modern-card mb-8">
              <span className="flex h-2 w-2 rounded-full bg-accent"></span>
              <span className="text-xs font-medium uppercase tracking-wider text-gray-300">Available for new projects</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold font-heading leading-tight mb-6">
              Trusted local experts with <span className="text-gradient-accent">results you can feel.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0">
              We deliver premium solutions tailored to your specific needs. Experience the difference of working with dedicated professionals who prioritize your success.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#contact" className="btn-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 w-full sm:w-auto justify-center text-lg">
                Book a Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#services" className="px-8 py-4 rounded-full font-semibold flex items-center gap-2 w-full sm:w-auto justify-center text-lg border border-white/10 hover:bg-white/5 transition-colors">
                Explore Services
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                <span>100% Satisfaction</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full max-w-lg lg:max-w-none relative"
          >
            <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden relative modern-card p-2">
              <img 
                src="https://picsum.photos/seed/business/800/1000" 
                alt="Professional team at work" 
                className="w-full h-full object-cover rounded-xl"
                referrerPolicy="no-referrer"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-8 left-8 modern-card p-4 flex items-center gap-4 bg-black/60 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Star className="w-6 h-6 text-accent fill-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.9/5</div>
                  <div className="text-xs text-gray-300">Based on 200+ reviews</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Shield className="w-8 h-8 text-accent" />,
      title: "Premium Protection",
      description: "Comprehensive solutions designed to safeguard your most valuable assets with industry-leading standards."
    },
    {
      icon: <Zap className="w-8 h-8 text-accent" />,
      title: "Rapid Response",
      description: "When you need us, we're there. Our streamlined processes ensure quick turnaround times without sacrificing quality."
    },
    {
      icon: <Award className="w-8 h-8 text-accent" />,
      title: "Expert Consultation",
      description: "Leverage our years of local experience to make informed decisions that drive real, measurable results."
    }
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Our Services</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Solutions tailored to your needs</h3>
          <p className="text-gray-400 text-lg">We don't believe in one-size-fits-all. Every service we provide is customized to deliver the exact results you're looking for.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="modern-card p-8 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h4 className="text-2xl font-bold font-heading mb-4">{service.title}</h4>
              <p className="text-gray-400 leading-relaxed mb-6">{service.description}</p>
              <a href="#contact" className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all">
                Learn more <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 grid grid-cols-2 gap-4">
            <div className="space-y-4 mt-8">
              <img src="https://picsum.photos/seed/work1/400/500" alt="Our work" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/work2/400/400" alt="Our team" className="rounded-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="space-y-4">
              <img src="https://picsum.photos/seed/work3/400/400" alt="Office" className="rounded-2xl w-full h-48 object-cover" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/work4/400/500" alt="Process" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          <div className="flex-1">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Local experts committed to excellence.</h3>
            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              Founded on the principles of integrity, quality, and unparalleled customer service, we've built our reputation by consistently exceeding expectations. 
            </p>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our team of dedicated professionals brings years of specialized experience to every project, ensuring that you receive not just a service, but a partnership focused on your success.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-4xl font-bold font-heading text-white mb-2">10+</div>
                <div className="text-gray-400">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold font-heading text-white mb-2">500+</div>
                <div className="text-gray-400">Happy Clients</div>
              </div>
            </div>
            
            <a href="#contact" className="btn-primary px-8 py-4 rounded-full font-semibold inline-flex items-center gap-2">
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Testimonials</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Don't just take our word for it</h3>
          <p className="text-gray-400 text-lg">See what our clients have to say about their experience working with our team.</p>
        </div>
        
        <div className="w-full max-w-4xl mx-auto modern-card p-8 text-center">
          {/* EMBED:REVIEW_WIDGET */}
          <div className="py-12 flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-xl bg-white/5">
            <Star className="w-12 h-12 text-gray-600 mb-4" />
            <p className="text-gray-400 font-medium">[ Review Widget Placeholder ]</p>
            <p className="text-sm text-gray-500 mt-2">Replace with actual review widget embed code</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer: "We proudly serve the entire metropolitan area and surrounding suburbs. If you're unsure whether you fall within our service area, please contact us for confirmation."
    },
    {
      question: "How quickly can you start a new project?",
      answer: "Depending on the scope and our current schedule, we can typically begin new projects within 1-2 weeks of the initial consultation and agreement."
    },
    {
      question: "Do you offer free consultations?",
      answer: "Yes, we offer a complimentary initial consultation to understand your needs, discuss potential solutions, and provide a preliminary estimate."
    },
    {
      question: "Are your services guaranteed?",
      answer: "Absolutely. We stand behind our work with a 100% satisfaction guarantee. If you're not completely satisfied with the results, we'll make it right."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white/5 border-y border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">FAQ</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Common Questions</h3>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`modern-card overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-accent/50' : ''}`}
            >
              <button 
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-lg">{faq.question}</span>
                <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-accent' : ''}`} />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1">
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-heading mb-6">Ready to start your project?</h3>
            <p className="text-gray-400 text-lg mb-10">
              Fill out the form or reach out to us directly. We're here to answer any questions and help you get started on the path to success.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Phone className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Call Us</h4>
                  <p className="text-gray-400">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email Us</h4>
                  <p className="text-gray-400">hello@example.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Business Hours</h4>
                  <p className="text-gray-400">Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="modern-card p-8">
              <h4 className="text-2xl font-bold font-heading mb-6">Send a Message</h4>
              
              {/* EMBED:CONTACT_FORM (Fallback) */}
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-gray-300">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-gray-300">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">Email Address</label>
                  <input type="email" id="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-300">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="(555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-300">How can we help?</label>
                  <textarea id="message" rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                </div>
                
                <button type="button" className="btn-primary w-full py-4 rounded-xl font-bold text-lg mt-4">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  return (
    <section className="h-96 w-full relative bg-white/5 border-y border-white/5 flex items-center justify-center">
      <div className="absolute inset-0 opacity-50 bg-[url('https://picsum.photos/seed/map/1920/1080?grayscale&blur=2')] bg-cover bg-center"></div>
      <div className="relative z-10 modern-card p-6 flex items-center gap-4 bg-black/80 backdrop-blur-md max-w-md mx-4">
        <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
          <MapPin className="w-6 h-6 text-accent" />
        </div>
        <div>
          <h4 className="font-bold text-lg">Our Location</h4>
          <p className="text-gray-400 text-sm">Serving the greater metropolitan area and surrounding communities.</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 border-t border-white/10 bg-black">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold font-heading tracking-tight flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span>Smoke<span className="text-accent">.</span></span>
            </a>
            <p className="text-gray-400 max-w-sm mb-6">
              Trusted local experts with results you can feel. Delivering premium solutions tailored to your specific needs.
            </p>
            <div className="flex items-center gap-4">
              {/* Social links placeholders */}
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-gray-400">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-colors text-gray-400">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#reviews" className="text-gray-400 hover:text-accent transition-colors">Reviews</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center md:text-left text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Waiting URL Final Redirect Smoke. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed for local excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-accent/30 selection:text-white">
      <Nav />
      <main>
        <Hero />
        <Services />
        <About />
        <Reviews />
        <FAQ />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}
