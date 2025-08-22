import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Cometic IT Care is committed to protecting your privacy and ensuring responsible handling of your personal information.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Effective Date */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <p className="text-gray-700">
              <strong>Effective Date:</strong> December 2024
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Cometic IT Care ("we," "our," or "us") is committed to protecting your privacy and ensuring that your personal information is handled responsibly. This Privacy Policy explains how we collect, use, and protect the information you provide when visiting our website or using our services.
            </p>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect the following types of information:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide when filling out contact forms or subscribing to our services.</li>
                <li><strong>Technical Information:</strong> IP address, browser type, operating system, and browsing behavior collected through website analytics.</li>
                <li><strong>Usage Information:</strong> Pages visited, time spent on the website, and interactions with website features.</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">Your information may be used for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To respond to inquiries and provide customer support.</li>
                <li>To deliver services you have requested.</li>
                <li>To send updates, newsletters, and marketing communications (if you opt-in).</li>
                <li>To improve our website, services, and user experience.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Sharing Your Information</h2>
              <p className="text-gray-700 mb-4">We respect your privacy and do not sell, trade, or rent your personal information. We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li><strong>With service providers:</strong> To help us provide our services (e.g., hosting providers, email services).</li>
                <li><strong>Legal Requirements:</strong> When required to comply with a legal obligation or protect our rights.</li>
                <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or sale of assets.</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies and Tracking</h2>
              <p className="text-gray-700 mb-4">Our website may use cookies and similar technologies to enhance your experience. Cookies may help us:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Track website usage and analytics.</li>
                <li>Remember your preferences.</li>
                <li>Improve website functionality and user experience.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                You can choose to disable cookies in your browser settings, but some features of the website may not function properly.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or disclosure. However, no method of transmission over the internet is 100% secure.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Rights</h2>
              <p className="text-gray-700 mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Access the personal information we hold about you.</li>
                <li>Request correction or deletion of your personal data.</li>
                <li>Opt-out of marketing communications.</li>
                <li>Withdraw consent at any time where consent has been given.</li>
              </ul>
              <p className="text-gray-700 mt-4">
                To exercise your rights, contact us at{' '}
                <a href="mailto:cometicitcare@gmail.com" className="text-blue-600 hover:text-blue-800">cometicitcare@gmail.com</a> or{' '}
                <a href="mailto:info@cometicitcare.com" className="text-blue-600 hover:text-blue-800">info@cometicitcare.com</a>.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external websites. We encourage you to review their privacy policies when visiting third-party sites.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Privacy Policy</h2>
              <p className="text-gray-700">
                We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. The updated policy will be posted on this page with the effective date revised.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact Us</h2>
              <p className="text-gray-700 mb-4">If you have questions about this Privacy Policy or our data practices, please contact us at:</p>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Cometic IT Care</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">309-B, Kapuwagara Road, Batagama South, Kandana</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">0113-123737 | 0773-077759</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">
                      <a href="mailto:cometicitcare@gmail.com" className="text-blue-600 hover:text-blue-800">cometicitcare@gmail.com</a> |{' '}
                      <a href="mailto:info@cometicitcare.com" className="text-blue-600 hover:text-blue-800">info@cometicitcare.com</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
