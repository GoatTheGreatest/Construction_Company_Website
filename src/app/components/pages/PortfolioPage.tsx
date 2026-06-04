import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Truck, Bus, Hotel, MapPin } from 'lucide-react';

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'construction', name: 'Construction' },
    { id: 'logistics', name: 'Logistics' },
    { id: 'transportation', name: 'Transportation' },
    { id: 'hospitality', name: 'Hospitality' },
  ];

  const projects = [
    {
      id: 1,
      title: 'King Abdullah Financial District',
      category: 'construction',
      location: 'Riyadh',
      year: '2023',
      description: 'Major infrastructure development project for commercial towers',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
    },
    {
      id: 2,
      title: 'National Logistics Center',
      category: 'logistics',
      location: 'Jeddah',
      year: '2023',
      description: 'State-of-the-art warehousing and distribution facility',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=800&h=600&fit=crop',
    },
    {
      id: 3,
      title: 'Corporate Fleet Management',
      category: 'transportation',
      location: 'Riyadh',
      year: '2022',
      description: 'Complete transportation solution for major corporation',
      icon: Bus,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
    },
    {
      id: 4,
      title: 'Luxury Hotel Management',
      category: 'hospitality',
      location: 'Mecca',
      year: '2023',
      description: 'Premium hotel management and operations',
      icon: Hotel,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
    },
    {
      id: 5,
      title: 'Industrial Complex Development',
      category: 'construction',
      location: 'Dammam',
      year: '2022',
      description: 'Large-scale industrial facility construction',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
    },
    {
      id: 6,
      title: 'Cold Chain Logistics Network',
      category: 'logistics',
      location: 'Kingdom-wide',
      year: '2023',
      description: 'Temperature-controlled distribution network',
      icon: Truck,
      image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop',
    },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

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
                Our Portfolio
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-[#999999] max-w-3xl mx-auto">
              Showcasing excellence through successful projects across Saudi Arabia
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0A0A0A] shadow-lg shadow-[#D4AF37]/30'
                    : 'bg-[#121212] text-[#F5F5F5] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:bg-[#D4AF37]/5'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-full rounded-2xl bg-gradient-to-br from-[#121212] to-[#0A0A0A] border border-[#D4AF37]/20 hover:border-[#D4AF37]/40 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent opacity-60"></div>

                    <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#B8860B] flex items-center justify-center shadow-lg shadow-[#D4AF37]/50">
                      <project.icon className="w-6 h-6 text-[#0A0A0A]" />
                    </div>

                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-sm text-[#D4AF37] mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>{project.location}</span>
                        <span className="mx-2">•</span>
                        <span>{project.year}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#F5F5F5] mb-3 group-hover:text-[#D4AF37] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#999999] leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-[#121212] to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '500+', label: 'Completed Projects' },
              { value: '200+', label: 'Happy Clients' },
              { value: '10+', label: 'Cities Served' },
              { value: '8+', label: 'Years Experience' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-[#0A0A0A]/50 border border-[#D4AF37]/20"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#D4AF37] to-[#F5DEB3] bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-[#999999]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
