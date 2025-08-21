import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Award, 
  Target, 
  Heart, 
  Users, 
  Lightbulb,
  ArrowRight,
  CheckCircle 
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, continuously exploring new solutions to meet evolving business challenges.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Your success is our priority. We work closely with clients to understand their unique needs and deliver tailored solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from project delivery to ongoing support and maintenance.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency, honest communication, and ethical business practices in all our relationships.'
    }
  ];

  const expertise = [
    'Advanced AI and Machine Learning',
    'Full-Stack Software Development',
    'Enterprise Network Architecture',
    'Data Science and Analytics',
    'Cloud Infrastructure Management',
    'Agile Project Management',
    'Cybersecurity Solutions',
    'Digital Transformation Strategy'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Cometic IT Care
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Driven by innovation and committed to excellence, we transform businesses 
              through cutting edge technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Empowering Businesses Through Technology
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Cometic IT Care, we specialize in delivering comprehensive IT solutions that 
                drive business growth and innovation. Our expertise spans artificial intelligence, 
                software development, networking, data management, and project management.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Founded on the principles of innovation, excellence, and client satisfaction, 
                we have successfully served clients across various industries, including enterprise 
                organizations like Delmege, Pinkberry Cars, and SLCFD.
              </p>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                Work With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Expertise</h3>
              <div className="space-y-3">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our leadership combines academic excellence with practical industry experience 
              to deliver world-class IT solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Buddika Srimal Walpita
                </h3>
                <p className="text-lg text-blue-600 mb-4">Founder & Lead Technology Architect</p>
                <p className="text-gray-600 mb-6">
                  Currently pursuing MSc Data Science at Kingston University
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Academic Excellence</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• MSc Data Science - Kingston University (Ongoing)</li>
                    <li>• Advanced expertise in AI and Machine Learning</li>
                    <li>• Research focus on practical business applications</li>
                    <li>• Strong foundation in statistical analysis and modeling</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Industry Experience</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 3+ years of professional IT consulting</li>
                    <li>• Successfully delivered 50+ projects</li>
                    <li>• Expertise in enterprise-level implementations</li>
                    <li>• Proven track record with major clients</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-xl">
              <Target className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600">
                To empower businesses with innovative IT solutions that drive growth, enhance 
                efficiency, and create competitive advantages in the digital age. We are committed 
                to delivering exceptional value through cutting-edge technology and personalized service.
              </p>
            </div>

            <div className="bg-indigo-50 p-8 rounded-xl">
              <Lightbulb className="w-12 h-12 text-indigo-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600">
                To be the leading IT solutions provider, recognized for our innovation, expertise, 
                and commitment to client success. We envision a future where technology seamlessly 
                integrates with business operations to unlock unlimited potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape our relationships 
              with clients, partners, and team members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
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
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise and values align with your business goals 
            to create exceptional results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;