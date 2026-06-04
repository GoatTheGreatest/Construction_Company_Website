import { motion } from 'motion/react';
import { useInView } from './useInView';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function ContactCTASection() {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37] rounded-full filter blur-[200px]"></div>
      </div>

      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-block mb-6">
            <div className="px-8 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] shadow-lg shadow-[#D4AF37]/30">
              <span className="text-[#0A0A0A] font-semibold">Ready to Get Started?</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            <span className="block text-[#F5F5F5]">Let's Build</span>
            <span className="block bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
              Something Extraordinary
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#999999] mb-12 leading-relaxed">
            Partner with Saudi Arabia's premier integrated services company and experience excellence across all your business needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              to="/contact"
              className="group px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0A0A0A] rounded-lg font-bold text-lg hover:from-[#E5C158] hover:to-[#D4AF37] transition-all duration-300 shadow-2xl shadow-[#D4AF37]/40 hover:shadow-[#D4AF37]/60 transform hover:scale-105 flex items-center gap-3"
            >
              Get a Free Quote
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href="https://wa.me/966500208019"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg font-bold text-lg hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center gap-3"
            >
              <Phone className="w-6 h-6" />
              Call Us Now
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 rounded-2xl bg-[#121212]/50 border border-[#D4AF37]/20 backdrop-blur-sm"
            >
              <Phone className="w-8 h-8 text-[#D4AF37] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Call Us</h3>
              <p className="text-[#999999] flex items-center justify-center gap-2">
                <a href="https://wa.me/966500208019" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] font-semibold">
                  +966 50 020 8019
                </a>
                <svg className="w-4 h-4 text-[#25D366]" viewBox="0 0 448 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M380.9 97.1C339 55.2 285.8 32 229.7 32 141.2 32 64.5 104.7 64.5 205.8 64.5 241.7 73 274.7 86.9 302.1L64 447.9l148-40.9c26.9 14.7 57.2 22.5 89.6 22.5h.1c88.4 0 165.1-72.7 165.1-173.8 0-48.1-18.9-93.1-53.9-127.2zm-151 330.6h-.1c-28.7 0-56.8-7.6-81-21.9l-5.8-3.4-87.9 24.3 23.5-85.8-3.8-6c-14.4-23.1-22-49.7-22-77.8 0-82.8 68.4-150.1 152.5-150.1 40.8 0 79.1 15.9 107.9 44.7 28.7 28.7 44.6 66.9 44.6 107.6 0 82.8-67.4 150.8-150.9 150.8zm82.2-108.4c-4.5-2.3-26.6-13.1-30.7-14.6-4.1-1.5-7.1-2.3-10.1 2.3-2.9 4.6-11.1 14.6-13.6 17.6-2.5 3-5 3.4-9.4 1.1-26.8-13.4-44.4-24.1-62.1-54.4-4.7-8.2 4.7-7.6 13.7-25.1 1.5-3.1.8-5.8-.4-8.1-1.2-2.3-10.1-24.4-13.9-33.4-3.7-8.8-7.5-7.6-10.1-7.7-2.6-.1-5.6-.1-8.6-.1-3 0-7.9 1.1-12 5.8-4.1 4.7-15.6 15.3-15.6 37.4 0 22.1 16 43.5 18.2 46.5 2.3 3 31.5 48.3 76.3 67.7 10.7 4.6 19.1 7.3 25.6 9.3 10.8 3.4 20.6 2.9 28.4 1.8 8.7-1.2 26.6-10.9 30.4-21.4 3.8-10.4 3.8-19.3 2.6-21.2-1.3-1.9-4.8-3-9.3-5.3z"/>
                </svg>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl bg-[#121212]/50 border border-[#D4AF37]/20 backdrop-blur-sm"
            >
              <Mail className="w-8 h-8 text-[#D4AF37] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Email Us</h3>
              <p className="text-[#999999]">risesaloution@gmail.com</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
