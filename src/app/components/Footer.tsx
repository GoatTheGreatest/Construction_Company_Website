import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#121212] border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg overflow-hidden bg-[#0A0A0A] border border-[#D4AF37]/20 flex items-center justify-center">
                <img src="/LOGO.png" alt="Rise Solution Co. logo" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-lg bg-gradient-to-r from-[#D4AF37] to-[#F5DEB3] bg-clip-text text-transparent">
                  Rise Solution Co.
                </div>
              </div>
            </div>
            <p className="text-[#999999] mb-6">
              Your trusted partner in integrated services across Saudi Arabia. Building excellence through innovation and dedication.
            </p>
            <div className="flex space-x-4">
              {/* LinkedIn */}
              <a href="#" className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              {/* Twitter/X */}
              <a href="#" className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="w-10 h-10 rounded-lg bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/services#construction" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                  Construction
                </a>
              </li>
              <li>
                <a href="/services#logistics" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                  Logistics
                </a>
              </li>
              <li>
                <a href="/services#transportation" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                  Transportation
                </a>
              </li>
              <li>
                <a href="/services#hotels" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                  Hotels & Restaurants
                </a>
              </li>
              <li>
                <a href="/services#catering" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                  Catering
                </a>
              </li>
              <li>
                <a href="/services#hr" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                  HR Services
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[#D4AF37] mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-[#999999]">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>Riyadh, Kingdom of Saudi Arabia</span>
              </li>
              <li className="flex items-start space-x-3 text-[#999999]">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>+966 55 123 4567</span>
              </li>
              <li className="flex items-start space-x-3 text-[#999999]">
                <Mail className="w-5 h-5 text-[#D4AF37] mt-0.5 flex-shrink-0" />
                <span>info@risesolution.sa</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#999999] text-sm">
              &copy; {new Date().getFullYear()} Rise Solution Co. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-[#999999] hover:text-[#D4AF37] transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}