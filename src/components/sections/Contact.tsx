import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset the success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600">
            Contact us to discuss your import-export needs. Our team is ready to provide personalized solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-md p-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
            
            {submitted ? (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
                Thank you for your message! We'll get back to you soon.
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="Your email"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors flex items-center justify-center gap-2 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg">
                  <Phone className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-gray-900">Phone</h4>
                  <p className="text-gray-600 mt-1">+91 94824 15992</p>
                  <p className="text-gray-600">+91 99806 49786</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600 mt-1">info@haadienterprises.co.in</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-primary-50 p-3 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary-600" />
                </div>
                <div className="ml-6">
                  <h4 className="text-lg font-medium text-gray-900">Address</h4>
                  <p className="text-gray-600 mt-1">
                    #213/17, Raghavendra Colony,<br />
                    Ballari-01, Karnataka, India
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 bg-gray-100 p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Hours</h4>
              <ul className="space-y-2">
                <li className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday:</span>
                  <span className="text-gray-900 font-medium">9:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Saturday:</span>
                  <span className="text-gray-900 font-medium">10:00 AM - 4:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-600">Sunday:</span>
                  <span className="text-gray-900 font-medium">Closed</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;