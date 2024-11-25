import { useState } from "react";

const Testimonials = () => {
  const [selectedIndex, setSelectedIndex] = useState(1); // Start with the middle testimonial

  const people = [
    { name: "BENJAMIN T.", title: "CEO, MAX ASP", text: "Ich kann the eksperts als IT Company wärmstens empfehlen. Ihre fundierten Kenntnisse in CRM-Systemen und ihre Fähigkeit, massgeschneiderte Lösungen zu entwickeln, haben in zahlreichen Projekten zu signifikanten Effizienzsteigerungen geführt. the eksperts ist zuverlässig, engagiert und stets bestrebt, die besten Ergebnisse für ihre Kunden zu erzielen." },
    { name: "NICOLAS H.", title: "CO-FOUNDER & CEO, VOICELINE", text: "the eksperts ist unser Go-to-Partner für IT-Lösungen. Egal was wir brauchen, sie haben die passenden Experten und liefern immer pünktlich. Ein unschlagbares Team!" },
    { name: "PREN P.", title: "COO & PARTNER, SMZH AG", text: "We had an outstanding experience working with the eksperts, who expertly set up our Salesforce system and implemented essential automations. Their team was exceptionally responsive and demonstrated a high level of knowledge throughout the entire process. Their expertise significantly enhanced our operational efficiency. Highly recommended!" },
    { name: "BENJAMIN T.", title: "CEO, MAX ASP", text: "Ich kann the eksperts als IT Company wärmstens empfehlen. Ihre fundierten Kenntnisse in CRM-Systemen und ihre Fähigkeit, massgeschneiderte Lösungen zu entwickeln, haben in zahlreichen Projekten zu signifikanten Effizienzsteigerungen geführt. the eksperts ist zuverlässig, engagiert und stets bestrebt, die besten Ergebnisse für ihre Kunden zu erzielen." },
    { name: "BENJAMIN T.", title: "CEO, MAX ASP", text: "Ich kann the eksperts als IT Company wärmstens empfehlen. Ihre fundierten Kenntnisse in CRM-Systemen und ihre Fähigkeit, massgeschneiderte Lösungen zu entwickeln, haben in zahlreichen Projekten zu signifikanten Effizienzsteigerungen geführt. the eksperts ist zuverlässig, engagiert und stets bestrebt, die besten Ergebnisse für ihre Kunden zu erzielen." },
    { name: "BENJAMIN T.", title: "CEO, MAX ASP", text: "Ich kann the eksperts als IT Company wärmstens empfehlen. Ihre fundierten Kenntnisse in CRM-Systemen und ihre Fähigkeit, massgeschneiderte Lösungen zu entwickeln, haben in zahlreichen Projekten zu signifikanten Effizienzsteigerungen geführt. the eksperts ist zuverlässig, engagiert und stets bestrebt, die besten Ergebnisse für ihre Kunden zu erzielen." },
    { name: "BENJAMIN T.", title: "CEO, MAX ASP", text: "Ich kann the eksperts als IT Company wärmstens empfehlen. Ihre fundierten Kenntnisse in CRM-Systemen und ihre Fähigkeit, massgeschneiderte Lösungen zu entwickeln, haben in zahlreichen Projekten zu signifikanten Effizienzsteigerungen geführt. the eksperts ist zuverlässig, engagiert und stets bestrebt, die besten Ergebnisse für ihre Kunden zu erzielen." },
    { name: "BENJAMIN T.", title: "CEO, MAX ASP", text: "Ich kann the eksperts als IT Company wärmstens empfehlen. Ihre fundierten Kenntnisse in CRM-Systemen und ihre Fähigkeit, massgeschneiderte Lösungen zu entwickeln, haben in zahlreichen Projekten zu signifikanten Effizienzsteigerungen geführt. the eksperts ist zuverlässig, engagiert und stets bestrebt, die besten Ergebnisse für ihre Kunden zu erzielen." },
    { name: "BENJAMIN T.", title: "CEO, MAX ASP", text: "Ich kann the eksperts als IT Company wärmstens empfehlen. Ihre fundierten Kenntnisse in CRM-Systemen und ihre Fähigkeit, massgeschneiderte Lösungen zu entwickeln, haben in zahlreichen Projekten zu signifikanten Effizienzsteigerungen geführt. the eksperts ist zuverlässig, engagiert und stets bestrebt, die besten Ergebnisse für ihre Kunden zu erzielen." },
  ];

  const handleNavigation = (direction) => {
    if (direction === "up") {
      setSelectedIndex((prev) => (prev === 0 ? people.length - 1 : prev - 1));
    } else {
      setSelectedIndex((prev) => (prev === people.length - 1 ? 0 : prev + 1));
    }
  };

  const handleClick = (index) => {
    setSelectedIndex(index);
  };

  const getVisibleTestimonials = () => {
    const prevIndex = (selectedIndex - 1 + people.length) % people.length;
    const nextIndex = (selectedIndex + 1) % people.length;
    return [people[prevIndex], people[selectedIndex], people[nextIndex]];
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="flex justify-center items-center h-screen px-4">
      <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-12 w-full max-w-7xl">
        {/* Left Section */}
        <div className="text-center md:text-left mb-12 md:mb-0 md:w-1/3">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-snug mb-4">
            Lasst<br />Taten<br />sprechen
          </h2>
          <p className="text-gray-500 text-lg mb-4">
            Kein Eigenlob — sondern ehrliches Feedback
          </p>
        </div>

        {/* Right Section */}
        <div className="relative flex flex-col md:w-2/3 items-center">
          {/* Testimonials Container */}
          <div className="space-y-10">
            {visibleTestimonials.map((person, index) => {
              const globalIndex = (selectedIndex - 1 + index + people.length) % people.length; // Calculate global index
              const isActive = index === 1; // Middle item is active
              return (
                <div
                  key={globalIndex}
                  onClick={() => handleClick(globalIndex)} // Set the clicked testimonial as active
                  className={`flex items-center w-full transition-opacity duration-500 cursor-pointer ${
                    isActive ? "opacity-100" : "opacity-50"
                  }`}
                >
                  {/* Circle Indicator */}
                  <div
                    className={`w-20 h-20 rounded-full mr-6 ${
                      isActive ? "bg-blue-600" : "bg-gray-400"
                    }`}
                  ></div>

                  {/* Text Section */}
                  <div style={{ maxWidth: "600px" }}>
                    <h4
                      className={`font-bold leading-[37px] uppercase ${
                        isActive ? "text-black" : "text-gray-500"
                      }`}
                      style={{
                        fontFamily: "Matt_Trial",
                        fontSize: "28px",
                        fontWeight: "900",
                      }}
                    >
                      {person.name}
                    </h4>
                    <h5
                      className={`font-bold leading-[37px] uppercase ${
                        isActive ? "text-black" : "text-gray-500"
                      }`}
                      style={{
                        fontFamily: "Matt_Trial",
                        fontSize: "28px",
                        fontWeight: "900",
                      }}
                    >
                      {person.title}
                    </h5>
                    <p
                      className={`leading-[22px] ${
                        isActive ? "text-black" : "text-gray-500"
                      }`}
                      style={{
                        fontFamily: "Matt_Trial",
                        fontSize: "16px",
                        fontWeight: "300",
                      }}
                    >
                      {person.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute right-0 top-0 flex flex-col h-full justify-between">
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              onClick={() => handleNavigation("up")}
            >
              ↑
            </button>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
              onClick={() => handleNavigation("down")}
            >
              ↓
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
