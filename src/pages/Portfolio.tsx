import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ExternalLink, 
  Calendar,
  Users,
  ArrowRight,
  Building2,
  Car,
  Shield,
  Truck,
  Store,
  Factory
} from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Delmege Enterprise Solutions',
      client: 'Delmege Group',
      industry: 'Manufacturing & Trading',
      icon: Factory,
      description: 'Comprehensive digital transformation initiative including enterprise resource planning, data analytics, and process automation for one of Sri Lanka\'s leading conglomerates.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes'],
      features: [
        'Enterprise Resource Planning (ERP) System',
        'Real-time Analytics Dashboard',
        'Inventory Management System',
        'Financial Reporting & Analytics',
        'Supply Chain Optimization',
        'Multi-location Data Synchronization'
      ],
      results: [
        '40% improvement in operational efficiency',
        '60% reduction in manual processing time',
        'Real-time visibility across all business units',
        'Enhanced decision-making capabilities'
      ],
      duration: '18 months',
      teamSize: '8 developers',
      status: 'Live'
    },
    {
      id: 2,
      title: 'Pinkberry Cars Digital Platform',
      client: 'Pinkberry Cars',
      industry: 'Automotive Sales',
      icon: Car,
      description: 'Modern e-commerce platform and inventory management system for luxury car dealership with advanced search, financing calculators, and customer relationship management.',
      technologies: ['React', 'Express.js', 'MongoDB', 'Stripe', 'Azure', 'Redis'],
      features: [
        'Advanced Vehicle Search & Filtering',
        'Online Financing Calculator',
        'Virtual Showroom Experience',
        'Customer Portal & CRM',
        'Inventory Management System',
        'Automated Lead Generation'
      ],
      results: [
        '150% increase in online inquiries',
        '85% improvement in lead conversion',
        'Streamlined sales process',
        'Enhanced customer experience'
      ],
      duration: '12 months',
      teamSize: '6 developers',
      status: 'Live'
    },
    {
      id: 3,
      title: 'SLCFD Security Framework',
      client: 'Sri Lanka Customs Freight Department',
      industry: 'Government/Logistics',
      icon: Shield,
      description: 'Advanced security and compliance management system for freight operations with real-time monitoring, risk assessment, and automated reporting capabilities.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker', 'Nginx'],
      features: [
        'Real-time Security Monitoring',
        'Risk Assessment Algorithms',
        'Automated Compliance Reporting',
        'Document Management System',
        'Multi-level Authentication',
        'Audit Trail & Logging'
      ],
      results: [
        '70% reduction in security incidents',
        'Automated compliance reporting',
        'Improved operational transparency',
        'Enhanced data security'
      ],
      duration: '15 months',
      teamSize: '10 specialists',
      status: 'Live'
    }
  ];

  const additionalProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-featured online store with payment integration',
      icon: Store,
      technologies: ['React', 'Node.js', 'Stripe']
    },
    {
      title: 'Logistics Management',
      description: 'Supply chain optimization and tracking system',
      icon: Truck,
      technologies: ['Python', 'Django', 'PostgreSQL']
    },
    {
      title: 'Corporate Website',
      description: 'Professional corporate presence with CMS',
      icon: Building2,
      technologies: ['React', 'Headless CMS', 'AWS']
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Showcasing successful IT solutions delivered for leading organizations 
              across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '25+', label: 'Happy Clients' },
              { number: '15+', label: 'Industries Served' },
              { number: '99%', label: 'Success Rate' }
            ].map((stat, index) => (
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

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep dive into our most impactful projects that demonstrate our expertise 
              in delivering enterprise-grade solutions.
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <project.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 font-medium">{project.client}</p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-600 mb-6">
                    {project.description}
                  </p>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{project.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{project.teamSize}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">{project.status}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={`bg-gray-50 p-8 rounded-xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Results & Impact:</h4>
                  <div className="space-y-4">
                    {project.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-6 bg-white rounded-lg border-l-4 border-blue-600">
                    <p className="text-gray-600 italic">
                      "The solution delivered by Cometic IT Care exceeded our expectations. 
                      Their expertise and professional approach made the entire project seamless."
                    </p>
                    <p className="text-sm text-gray-500 mt-2">- {project.client} Team</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Projects */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              More Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A selection of additional successful projects across various industries and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <project.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse portfolio spans multiple industries, showcasing our adaptability 
              and deep understanding of sector-specific challenges.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              'Manufacturing',
              'Automotive',
              'Government',
              'Healthcare',
              'Finance',
              'Retail',
              'Education',
              'Logistics',
              'Real Estate',
              'Technology',
              'Hospitality',
              'Non-profit'
            ].map((industry, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Building2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-medium text-gray-900 text-sm">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our satisfied clients and let us help you transform your business 
            with innovative IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;