import { useState } from 'react';
import '../styles/global.css'; 
import emailjs from "emailjs-com";



export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    topics: [],
    datenschutz: false,
  });
  const [errors, setErrors] = useState({
    topic: "",
    datenschutz: "",
  });
  const [faqOpen, setFaqOpen] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle topic checkbox changes
  const handleTopicChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      topics: checked
        ? [...prev.topics, value] // Add topic if checked
        : prev.topics.filter((topic) => topic !== value), // Remove topic if unchecked
    }));
  };

  // Handle Datenschutzerklärung checkbox changes
  const handleDatenschutzChange = (e) => {
    setFormData({ ...formData, datenschutz: e.target.checked });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const newErrors = {
      topic: formData.topics.length === 0 ? "Bitte wählen Sie mindestens ein Thema aus." : "",
      datenschutz: !formData.datenschutz
        ? "Bitte stimmen Sie der Verarbeitung Ihrer Daten zu."
        : "",
    };
  
    setErrors(newErrors);
  
    if (newErrors.topic || newErrors.datenschutz) return;
  
    try {
      await emailjs.send(
        "service_rnxvz7es", // Replace with your EmailJS Service ID
        "template_q8wvlxn", // Replace with your EmailJS Template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          message: formData.message,
          topics: formData.topics.join(", "),
        },
        "RnxvZ7esPh9kJPP7C" // Replace with your Public Key
      );
  
      alert("Vielen Dank! Ihre Nachricht wurde gesendet.");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        topics: [],
        datenschutz: false,
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Es gab ein Problem beim Senden Ihrer Nachricht. Bitte versuchen Sie es erneut.");
    }
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
          <h1 className="text-5xl font-extrabold leading-tight text-gray-800">
            Wir freuen uns auf Ihre Nachricht
          </h1>
          <p className="text-gray-700 text-lg">
            Grosse Projekte starten mit einem Gespräch. Lassen Sie uns gemeinsam
            beginnen.
          </p>
          <div className="bg-[#FAFAFA] p-6 rounded-[20px] shadow-lg space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src="/images/FisnikSalihu.jpg"
                alt="Fisnik Salihu"
                className="rounded-full w-20 h-20 object-cover border-4 border-blue-600 shadow-lg"
              />
              <h2 className="font-semibold text-xl">
                Hi, Ich bin Fisnik! Lass uns gemeinsam über Ihr Projekt sprechen.
              </h2>
            </div>
            <p className="text-sm text-gray-600">
              Ich stehe dafür, dass unsere Lösungen nicht nur heute funktionieren,
              sondern auch Ihre Zukunft sichern.
            </p>
            <a
              href="mailto:fisnik.salihu@the-eksperts.com"
              className="text-blue-500 hover:underline"
            >
              Email an Fisnik
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
<div className="lg:w-1/2 bg-[#FAFAFA] p-8 rounded-[20px] shadow-lg space-y-6">
  <form onSubmit={handleSubmit} className="space-y-6">
    {/* Name and Unternehmen */}
    <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-6 lg:space-y-0">
      <div className="w-full">
        <label className="block text-sm font-semibold mb-1">Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-[20px] p-4 focus:border-blue-500 focus:ring-0"
          placeholder="Your name"
        />
      </div>
      <div className="w-full">
        <label className="block text-sm font-semibold mb-1">Unternehmen</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-[20px] p-4 focus:border-blue-500 focus:ring-0"
          placeholder="Your company"
        />
      </div>
    </div>

    {/* E-Mail */}
    <div>
      <label className="block text-sm font-semibold mb-1">E-Mail Adresse</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-[20px] p-4 focus:border-blue-500 focus:ring-0"
        placeholder="Your email address"
      />
    </div>

    {/* Betreff oder Thema */}
    <div>
      <h3 className="text-lg font-semibold mb-4">Betreff oder Thema</h3>
      {errors.topic && <p className="text-red-500 text-sm mb-2">{errors.topic}</p>}
      <div className="space-y-2">
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="topic"
            value="Neues Projekt"
            onChange={handleTopicChange}
            className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
          />
          <span>Neues Projekt</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="topic"
            value="Problembehebung"
            onChange={handleTopicChange}
            className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
          />
          <span>Problembehebung</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="topic"
            value="Ressourcen-Erweiterung"
            onChange={handleTopicChange}
            className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
          />
          <span>Ressourcen-Erweiterung</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            name="topic"
            value="Allgemeine Anfrage"
            onChange={handleTopicChange}
            className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
          />
          <span>Allgemeine Anfrage</span>
        </label>
      </div>
    </div>

    {/* Nachricht */}
    <div>
      <label className="block text-sm font-semibold mb-1">Nachricht</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        className="w-full border border-gray-300 rounded-[20px] p-4 focus:border-blue-500 focus:ring-0"
        placeholder="e.g. We need a digital transformation strategy for our platform."
        rows="4"
      ></textarea>
    </div>

    {/* Telefonnummer */}
    <div>
      <label className="block text-sm font-semibold mb-1">Telefonnummer</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Enter your phone number"
        className="w-full border border-gray-300 rounded-[20px] p-4 focus:ring-[#0009FF] focus:border-[#0009FF]"
      />
    </div>

    {/* Datenschutz */}
    <div>
      {errors.datenschutz && <p className="text-red-500 text-sm mb-2">{errors.datenschutz}</p>}
      <div className="flex items-center space-x-3">
        <input
          type="checkbox"
          id="datenschutz"
          name="datenschutz"
          onChange={handleDatenschutzChange}
          className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
        />
        <label htmlFor="datenschutz" className="text-sm text-gray-700">
          Ich stimme der Verarbeitung meiner Daten gemäss der Datenschutzerklärung zu.
        </label>
      </div>
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="w-full py-3 rounded-[20px] bg-blue-600 text-white font-semibold tracking-wide hover:bg-blue-700 transition"
    >
      Senden
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
        <h2 className="font-matt text-4xl font-bold text-center text-gray-800 mb-10">Kaffee? Hier finden Sie uns!</h2>
        <div className="font-matt max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* Switzerland Section */}
          <div className="font-matt flex items-center space-x-4 hover:bg-white transition-all duration-300 p-6 rounded-[20px] hover:shadow-lg group">
            {/* Image on Left */}
            <div className="font-matt flex-shrink-0 w-40 h-40 bg-gray-200 rounded-[20px] group-hover:bg-blue-600 transition-all duration-300" style={{ backgroundImage: `url('/images/SwitzerlandMap.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            {/* Text on Right */}
            <div className="font-matt text-left group-hover:text-blue-600 transition-all duration-300">
              <h3 className="font-matt font-semibold text-xl">Schweiz</h3>
              <p>Sonnengartenstrasse 6</p>
              <p>9000 St. Gallen</p>
            </div>
          </div>

          {/* Germany Section */}
          <div className="font-matt flex items-center space-x-4 hover:bg-white transition-all duration-300 p-6 rounded-[20px] hover:shadow-lg group">
            {/* Image on Left */}
            <div className="font-matt flex-shrink-0 w-40 h-40 bg-gray-200 rounded-[20px] group-hover:bg-blue-600 transition-all duration-300" style={{ backgroundImage: `url('/images/GermanyMap.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            {/* Text on Right */}
            <div className="font-matt text-left group-hover:text-blue-600 transition-all duration-300">
              <h3 className="font-matt font-semibold text-xl">Kosovë</h3>
              <p>23 Ganimete Tërbeshi</p>
              <p>10000 Prishtinë</p>
            </div>
          </div>

          {/* Kosovo Section */}
          <div className="flex items-center space-x-4 hover:bg-white transition-all duration-300 p-6 rounded-[20px] hover:shadow-lg group">
            {/* Image on Left */}
            <div className="flex-shrink-0 w-40 h-40 bg-gray-200 rounded-[20px] group-hover:bg-blue-600 transition-all duration-300" style={{ backgroundImage: `url('/images/Figure.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
            {/* Text on Right */}
            <div className="font-matt text-left group-hover:text-blue-600 transition-all duration-300">
              <h3 className="font-matt font-semibold text-xl">Weltweit</h3>
              <p>info@the-eksperts-com</p>
              <p>Digital</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
