import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Gateway to <span className="text-primary-600">Global Markets</span>
            </h1>
            <p className="text-lg text-gray-600">
              Haadi Enterprises specializes in international trade solutions, connecting businesses with global opportunities through expert import-export services, logistics management, and regulatory compliance.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <a 
                href="mailto:info@haadienterprises.co.in" 
                className="bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center sm:justify-start gap-2 group"
              >
                Get a Quote
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#services" 
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:border-primary-600 hover:text-primary-600 transition-colors text-center sm:text-left"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3"></div>
              <img 
                src="https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Global Trade" 
                className="relative z-10 rounded-3xl shadow-xl object-cover h-[500px] w-full"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-16 md:mt-24 py-8 px-6 bg-gray-50 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-600">15+</h3>
              <p className="text-gray-600 mt-2">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-600">200+</h3>
              <p className="text-gray-600 mt-2">Clients Worldwide</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-600">30+</h3>
              <p className="text-gray-600 mt-2">Countries Served</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-primary-600">500+</h3>
              <p className="text-gray-600 mt-2">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;