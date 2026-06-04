import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Users, Building2, Award, TrendingUp } from 'lucide-react';

export function StatsSection() {
  const { ref, isInView } = useInView();

  const stats = [
    {
      icon: Building2,
      value: '500+',
      label: 'Projects Completed',
      description: 'Successfully delivered across Saudi Arabia',
    },
    {
      icon: Users,
      value: '200+',
      label: 'Satisfied Clients',
      description: 'Trust us for their business needs',
    },
    {
      icon: TrendingUp,
      value: '1000+',
      label: 'Skilled Employees',
      description: 'Dedicated professionals at your service',
    },
    {
      icon: Award,
      value: '99.5%',
      label: 'Client Satisfaction',
      description: 'Commitment to excellence in every project',
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#121212] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#D4AF37] rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#B8860B] rounded-full filter blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-[#0A0A0A] to-[#121212] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-[#D4AF37]" />
                </div>

                <div className="text-4xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F5DEB3] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>

                <h3 className="text-xl font-semibold text-[#F5F5F5] mb-2">{stat.label}</h3>

                <p className="text-[#999999] text-sm leading-relaxed">{stat.description}</p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
