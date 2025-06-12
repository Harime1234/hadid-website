import React from 'react';
import { 
  Ship, 
  PackageOpen, 
  Truck, 
  FileCheck, 
  Plane, 
  FileText 
} from 'lucide-react';

const services = [
  {
    title: 'Import Solutions',
    description: 'Comprehensive import services including product sourcing, supplier verification, quality control, and complete documentation management.',
    icon: PackageOpen,
  },
  {
    title: 'Export Facilitation',
    description: 'End-to-end export solutions from market research and product selection to packaging, documentation, and delivery to international buyers.',
    icon: Ship,
  },
  {
    title: 'Logistics & Supply Chain',
    description: 'Efficient supply chain management with warehouse solutions, inventory control, and timely delivery scheduling.',
    icon: Truck,
  },
  {
    title: 'Customs Clearance',
    description: 'Expert handling of customs procedures, documentation, and regulatory compliance to ensure smooth clearance of your goods.',
    icon: FileCheck,
  },
  {
    title: 'Freight Forwarding',
    description: 'Reliable freight forwarding services via air, sea, and land transport with real-time tracking and updates.',
    icon: Plane,
  },
  {
    title: 'Consulting & Compliance',
    description: 'Professional guidance on trade regulations, tariffs, export-import policies, and international trade compliance.',
    icon: FileText,
  },
];

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ElementType;
}> = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-primary-100 transition-all group">
      <div className="bg-primary-50 p-3 rounded-lg inline-block mb-4 group-hover:bg-primary-100 transition-colors">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
          <p className="text-lg text-gray-600">
            We offer a full spectrum of import and export solutions tailored to meet your specific business requirements and help you navigate the complexities of global trade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;