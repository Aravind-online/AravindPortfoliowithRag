import { useState } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Services from './components/Services';
import Achievements from './components/Achievements';
import Project from './components/Project';
import ContactSection from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';

function App() {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  // Resume download pointing to the real PDF file stored in the public folder
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Aravind_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="bg-[#050505] text-white min-h-screen relative">
      {/* Top right navigation links always visible on landing page */}
      <Navbar onDownloadResume={handleDownloadResume} />

      <Hero
        onPreloadComplete={() => setPreloaderComplete(true)}
      />

      {preloaderComplete && (
        <div className="animate-fade-in-up">
          <About />
          <Services />
          <Achievements />
          <Project />
          <ContactSection onDownloadResume={handleDownloadResume} />
          <Footer />
        </div>
      )}
      <ChatWidget />
    </main>
  );

}

export default App;
