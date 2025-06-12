import React from 'react';

const exports = [
  {
    name: 'Basmati Rice',
    image: 'https://i.ibb.co/7N0fF8kP/rice-flakes-rice-noodles-rice-bread-rice-top-view.jpg',
    description: 'Premium quality long-grain aromatic rice exported to Middle East and European markets.',
  },
  {
    name: 'Onion',
    image: 'https://i.ibb.co/pjhFG7Rm/top-view-red-onions-purple-background.jpg',
    description: 'Fresh, high-quality onions supplied to various international markets with consistent quality control.',
  },
  {
    name: 'Green Chilly',
    image: 'https://i.ibb.co/sdNymhHw/side-view-fresh-green-chili-peppers-wooden-bowl-sackcloth-rustic-surface.jpg',
    description: 'Farm-fresh green chillies packed and exported with proper temperature control and preservation.',
  },
  {
    name: 'Spices',
    image: 'https://i.ibb.co/Qv2b1S7q/Gemini-Generated-Image-u3u0zqu3u0zqu3u0.png',
    description: 'Authentic Indian spices including turmeric, coriander, cumin, and specialized spice blends.',
  },
  {
    name: 'Roasted Almonds',
    image: 'https://i.ibb.co/0jYw05YD/toolxox-com-qd7p-K.jpg',
    description: 'Premium quality roasted almonds packaged for retail and wholesale distribution worldwide.',
  },
  {
    name: 'Neem Toothbrush',
    image: 'https://i.ibb.co/0Rq3FKHd/Generated-Image-June-11-2025-11-13-PM.jpg',
    description: 'Eco-friendly neem toothbrushes, sustainable alternatives exported to environmentally conscious markets.',
  },
];

const ExportCard: React.FC<{
  name: string;
  image: string;
  description: string;
}> = ({ name, image, description }) => {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-xl">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Exports: React.FC = () => {
  return (
    <section id="exports" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Export Products</h2>
          <p className="text-lg text-gray-600">
            We specialize in exporting high-quality Indian products to international markets, ensuring premium quality and compliance with global standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {exports.map((item, index) => (
            <ExportCard
              key={index}
              name={item.name}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
 
export default Exports;