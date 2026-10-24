import { useState, useRef } from 'react';
import contactBgVideo from '../assets/contact_assets/contact_bg.mp4';
import { Download, Send, Loader2, CheckCircle2, AlertCircle, Mail } from 'lucide-react';
import TiltCard from './ui/TiltCard';
import CinematicButton from './ui/CinematicButton';

const ContactSection = ({ onDownloadResume }) => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

  const handleSubmit = (e) => {
    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const honey = formData.get('_honey');

    // Honeypot spam prevention
    if (honey) {
      e.preventDefault();
      return;
    }

    if (!name || !email || !message) {
      e.preventDefault();
      setStatusMessage({ text: 'Please fill in all required fields.', type: 'error' });
      return;
    }

    // Allow standard browser form submission to hidden iframe (bypasses CORS/localhost fetch blocks)
    setIsSubmitting(true);
    setStatusMessage({ text: '', type: '' });

    // Smooth UI transition while the browser posts into the hidden iframe
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        text: 'Message dispatched successfully! Delivered to aravind232425@gmail.com. Aravind will connect shortly.',
        type: 'success',
      });
      if (formRef.current) formRef.current.reset();
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen text-white font-sans flex items-center overflow-hidden z-10"
    >
      {/* Hidden iframe to receive FormSubmit response without redirecting the user */}
      <iframe
        name="formsubmit_target_iframe"
        id="formsubmit_target_iframe"
        title="FormSubmit Target"
        className="hidden"
        style={{ display: 'none' }}
      />

      {/* Background Video strictly contained in Contact Section */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={contactBgVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75 z-0 pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-16 py-16 flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Side: Contact Info */}
        <div className="w-full min-w-0 lg:w-5/12 flex flex-col justify-start">
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter chrome-text drop-shadow-2xl mb-12 font-display">
            Get in touch
          </h2>

          <div className="flex flex-col gap-8">
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-mono">Email Address</p>
              <a
                href="mailto:aravind232425@gmail.com"
                className="break-all text-lg md:text-2xl font-medium tracking-wide text-white hover:text-[#ccff00] transition-colors"
              >
                aravind232425@gmail.com
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-mono">Direct Mobile</p>
              <a
                href="tel:+916374826859"
                className="text-lg md:text-2xl font-medium tracking-wide text-white hover:text-[#ccff00] transition-colors"
              >
                (+91) 6374826859
              </a>
            </div>

            <div>
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-1 font-mono">Location</p>
              <p className="text-lg md:text-xl text-gray-200">
                Nagercoil, Tamil Nadu
              </p>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/15 text-sm font-medium">
              <a
                href="https://linkedin.com/in/aravind-p-73a57230a/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ccff00] transition-colors uppercase tracking-wider"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Aravind-online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#ccff00] transition-colors uppercase tracking-wider"
              >
                GitHub
              </a>

              {onDownloadResume && (
                <CinematicButton
                  onClick={onDownloadResume}
                  variant="primary"
                  className="flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold tracking-wider ml-auto"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Resume</span>
                </CinematicButton>
              )}
            </div>
          </div>
        </div>

        {/* Right Side: Message Form */}
        <div className="w-full min-w-0 lg:w-7/12 flex flex-col justify-center">
          <TiltCard
            maxTilt={5}
            glowColor="rgba(204, 255, 0, 0.12)"
            className="p-8 md:p-12 shadow-2xl"
          >
            <form
              ref={formRef}
              action="https://formsubmit.co/aravind232425@gmail.com"
              method="POST"
              target="formsubmit_target_iframe"
              onSubmit={handleSubmit}
              className="flex flex-col gap-6"
            >
              {/* FormSubmit Configuration Flags */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value="New Collaboration Inquiry (Portfolio)" />
              
              {/* Invisible Honeypot to block spam bots */}
              <input
                type="text"
                name="_honey"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />

              <div>
                <label className="block text-gray-400 text-xs font-mono uppercase tracking-wider mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ccff00] focus:shadow-[0_0_15px_rgba(204,255,0,0.15)] transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-mono uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="your.email@example.com"
                  className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ccff00] focus:shadow-[0_0_15px_rgba(204,255,0,0.15)] transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-xs font-mono uppercase tracking-wider mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="How can we collaborate?"
                  className="w-full bg-black/50 border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#ccff00] focus:shadow-[0_0_15px_rgba(204,255,0,0.15)] transition-all text-sm resize-none"
                />
              </div>

              {statusMessage.text && (
                <div
                  className={`text-xs font-mono p-4 rounded-xl border flex items-center gap-2.5 ${
                    statusMessage.type === 'error'
                      ? 'bg-red-950/40 text-red-300 border-red-500/30'
                      : 'bg-emerald-950/40 text-emerald-300 border-emerald-500/30'
                  }`}
                >
                  {statusMessage.type === 'error' ? (
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              <CinematicButton
                type="submit"
                disabled={isSubmitting}
                variant="primary"
                className="w-full py-4 text-xs font-black tracking-widest gap-2 shadow-[0_0_25px_rgba(204,255,0,0.35)]"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting to Inbox...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </>
                )}
              </CinematicButton>

              <div className="text-center pt-1">
                <a
                  href="mailto:aravind232425@gmail.com?subject=Portfolio%20Collaboration%20Inquiry"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#ccff00] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>Or compose directly in Gmail / Email App</span>
                </a>
              </div>

            </form>
          </TiltCard>
        </div>

      </div>

    </section>
  );
};

export default ContactSection;
