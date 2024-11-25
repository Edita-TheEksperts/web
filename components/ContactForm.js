// components/ContactForm.js
import { useState, useEffect } from 'react';
import { FaUser, FaEnvelope, FaCommentDots } from 'react-icons/fa';

export default function ContactForm() {
  const languages = ["Talk to us", "Parlaci", "Parle-nous", "Parla con noi", "Sprich mit uns"];
  const thankYouMessages = ["Thank you!", "Grazie!", "Merci!", "Danke!", "Faleminderit!"];
  const [currentLang, setCurrentLang] = useState(0);
  const [currentThankYou, setCurrentThankYou] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false); // To display thank-you message
  const [formData, setFormData] = useState({
    name: '',
    enquiry: '',
    message: ''
  });
  const [step, setStep] = useState(1);

  // Rotate the initial "Talk to us" message every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLang((prev) => (prev + 1) % languages.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Rotate the thank you message every 1 second when showThankYou is true
  useEffect(() => {
    if (showThankYou) {
      const interval = setInterval(() => {
        setCurrentThankYou((prev) => (prev + 1) % thankYouMessages.length);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [showThankYou]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (step === 1 && formData.name) {
      setShowPopup(true);
      setStep(2);
    } else if (step === 2 && formData.enquiry) {
      setStep(3);
    } else if (step === 3 && formData.message) {
      setShowPopup(false);  // Close the popup
      setShowThankYou(true); // Show thank you message
      setFormData({ name: '', enquiry: '', message: '' }); // Reset form data
      setStep(1); // Reset to initial step for future use
    }
  };

  return (
    <div className="lg:min-w-[1280px] flex flex-col items-center bg-gray-600 p-4 md:p-8 text-white rounded-[8px]">
      <div className="w-full max-w-[1280px] flex flex-col items-center space-y-8 rounded-[8px] px-4 md:px-8">
        
        {/* Show Thank You Message after finishing */}
        {showThankYou ? (
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center transition duration-500 ease-in-out text-white">
            {thankYouMessages[currentThankYou]}
          </h1>
        ) : (
          <>
            {/* Rotating Language Header */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-8 text-center transition duration-500 ease-in-out text-white">
              {languages[currentLang]}
            </h1>

            {/* Initial Form */}
            {!showPopup && !showThankYou && (
              <form onSubmit={handleSubmit} className="w-full flex flex-col items-center space-y-6 p-6 md:p-8 bg-gray-700 rounded-lg shadow-xl border border-white">
                <label htmlFor="name" className="text-lg mb-2 flex items-center space-x-2">
                  <FaUser className="text-white" />
                  <span>Let us meet you!</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 mb-4 rounded bg-gray-600 text-white placeholder-gray-400 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0009FF]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#0009FF] hover:bg-blue-700 text-white py-2 px-6 md:py-3 md:px-8 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Get Started
                </button>
              </form>
            )}

            {/* Popup Form - Only show if showPopup is true and showThankYou is false */}
            {showPopup && !showThankYou && (
              <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-80 flex justify-center items-center p-4">
                <div className="bg-gray-700 p-6 md:p-8 rounded-lg shadow-2xl w-full max-w-lg transition transform duration-500 ease-in-out border border-[#0009FF]">
                  {step === 2 && (
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                        Hello {formData.name}! What’s your enquiry?
                      </h2>
                      <label htmlFor="enquiry" className="text-lg mb-2 flex items-center space-x-2">
                        <FaEnvelope className="text-[#0009FF]" />
                        <span>Enquiry</span>
                      </label>
                      <input
                        type="text"
                        name="enquiry"
                        id="enquiry"
                        placeholder="Enter your enquiry"
                        value={formData.enquiry}
                        onChange={handleChange}
                        className="w-full p-3 mb-4 rounded bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0009FF]"
                        required
                      />
                      <button
                        onClick={() => setStep(3)}
                        className="bg-[#0009FF] hover:bg-blue-700 text-white py-2 px-6 md:py-3 md:px-8 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Next
                      </button>
                    </div>
                  )}

                  {step === 3 && (
                    <div>
                      <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Tell us more about your problem</h2>
                      <label htmlFor="message" className="text-lg mb-2 flex items-center space-x-2">
                        <FaCommentDots className="text-[#0009FF]" />
                        <span>Message</span>
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Describe your issue"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full p-3 mb-4 rounded bg-gray-600 border border-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0009FF]"
                        rows="4"
                        required
                      />
                      <button
                        onClick={handleSubmit}
                        className="bg-[#0009FF] hover:bg-blue-700 text-white py-2 px-6 md:py-3 md:px-8 rounded-full font-semibold transition duration-300 ease-in-out transform hover:scale-105"
                      >
                        Finish
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
