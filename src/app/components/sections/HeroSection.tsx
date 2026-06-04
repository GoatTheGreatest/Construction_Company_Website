import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { motion } from 'motion/react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#0A0A0A]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[150px]"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8860B] rounded-full filter blur-[150px]"></div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-6">
            <div className="px-6 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 backdrop-blur-sm">
              <span className="text-[#D4AF37] text-sm font-medium">Saudi Arabia's Premier Integrated Services Company</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-[#F5F5F5]">Building Excellence</span>
            <span className="block bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
              Across Industries
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-[#999999] mb-12 max-w-3xl mx-auto leading-relaxed">
            From construction to hospitality, logistics to human resources - we deliver integrated solutions that drive growth and excellence across the Kingdom.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0A0A0A] rounded-lg font-semibold hover:from-[#E5C158] hover:to-[#D4AF37] transition-all duration-300 shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transform hover:scale-105 flex items-center gap-2"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button className="group px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg font-semibold hover:bg-[#D4AF37]/10 transition-all duration-300 flex items-center gap-2">
              <Play className="w-5 h-5" />
              Explore Services
            </button>
          </div>

          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { value: '500+', label: 'Projects' },
              { value: '200+', label: 'Clients' },
              { value: '1000+', label: 'Employees' },
              { value: '99.5%', label: 'Satisfaction' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F5DEB3] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[#999999] mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-[#D4AF37] flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
