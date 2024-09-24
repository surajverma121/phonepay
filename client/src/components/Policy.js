import React, { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mx-auto px-4 md:px-16 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Privacy Policy
        </h1>
        <div className="space-y-8">
          {/* Information We Collect Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              1. Information We Collect
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Personal Information:</strong> We collect personal details such as your name, email address, shipping address, phone number, and payment information when you make a purchase, create an account, or contact us at BlackGrapes Softech.</li>
              <li><strong>Non-Personal Information:</strong> We may collect non-personal data such as browser type, operating system, and browsing behavior to improve our website and services.</li>
            </ul>
          </section>

          {/* How We Use Your Information Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              2. How We Use Your Information
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>To Process Orders:</strong> We use your personal information to process and fulfill your orders at BlackGrapes Softech.</li>
              <li><strong>To Communicate:</strong> We use your contact information to send you updates about your order, respond to inquiries, and send promotional materials if you have opted in.</li>
              <li><strong>To Improve Our Services:</strong> We analyze non-personal information to understand user behavior and enhance our website’s performance.</li>
            </ul>
          </section>

          {/* Information Sharing Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              3. Information Sharing
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Third-Party Service Providers:</strong> We may share your information with third-party service providers who assist us in operating our website, processing payments, and delivering orders.</li>
              <li><strong>Legal Requirements:</strong> We may disclose your information if required by law or to protect our rights.</li>
            </ul>
          </section>

          {/* Data Security Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              4. Data Security
            </h2>
            <p className="text-gray-600">
              We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          {/* Your Rights Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              5. Your Rights
            </h2>
            <ul className="list-disc list-inside text-gray-600">
              <li><strong>Access and Correction:</strong> You have the right to access and correct your personal information. You can update your account details through our website.</li>
              <li><strong>Opt-Out:</strong> You can opt-out of receiving promotional emails by following the unsubscribe instructions in the emails.</li>
            </ul>
          </section>

          {/* Changes to This Policy Section */}
          <section>
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the revised date will be indicated at the top of the policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
