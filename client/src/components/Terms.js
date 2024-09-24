import React, { useEffect }from 'react';

const TermsAndConditions = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="terms-container px-6 py-12 sm:px-12 lg:px-24 bg-gray-100 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Terms & Conditions</h1>

      <div className="space-y-4">
        <p>
          <strong className='text-blue-700'>A.</strong> All services provided by <strong className='text-blue-700'>[Black Grapes Softech]</strong> are non-refundable. Once payment is made for our internship services, it is final and non-refundable. Please review the service details carefully before making a commitment.
        </p>

        <p>
          <strong className='text-blue-700'>B.</strong> This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011, which requires publishing the rules and regulations, privacy policy, and Terms of Use for access or usage of domain name [Enter domain name] (“Website”), including the related mobile site and mobile application (hereinafter referred to as “Platform”).
        </p>

        <p>
          <strong className='text-blue-700'>C.</strong> The Platform is owned by (Black Grapes Softech), a company incorporated under the Companies Act, 1956, with its registered office at (252-F/H Scheme No 54, Vijaynagar, Indore-452010, Madhya Pradesh, India, email:blackgrapes.arpitjain@gmail.com) (hereinafter referred to as "Platform Owner", “we”, “us”, “our”).
        </p>

        <p>
          <strong className='text-blue-700'>D.</strong> Your use of the Platform and services and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Platform, including the applicable policies which are incorporated herein by way of reference. If you transact on the Platform, you shall be subject to the policies that are applicable to the Platform for such a transaction. By mere use of the Platform, you shall be contracting with the Platform Owner and these terms and conditions, including the policies, constitute your binding obligations with the Platform Owner.
        </p>

        <p>
          <strong className='text-blue-700'>E.</strong> For the purpose of these Terms of Use, wherever the context so requires, "you", “your” or "user" shall mean any natural or legal person who has agreed to become a user/buyer on the Platform.
        </p>

        <p className="font-semibold text-blue-700">
          <strong>F.</strong> ACCESSING, BROWSING, OR OTHERWISE USING THE PLATFORM INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE, SO PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4 text-blue-700">General Terms</h2>

        <ul className="list-none list-inside space-y-2 ">
          <li>
            <strong className='text-blue-700'>I.</strong> To access and use the Services, you agree to provide true, accurate, and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account on the Platform.
          </li>
          <li>
            <strong className='text-blue-700'>II.</strong> Neither we nor any third parties provide any warranty or guarantees as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials offered on this website or through the Services, for any specific purpose.
          </li>
          <li>
            <strong className='text-blue-700'>III.</strong> Your use of our Services and the Platform is solely and entirely at your own risk and discretion, for which we shall not be liable to you in any manner. You are required to independently assess and ensure that the Services meet your requirements.
          </li>
          <li>
            <strong className='text-blue-700'>IV.</strong> The contents of the Platform and the Services are proprietary to us and are licensed to us. You will not have any authority to claim any intellectual property rights, title, or interest in its contents.
          </li>
          <li>
            <strong className='text-blue-700'>V.</strong> You acknowledge that unauthorized use of the Platform and/or the Services may lead to action against you as per these Terms of Use and/or applicable laws.
          </li>
          <li>
            <strong className='text-blue-700'>VI.</strong> You agree to pay us the charges associated with availing of the Services.
          </li>
          <li>
            <strong className='text-blue-700'>VII.</strong> You agree not to use the Platform and/or Services for any purpose that is unlawful, illegal, or forbidden by these Terms, or Indian or local laws that might apply to you.
          </li>
          <li>
            <strong className='text-blue-700'>VIII.</strong> You agree and acknowledge that the website and the Services may contain links to other third-party websites. On accessing these links, you will be governed by the terms of use, privacy policy, and such other policies of such third-party websites.
          </li>
          <li>
            <strong className='text-blue-700'>IX.</strong> You understand that upon initiating a transaction for availing of the Services, you are entering into a legally binding and enforceable contract with the Platform Owner.
          </li>
          <li>
            <strong className='text-blue-700'> X.</strong> You shall indemnify and hold harmless Platform Owner, its affiliates, group companies, and their respective officers from any claim or demand arising out of your breach of these Terms of Use, Privacy Policy, or other Policies.
          </li>
          <li>
            <strong className='text-blue-700'>XI.</strong> In no event will the Platform Owner be liable for any indirect, consequential, incidental, or punitive damages, including damages for loss of profits or data arising from the use of the Services.
          </li>
          <li>
            <strong className='text-blue-700'>XII.</strong> Notwithstanding anything contained in these Terms, the parties shall not be liable for any failure to perform an obligation under these Terms if prevented by a force majeure event.
          </li>
          <li>
            <strong className='text-blue-700'>XIII.</strong> These Terms shall be governed by and construed in accordance with the laws of India.
          </li>
          <li>
            <strong className='text-blue-700'>XIV.</strong> All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in [Indore, MadhyaPradesh].
          </li>
          <li>
            <strong className='text-blue-700'>XV.</strong> All communications related to these Terms must be directed to us using the contact information provided on this website.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TermsAndConditions;
