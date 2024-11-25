// pages/contact.js
import { useState } from 'react';
import '../styles/global.css'; 


export default function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', message: '' });
  const [faqOpen, setFaqOpen] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ firstName: '', lastName: '', email: '', message: '' });
  };

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    "Is it possible to hire only one of your services?",
    "How much does a project cost?",
    "Who will be working with me during the project?",
    "What do you need from me to prepare an estimate?",
    "What's the average length of a project?",
  ];

  return (
    <div className="bg-white min-h-screen p-10 text-gray-900 font-matt">
      {/* Contact Form Section */}
      <div className="font-matt flex flex-col lg:flex-row items-center justify-between max-w-[1280px] mx-auto space-y-10 lg:space-y-0 lg:space-x-16">
        {/* Left Side: Text */}
        <div className="lg:w-1/2 space-y-10">
          <h1 className="font-matt text-5xl font-extrabold leading-tight text-gray-800">Get in Touch with the eksperts</h1>
          <p className="font-matt text-gray-700 text-lg mb-8">We provide innovative digital solutions that help brands and businesses scale and grow. Share your ideas with us, and let’s take your project to the next level.</p>
          <div className="font-matt bg-[#FAFAFA] p-6 rounded-[20px] space-y-2">
            <img
              src= "/images/FisnikSalihu.jpg"
              alt="Fisnik Salihu"
              className="rounded-[20px] w-20 h-20 object-cover border-4 border-blue-600 shadow-lg"
            />
            <h2 className="font-matt font-semibold text-xl">Hi, I’m Fisnik! Let’s talk about your project.</h2>
            <p className="font-matt text-sm text-gray-600">“We specialize in digital transformation and innovative technology. Let’s work together to bring your ideas to life!”</p>
            <a href="mailto:fisnik.salihu@the-eksperts.com" className="text-blue-500 hover:underline">Email Fisnik directly</a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:w-1/2 bg-[#FAFAFA] p-8 rounded-[20px] font-matt">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="w-full lg:w-1/2">
                <label className="font-matt text-sm font-semibold">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="font-matt w-full border rounded-[20px] p-4 mt-1 focus:border-blue-500 focus:ring-0"
                  placeholder="Your first name"
                />
              </div>
              <div className="w-full lg:w-1/2">
                <label className="text-sm font-semibold">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="font-matt w-full border rounded-[20px] p-4 mt-1 focus:border-blue-500 focus:ring-0"
                  placeholder="Your last name"
                />
              </div>
            </div>
            <div>
              <label className="font-matt text-sm font-semibold">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="font-matt w-full border rounded-[20px] p-4 mt-1 focus:border-blue-500 focus:ring-0"
                placeholder="Your email address"
              />
            </div>
            <div>
              <label className="font-matt text-sm font-semibold">Tell us more about your project goals</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="font-matt w-full border rounded-[20px] p-4 mt-1 focus:border-blue-500 focus:ring-0"
                placeholder="e.g. We need a digital transformation strategy for our platform."
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className="font-matt w-full py-3 rounded-[20px] bg-blue-600 text-white font-semibold tracking-wide hover:bg-blue-700 transition"
            >
              Send
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-[1280px] mx-auto mt-20">
        <h2 className="font-matt text-3xl font-bold mb-10">FAQs</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300 pb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="font-matt w-full text-left text-lg font-semibold focus:outline-none flex justify-between items-center"
              >
                {faq}
                <span>{faqOpen === index ? '-' : '+'}</span>
              </button>
              {faqOpen === index && (
                <p className="mt-2 text-gray-600 font-matt">
                  This is a sample answer to the FAQ. You can customize this with specific content related to the question.
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#FAFAFA] py-12 mt-20 font-matt">
        <h2 className="font-matt text-4xl font-bold text-center text-gray-800 mb-10">Check out our digs</h2>
        <div className="font-matt max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Switzerland Section */}
          <div className="font-matt flex items-center space-x-4 hover:bg-white transition-all duration-300 p-6 rounded-[20px] hover:shadow-lg group">
            {/* Image on Left */}
            <div className="font-matt flex-shrink-0 w-40 h-40 bg-gray-200 rounded-[20px] group-hover:bg-blue-600 transition-all duration-300" style={{ backgroundImage: `url('/images/SwitzerlandMap.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            {/* Text on Right */}
            <div className="font-matt text-left group-hover:text-blue-600 transition-all duration-300">
              <h3 className="font-matt font-semibold text-xl">Switzerland</h3>
              <p>Swiss Location Address</p>
              <p className="font-matt text-blue-600">+41 79 111 22 33</p>
            </div>
          </div>

          {/* Germany Section */}
          <div className="font-matt flex items-center space-x-4 hover:bg-white transition-all duration-300 p-6 rounded-[20px] hover:shadow-lg group">
            {/* Image on Left */}
            <div className="font-matt flex-shrink-0 w-40 h-40 bg-gray-200 rounded-[20px] group-hover:bg-blue-600 transition-all duration-300" style={{ backgroundImage: `url('/images/GermanyMap.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            {/* Text on Right */}
            <div className="font-matt text-left group-hover:text-blue-600 transition-all duration-300">
              <h3 className="font-matt font-semibold text-xl">Germany</h3>
              <p>Unbounce Germany GmbH, Friedrichstraße 68, 10117 Berlin, Germany</p>
              <p className="font-matt text-blue-600">+49 800 505 2740</p>
            </div>
          </div>

          {/* Kosovo Section */}
          <div className="flex items-center space-x-4 hover:bg-white transition-all duration-300 p-6 rounded-[20px] hover:shadow-lg group">
            {/* Image on Left */}
            <div className="flex-shrink-0 w-40 h-40 bg-gray-200 rounded-[20px] group-hover:bg-blue-600 transition-all duration-300" style={{ backgroundImage: `url('/images/Figure.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            {/* Text on Right */}
            <div className="font-matt text-left group-hover:text-blue-600 transition-all duration-300">
              <h3 className="font-matt font-semibold text-xl">Kosovo</h3>
              <p>Unbounce Kosovo Location</p>
              <p className="font-matt text-blue-600">+383 49 768 633</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
