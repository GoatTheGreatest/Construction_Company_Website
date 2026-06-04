import { motion } from 'motion/react';
import { Building2, Truck, Bus, Hotel, UtensilsCrossed, Users, CheckCircle2 } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      id: 'construction',
      icon: Building2,
      title: 'Construction & Civil Engineering',
      description: 'Comprehensive construction services delivering world-class infrastructure and commercial projects across Saudi Arabia.',
      capabilities: [
        'Infrastructure Development',
        'Commercial Buildings',
        'Industrial Facilities',
        'Project Management',
        'Quality Assurance',
        'Safety Compliance',
      ],
      benefits: [
        'ISO 9001 certified processes',
        'Experienced engineering team',
        'On-time project delivery',
        'Cost-effective solutions',
      ],
    },
    {
      id: 'logistics',
      icon: Truck,
      title: 'Logistics',
      description: 'End-to-end logistics solutions ensuring efficient supply chain management and timely deliveries.',
      capabilities: [
        'Supply Chain Management',
        'Warehousing Solutions',
        'Distribution Services',
        'Inventory Management',
        'Last-Mile Delivery',
        'Cold Chain Logistics',
      ],
      benefits: [
        'Advanced tracking systems',
        'Temperature-controlled storage',
        'Nationwide coverage',
        '24/7 operations support',
      ],
    },
    {
      id: 'transportation',
      icon: Bus,
      title: 'Transportation',
      description: 'Reliable transportation services with modern fleet management and professional drivers.',
      capabilities: [
        'Employee Transportation',
        'VIP Services',
        'Fleet Management',
        'Route Optimization',
        'Driver Training',
        'Vehicle Maintenance',
      ],
      benefits: [
        'Modern, well-maintained fleet',
        'Professional, trained drivers',
        'GPS tracking for all vehicles',
        'Flexible scheduling options',
      ],
    },
    {
      id: 'hotels',
      icon: Hotel,
      title: 'Hotels & Restaurants',
      description: 'Premium hospitality services delivering exceptional guest experiences and culinary excellence.',
      capabilities: [
        'Hotel Management',
        'Restaurant Operations',
        'Guest Services',
        'Facility Management',
        'Food & Beverage',
        'Housekeeping Services',
      ],
      benefits: [
        'HACCP certified food safety',
        'Experienced hospitality team',
        'Quality service standards',
        'Customer satisfaction focus',
      ],
    },
    {
      id: 'catering',
      icon: UtensilsCrossed,
      title: 'Catering',
      description: 'Professional catering services for corporate events, camps, and large-scale operations.',
      capabilities: [
        'Corporate Catering',
        'Camp Catering',
        'Event Management',
        'Menu Planning',
        'Food Preparation',
        'Service Staff',
      ],
      benefits: [
        'Customized menu options',
        'Large-scale capacity',
        'Hygiene compliance',
        'Flexible service packages',
      ],
    },
    {
      id: 'hr',
      icon: Users,
      title: 'Human Resource Services',
      description: 'Strategic HR solutions including recruitment, training, and workforce management.',
      capabilities: [
        'Recruitment Services',
        'Training & Development',
        'Payroll Management',
        'HR Consulting',
        'Performance Management',
        'Compliance Management',
      ],
      benefits: [
        'Skilled workforce pool',
        'Comprehensive training programs',
        'HR compliance expertise',
        'Customized HR solutions',
      ],
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0A0A] via-[#121212] to-[#0A0A0A]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37] rounded-full filter blur-[150px]"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#B8860B] rounded-full filter blur-[150px]"></div>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#999999] max-w-3xl mx-auto">
              Integrated solutions tailored to meet the diverse needs of businesses across Saudi Arabia
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center mb-6 shadow-lg shadow-[#D4AF37]/30">
                    <service.icon className="w-10 h-10 text-[#0A0A0A]" />
                  </div>

                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F5DEB3] bg-clip-text text-transparent">
                    {service.title}
                  </h2>

                  <p className="text-lg text-[#F5F5F5] mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">Key Benefits</h3>
                      <div className="grid grid-cols-1 gap-3">
                        {service.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                            <span className="text-[#F5F5F5]">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="p-8 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#D4AF37]/20">
                    <h3 className="text-2xl font-semibold text-[#F5F5F5] mb-6">Capabilities</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.capabilities.map((capability, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-3 p-4 rounded-lg bg-[#0A0A0A]/50 border border-[#D4AF37]/10"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0"></div>
                          <span className="text-[#F5F5F5]">{capability}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#121212] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
                Ready to Get Started?
              </span>
            </h2>
            <p className="text-xl text-[#999999] mb-8 max-w-3xl mx-auto">
              Contact us today to discuss how our integrated services can benefit your business
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0A0A0A] rounded-lg font-bold text-lg hover:from-[#E5C158] hover:to-[#D4AF37] transition-all duration-300 shadow-xl shadow-[#D4AF37]/40"
            >
              Request a Quote
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
