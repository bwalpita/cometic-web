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
      title: 'Nsehitech',
      client: 'Nsehitech',
      industry: 'Technology',
      icon: Building2,
      description: 'NSE Hitech specializes in developing cost-effective and highly efficient conductive materials. These materials are designed for use in both anodes and cathodes, suggesting applications in areas such as energy storage or electronics. Further details about the specific materials, their properties, and the applications where they are most effective would provide a more comprehensive understanding of NSE Hitechs work.',
      technologies: ['Wordpress', 'WooCommerce', 'Portfolio Showcase', 'Service Promotion', 'Client Navigation'],
      features: [
        'Portfolio Showcase',
        'Service Promotion',
        'Client Navigation',
        'Professional Design',
        'Responsive Layout',
        'Contact Integration'
      ],
      results: [
        'Enhanced online presence',
        'Better service visibility',
        'Improved client engagement',
        'Professional portfolio display'
      ],
      duration: '1.5 months',
      teamSize: '3 developers',
      status: 'Live',
      website: 'http://nsehitech.com/'
    },
    {
      id: 2,
      title: 'SLCFD',
      client: 'Sri Lanka Ceylon Federation of Deaf',
      industry: 'Accessibility & Education',
      icon: Users,
      description: 'Developed a website for the Sri Lanka Ceylon Federation of Deaf (SLCFD), focused on accessibility for the hearing impaired. The site includes educational resources, event listings, and a community forum.',
      technologies: ['Wordpress', 'Elementor', 'Accessibility', 'Educational Resources', 'Community Forum'],
      features: [
        'Accessibility Features',
        'Educational Resources',
        'Event Listings',
        'Community Forum',
        'Hearing Impaired Support',
        'Inclusive Design'
      ],
      results: [
        'Improved accessibility',
        'Enhanced educational access',
        'Better community support',
        'Inclusive digital experience'
      ],
      duration: '2 months',
      teamSize: '4 developers',
      status: 'Live',
      website: 'https://slcfd.lk/'
    },
    {
      id: 3,
      title: 'Ceylon Catch',
      client: 'Ceylon Catch',
      industry: 'E-commerce & Seafood',
      icon: Store,
      description: 'Ceylon Catch (Pvt) Ltd is a Sri Lankan seafood exporter that focuses on providing high-quality, sustainably sourced seafood products to global markets. Their operations involve exporting various seafood items, including shrimps, cuttlefish, octopus, and crabs, all sourced from Sri Lankas Indian Ocean waters and local farms. The company adheres to stringent food safety standards, such as those set by the EU and USA FDA and emphasizes sustainable fishing practices to ensure future fish stocks and ecological health.',
      technologies: ['Wordpress', 'WooCommerce', 'E-commerce', 'Payment System', 'Worldwide Delivery'],
      features: [
        'Online Store',
        'Secure Payment System',
        'Worldwide Delivery',
        'Fresh Seafood Catalog',
        'Order Management',
        'Customer Portal'
      ],
      results: [
        'Global market access',
        'Secure online transactions',
        'Streamlined ordering process',
        'Enhanced customer experience'
      ],
      duration: '2 months',
      teamSize: '5 developers',
      status: 'Live',
      website: 'https://ceyloncatch.com/'
    },
    {
      id: 4,
      title: 'Prime Globe Exports',
      client: 'Prime Globe Exports',
      industry: 'Export & Spices',
      icon: Store,
      description: 'Prime Globe Exports, located in Sri Lanka, specializes in exporting high-quality Sri Lankan spices globally. Their product range includes Ceylon cinnamon, cardamom, cloves, pepper, and nutmeg. The website showcases their premium spice products and facilitates international trade.',
      technologies: ['Wordpress', 'WooCommerce', 'E-commerce', 'Export Platform', 'Product Catalog'],
      features: [
        'Premium Spice Showcase',
        'International Export Platform',
        'Product Catalog',
        'Contact & Inquiry System',
        'Responsive Design',
        'Global Market Access'
      ],
      results: [
        'Enhanced international presence',
        'Streamlined export inquiries',
        'Better product visibility',
        'Improved global market access'
      ],
      duration: '2 months',
      teamSize: '3 developers',
      status: 'Live',
      website: 'https://primeglobexports.com/'
    },
      {
        id: 5,
        title: 'Infogate',
        client: 'Infogate',
        industry: 'IT Consulting',
        icon: Shield,
        description: 'Infogate is an institute of information technology that offers courses covering the school curriculum from grades 6 to 11. They provide one computer per student for training and issue valuable certificates at the end of each year. The institute is located in Kanthale and can be contacted at 0262234982. They also have a strong online presence with a Facebook page. Infogate aims to equip students for success in the globalized world.',
        technologies: ['Wordpress', 'Elementor', 'Modern Design', 'Service Showcase', 'User Experience'],
        features: [
          'Website Modernization',
          'Service Showcase',
          'Improved User Journey',
          'Modern Design',
          'Responsive Layout',
          'Professional Branding'
        ],
        results: [
          'Modern professional appearance',
          'Better service presentation',
          'Improved user engagement',
          'Enhanced brand image'
        ],
        duration: '3 months',
        teamSize: '4 developers',
        status: 'Live',
        website: 'http://www.infogate.lk/'
      },
      {
        id: 6,
        title: 'Delmege',
        client: 'Delmege Group',
        industry: 'E-commerce & Manufacturing',
        icon: Factory,
        description: 'Revamping the online presence and enhancing eCommerce functionality to offer a seamless shopping experience for customers. The project involved redesigning the website for better user experience, improving the mobile interface, and integrating secure payment gateways.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Payment Gateway', 'Mobile Responsive'],
        features: [
          'Website Redesign & Modernization',
          'Enhanced Mobile Interface',
          'Secure Payment Gateway Integration',
          'Improved User Experience',
          'E-commerce Functionality',
          'Responsive Design'
        ],
        results: [
          'Enhanced online shopping experience',
          'Improved mobile user engagement',
          'Secure payment processing',
          'Better user interface and navigation'
        ],
        duration: '6 months',
        teamSize: '5 developers',
        status: 'Live',
        website: 'https://delmege.com/'
      },
      {
        id: 7,
        title: 'Pinkberry Cars',
        client: 'Pinkberry Cars',
        industry: 'Automotive Sales',
        icon: Car,
        description: 'A custom-built car dealership platform with integrated booking system. The platform enables customers to view car listings, book test drives, and make online payments securely. We also integrated a CRM system for the dealership to manage customer interactions and sales efficiently.',
        technologies: ['Wordpress', 'WooCommerce', 'CRM Integration', 'Booking System'],
        features: [
          'Car Listings & Search',
          'Test Drive Booking System',
          'Online Payment Integration',
          'CRM System Integration',
          'Customer Portal',
          'Inventory Management'
        ],
        results: [
          'Streamlined car sales process',
          'Improved customer engagement',
          'Efficient booking management',
          'Enhanced dealership operations'
        ],
        duration: '5 months',
        teamSize: '6 developers',
        status: 'Live',
        website: 'https://www.pinkberrycars.com/'
      },
      {
        id: 8,
        title: 'IDM.edu',
        client: 'Institute of Data Management',
        industry: 'Education',
        icon: Building2,
        description: 'A professional educational website designed for the Institute of Data Management (IDM), offering online course registration, course catalog, and student portal features. The platform enhances the educational experience by allowing students to manage their studies online.',
        technologies: ['React', 'Node.js', 'PostgreSQL', 'Student Portal', 'Course Management'],
        features: [
          'Online Course Registration',
          'Course Catalog System',
          'Student Portal',
          'Course Management',
          'Educational Resources',
          'User Authentication'
        ],
        results: [
          'Improved student experience',
          'Streamlined course management',
          'Enhanced online learning capabilities',
          'Better educational resource access'
        ],
        duration: '3 months',
        teamSize: '5 developers',
        status: 'Live',
        website: 'https://idm.edu/'
      },
      {
        id: 9,
        title: 'Lassana Events',
        client: 'Lassana Events',
        industry: 'Event Management',
        icon: Calendar,
        description: 'An event management platform that allows users to browse upcoming events, register for tickets, and manage bookings seamlessly. The project focused on user-friendly navigation and mobile responsiveness to improve the overall customer experience.',
        technologies: ['Wordpress', 'WooCommerce', 'Elementor', 'Event Management', 'Ticket Booking'],
        features: [
          'Event Browsing & Search',
          'Ticket Registration System',
          'Booking Management',
          'Mobile Responsive Design',
          'User-friendly Navigation',
          'Event Calendar'
        ],
        results: [
          'Improved event discovery',
          'Streamlined ticket booking',
          'Better user experience',
          'Enhanced mobile engagement'
        ],
        duration: '3 months',
        teamSize: '4 developers',
        status: 'Live',
        website: 'https://lassanaevents.com/'
      },
      {
        id: 10,
        title: 'Future of Tourism',
        client: 'Future of Tourism',
        industry: 'Tourism & Sustainability',
        icon: Building2,
        description: 'Created a dynamic website for "Future of Tourism" that focuses on sustainable travel practices and eco-tourism initiatives. The platform offers resources for travelers and industry professionals interested in sustainable tourism.',
        technologies: ['React', 'Node.js', 'Sustainable Tourism', 'Eco-tourism', 'Travel Resources'],
        features: [
          'Sustainable Travel Resources',
          'Eco-tourism Information',
          'Industry Professional Tools',
          'Travel Guides',
          'Sustainability Focus',
          'Professional Resources'
        ],
        results: [
          'Promoted sustainable tourism',
          'Provided valuable travel resources',
          'Enhanced industry knowledge',
          'Supported eco-tourism initiatives'
        ],
        duration: '4 months',
        teamSize: '4 developers',
        status: 'Live',
        website: 'http://futureoftourism.co/'
      },
      {
        id: 11,
        title: 'Zionct',
        client: 'Zionct',
        industry: 'Corporate Consulting',
        icon: Building2,
        description: 'A corporate website for Zionct, showcasing their consulting services in IT, marketing, and business transformation. The website features interactive elements and clear calls-to-action for client engagement.',
        technologies: ['Wordpress', 'Elementor', 'Corporate Design', 'Interactive Elements', 'Client Engagement'],
        features: [
          'Consulting Services Showcase',
          'Interactive Elements',
          'Clear Call-to-Actions',
          'Client Engagement Tools',
          'Professional Design',
          'Service Portfolio'
        ],
        results: [
          'Enhanced service visibility',
          'Improved client engagement',
          'Professional corporate image',
          'Better lead generation'
        ],
        duration: '1 months',
        teamSize: '4 developers',
        status: 'Live',
        website: 'https://zionct.com/'
      },
      {
        id: 12,
        title: 'Agbora Jamahaviharaya',
        client: 'Agbora Jamahaviharaya',
        industry: 'Religious Community',
        icon: Users,
        description: 'Developed a community-driven website for Agbora Jamahaviharaya, a Buddhist temple. The site serves as an online hub for the temple\'s services, events, and community outreach programs, making it easier for followers to stay connected.',
        technologies: ['React', 'Node.js', 'Community Platform', 'Event Management', 'Religious Services'],
        features: [
          'Temple Services Info',
          'Event Management',
          'Community Outreach',
          'Religious Resources',
          'Community Connection',
          'Mobile Responsive'
        ],
        results: [
          'Better community connection',
          'Improved event communication',
          'Enhanced religious service access',
          'Strengthened community bonds'
        ],
        duration: '1 months',
        teamSize: '3 developers',
        status: 'Live',
        website: 'https://www.agborajamahaviharaya.lk/'
      },
      {
        id: 13,
        title: 'Pacma Sri Lanka',
        client: 'Pacma Sri Lanka',
        industry: 'Non-profit',
        icon: Users,
        description: 'A non-profit platform designed for Pacma Sri Lanka, aimed at promoting their community development activities. The website provides information about ongoing projects and encourages donations and volunteer sign-ups.',
        technologies: ['React', 'Node.js', 'Donation System', 'Volunteer Management', 'Community Platform'],
        features: [
          'Community Development Info',
          'Donation System',
          'Volunteer Sign-up',
          'Project Showcase',
          'Community Engagement',
          'Non-profit Features'
        ],
        results: [
          'Increased community awareness',
          'Streamlined donation process',
          'Better volunteer engagement',
          'Enhanced community outreach'
        ],
        duration: '2 months',
        teamSize: '4 developers',
        status: 'Live',
        website: 'https://www.pacmasrilanka.org/'
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
                  
                  {project.website && (
                    <div className="mb-6">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </a>
                    </div>
                  )}
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
              'E-commerce & Manufacturing',
              'Automotive Sales',
              'Education',
              'Event Management',
              'IT Consulting',
              'Technology',
              'Non-profit',
              'Religious Community',
              'Tourism & Sustainability',
              'Seafood & E-commerce',
              'Corporate Consulting',
              'Accessibility & Education'
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