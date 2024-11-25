import React from "react";

const TermsHeroSection = () => {
    return (
      <div className="relative bg-[#FAFAFA] text-black py-16">
        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <h1 className="text-5xl font-bold tracking-tight mb-4 uppercase">
            Terms and Conditions
          </h1>
          <p className="text-lg tracking-wide font-medium italic">
            The Rules That Govern Our Relationship
          </p>
        </div>
  
        {/* Decorative Line */}
        <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200 rotate-[1deg]"></div>
      </div>
    );
  };

const TermsAndConditions = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
      <TermsHeroSection />
      <h1 className="text-3xl font-bold mb-8">Terms and Conditions</h1>

      {/* Introduction */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          Welcome to <strong>The Eksperts</strong>. By accessing and using our
          website, you agree to be bound by the following terms and conditions
          ("Terms"). Please read these Terms carefully before using our
          services. If you do not agree to these Terms, you must refrain from
          using our website.
        </p>
      </section>

      {/* Eligibility */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Eligibility</h2>
        <p>
          By using this website, you confirm that you are at least 18 years old
          or have the consent of a parent or guardian to use our services. You
          agree to comply with all applicable laws and regulations while using
          this website.
        </p>
      </section>

      {/* Use of the Website */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Use of the Website</h2>
        <p>
          You agree to use this website solely for lawful purposes and in a way
          that does not infringe the rights of others. You may not use our
          website to:
        </p>
        <ul className="list-disc pl-6">
          <li>Distribute harmful or malicious content</li>
          <li>Engage in fraudulent activity</li>
          <li>Violate any applicable local, national, or international law</li>
          <li>Attempt unauthorized access to our systems</li>
        </ul>
      </section>

      {/* Intellectual Property */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Intellectual Property</h2>
        <p>
          All content on this website, including but not limited to text,
          images, logos, and graphics, is the intellectual property of The
          Eksperts unless otherwise stated. Unauthorized use, reproduction, or
          distribution of this content is prohibited.
        </p>
      </section>

      {/* Services and Pricing */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Services and Pricing</h2>
        <p>
          We reserve the right to modify or discontinue any service offered on
          this website at any time. Prices for our services are subject to
          change without notice. We are not liable for any price modifications
          or service disruptions.
        </p>
      </section>

      {/* Limitation of Liability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
        <p>
          The Eksperts will not be held liable for any direct, indirect,
          incidental, or consequential damages arising from the use of our
          website or services. We make no warranties or representations about
          the accuracy, reliability, or completeness of the content on this
          website.
        </p>
      </section>

      {/* User Account */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Account</h2>
        <p>
          If you create an account on our website, you are responsible for
          maintaining the confidentiality of your account credentials. You agree
          to notify us immediately if your account is compromised.
        </p>
      </section>

      {/* Privacy */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Privacy</h2>
        <p>
          Our use of your personal information is governed by our{" "}
          <a href="/privacy-policy" className="text-blue-600 hover:underline">
            Privacy Policy
          </a>
          . By using our website, you consent to the collection and use of your
          information as described in the Privacy Policy.
        </p>
      </section>

      {/* Governing Law */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
        <p>
          These Terms are governed by the laws of [Your Country]. Any disputes
          arising from the use of this website or these Terms will be subject to
          the exclusive jurisdiction of the courts of [Your City, Country].
        </p>
      </section>

      {/* Changes to Terms */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
        <p>
          We reserve the right to update or modify these Terms at any time
          without prior notice. Any changes will be effective immediately upon
          posting to the website. Your continued use of the website constitutes
          acceptance of the revised Terms.
        </p>
      </section>

      {/* Contact Information */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p>
          If you have any questions or concerns regarding these Terms, please
          contact us:
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

export default TermsAndConditions;
