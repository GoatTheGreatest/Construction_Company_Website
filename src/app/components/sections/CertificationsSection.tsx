import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Shield, CheckCircle2 } from 'lucide-react';

export function CertificationsSection() {
  const { ref, isInView } = useInView();

  const certifications = [
    {
      name: 'ISO 9001',
      description: 'Quality Management Systems',
      year: '2020',
    },
    {
      name: 'ISO 14001',
      description: 'Environmental Management',
      year: '2021',
    },
    {
      name: 'ISO 45001',
      description: 'Occupational Health & Safety',
      year: '2021',
    },
    {
      name: 'HACCP',
      description: 'Food Safety Management',
      year: '2022',
    },
    {
      name: 'OHSAS 18001',
      description: 'Occupational Health & Safety',
      year: '2020',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#121212] to-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[150px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-6 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20">
              <span className="text-[#D4AF37] text-sm font-medium">Certifications</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
              Industry Recognized Standards
            </span>
          </h2>

          <p className="text-xl text-[#999999] max-w-3xl mx-auto">
            Committed to maintaining the highest international standards of quality and safety
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-[#0A0A0A]/50 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-[#0A0A0A]/80 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-[#D4AF37]/10 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-[#D4AF37]" />
                </div>

                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-2">{cert.name}</h3>

                <p className="text-sm text-[#999999] mb-2">{cert.description}</p>

                <div className="flex items-center justify-center gap-2 text-[#D4AF37] text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Since {cert.year}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
