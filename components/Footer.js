import Link from 'next/link';
import '../styles/global.css'; 


const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 p-8 font-matt">
      <div className="font-matt max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Contact Section */}
        <div>
          <h2 className="font-matt font-bold text-xl mb-4">Sie können jederzeit auf diese Schaltfläche klicken.</h2>
          <Link href="/contact">
            <button className="bg-[#0009FF] text-white px-6 py-3 rounded-[8px] font-bold font-matt">
              CONTACT
            </button>
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div>
          <h2 className=" font-matt text-lg mb-4">It's all here.</h2>
          <ul className="space-y-2">
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/clients">Clients</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        
        {/* Newsletter Section */}
        <div>
          <h2 className="font-matt font-bold text-xl mb-4">We have a newsletter</h2>
          <p className="font-matt mb-4">Unsere Untersuchungen zeigen, dass die Leute einfach nicht genügend E-Mails bekommen.</p>
          <form className="font-matt flex items-center border-b border-gray-400">
            <input
              type="email"
              placeholder="Your email"
              className="font-matt bg-transparent w-full py-2 px-4 focus:outline-none"
            />
            <button type="submit" className="font-matt text-xl font-bold">→</button>
          </form>
        </div>
      </div>

      {/* Social Links and Copyright */}
      <div className="font-matt max-w-5xl mx-auto mt-16 px-4 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
        <div className="font-matt mb-4 md:mb-0">
          © 2024 The Eksperts
        </div>
        <div className="font-matt flex space-x-4 mb-4 md:mb-0">
          <Link href="/impressum">Impressum</Link>
          <span>|</span>
          <Link href="/termsandcondition">Terms</Link>
          <span>|</span>
          <Link href="/privacy">Privacy</Link>
        </div>
        <div className="flex space-x-4">
          <Link href="https://linkedin.com" target="_blank">LinkedIn</Link>
          <Link href="https://instagram.com" target="_blank">Instagram</Link>
          <Link href="https://x.com" target="_blank">X.com</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  