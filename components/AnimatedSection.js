import { useState } from "react";

const SVGAnimation = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentScreen, setCurrentScreen] = useState(1);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleNext = () => {
    if (currentScreen === 3) {
      // On the last screen, show the thank-you message and close the modal
      setIsModalOpen(false);
      setShowThankYou(true);
    } else {
      // Navigate to the next screen
      setCurrentScreen((prev) => prev + 1);
    }
  };

  return (
    <section className="relative font-matt flex flex-col items-start justify-center py-12 px-8 bg-white lg:min-w-[1280px] mx-auto min-h-[960px]">
      {/* SVG Animation - Conditionally Rendered */}
      {!showThankYou && (
        <svg
          width="998"
          height="100%"
          viewBox="0 0 998 842"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 w-full h-full pointer-events-none z-10"
        >
          <path
            d="M536.603 532.001C579.603 531.001 680.202 500.701 738.602 387.501C811.602 246.001 721.103 14.0006 536.603 22.5006C352.103 31.0006 68.603 264.5 114.603 525C160.603 785.5 494.103 542 249.103 439C140.723 393.436 -75.3987 492 71.6025 672C196.962 825.5 496.829 853.773 652.602 784C844.602 698 925.768 586.333 980.602 512"
            stroke="#0009FF"
            strokeWidth="43"
            className="svg-elem-1"
          />
          <style>
            {`
              .svg-elem-1 {
                stroke-dashoffset: 3448.249267578125px;
                stroke-dasharray: 3448.249267578125px;
                animation: drawPath 8s ease-in-out infinite;
              }

              @keyframes drawPath {
                0% {
                  stroke-dashoffset: 3448.249267578125px;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
            `}
          </style>
        </svg>
      )}

      {!showThankYou ? (
        <>
          {/* Title Section */}
          <div className="relative z-20 flex flex-col items-start text-black text-3xl md:text-[190px] leading-[150px] font-bold tracking-normal space-y-4 mb-12">
            <span className="font-matt">Nicht auf </span>
            <span className="font-matt">diesen </span>
            <span className="font-matt">Button</span>
            <span className="font-matt flex items-center">klicken!</span>
          </div>

          {/* Button Section */}
          <div className="absolute top-1/2 right-[0.5%] transform -translate-y-1/2 z-20">
            <button
              onClick={() => setIsModalOpen(true)}
              className="font-matt px-12 py-6 text-[40px] font-bold text-white bg-black rounded-full shadow-lg hover:bg-gray-800 transition duration-300"
            >
              Diesen Button
            </button>
          </div>
        </>
      ) : (
        <div className="relative z-20 flex flex-col items-center justify-center text-center text-3xl md:text-[120px] leading-[100px] font-bold space-y-4 p-12">
        <p>Thank you!</p>
        <p>the eksperts will be </p>
        <p>back to you!</p>

      </div>

      )}

      {/* Funnel Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-full max-w-[600px]">
            {currentScreen === 1 && (
              <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6">
              {/* Left Section */}
              <div className="lg:w-1/2">
                <h2 className="text-xl font-bold mb-4">
                  Wir nehmen uns die Zeit, Ihr Projekt und Ihre Anforderungen zu verstehen.
                </h2>
                <p className="text-gray-700 mb-4">
                  Nach nur drei kurzen Fragen erhalten Sie eine persönliche Beratung sowie
                  ein massgeschneidertes Angebot – völlig kostenlos und unverbindlich.
                </p>
              </div>
            
              {/* Right Section */}
              <div className="lg:w-1/2">
                <h3 className="text-lg font-semibold mb-4">
                  Was möchten Sie mit unserer Unterstützung erreichen?:
                </h3>
                <form className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                    />
                    <span>Website erstellen oder optimieren</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                    />
                    <span>Online-Shop aufbauen</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                    />
                    <span>Salesforce-Lösungen implementieren</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                    />
                    <span>IT-Architektur oder Netzwerk optimieren</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                    />
                    <span>Individuelle Softwareentwicklung</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                    />
                    <span>Sonstiges (Freitextfeld)</span>
                  </label>
                </form>
              </div>
            </div>
            
            )}
            {currentScreen === 2 && (
              <div>
              <h2 className="text-xl font-bold mb-4">Wann möchten Sie starten?</h2>
              <form className="space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                  />
                  <span>Sofort</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                  />
                  <span>Innerhalb der nächsten 3 Monate</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                  />
                  <span>In 3–6 Monaten</span>
                </label>
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    className="w-5 h-5 text-[#0009FF] border-gray-300 rounded focus:ring-[#0009FF]"
                  />
                  <span>Noch unklar</span>
                </label>
              </form>
            </div>
            
            )}
            {currentScreen === 3 && (
              <div>
                <h2 className="text-xl font-bold mb-4">Wie können wir Sie erreichen</h2>
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border rounded px-4 py-2"
                  />
                  <input
                    type="text"
                    placeholder="Unternehmen"
                    className="w-full border rounded px-4 py-2"
                  />
                  <input
                    type="email"
                    placeholder="E-Mail"
                    className="w-full border rounded px-4 py-2"
                  />
                  <input
                    type="tel"
                    placeholder="Telefonnummer (optional)"
                    className="w-full border rounded px-4 py-2"
                  />
                  <textarea
                    placeholder="Nachricht („Gibt es noch etwas, das wir wissen sollten?“)"
                    className="w-full border rounded px-4 py-2"
                  ></textarea>
                </form>
              </div>
            )}
            {currentScreen < 4 && (
              <button
                onClick={handleNext}
                className="mt-4 px-6 py-2 bg-[#0009FF] text-white rounded hover:bg-blue-800"
              >
                {currentScreen === 3 ? "Send" : "Next"}
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default SVGAnimation;
