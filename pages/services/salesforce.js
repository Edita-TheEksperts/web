// pages/services/salesforce.js
import Head from 'next/head';

const Salesforce = () => {
  return (
    <>
      <Head>
        <title>Salesforce Services - The Eksperts</title>
      </Head>
      <main className="max-w-[1280px] mx-auto p-4 lg:p-8 text-center">
        
        {/* Main Heading */}
        <div className="w-full max-w-[1280px] mx-auto text-center my-16">
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-tight">
          SALESFORCE
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-4 text-gray-500">
            Sie haben the eksperts gefunden.
          </p>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-700 mb-28">
          Salesforce services encompass consulting, implementation, customization, integration with third parties, support, and other activities to help companies reap maximum benefits from Salesforce CRM. Our certified architects, consultants, developers, and admins can provide a full range of professional Salesforce services.
        </p>


      {/* Section 01 with Title */}
      <section className="flex items-start space-x-4 mb-12">
        <div className="flex-shrink-0">
          <span className="text-6xl font-extrabold">01</span>
        </div>
        
        <div className="flex flex-col w-full">
          <h2 className="text-6xl font-extrabold text-right">Why choose the eksperts</h2>
        </div>
      </section>

      {/* Highlights Box */}
      <section className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-10 mb-12">
        {/* Left Column with Highlights */}
        <div className="w-full md:w-2/3 text-gray-800 text-left space-y-4">
          <p><strong>10+</strong> YEARS OF EXPERIENCE WITH SALESFORCE PROFESSIONAL SERVICES</p>
          <p><strong>25+</strong> YEARS IN IT CONSULTING AND SOFTWARE DEVELOPMENT</p>
          <p><strong>IN-HOUSE</strong> SALESFORCE CENTER OF EXCELLENCE</p>
          <p><strong>98</strong> SALESFORCE CERTIFICATIONS</p>
          <p><strong>SALES CLOUD, SERVICE CLOUD, MARKETING CLOUD, CPQ</strong> AND OTHER SALESFORCE PRODUCTS EXPERTISE</p>
          <p>RECOGNIZED AMONG <strong>TOP SALESFORCE</strong> CONSULTING COMPANIES BY CLUTCH</p>
        </div>
      </section>

        {/* Section 02 with Title */}
        <section className="flex items-start space-x-4 mb-12">
          {/* Left column for 02 */}
          <div className="flex-shrink-0">
            <span className="text-6xl font-extrabold">02</span>
          </div>
          
          {/* Right column for Title */}
          <div className="flex flex-col w-full">
            <h2 className="text-6xl font-extrabold text-right">Client Spotlight</h2>
          </div>
        </section>
        
        {/* Spotlight Entries */}
        <section className="space-y-8">
          {[...Array(3)].map((_, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-gray-50 p-8 rounded-lg shadow-lg space-y-4 md:space-y-0 md:space-x-8"
            >
              {/* Image Placeholder */}
              <div className="w-full md:w-1/3 h-48 bg-gray-200 rounded-lg"></div>

              {/* Text Content */}
              <div className="w-full md:w-2/3 space-y-2">
                <p className="text-blue-600 font-extrabold text-xl">+54% LEAD GROWTH</p>
                <h3 className="text-2xl font-bold">CUSTOMIZED SALESFORCE CRM</h3>
                <p className="text-gray-700">
                  We delivered a Salesforce CRM system for an insurance buyout company fully tailored to their customer management workflows.
                </p>
              </div>
            </div>
          ))}
          </section>
          
           {/* Section 3: Our Salesforce Services */}
      <section className="max-w-[1280px] mx-auto my-8 p-8">
        {/* Section Header */}
        <div className="flex items-start space-x-4 mb-8">
          <span className="text-6xl font-extrabold">03</span>
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold">Our Salesforce services</h2>
            <p className="text-gray-600 mt-2">
              WE HAVE SALESFORCE EXPERTISE AND TOOLS TO SUPPORT YOUR SALESFORCE STRATEGY WITH A SUITABLE SERVICE OFFER.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-4">
          {[
            "CONSULTING",
            "IMPLEMENTATION",
            "MIGRATION",
            "CUSTOMIZATION",
            "DEVELOPMENT",
            "INTEGRATION",
            "SUPPORT",
          ].map((service, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              <span className="font-semibold">{service}</span>
                <button className="border-2 border-blue-600 text-blue-600 px-4 py-1 rounded-full font-bold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                  BOOK
                </button>
            </div>
          ))}
        </div>
      </section>

      </main>
    </>
  );
};

export default Salesforce;
