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
  Cpu,
  Shield,
  BarChart3,
  Smartphone
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge artificial intelligence and machine learning technologies.',
      features: [
        'Machine Learning Model Development',
        'Natural Language Processing',
        'Computer Vision Solutions',
        'Predictive Analytics',
        'AI Strategy Consulting',
        'Model Deployment & Optimization'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Azure AI', 'AWS ML']
    },
    {
      icon: Code,
      title: 'Software Development',
      description: 'Custom software applications built with modern technologies to meet your specific business requirements.',
      features: [
        'Web Application Development',
        'Mobile App Development',
        'Desktop Application Development',
        'API Development & Integration',
        'Legacy System Modernization',
        'Quality Assurance & Testing'
      ],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'React Native', '.NET']
    },
    {
      icon: Network,
      title: 'Networking Solutions',
      description: 'Robust network infrastructure design and implementation for secure and efficient connectivity.',
      features: [
        'Network Design & Architecture',
        'Security Implementation',
        'Performance Optimization',
        'Network Monitoring & Management',
        'Wireless Solutions',
        'VPN & Remote Access Setup'
      ],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'Ubiquiti', 'pfSense', 'VMware']
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Comprehensive data solutions including storage, analysis, and visualization for informed decision-making.',
      features: [
        'Database Design & Optimization',
        'Data Warehousing Solutions',
        'Business Intelligence & Analytics',
        'Data Migration & Integration',
        'Real-time Data Processing',
        'Data Security & Compliance'
      ],
      technologies: ['PostgreSQL', 'MongoDB', 'Apache Spark', 'Tableau', 'Power BI', 'Elasticsearch']
    },
    {
      icon: Settings,
      title: 'Project Management',
      description: 'Professional project management services to ensure your IT initiatives are delivered on time and within budget.',
      features: [
        'Agile Project Management',
        'Stakeholder Communication',
        'Resource Planning & Allocation',
        'Risk Assessment & Mitigation',
        'Quality Control & Assurance',
        'Change Management'
      ],
      technologies: ['Jira', 'Confluence', 'Microsoft Project', 'Slack', 'Trello', 'Azure DevOps']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Cloud migration, management, and optimization services to enhance scalability and reduce costs.',
      features: [
        'Cloud Architecture Design',
        'Migration Strategy & Implementation',
        'Multi-cloud Management',
        'Cost Optimization',
        'Security & Compliance',
        'DevOps & Automation'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform']
    }
  ];

  const additionalServices = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.'
    },
    {
      icon: Smartphone,
      title: 'Mobile Solutions',
      description: 'Native and cross-platform mobile applications for iOS and Android platforms.'
    },
    {
      icon: BarChart3,
      title: 'Digital Analytics',
      description: 'Advanced analytics and reporting solutions to drive data-driven decision making.'
    },
    {
      icon: Cpu,
      title: 'IoT Solutions',
      description: 'Internet of Things implementations for smart devices and connected systems.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to your business needs, 
              from AI and software development to cloud services and project management.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Core Service Offerings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end IT solutions designed to transform your business 
              and drive sustainable growth in the digital economy.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-gray-600 mb-8">
                    {service.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Get Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                <div className={`bg-gray-50 p-8 rounded-xl ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-lg flex items-center justify-center">
                    <service.icon className="w-24 h-24 text-blue-600 opacity-50" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Additional Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Beyond our core services, we offer specialized solutions to address 
              specific technology challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery 
              and exceptional client satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We analyze your requirements, challenges, and objectives to develop a comprehensive understanding of your needs.'
              },
              {
                step: '02',
                title: 'Strategy',
                description: 'Our team creates a detailed project plan with timelines, resources, and milestones tailored to your goals.'
              },
              {
                step: '03',
                title: 'Implementation',
                description: 'We execute the project using agile methodologies, ensuring quality and maintaining regular communication.'
              },
              {
                step: '04',
                title: 'Support',
                description: 'We provide ongoing support, maintenance, and optimization to ensure continued success and growth.'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and explore how our services 
            can help achieve your business objectives.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors inline-flex items-center"
          >
            Schedule Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;