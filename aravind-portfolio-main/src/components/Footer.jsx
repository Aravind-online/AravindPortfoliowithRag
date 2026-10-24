import footerBg from '../assets/Footer/Footer.png';
import CinematicButton from './ui/CinematicButton';

const Footer = () => {
  return (
    <footer className="relative min-h-[100svh] bg-black text-white py-12 px-6 md:px-16 md:h-screen flex flex-col justify-between overflow-hidden">
      
      {/* Background Graphic with gradient overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-bottom w-full h-full scale-[1.3] md:scale-[1.5] origin-bottom translate-y-[10%]"
          style={{ backgroundImage: `url(${footerBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col h-full justify-between">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-10">
          <div className="flex flex-col gap-6 w-full md:w-auto">
            <div>
              <p className="text-gray-400 text-sm mb-2 font-mono">Connect with me</p>
              <a
                href="mailto:aravind232425@gmail.com"
                className="text-xl md:text-5xl font-medium hover:text-[#ccff00] transition-colors break-words font-display"
              >
                aravind232425@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap gap-6 text-sm text-gray-300 mt-4">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#service" className="hover:text-white transition-colors">Services</a>
              <a href="#project" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

          <div className="flex flex-col items-start md:items-end text-left md:text-right w-full md:w-auto mt-4 md:mt-0">
            <h3 className="text-lg md:text-2xl font-medium mb-2">Let's build something</h3>
            <p className="text-gray-400 text-sm mb-6 max-w-xs">
              Open for full-time engineering opportunities, microservices architecture, and technical collaborations.
            </p>
            <CinematicButton
              href="#contact"
              variant="primary"
              className="px-6 py-3 text-xs md:text-sm font-bold tracking-wider"
            >
              Get in touch
            </CinematicButton>
          </div>
        </div>

        {/* Middle Section - Socials */}
        <div className="flex flex-wrap justify-between items-center py-6 border-t border-white/10 mb-4 text-sm md:text-lg font-medium">
          <a
            href="https://linkedin.com/in/aravind-p-73a57230a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Aravind-online"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:aravind232425@gmail.com"
            className="hover:text-gray-300 transition-colors"
          >
            Email
          </a>
          <a
            href="tel:+916374826859"
            className="hover:text-gray-300 transition-colors"
          >
            (+91) 6374826859
          </a>
        </div>

        {/* Huge Text Section */}
        <div className="w-full text-center flex-1 flex items-center justify-center min-h-0 select-none">
          <h1
            className="text-[14vw] font-black leading-none tracking-tighter chrome-text uppercase font-display select-none"
          >
            ARAVIND
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 mt-auto pt-6">
          <p>© {new Date().getFullYear()} Aravind P. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-4 md:mt-0">
            <span>Nagercoil, Tamil Nadu</span>
            <span>•</span>
            <span className="text-[#ccff00]">Fullstack Developer And Ai&ML Engineer</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
