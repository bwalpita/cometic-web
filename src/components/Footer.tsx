import { } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';
import LogoIcon from '../assets/Reg-Cometic-It-Care-Logo.svg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-2xl font-bold">
              <img src={LogoIcon} alt="Cometic IT Care Logo" className="w-14 h-14" />
              <span className="text-white">Cometic IT Care</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering Your Business with Cutting-Edge IT Solutions. We specialize in AI services, 
              software development, networking, and comprehensive technology consulting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-red-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-red-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-red-500 transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-red-500 transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-red-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-400">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-300 hover:text-sky-400 transition-colors cursor-pointer">AI Solutions</li>
              <li className="text-gray-300 hover:text-sky-400 transition-colors cursor-pointer">Software Development</li>
              <li className="text-gray-300 hover:text-sky-400 transition-colors cursor-pointer">Networking Solutions</li>
              <li className="text-gray-300 hover:text-sky-400 transition-colors cursor-pointer">Data Management</li>
              <li className="text-gray-300 hover:text-sky-400 transition-colors cursor-pointer">Project Management</li>
              <li className="text-gray-300 hover:text-sky-400 transition-colors cursor-pointer">Cloud Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-600">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-red-500" />
                <span className="text-gray-300">info@cometicare.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-sky-400" />
                <span className="text-gray-300">+94 (113) 123-737 | +94 (773) 077-759</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span className="text-gray-300">Professional IT Services Worldwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} Cometic IT Care. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-300 hover:text-red-500 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-sky-400 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;