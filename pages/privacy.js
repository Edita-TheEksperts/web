import React from "react";
const PrivacyHeroSection = () => {
    return (
      <div className="relative bg-[#FAFAFA] text-black py-16">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h1 className="text-5xl font-bold tracking-tight mb-4 uppercase">
            Privacy Policy
          </h1>
          <p className="text-lg tracking-wide font-medium italic">
            Your Data, Your Rights
          </p>
        </div>
  
        {/* Decorative Line */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200 rotate-[1deg]"></div>
      </div>
    );
  };
    

const PrivacyPolicy = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <PrivacyHeroSection />

      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          At <strong>The Eksperts</strong>, we value your privacy and are
          committed to protecting your personal data. This Privacy Policy
          explains how we collect, use, disclose, and protect your information
          when you use our website or services. It complies with the Federal
          Act on Data Protection (FADP) of Switzerland and, where applicable,
          the General Data Protection Regulation (GDPR).
        </p>
      </section>

      {/* Data Controller */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Controller</h2>
        <p>
          The data controller responsible for the processing of your personal
          data is:
        </p>
        <p>
          <strong>Fisnik Salihu</strong>
          <br />
          The Eksperts
          <br />
          Business Address: [Insert Address Here]
          <br />
          Email:{" "}
          <a
            href="mailto:fisnik.salihu@theeksperts.com"
            className="text-blue-600 hover:underline"
          >
            fisnik.salihu@theeksperts.com
          </a>
          <br />
          Phone: +41 79 921 30 00
        </p>
      </section>

      {/* Types of Data Collected */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Types of Data Collected</h2>
        <p>
          We may collect the following types of personal data from you:
        </p>
        <ul className="list-disc pl-6">
          <li>
            <strong>Identity Data:</strong> Name, email address, phone number,
            and other identifying information.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, operating
            system, and usage details.
          </li>
          <li>
            <strong>Transactional Data:</strong> Details of services you have
            purchased or inquiries you have made.
          </li>
          <li>
            <strong>Communication Data:</strong> Any messages or correspondence
            you have with us.
          </li>
        </ul>
      </section>

      {/* Purpose of Data Collection */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Purpose of Data Collection
        </h2>
        <p>
          We collect and process your data for the following purposes:
        </p>
        <ul className="list-disc pl-6">
          <li>To provide and improve our services</li>
          <li>To communicate with you regarding inquiries or support</li>
          <li>To process transactions and billing</li>
          <li>To comply with legal obligations</li>
          <li>To analyze website usage and improve user experience</li>
        </ul>
      </section>

      {/* Legal Basis for Processing */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Legal Basis for Processing
        </h2>
        <p>
          We process your personal data based on the following legal grounds:
        </p>
        <ul className="list-disc pl-6">
          <li>Consent: When you provide explicit consent to process your data.</li>
          <li>
            Contractual Obligation: To fulfill the terms of a contract with you.
          </li>
          <li>
            Legal Obligation: When required to comply with legal or regulatory
            requirements.
          </li>
          <li>
            Legitimate Interests: To improve our services and ensure secure
            operation of our website.
          </li>
        </ul>
      </section>

      {/* Data Retention */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Retention</h2>
        <p>
          We will retain your personal data only for as long as necessary to
          fulfill the purposes outlined in this policy. Once the data is no
          longer required, we will delete or anonymize it securely.
        </p>
      </section>

      {/* Sharing of Data */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sharing of Data</h2>
        <p>
          We do not sell or share your personal data with third parties for
          marketing purposes. We may share your data with:
        </p>
        <ul className="list-disc pl-6">
          <li>Service providers assisting us in delivering our services</li>
          <li>
            Legal authorities, when required by law or to protect our rights
          </li>
          <li>Third-party analytics providers</li>
        </ul>
      </section>

      {/* Your Rights */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <p>
          Under Swiss law and the GDPR (if applicable), you have the following
          rights:
        </p>
        <ul className="list-disc pl-6">
          <li>The right to access your personal data</li>
          <li>The right to correct or update your data</li>
          <li>The right to delete your data ("right to be forgotten")</li>
          <li>
            The right to restrict or object to data processing in certain
            circumstances
          </li>
          <li>The right to data portability</li>
          <li>
            The right to withdraw consent at any time, where processing is based
            on consent
          </li>
        </ul>
        <p>
          To exercise these rights, please contact us at{" "}
          <a
            href="mailto:fisnik.salihu@theeksperts.com"
            className="text-blue-600 hover:underline"
          >
            fisnik.salihu@theeksperts.com
          </a>
          .
        </p>
      </section>

        {/* Cookies and Tracking */}
        <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking Technologies</h2>
        <p>
            Our website uses cookies and similar tracking technologies to improve your browsing experience, analyze site usage, and deliver personalized content. By using our website, you consent to the use of cookies as described in this section.
        </p>

        {/* What Cookies Are */}
        <h3 className="text-xl font-semibold mt-6 mb-2">What Are Cookies?</h3>
        <p>
            Cookies are small text files that are stored on your device when you visit a website. They help us recognize your browser and remember information such as your preferences or login details.
        </p>

        {/* Types of Cookies */}
        <h3 className="text-xl font-semibold mt-6 mb-2">Types of Cookies We Use</h3>
        <ul className="list-disc pl-6">
            <li>
            <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled.
            </li>
            <li>
            <strong>Analytical Cookies:</strong> These cookies help us understand how users interact with our website by collecting data anonymously.
            </li>
            <li>
            <strong>Functional Cookies:</strong> These cookies remember your preferences and improve your experience on the site.
            </li>
        </ul>

        {/* Managing Cookies */}
        <h3 className="text-xl font-semibold mt-6 mb-2">Managing Cookies</h3>
        <p>
            You can manage or disable cookies through your browser settings. However, please note that disabling certain cookies may impact the functionality of the website. For more information on how to manage cookies, refer to your browser's help documentation.
        </p>
        </section>

      {/* Data Security */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to
          protect your personal data from unauthorized access, loss, or misuse.
          However, no method of transmission over the internet is entirely
          secure, and we cannot guarantee absolute security.
        </p>
      </section>

      {/* Changes to Policy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy at any time. Any
          changes will be posted on this page with an updated effective date.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p>
          If you have questions about this Privacy Policy or wish to exercise
          your rights, please contact us:
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:fisnik.salihu@theeksperts.com"
            className="text-blue-600 hover:underline"
          >
            fisnik.salihu@theeksperts.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> +41 79 921 30 00
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
