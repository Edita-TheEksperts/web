import React from "react";

const Hero = ({ title, subtitle }) => {
    return (
        <div className="relative bg-[#FAFAFA] text-black py-16">
      <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
        <h1 className="text-5xl font-bold tracking-tight mb-4 uppercase">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg tracking-wide font-medium italic">
            {subtitle}
          </p>
        )}
      </div>

      {/* Decorative Line */}
      <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-gray-200 rotate-[1deg]"></div>
    </div>
    );
  };

const Impressum = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-6 py-12">
        <Hero
        title="Impressum"
        subtitle="Transparency, Accountability, and Trust by the eksperts"
      />
      <h2 className="text-3xl font-bold mt-12 mb-8">Legal Information</h2>

      {/* Business Owner */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Owner Information</h2>
        <p>
          <strong>Name of the Owner:</strong> Fisnik Salihu
        </p>
      </section>

      {/* Business Address */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Business Address</h2>
        <address className="not-italic">
          [Your Business Name] <br />
          [Street Address] <br />
          [City, ZIP Code] <br />
          [Country]
        </address>
      </section>

      {/* Contact Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
        <p>
          <strong>Phone:</strong> +41 79 921 30 00
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
          <strong>Website:</strong>{" "}
          <a
            href="https://www.theeksperts.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.theeksperts.com
          </a>
        </p>
      </section>

      {/* Official Incorporation Information */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Official Incorporation Information</h2>
        <p>
          <strong>Company Name:</strong> [Your Business Name] <br />
          <strong>Registration Number:</strong> [Your Company Registration Number] <br />
          <strong>VAT Number:</strong> [Your VAT Number] <br />
          <strong>Register Court:</strong> [Court Name, if applicable] <br />
          <strong>Registered Location:</strong> [City, Country]
        </p>
      </section>

      {/* Impressum Laws */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Legal Disclaimer</h2>
        <p>
          This website is owned and operated by Fisnik Salihu. The content on
          this site has been created with great care. However, we cannot
          guarantee the accuracy, completeness, or timeliness of the content.
          Pursuant to §7 of the German Telemedia Act (TMG), as a service
          provider, we are responsible for our own content on this website.
          However, according to §§8–10 TMG, we are not obligated to monitor
          transmitted or stored third-party information or investigate
          circumstances indicating illegal activity. Obligations to remove or
          block the use of information under general law remain unaffected. A
          liability in this regard, however, is only possible from the moment of
          knowledge of a specific infringement. Upon becoming aware of such
          legal violations, we will immediately remove the content.
        </p>
      </section>

      {/* EU Dispute Resolution */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">EU Online Dispute Resolution</h2>
        <p>
          The European Commission provides a platform for online dispute
          resolution (ODR):{" "}
          <a
            href="https://ec.europa.eu/consumers/odr/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            https://ec.europa.eu/consumers/odr/
          </a>
          . Consumers can use this platform to resolve disputes.
        </p>
      </section>

      {/* Social Media and Liability */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Social Media Presence</h2>
        <p>
          Our social media presence is governed by the terms and conditions of
          the respective platforms. We are not liable for third-party content
          posted on these platforms. For information about data protection on
          these platforms, please refer to their privacy policies.
        </p>
      </section>
    </div>
  );
};

export default Impressum;
