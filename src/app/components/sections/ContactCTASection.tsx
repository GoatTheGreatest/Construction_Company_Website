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
              href="tel:+966551234567"
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
              <p className="text-[#999999]">+966 55 123 4567</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 rounded-2xl bg-[#121212]/50 border border-[#D4AF37]/20 backdrop-blur-sm"
            >
              <Mail className="w-8 h-8 text-[#D4AF37] mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-[#F5F5F5] mb-2">Email Us</h3>
              <p className="text-[#999999]">info@risesolution.sa</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
