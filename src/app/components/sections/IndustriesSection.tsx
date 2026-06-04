import { motion } from 'motion/react';
import { useInView } from './useInView';

export function IndustriesSection() {
  const { ref, isInView } = useInView();

  const industries = [
    'Oil & Gas',
    'Construction',
    'Healthcare',
    'Hospitality',
    'Government',
    'Technology',
    'Energy',
    'Real Estate',
    'Manufacturing',
    'Retail',
  ];

  return (
    <section ref={ref} className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, #D4AF37 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-6 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
              <span className="text-[#D4AF37] text-sm font-medium">Industries We Serve</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
              Diverse Industry Expertise
            </span>
          </h2>

          <p className="text-xl text-[#999999] max-w-3xl mx-auto">
            Serving leading organizations across multiple sectors in Saudi Arabia
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group"
            >
              <div className="px-8 py-4 rounded-full bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5 transition-all duration-300 cursor-pointer">
                <span className="text-[#F5F5F5] group-hover:text-[#D4AF37] transition-colors duration-300 font-medium">
                  {industry}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-[#999999] mb-8">
            Trusted by leading organizations across the Kingdom
          </p>
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg font-semibold hover:bg-[#D4AF37]/10 transition-all duration-300"
          >
            View Our Portfolio
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
