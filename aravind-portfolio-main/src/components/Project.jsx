import TiltCard from './ui/TiltCard';
import CinematicButton from './ui/CinematicButton';

const projects = [
  {
    name: 'Hearconet | AI-Based Communication Platform For Deaf and Hearing-Impaired Individuals',
    category: 'AI • COMPUTER VISION • SPEECH PROCESSING',
    title: (
      <>
        HEARCONET <span className="font-light italic text-gray-300 lowercase font-serif">ai-powered</span><br />
        COMMUNICATION PLATFORM
      </>
    ),
    description:
      'Developed an AI-powered communication platform for deaf and hearing-impaired users. Implemented Speech-to-Text and Sign Language-to-Text/Speech features using AI. Integrated DL, OpenCV, MediaPipe, and Speech Recognition for gesture and voice processing. Built a RAG-based model using Python, LangChain, FAISS, and Google Gemini API for semantic PDF question answering and intelligent responses.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/Aravind-online',
    demoUrl: '#contact'
  },
  {
    name: 'RAG-Based Model | Python, LangChain, Gemini API',
    category: 'RAG • PYTHON • AI SEARCH',
    title: (
      <>
        RAG-BASED <br />
        QUESTION ANSWERING MODEL
      </>
    ),
    description:
      'Built a RAG model using Python, LangChain, FAISS, and Google Gemini API. Implemented semantic search and vector embeddings for PDF-based question answering, enabling contextual retrieval and accurate response generation from large document sources.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/Aravind-online',
    demoUrl: '#contact'
  },
  {
    name: 'Student Depression Prediction Using Machine Learning',
    category: 'ML • PREDICTION • STREAMLIT',
    title: (
      <>
        STUDENT DEPRESSION <br />
        PREDICTION SYSTEM
      </>
    ),
    description:
      'Built a Random Forest model achieving 86.78% accuracy for student depression prediction. Implemented the solution using Python, Pandas, Scikit-learn, Streamlit, and Joblib to create an interactive and deployable prediction interface.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000&auto=format&fit=crop',
    githubUrl: 'https://github.com/Aravind-online',
    demoUrl: '#contact'
  }
];

const Project = () => {
  return (
    <div id="project" className="bg-[#050505] w-full text-white pt-10 md:pt-20 pb-24 px-6 md:px-16">
      
      {/* Top Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start w-full z-10 gap-12 lg:gap-0 mb-16 lg:mb-24">
        
        {/* Left Giant Title */}
        <div className="w-full lg:w-7/12 overflow-visible">
          <h2 className="flex flex-wrap items-center gap-x-2 sm:gap-x-3 text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter chrome-text drop-shadow-2xl leading-[0.9] uppercase font-display">
            Selected
            <span className="font-light italic text-gray-300 lowercase font-serif pr-2 pt-1 sm:pr-4 md:pt-4">work</span>
          </h2>
        </div>

        {/* Right Description */}
        <div className="w-full lg:w-4/12 flex flex-col items-start lg:mt-4">
          <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-6">
            Production-style software systems spanning secure enterprise Spring Boot backends,
            relational database architectures, and deep learning predictive analytics.
          </p>
          <CinematicButton
            href="https://github.com/Aravind-online"
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
            className="px-6 py-2.5 text-xs md:text-sm font-bold gap-2"
          >
            Explore GitHub
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </CinematicButton>
        </div>
      </div>

      {/* Projects List - Liquid Glass Tilt Cards */}
      <div className="flex flex-col gap-12 lg:gap-16 w-full">
        {projects.map((proj, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <TiltCard
              key={proj.name}
              maxTilt={4}
              glowColor="rgba(204, 255, 0, 0.14)"
              className="p-6 md:p-10 lg:p-12 w-full"
            >
              <div
                className={`flex flex-col ${
                  isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } items-center justify-between gap-8 lg:gap-14 w-full`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-6/12 overflow-hidden relative aspect-[16/10] bg-[#111] rounded-2xl border border-white/10 shadow-2xl group">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Text Side */}
                <div className="w-full lg:w-6/12 flex flex-col items-start">
                  <span className="text-[#ccff00] text-xs md:text-sm font-mono font-bold tracking-widest uppercase mb-3 inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ccff00] animate-pulse" />
                    0{idx + 1} • {proj.category}
                  </span>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tighter text-white leading-[1.1] uppercase mb-5 font-display">
                    {proj.title}
                  </h3>

                  <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed mb-8">
                    {proj.description}
                  </p>

                  <div className="flex items-center gap-4 flex-wrap">
                    <CinematicButton
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="primary"
                      className="px-6 py-2.5 text-xs md:text-sm font-bold gap-2"
                    >
                      View Details
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                      </svg>
                    </CinematicButton>

                    <CinematicButton
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="glass"
                      className="px-6 py-2.5 text-xs md:text-sm gap-2"
                    >
                      GitHub
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </CinematicButton>
                  </div>
                </div>

              </div>
            </TiltCard>
          );
        })}
      </div>

    </div>
  );
};

export default Project;
