import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

const TermsAndConditions = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms and Conditions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Welcome to Cometic IT Care. Please read these terms carefully before using our website and services.
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
              Welcome to Cometic IT Care. By accessing or using our website and services, you agree to comply with the following terms and conditions ("Terms"). Please read them carefully.
            </p>
          </div>

          {/* Terms Sections */}
          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing or using our website or services, you agree to be bound by these Terms and all applicable laws. If you do not agree, you must not use our website or services.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Website and Services</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>You must use the website and services only for lawful purposes.</li>
                <li>You agree not to:</li>
              </ul>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-8 mt-2">
                <li>Use the website for any fraudulent or harmful activities.</li>
                <li>Attempt to gain unauthorized access to any systems or networks.</li>
                <li>Upload or distribute any content that is illegal, offensive, or infringing on intellectual property rights.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700">
                All content, including text, images, logos, graphics, and software, on this website is the property of Cometic IT Care or its licensors. You may not copy, reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Service Terms</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Cometic IT Care provides IT services including software development, AI solutions, networking, and data management.</li>
                <li>We make reasonable efforts to deliver services in a professional and timely manner but do not guarantee specific results.</li>
                <li>We are not liable for any indirect, incidental, or consequential damages arising from the use of our website or services.</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Payment and Billing (if applicable)</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>All fees for services must be paid as agreed upon in the contract or invoice.</li>
                <li>Late payments may incur additional charges or delay project delivery.</li>
                <li>Ownership of work delivered may remain with Cometic IT Care until full payment is received.</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may include links to external websites for your convenience. We do not control or endorse these third-party websites and are not responsible for their content or practices.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>To the fullest extent permitted by law, Cometic IT Care is not liable for any loss, damage, or inconvenience caused by the use or inability to use the website or services.</li>
                <li>We are not responsible for technical failures, interruptions, or data loss that may occur while using our website or services.</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Governing Law</h2>
              <p className="text-gray-700">
                These Terms are governed by the laws of Sri Lanka. Any disputes arising from the use of our website or services shall be subject to the exclusive jurisdiction of the courts in Sri Lanka.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700">
                We may revise these Terms and Conditions at any time. Updated terms will be posted on this page, and continued use of the website or services constitutes acceptance of the updated terms.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">If you have questions regarding these Terms and Conditions, please contact:</p>
              
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

export default TermsAndConditions;
