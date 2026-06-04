import { motion } from 'motion/react';
import { useInView } from './useInView';
import { Quote, Star } from 'lucide-react';

export function TestimonialsSection() {
  const { ref, isInView } = useInView();

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'CEO, Saudi Construction Group',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop',
      content: 'Rise Solution Co. has been instrumental in delivering our major infrastructure projects on time and within budget. Their professionalism and expertise are unmatched.',
      rating: 5,
    },
    {
      name: 'Fatima Al-Zahrani',
      position: 'Operations Director, National Logistics Ltd',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop',
      content: 'The logistics and transportation services provided by Rise Solution have transformed our supply chain efficiency. Highly recommended for any business in Saudi Arabia.',
      rating: 5,
    },
    {
      name: 'Mohammed Al-Qahtani',
      position: 'General Manager, Premier Hotels KSA',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop',
      content: 'Their hospitality management expertise helped us achieve a 40% increase in guest satisfaction. True partners in excellence.',
      rating: 5,
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
              <span className="text-[#D4AF37] text-sm font-medium">Testimonials</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#F5DEB3] to-[#D4AF37] bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>

          <p className="text-xl text-[#999999] max-w-3xl mx-auto">
            Hear from the organizations that trust us with their most important projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 backdrop-blur-sm relative">
                <div className="absolute top-6 right-6 text-[#D4AF37]/20">
                  <Quote className="w-12 h-12" />
                </div>

                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>

                <p className="text-[#F5F5F5] mb-8 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4 pt-6 border-t border-[#D4AF37]/10">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-[#D4AF37]/30"
                  />
                  <div>
                    <div className="font-semibold text-[#F5F5F5]">{testimonial.name}</div>
                    <div className="text-sm text-[#999999]">{testimonial.position}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
