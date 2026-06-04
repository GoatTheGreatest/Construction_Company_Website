import { motion } from 'motion/react';
import { Target, Eye, Award, Calendar } from 'lucide-react';

export function AboutPage() {
  const timeline = [
    { year: '2015', event: 'Company Founded', description: 'Rise Solution Co. established in Riyadh' },
    { year: '2018', event: 'ISO Certifications', description: 'Achieved ISO 9001 and OHSAS 18001 certifications' },
    { year: '2020', event: 'Major Expansion', description: 'Expanded services to include hospitality and HR' },
    { year: '2023', event: 'Vision 2030 Partner', description: 'Officially aligned with Saudi Vision 2030 initiatives' },
  ];

  const values = [
    { icon: Award, title: 'Excellence', description: 'Delivering the highest quality in everything we do' },
    { icon: Target, title: 'Integrity', description: 'Operating with honesty and strong moral principles' },
    { icon: Eye, title: 'Innovation', description: 'Embracing change and continuous improvement' },
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
                About Rise Solution Co.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#999999] max-w-3xl mx-auto">
              Leading the way in integrated services across Saudi Arabia since 2015
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F5DEB3] bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-lg text-[#F5F5F5] mb-6 leading-relaxed">
                To be the most trusted and innovative integrated services provider in Saudi Arabia, contributing to the Kingdom's Vision 2030 by delivering excellence across construction, logistics, hospitality, and human resources.
              </p>
              <p className="text-lg text-[#999999] leading-relaxed">
                We envision a future where our integrated approach sets new industry standards, driving sustainable growth and creating lasting value for our clients, employees, and communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-[#D4AF37] to-[#F5DEB3] bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-lg text-[#F5F5F5] mb-6 leading-relaxed">
                To provide comprehensive, high-quality integrated services that exceed client expectations while maintaining the highest standards of safety, quality, and professionalism.
              </p>
              <p className="text-lg text-[#999999] leading-relaxed">
                We are committed to fostering innovation, developing our people, and creating sustainable solutions that contribute to Saudi Arabia's economic transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#121212] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
                Core Values
              </span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="h-full p-8 rounded-2xl bg-[#0A0A0A]/50 border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#B8860B]/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-10 h-10 text-[#D4AF37]" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4">{value.title}</h3>
                  <p className="text-[#999999] leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
                Company Timeline
              </span>
            </h2>
            <p className="text-xl text-[#999999]">Our journey of growth and excellence</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#D4AF37] to-[#B8860B] hidden lg:block"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="p-6 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#D4AF37]/20">
                      <div className="flex items-center gap-2 mb-2 lg:justify-end">
                        <Calendar className="w-5 h-5 text-[#D4AF37]" />
                        <span className="text-2xl font-bold text-[#D4AF37]">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-[#F5F5F5] mb-2">{item.event}</h3>
                      <p className="text-[#999999]">{item.description}</p>
                    </div>
                  </div>

                  <div className="hidden lg:block w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#B8860B] shadow-lg shadow-[#D4AF37]/50 flex-shrink-0"></div>

                  <div className="flex-1"></div>
                </motion.div>
              ))}
            </div>
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
                Aligned with Vision 2030
              </span>
            </h2>
            <p className="text-xl text-[#999999] mb-8 max-w-3xl mx-auto leading-relaxed">
              As a proud Saudi company, we are committed to supporting the Kingdom's Vision 2030 by driving economic diversification, creating job opportunities, and contributing to sustainable development across all our service sectors.
            </p>
            <div className="inline-block p-8 rounded-2xl bg-[#0A0A0A]/50 border border-[#D4AF37]/20">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop"
                alt="Vision 2030"
                className="rounded-lg mb-4"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
