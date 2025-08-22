import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Code, 
  Network, 
  Database, 
  Settings, 
  Cloud, 
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  Zap
} from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning solutions to automate and optimize your business processes.'
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software applications built with modern technologies to meet your specific business requirements.'
    },
    {
      icon: Network,
      title: 'Networking Solutions',
      description: 'Robust network infrastructure design and implementation for secure and efficient connectivity.'
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data solutions including storage, analysis, and visualization for informed decision-making.'
    },
    {
      icon: Settings,
      title: 'Project Management',
      description: 'Professional project management services to ensure your IT initiatives are delivered on time and within budget.'
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration, management, and optimization services to enhance scalability and reduce costs.'
    }
  ];

  const stats = [
    { number: '75+', label: 'Projects Completed' },
    { number: '10+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-800 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Empowering Your Business with
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">
                Cutting-Edge IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
              Transform your business with our comprehensive IT services including AI solutions, 
              software development, networking, and data management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Get Started Today
              </Link>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-200 transform hover:scale-105"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Zap className="w-16 h-16" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Network className="w-20 h-20" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive IT solutions tailored to your business needs, 
              from cutting-edge AI to robust infrastructure management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Cometic IT Care?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With expertise spanning AI, software development, and infrastructure management, 
                we deliver comprehensive solutions that drive business growth and innovation.
              </p>

              <div className="space-y-4">
                {[
                  'Expert team with MSc Data Science qualifications',
                  'Proven track record with enterprise clients',
                  'Cutting-edge technology solutions',
                  'Client-centric approach and 24/7 support',
                  'Innovation-driven methodology',
                  'Scalable and future-proof solutions'
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600 text-sm">
                  Highly qualified professionals with advanced degrees and industry certifications.
                </p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Assurance</h3>
                <p className="text-gray-600 text-sm">
                  Rigorous testing and quality control processes ensure reliable solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a free consultation and discover how our IT solutions can drive your business forward.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-200 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;