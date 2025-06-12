import React from 'react';
import { Youtube, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="https://i.ibb.co/0jFJwrWC/1749668321343.png" 
                alt="Haadi Enterprises Logo" 
                className="h-8 w-8"
              />
              <span className="ml-2 text-xl font-bold">Haadi Enterprises</span>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted partner for international trade solutions since 2015.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#exports" className="text-gray-400 hover:text-white transition-colors">Our Exports</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="tel:+919482415992" className="hover:text-white transition-colors">+91 94824 15992</a></li>
              <li><a href="tel:+919980649786" className="hover:text-white transition-colors">+91 99806 49786</a></li>
              <li><a href="mailto:info@haadienterprises.co.in" className="hover:text-white transition-colors">info@haadienterprises.co.in</a></li>
              <li>#213/17, Raghavendra Colony,<br />Ballari-01, Karnataka, India</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://youtube.com/@haadienterprises" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://facebook.com/haadienterprises" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://instagram.com/haadienterprises" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row md:justify-between text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Haadi Enterprises. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;