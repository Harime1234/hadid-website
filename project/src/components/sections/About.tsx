import React from 'react';
import { CheckCircle, Trophy, Clock, Users, Youtube, Facebook, Instagram } from 'lucide-react';

const features = [
  {
    icon: CheckCircle,
    title: 'Quality Assurance',
    description: 'We maintain strict quality control procedures to ensure all products meet international standards.',
  },
  {
    icon: Trophy,
    title: 'Industry Experience',
    description: 'With over 15 years in global trade, we bring extensive expertise to every client relationship.',
  },
  {
    icon: Clock,
    title: 'Timely Delivery',
    description: 'We prioritize efficient logistics and timely delivery for all import and export orders.',
  },
  {
    icon: Users,
    title: 'Customer-Centric',
    description: 'Our approach focuses on understanding and meeting unique client requirements and expectations.',
  },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About Haadi Enterprises</h2>
            <p className="text-lg text-gray-600 mb-6">
              Founded in 2010, Haadi Enterprises has established itself as a trusted name in the import-export industry, 
              facilitating global trade across diverse sectors including agricultural products, consumer goods, and industrial supplies.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our mission is to connect businesses with international opportunities by providing comprehensive trade solutions 
              that navigate the complexities of global commerce. We leverage our extensive network, market knowledge, and regulatory 
              expertise to deliver seamless import-export services.
            </p>
            <p className="text-lg text-gray-600">
              Based in Ballari, Karnataka, our company has expanded its reach to serve clients across India and international markets, 
              building a reputation for reliability, quality, and excellence in service delivery.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <feature.icon className="h-6 w-6 text-primary-600 mt-1 flex-shrink-0" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                    <p className="text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Connect with Us</h3>
              <div className="flex space-x-6">
                <a 
                  href="https://youtube.com/@haadienterprises" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Youtube className="h-8 w-8" />
                </a>
                <a 
                  href="https://facebook.com/haadienterprises" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Facebook className="h-8 w-8" />
                </a>
                <a 
                  href="https://instagram.com/haadienterprises" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-600 transition-colors"
                >
                  <Instagram className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-primary-100 rounded-3xl transform -rotate-3"></div>
            <img 
              src="https://i.ibb.co/GQPtqw7v/Gemini-Generated-Image-8ljpcu8ljpcu8ljp.png" 
              alt="About Haadi Enterprises" 
              className="relative z-10 rounded-3xl shadow-xl h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;