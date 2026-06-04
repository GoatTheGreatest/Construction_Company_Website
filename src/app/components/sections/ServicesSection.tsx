import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Building2, Truck, Bus, Hotel, UtensilsCrossed, Users } from 'lucide-react';

export function ServicesSection() {
  const { ref, isInView } = useInView();

  const services = [
    {
      icon: Building2,
      title: 'Construction & Civil Engineering',
      description: 'Comprehensive construction services from planning to execution, delivering world-class infrastructure.',
      features: ['Infrastructure Development', 'Commercial Projects', 'Industrial Facilities'],
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'End-to-end logistics solutions ensuring efficient supply chain management and timely deliveries.',
      features: ['Supply Chain Management', 'Warehousing', 'Distribution Services'],
    },
    {
      icon: Bus,
      title: 'Transportation',
      description: 'Reliable transportation services with modern fleet management and professional drivers.',
      features: ['Fleet Management', 'Employee Transport', 'VIP Services'],
    },
    {
      icon: Hotel,
      title: 'Hotels & Restaurants',
      description: 'Premium hospitality services delivering exceptional guest experiences and culinary excellence.',
      features: ['Hotel Management', 'Restaurant Operations', 'Guest Services'],
    },
    {
      icon: UtensilsCrossed,
      title: 'Catering',
      description: 'Professional catering services for corporate events, camps, and large-scale operations.',
      features: ['Corporate Catering', 'Camp Catering', 'Event Management'],
    },
    {
      icon: Users,
      title: 'Human Resource Services',
      description: 'Strategic HR solutions including recruitment, training, and workforce management.',
      features: ['Recruitment', 'Training & Development', 'Payroll Management'],
    },
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
              <span className="text-[#D4AF37] text-sm font-medium">Our Services</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
              Integrated Solutions
            </span>
          </h2>

          <p className="text-xl text-[#999999] max-w-3xl mx-auto">
            Comprehensive services tailored to meet the diverse needs of businesses across Saudi Arabia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 backdrop-blur-sm hover:-translate-y-2">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#D4AF37]/30">
                  <service.icon className="w-8 h-8 text-[#0A0A0A]" />
                </div>

                <h3 className="text-xl font-bold text-[#F5F5F5] mb-4">{service.title}</h3>

                <p className="text-[#999999] mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-[#999999]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-[#D4AF37]/10">
                  <a
                    href="/services"
                    className="text-[#D4AF37] hover:text-[#F5DEB3] transition-colors duration-300 font-medium inline-flex items-center gap-2 group/link"
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
