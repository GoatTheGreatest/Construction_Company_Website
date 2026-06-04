import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Construction & Civil Engineering', path: '/services#construction' },
    { name: 'Logistics', path: '/services#logistics' },
    { name: 'Transportation', path: '/services#transportation' },
    { name: 'Hotels & Restaurants', path: '/services#hotels' },
    { name: 'Catering', path: '/services#catering' },
    { name: 'Human Resource Services', path: '/services#hr' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-[#D4AF37]/20 shadow-lg shadow-[#D4AF37]/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#0A0A0A] border border-[#D4AF37]/20 flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
              <img src="/LOGO.png" alt="Rise Solution Co. logo" className="w-full h-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-xl bg-gradient-to-r from-[#D4AF37] to-[#F5DEB3] bg-clip-text text-transparent">
                Rise Solution Co.
              </div>
              <div className="text-xs text-[#999999]">Integrated Services Saudi Arabia</div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative py-2 transition-colors duration-300 ${
                location.pathname === '/' ? 'text-[#D4AF37]' : 'text-[#F5F5F5] hover:text-[#D4AF37]'
              }`}
            >
              Home
              {location.pathname === '/' && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]"
                />
              )}
            </Link>

            <Link
              to="/about"
              className={`relative py-2 transition-colors duration-300 ${
                location.pathname === '/about' ? 'text-[#D4AF37]' : 'text-[#F5F5F5] hover:text-[#D4AF37]'
              }`}
            >
              About Us
              {location.pathname === '/about' && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]"
                />
              )}
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`relative py-2 flex items-center gap-1 transition-colors duration-300 ${
                  location.pathname === '/services' ? 'text-[#D4AF37]' : 'text-[#F5F5F5] hover:text-[#D4AF37]'
                }`}
              >
                Services
                <ChevronDown className="w-4 h-4" />
                {location.pathname === '/services' && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]"
                  />
                )}
              </Link>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-[#121212]/95 backdrop-blur-lg border border-[#D4AF37]/20 rounded-lg shadow-2xl shadow-[#D4AF37]/10 overflow-hidden"
                  >
                    <div className="p-2">
                      {services.map((service, index) => (
                        <a
                          key={index}
                          href={service.path}
                          className="block px-4 py-3 rounded-md hover:bg-[#D4AF37]/10 transition-colors duration-200 text-[#F5F5F5] hover:text-[#D4AF37]"
                        >
                          {service.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/portfolio"
              className={`relative py-2 transition-colors duration-300 ${
                location.pathname === '/portfolio' ? 'text-[#D4AF37]' : 'text-[#F5F5F5] hover:text-[#D4AF37]'
              }`}
            >
              Portfolio
              {location.pathname === '/portfolio' && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]"
                />
              )}
            </Link>

            <Link
              to="/contact"
              className={`relative py-2 transition-colors duration-300 ${
                location.pathname === '/contact' ? 'text-[#D4AF37]' : 'text-[#F5F5F5] hover:text-[#D4AF37]'
              }`}
            >
              Contact
              {location.pathname === '/contact' && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B]"
                />
              )}
            </Link>

            <Link
              to="/contact"
              className="px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0A0A0A] rounded-lg hover:from-[#E5C158] hover:to-[#D4AF37] transition-all duration-300 shadow-lg shadow-[#D4AF37]/20 hover:shadow-[#D4AF37]/40 transform hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#D4AF37]/10 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#D4AF37]/20 bg-[#0A0A0A]/95 backdrop-blur-lg"
          >
            <div className="px-4 py-4 space-y-3">
              <Link
                to="/"
                className="block px-4 py-2 rounded-lg hover:bg-[#D4AF37]/10 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 rounded-lg hover:bg-[#D4AF37]/10 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="block px-4 py-2 rounded-lg hover:bg-[#D4AF37]/10 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="block px-4 py-2 rounded-lg hover:bg-[#D4AF37]/10 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 rounded-lg hover:bg-[#D4AF37]/10 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-6 py-2.5 bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-[#0A0A0A] rounded-lg text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
