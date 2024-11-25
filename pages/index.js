import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import logo from '/images/website.png';
import salesforce from '/images/Salesforce.png';
import Testimonials from '../components/Testimonials';
import LogoSection from '../components/LogoSection'; 
import Hero from '../components/Hero';
import FourPillar from '../components/FourPillars';
import ContactForm from '../components/ContactForm';
import firstImage from '/images/Photo.png';
import secondImage from '/images/Photo2.png';
import figure from '/images/figure.png';
import logo3 from '/images/logo3.png';
import Submenu from '../components/Submenu'
import '../styles/global.css'; 
import AnimatedSection from '../components/AnimatedSection';

const Home = () => {
    const [hovered, setHovered] = useState(false);
    const [isHeroVisible, setHeroVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
          const heroElement = document.getElementById('hero');
          if (!heroElement) return;
    
          const heroHeight = heroElement.offsetHeight;
          const scrollY = window.scrollY;
    
          setHeroVisible(scrollY < heroHeight - 80); // 80px accounts for header height
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);


  return (
    <>
      <Head>
        <title>The Eksperts</title>
      </Head>
      
      <main className="font-matt flex flex-col items-center bg-white px-4">
        <div className="font-matt w-full max-w-[1280px] mx-auto text-center my-8 lg:mb-[150px]">
        <Hero setHeroVisible={setHeroVisible} />
        </div>
      <Submenu isHeroVisible={isHeroVisible} />

            <section id="what" className="font-matt cloudy-section flex flex-col md:flex-row items-center justify-between p-8 rounded-[20px] bg-[#FAFAFA] max-w-[1280px] mx-auto my-8 lg:h-[600px]">
                <div className="font-matt md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left z-10 lg:ml-8  ">
                    <h2 className="font-matt text-4xl sm:text-5xl md:text-[80px] font-bold mb-6 text-black">Salesforce</h2>
                    <p className="text-gray-700 mb-4 font-matt">
                    Haben Sie einen Engpass im Unternehmen, steht ein Projekt an oder möchten Sie Ihre IT-Abteilung erweitern?
                    </p>
                    <p className="text-gray-700 mb-6 font-matt">
                    Mit Book Your Expert haben wir die Lösung. Beschreiben Sie uns Ihr Problem, Ihre Wünsche und Bedürfnisse, und wir stellen das ideale Setup für Sie zusammen.
                    </p>
                    <Link href="/services/salesforce">
                    <button className="font-matt border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                        BOOK
                    </button>
                    </Link>
                </div>

                <div className="font-matt md:w-1/2 mt-8 md:mt-0 flex justify-center z-10">
                    <Image
                    src={salesforce} 
                    alt="Salesforce Image"
                    width={400}
                    height={400}
                    className="rounded-lg object-contain"
                    priority
                    />
                </div>
            </section>

                <section
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    className="font-matt relative flex flex-col md:flex-row items-center justify-between p-8 rounded-[20px] max-w-[1280px] mx-auto my-8 lg:h-[620px] bg-[#FAFAFA] transition-all duration-300 ease-in-out hover:bg-[radial-gradient(circle,_#ffffff,_#d1e3ff,_#b0c7ff)]"
                    >
                    <div className="font-matt md:w-1/2 mb-8 md:mb-0 flex justify-center relative transition-transform duration-500 ease-in-out hover:scale-105">
                        
                        <Image
                        src={firstImage}
                        alt="Default Image"
                        width={500}
                        height={509}
                        className={`rounded-lg object-contain transition-opacity duration-500 ease-in-out ${hovered ? 'opacity-0' : 'opacity-100'}`}
                        />

                        <Image
                        src={secondImage}
                        alt="Hover Image"
                        width={520}  
                        height={509}
                        className={`rounded-lg object-contain absolute transition-opacity duration-500 ease-in-out transform ${hovered ? 'opacity-100 scale-110' : 'opacity-0 scale-100'}`}
                        />
                    </div>

                    <div className="font-matt md:w-1/2">
                        <h2 className="font-matt text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">Website</h2>
                        <p className="text-gray-700 mb-4 font-matt">
                        Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on your website.
                        </p>
                        <p className="text-gray-700 mb-6 font-matt">
                        Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on your website.
                        </p>
                        <Link href="/book">
                        <button className="font-matt border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                            BOOK
                        </button>
                        </Link>
                    </div>
                </section>
            
                <section className="font-matt relative flex flex-col md:flex-row items-center justify-between p-8 rounded-[20px] max-w-[1280px] mx-auto my-8 lg:h-[620px] bg-[#FAFAFA] text-black overflow-hidden transition-all duration-500 group"
                    >
                    {/* Left Section: Text */}
                    <div className="font-matt md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left lg:ml-8">
                        <h2 className="font-matt text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 transition-colors duration-300">
                        Custom Development
                        </h2>
                        <p className="font-matt text-base sm:text-lg md:text-xl text-gray-700 mb-6 transition-colors duration-300">
                        Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on your website.
                        </p>
                        <Link href="/book">
                        <button className="font-matt border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-bold">
                            BOOK
                        </button>
                        </Link>
                    </div>

                    {/* Right Section: Image */}
                    <div className="font-matt md:w-1/2 mt-8 md:mt-0 flex justify-center relative overflow-hidden">
                        <div className="transition-transform duration-300 ease-in-out transform group-hover:scale-110">
                        <Image
                            src={figure}
                            alt="Custom Development Image"
                            width={800}
                            height={800}
                            className="rounded-lg object-contain drop-shadow-lg"
                            priority
                        />
                        </div>
                    </div>           
                    <div className="font-matt absolute inset-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="font-matt absolute top-0 left-0 w-[200px] h-[200px] bg-gray-700 opacity-70 transform rotate-45 -translate-x-1/2 -translate-y-1/2 rounded-lg"></div>
                    <div className="font-matt absolute bottom-0 right-0 w-[200px] h-[200px] bg-gray-700 opacity-70 transform rotate-45 translate-x-1/2 translate-y-1/2 rounded-lg"></div>
                    <div className="font-matt absolute top-0 right-1/4 w-[150px] h-[150px] bg-gray-700 opacity-60 transform rotate-45 translate-x-1/2 -translate-y-1/4 rounded-lg"></div>
                    <div className="font-matt absolute bottom-0 left-1/4 w-[150px] h-[150px] bg-gray-700 opacity-60 transform rotate-45 -translate-x-1/4 translate-y-1/2 rounded-lg"></div>
                    </div>
                </section>



                <section className="font-matt flex flex-col md:flex-row items-center justify-between bg-[#FAFAFA] p-8 rounded-[20px] max-w-[1280px] mx-auto my-8 lg:h-[620px]">
                    <div className="font-matt md:w-1/2 order-2 md:order-1 mt-8 md:mt-0 flex justify-center">
                        <Image
                        src={logo3} 
                        alt="Graphic Design Image"
                        width={800}
                        height={800}
                        className="rounded-lg object-contain"
                        priority
                        />
                    </div>

                    <div className="font-matt md:w-1/2 order-1 md:order-2">
                        <h2 className="font-matt text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">Graphic Design</h2>
                        <p className="text-gray-700 mb-6 font-matt">
                        Share your product or service offerings here. Give your prospective clients an overview of why they should use it. Differentiate it from the others listed on your website.
                        </p>
                        <Link href="/book">
                        <button className="font-matt border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg font-bold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                            BOOK
                        </button>
                        </Link>
                    </div>
                </section>

                <section
                    className="font-matt relative flex flex-col md:flex-row items-center justify-between p-8 rounded-[20px] max-w-[1280px] mx-auto my-8 lg:h-[620px] bg-[#FAFAFA] text-black overflow-hidden transition-all duration-500 hover:bg-[#0018FF] group"
                    >
                    <div className="font-matt md:w-1/2 flex flex-col lg:ml-8 items-center md:items-start text-center md:text-left transition-colors duration-500 group-hover:text-white">
                        <h2 className="font-matt text-5xl md:text-6xl font-extrabold mb-6">Book your Expert</h2>
                        <p className="font-matt text-gray-700 group-hover:text-white mb-6 text-lg leading-relaxed transition-colors duration-500">
                        Haben Sie einen Engpass im Unternehmen, steht ein Projekt an oder möchten Sie Ihre IT-Abteilung erweitern? Mit Book Your Expert haben wir die Lösung. Beschreiben Sie uns Ihr Problem.
                        </p>
                        <Link href="/book">
                        <button className="font-matt bg-[#FAFAFA] text-blue-600 px-6 py-2 rounded-lg font-bold border-2 border-blue-600 transition-all duration-300 hover:bg-blue-700 hover:text-white hover:border-white">
                            BOOK
                        </button>
                        </Link>
                    </div>

                    <div className="font-matt md:w-1/2 mt-8 md:mt-0 flex justify-center relative overflow-hidden">
                        <div className="font-matt transition-transform duration-500 ease-in-out transform group-hover:scale-110">
                        <Image
                            src={figure}
                            alt="Book Your Expert Image"
                            width={700}
                            height={700}
                            className="rounded-lg object-contain drop-shadow-lg"
                            priority
                        />
                        </div>
                    </div>

                    <div className="font-matt absolute inset-0 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="font-matt absolute top-0 left-0 w-[200px] h-[200px] bg-blue-900 opacity-70 transform rotate-45 -translate-x-1/2 -translate-y-1/2 rounded-lg"></div>
                        <div className="font-matt absolute bottom-0 right-0 w-[200px] h-[200px] bg-blue-900 opacity-70 transform rotate-45 translate-x-1/2 translate-y-1/2 rounded-lg"></div>
                        <div className="font-matt absolute top-0 right-1/4 w-[150px] h-[150px] bg-blue-900 opacity-60 transform rotate-45 translate-x-1/2 -translate-y-1/4 rounded-lg"></div>
                        <div className="font-matt absolute bottom-0 left-1/4 w-[150px] h-[150px] bg-blue-900 opacity-60 transform rotate-45 -translate-x-1/4 translate-y-1/2 rounded-lg"></div>
                    </div>
                </section>
                <div>
                
                <section id="how" className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 lg:min-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        Unsere 4 Säulen – Ein ganzheitlicher Ansatz
                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Unser Ansatz basiert auf vier zentralen Säulen, die eine nahtlose Zusammenarbeit und nachhaltige Ergebnisse gewährleisten. Vom Verstehen eurer individuellen Anforderungen, über die visuelle und technische Umsetzung bis hin zu einer langfristigen Partnerschaft begleiten wir euch Schritt für Schritt. Gemeinsam, in enger Kooperation, entwickeln wir die beste Lösung, die nicht nur eure aktuellen Bedürfnisse erfüllt, sondern auch zukunftsfähig bleibt. Jede Phase ist dabei auf Zusammenarbeit und Qualität ausgerichtet, um euch einen nachhaltigen Mehrwert zu bieten.
                        </p>
                    </div>

                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/Full 1.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10  lg:min-w-[1280px] mx-auto">
                    <div className="flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/1 2.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>

                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        Verstehen und Kommunikation – Die Basis für euren Erfolg
                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Alles beginnt mit einer klaren und offenen Kommunikation. Wir analysieren eure Anforderungen, verstehen eure individuellen Herausforderungen und definieren gemeinsam die Ziele. Durch Consulting, Business-Analyse und strategische Planung legen wir den Grundstein für massgeschneiderte Lösungen, die eure spezifischen Bedürfnisse widerspiegeln.
                        </p>
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 lg:min-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        UI/UX – Benutzerzentrierte Gestaltung für eure Lösung
                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Im nächsten Schritt gestalten wir das Look-and-Feel eurer Lösung. Wir entwickeln Prototypen, optimieren Prozesse und entwerfen ein ansprechendes, intuitives Design. Unser Ziel ist es, dass eure Website, Software oder andere Plattformen nicht nur ästhetisch überzeugen, sondern auch funktional und benutzerfreundlich sind, um den höchsten Ansprüchen gerecht zu werden.
                        </p>
                    </div>

                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/2 1.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 lg:min-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/4 1.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>
                    
                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        Technische Implementierung – Von der Idee zur Realität                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Hier setzen wir eure Vision in die Tat um. Wir entwickeln leistungsfähige und skalierbare Systeme, die eure Anforderungen perfekt erfüllen. Egal ob Online-Shop, Salesforce-Instanz, Cloud-Infrastruktur oder ERP/CRM-System – wir stellen sicher, dass die technische Umsetzung stabil, effizient, sicher und zukunftssicher ist.
                        </p>
                    </div>
                    </section>

                    <section className="font-matt flex flex-col md:flex-row items-center justify-between px-6 md:px-10 py-10 lg:min-w-[1280px] mx-auto">
                    <div className="font-matt flex-1 max-w-md text-left">
                        <h2 className="font-matt text-2xl md:text-3xl font-bold text-black mb-4">
                        Optimierung, Schulung und Support – Nachhaltige Partnerschaft
                        </h2>
                        <p className="font-matt text-lg md:text-xl text-gray-700 leading-relaxed">
                        Unsere Arbeit endet nicht mit der Implementierung. Wir stehen euch langfristig zur Seite, indem wir die Lösungen kontinuierlich optimieren, Schulungen anbieten und zuverlässigen Support gewährleisten. Unsere Systeme sind darauf ausgelegt, euch auch in Zukunft zu unterstützen – und wenn es Fragen gibt, sind wir immer für euch da. Unser Ziel ist es, euch eine nachhaltige und zukunftsfähige Lösung zu bieten, die langfristig Mehrwert schafft.
                        </p>
                    </div>

                    <div className="font-matt flex-1 mt-8 md:mt-0 flex justify-center">
                        <img
                        src="/images/3 1.png" 
                        alt="Info Section Image"
                        className="w-full max-w-sm md:max-w-md"
                        />
                    </div>
                    </section>
                </div>

                <section id="why" className="font-matt py-12 bg-white lg:min-w-[1280px] mx-auto">
                <div className="font-matt text-center mb-12">
                </div>

                <div className="font-matt grid grid-cols-1 md:grid-cols-3 gap-12 px-6 md:px-12">
                    <div className="font-matt flex flex-col items-center text-center space-y-7">
                            <svg width="205" height="180" viewBox="0 0 205 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path id="Vector" d="M193.735 88.8999L166.459 116.176L141.467 141.168L102.635 180L63.8032 141.168L26.5838 103.949L11.1989 88.564C-2.50641 74.8586 -2.50641 52.7554 11.1989 39.0501L45.4622 4.78679C51.8446 -1.5956 62.1908 -1.5956 68.6404 4.78679L102.635 38.7814L136.361 5.05552C142.743 -1.32687 153.089 -1.32687 159.539 5.05552L193.802 39.3188C207.508 53.0242 207.508 75.1273 193.802 88.8327L193.735 88.8999Z" fill="#E24125"/>
                            </svg>  
                    <h3 className="font-matt text-xl lg:text-[28px] font-bold text-black">Liebe</h3>
                    <p className="font-matt text-[#5A585A] lg:text-[20px]">
                    Leidenschaft treibt alles an, was wir tun
                    </p>
                    </div>

                    <div className="font-matt flex flex-col items-center text-center space-y-7">
                    <svg width="205" height="180" id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 392.89 291.2">
                        <g id="Layer_1-2" data-name="Layer_1">
                            <g>
                            <rect
                                fill="#0009ff"
                                x="21.21"
                                y="112.65"
                                width="102.4"
                                height="102.4"
                                transform="translate(-94.65 99.19) rotate(-45)"
                            />
                            <path
                                fill="#0009ff"
                                d="M320.49,0l72.4,72.4-202.3,202.3c-22,22-57.6,22-79.6,0l-32.6-32.6L320.49,0h0Z"
                            />
                            </g>
                        </g>
                    </svg>
                    <h3 className="font-matt text-xl font-bold lg:text-[28px] text-black">Integrität</h3>
                    <p className="font-matt text-[#5A585A] lg:text-[20px]">
                    Transparenz und Vertrauen schaffen langfristige Partnerschaften
                    </p>
                    </div>

                    <div className="font-matt flex flex-col items-center text-center space-y-7 mb-12">
                        <svg width="205" height="180"
                        id="Layer_2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 375.5 375.6"
                        >
                            <g id="Layer_1-2" data-name="Layer_1">
                                <path
                                fill="#cfff49"
                                d="M343.5,219.8l32-31.9-31.8-31.8h-79.2l39.6-39.6h0l-45.1-45.1-46.9,46.9-3.2,3.2c6.9-6.9,10.7-16.1,10.7-25.8v-63.7L187.7,0l-31.7,31.8v79.2l-39.6-39.6-45.1,45.1,39.6,39.6H31.7L0,187.9l31.9,31.9h63.7c9.7,0,18.9-3.8,25.8-10.7l-3.2,3.2-46.9,46.8h0l45.1,45.1,39.6-39.6v79.2l31.7,31.8,32-32v-63.7c0-9.7-3.8-18.9-10.7-25.8l50.1,50.1,45.1-45.1h0l-45.6-45.6-3.2-3.3c6.7,6.1,15.4,9.4,24.5,9.4h63.7l-.1.2ZM167.1,212.4c-.8-.9-1.7-1.6-2.6-2.4l-.1-.1c-.4-.5-.8-1-1.2-1.4l-.6-.7-.4-.4s-.2-.2-.3-.3l-19.2-19.2,20.5-20.6c.6-.6,1.3-1.3,1.9-2.1.7-.6,1.4-1.3,2.1-1.9l20.5-20.5,19.2,19.3c.9.9,1.8,1.7,2.8,2.5,0,0,.1,0,.1.1.7.9,1.5,1.7,2.3,2.5h0l20.5,20.7h0l-19.5,19.5c-.9,1-1.9,2-2.7,3.1h0c-1.3,1-2.5,2.1-3.6,3.2l-19.2,19.2-20.5-20.5h0Z"
                                />
                            </g>
                        </svg>
                    <h3 className="font-matt text-xl lg:text-[28px] font-bold text-black">Exzellenz</h3>
                    <p className="text-[#5A585A] lg:text-[20px] font-matt">Qualität liefern, die Erwartungen übertrifft</p>
                    </div>
                </div>

                <div className="font-matt grid grid-cols-1 md:grid-cols-2 gap-2 px-6 md:px-16 mt-8 ">
                    <div className="font-matt flex flex-col items-center text-center space-y-7">
                    <svg width="205" height="180" id="Layer_2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 582.6 290.4">
                        <g id="Layer_1-2" data-name="Layer_1">
                            <g>
                            <rect fill="#03c319" y="79.9" width="37.9" height="37.9" />
                            <rect fill="#03c319" x="544.7" y="252.4" width="37.9" height="37.9" />
                            <path
                                fill="#03c319"
                                d="M526.5,290.4h-260.4c-46,0-83.2-37.3-83.2-83.2v-34.7h225.7c65.1,0,117.9,52.8,117.9,117.9Z"
                            />
                            <path
                                fill="#03c319"
                                d="M56.4,117.8h260.3c46,0,83.2-37.3,83.2-83.2V0h-225.7C109.1,0,56.3,52.8,56.3,117.9l.1-.1Z"
                            />
                            </g>
                        </g>
                    </svg>
                    <h3 className="font-matt text-xl lg:text-[28px] font-bold text-black">Kommunikation</h3>
                    <p className="font-matt text-[#5A585A] lg:text-[20px]">Klare Dialoge für den gemeinsamen Erfolg</p>
                    </div>

                    <div className="font-matt flex flex-col items-center text-center space-y-7">
                        <svg width="205" height="180"
                        id="Layer_2"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 408.2 445.61"
                        >
                            <g id="Layer_1-2" data-name="Layer_1">
                                <g>
                                <path
                                    fill="#cfff49" 
                                    d="M408.1,238.11l-40.2,40.2h-119.4v167.3h-48.4v-200.8c0-5.7,1-11.2,2.9-16.2.5-1.6,1.2-3.1,2-4.6,1-2,2.1-3.9,3.3-5.6,3.7-5.4,8.5-10,14-13.3,7.1-4.5,15.7-7.1,24.6-7.1h121.1l40.2,40.2-.1-.1Z"
                                />
                                <path
                                    fill="#03c319" 
                                    d="M208.2,190.91v24c-2,2.8-3.5,5.8-4.8,9-.6,1.5-1.2,3.1-1.6,4.6-1.2,4.1-1.8,8.4-1.8,12.9v204.1h-31.9v-173.9c0-1-.1-2-.1-3.1v-40.1H40.2L0,188.21l40.2-40.2h123.9c1.3,0,2.6,0,3.9.2,22.1,1.9,39.5,20.1,40.2,42.5h0v.2Z"
                                />
                                <path
                                    fill="#0009ff" 
                                    d="M248.3,194.51h-1.4c-9.9,0-19.1,3.1-26.6,8.4-4.7,3.2-8.8,7.3-12,12v-27.2c0-23.1-17.7-42-40.3-44V40.11h80.3v154.4Z"
                                />
                                <rect
                                    fill="#0009ff"
                                    x="179.71"
                                    y="11.74"
                                    width="56.7"
                                    height="56.7"
                                    transform="translate(32.59 158.86) rotate(-45)"
                                />
                                </g>
                            </g>
                        </svg>
                    <h3 className="font-matt text-xl lg:text-[28px] font-bold text-black">Flexibilität</h3>
                    <p className="text-[#5A585A] lg:text-[20px] font-matt">Agil und bereit für jede Herausforderung</p>
                    </div>
                </div>
                </section>

            <Testimonials />  

            <AnimatedSection />

            <LogoSection />

            <section className="bg-white py-16 lg:max-w-[1280px] mx-auto flex font-matt">
            <div className="font-matt flex flex-col items-center text-center space-y-12 ">
            {/* 100% Section */}
                    <div className="font-matt flex flex-col items-center">
                    <div className="w-full">
                    <svg width="1130" height="298" viewBox="0 0 1130 298" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.463898 99.3862H99.6939V0.15625H62.2109C62.2109 34.2583 34.5659 61.9042 0.462891 61.9042V99.3862H0.463898Z" fill="#0009FF"/>
                        <path d="M112.1 297.847V0.15625H153.446C185.415 0.15625 211.33 26.0722 211.33 58.0402V297.847H112.1Z" fill="#0009FF"/>
                        <path d="M438.47 0.15625H289.073C289.073 34.2533 261.426 61.8993 227.33 61.8993V236.104C261.427 236.104 289.073 263.75 289.073 297.847H438.47C438.47 263.75 466.117 236.104 500.213 236.104V61.8993C466.117 61.8993 438.47 34.2533 438.47 0.15625ZM438.195 186.612C433.702 191.091 429.843 194.964 426.191 198.616C418.17 206.637 411.265 213.542 401.383 223.424H326.161L289.349 186.612V111.39C293.842 106.911 297.701 103.038 301.353 99.3862C309.374 91.3652 316.279 84.4602 326.161 74.5782H401.383L438.195 111.39V186.612Z" fill="#0009FF"/>
                        <path d="M727.353 0.15625H577.956C577.956 34.2533 550.309 61.8993 516.213 61.8993V236.104C550.31 236.104 577.956 263.75 577.956 297.847H727.353C727.353 263.75 755 236.104 789.096 236.104V61.8993C755 61.8993 727.353 34.2533 727.353 0.15625ZM727.078 186.612C722.585 191.091 718.726 194.964 715.074 198.616C707.053 206.637 700.148 213.542 690.266 223.424H615.044L578.232 186.612V111.39C582.725 106.911 586.584 103.038 590.236 99.3862C598.257 91.3652 605.162 84.4602 615.044 74.5782H690.266L727.078 111.39V186.612Z" fill="#0009FF"/>
                        <path d="M1071.72 124.316H1062.83C1062.83 176.593 1020.45 218.972 968.174 218.972V240.034C984.897 240.034 998.456 253.593 998.456 270.317H1071.73C1071.73 253.593 1085.29 240.034 1102.01 240.034V154.599C1085.29 154.599 1071.73 141.04 1071.73 124.316H1071.72ZM1071.59 215.763C1069.39 217.958 1067.49 219.858 1065.7 221.65C1061.77 225.585 1058.38 228.97 1053.53 233.818H1016.64L998.587 215.763V178.871C1000.79 176.675 1002.68 174.775 1004.47 172.983C1008.41 169.048 1011.79 165.663 1016.64 160.816H1053.53L1071.59 178.871V215.763Z" fill="#0009FF"/>
                        <path d="M862.907 173.688H871.802C871.802 121.412 914.181 79.0324 966.458 79.0324V57.9701C949.734 57.9701 936.175 44.411 936.175 27.6875H862.904C862.904 44.411 849.345 57.9701 832.621 57.9701V143.405C849.345 143.405 862.904 156.964 862.904 173.688H862.907ZM863.042 82.2417C865.245 80.0461 867.138 78.146 868.929 76.3543C872.864 72.4194 876.25 69.0343 881.097 64.1867H917.989L936.044 82.2417V119.134C933.841 121.329 931.948 123.229 930.157 125.021C926.222 128.956 922.837 132.341 917.989 137.189H881.097L863.042 119.134V82.2417Z" fill="#0009FF"/>
                        <path d="M805.096 297.846H897.469L964.15 156.375L805.096 297.846Z" fill="#0009FF"/>
                        <path d="M1129.54 0.15625H1037.16L970.482 141.623L1129.54 0.15625Z" fill="#0009FF"/>
                        </svg>

                    </div>
                    <p className="font-matt text-[28px] font-bold mt-4 uppercase mb-12">
                        Unserer Kunden empfehlen uns weiter
                    </p>
                </div>

        {/* 3 Länder Section */}
        <div className="font-matt flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-14">
        {/* Left Text */}
        <div className="font-matt text-[28px] font-bold uppercase">
          <p>Bereits in</p>
        </div>

        {/* SVG */}
        <div className="font-matt w-full max-w-[150px] md:max-w-[200px]">
          <svg
            width="264"
            height="299"
            viewBox="0 0 264 299"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M125.798 0.65625H26.5684V99.8862H64.0514C64.0514 65.7842 91.6963 38.1382 125.799 38.1382L125.798 0.65625Z"
              fill="#0009FF"
            />
            <path
              d="M126.137 99.8867H100.99C100.99 127.289 78.777 149.502 51.375 149.502C78.777 149.502 100.99 171.715 100.99 199.117H126.137V99.8867Z"
              fill="#0009FF"
            />
            <path
              d="M26.5684 199.118V298.348H125.798V260.865C91.6963 260.865 64.0503 233.22 64.0503 199.117L26.5684 199.118Z"
              fill="#0009FF"
            />
            <path
              d="M138.203 298.347V0.65625H179.549C211.518 0.65625 237.433 26.5722 237.433 58.5402V240.462C237.433 272.431 211.517 298.346 179.549 298.346H138.203V298.347Z"
              fill="#0009FF"
            />
          </svg>
        </div>

        {/* Right Text */}
        <div className="font-matt text-[28px] font-bold uppercase">
          <p>Länder vertreten und weiter wachsend</p>
        </div>
      </div>

        {/* Hat and 14 Section */}
        <div className="font-matt grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
          {/* Hat Section */}
          <div className="font-matt flex flex-col items-center text-center">
            <div className="w-full max-w-[120px] md:max-w-[150px]">
            <svg width="280" height="280" viewBox="0 0 280 280" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M269.414 168.168V103.836L134.707 31.5078L0 103.836L134.707 176.165L252.239 113.058V168.169C245.968 171.324 241.653 177.818 241.653 185.304C241.653 195.876 250.254 204.477 260.827 204.477C271.399 204.477 280 195.876 280 185.304C279.999 177.818 275.685 171.324 269.414 168.168Z" fill="#0009FF"/>
            <path d="M142.831 191.296L134.706 195.659L126.581 191.296L53.1172 151.852V204.687L134.706 248.495L216.295 204.687V151.852L142.831 191.296Z" fill="#0009FF"/>
            </svg>
            </div>
            <p className="font-matt text-[28px] font-bold mt-4 uppercase">
              Gründung der The Eksperts Academy
            </p>
          </div>

          {/* 14 Section */}
          <div className="font-matt flex flex-col items-center text-center">
            <div className="w-full max-w-[120px] md:max-w-[150px]">
            <svg width="472" height="227" viewBox="0 0 472 227" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M71.8465 75.8147H147.212V0.449219H118.744C118.744 26.3498 97.747 47.347 71.8457 47.347V75.8147H71.8465Z" fill="#0009FF"/>
            <path d="M156.635 226.547V0.449219H188.037C212.318 0.449219 232 20.1325 232 44.4123V226.547H156.635Z" fill="#0009FF"/>
            <path d="M400.153 141.762V75.8164H371.685C371.685 101.717 350.688 122.714 324.787 122.714V141.762V151.183V226.548H400.153V141.762H400.153Z" fill="#0009FF"/>
            <path d="M315.367 104.078H240.002V179.444H315.367V104.078Z" fill="#0009FF"/>
            <path d="M240.002 104.077H315.367L364.374 0.449219H289.008L240.002 104.077Z" fill="#0009FF"/>
            </svg>
            </div>
            <p className="font-matt text-[28px] font-bold mt-4 uppercase">
              Erfolgreiche Projekte in den letzten 12 Monaten
            </p>
          </div>
        </div>
      </div>
    </section>

        <section className="bg-white py-16 flex justify-between items-center lg:min-w-[1280px] mx-auto font-matt">
            {/* Left Section: Heading */}
            <div className="flex-1 text-left min-w-[490px]">
                <h1 className="text-7xl font-bold leading-tight">
                LET'S DO <br />
                GREAT <br />
                THINGS <br />
                TOGETHER
                </h1>
            </div>
            <div className="min-w-[800px] flex gap-14">
                {/* Center Section: Image */}
                <div className=" flex justify-left">
                    <img
                    src="/images/fissal.png"
                    alt="Fisnik Salihu"
                    className="w-[152px] h-[334px] rounded-[20px] object-cover"
                    />
                </div>

                {/* Right Section: Contact Details */}
                <div className="flex-1 ">
                    {/* Name and Title */}
                    <h2 className="text-7xl font-medium mb-2">FISNIK SALIHU</h2>
                    <p className="text-gray-800 text-3xl mb-8">CEO</p>

                    {/* Email Section */}
                    <div className="flex items-center mb-4 space-x-10">
                    <p className="text-black text-[24px] font-normal">Send me an email</p>
                    <a
                        href="mailto:fisnik.salihu@theeksperts.com"
                        className="text-gray-500 border-[2px] border-black text-[20px] py-2 px-4 rounded-full hover:bg-[#0009FF] hover:text-white hover:border-[#0009FF]"
                    >
                        fisnik.salihu@theeksperts.com
                    </a>
                    </div>

                    {/* Phone Section */}
                    <div className="flex items-center space-x-10">
                    <p className="text-black text-[24px] font-normal">Or give me a call</p>
                    <a
                        href="tel:+41799213000"
                        className="text-gray-500 border-[2px] border-black text-[20px] py-2 px-4 rounded-full hover:bg-[#0009FF] hover:text-white hover:border-[#0009FF]"
                    >
                        +41 79 921 30 00
                    </a>
                    </div>
                </div>
                </div>
            </section>

      </main>
    </>
  );
};

export default Home;
