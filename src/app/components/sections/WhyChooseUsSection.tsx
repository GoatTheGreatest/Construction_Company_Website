import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Shield, Award, Target, Lightbulb, Users2, Handshake } from 'lucide-react';

export function WhyChooseUsSection() {
  const { ref, isInView } = useInView();

  const reasons = [
    {
      icon: Handshake,
      title: 'Integrated Solutions',
      description: 'One-stop shop for all your business needs, from construction to human resources.',
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      description: 'ISO certified processes ensuring the highest standards in every project.',
    },
    {
      icon: Shield,
      title: 'Safety First',
      description: 'OHSAS 18001 certified, prioritizing safety in all our operations.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Leveraging cutting-edge technology and modern practices for optimal results.',
    },
    {
      icon: Users2,
      title: 'Expert Team',
      description: '1000+ skilled professionals committed to excellence and client satisfaction.',
    },
    {
      icon: Target,
      title: 'Vision 2030 Partner',
      description: 'Aligned with Saudi Arabia\'s Vision 2030, driving economic transformation.',
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-[#121212] to-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[150px]"></div>
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
              <span className="text-[#D4AF37] text-sm font-medium">Why Choose Us</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
              Your Trusted Partner
            </span>
          </h2>

          <p className="text-xl text-[#999999] max-w-3xl mx-auto">
            Setting the standard for excellence across multiple industries in Saudi Arabia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-[#0A0A0A]/50 border border-[#D4AF37]/20 hover:bg-[#0A0A0A]/80 hover:border-[#D4AF37]/40 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-[#D4AF37]/10">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="w-7 h-7 text-[#D4AF37]" />
                </div>

                <h3 className="text-xl font-bold text-[#F5F5F5] mb-3">{reason.title}</h3>

                <p className="text-[#999999] leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
