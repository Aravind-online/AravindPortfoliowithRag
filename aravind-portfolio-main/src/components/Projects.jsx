import React from 'react';
import {
  ExternalLink,
  Layers,
  Sparkles,
  Database,
  Shield,
  Activity,
  Music,
  ArrowUpRight,
  GitBranch
} from 'lucide-react';


export default function Projects() {
  const projects = [
    {
      id: '01',
      title: 'Hearconet',
      category: 'AI-Based Communication Platform',
      timeline: '2026',
      description:
        'An AI-powered communication platform designed for deaf and hearing-impaired users with speech-to-text and sign language processing features.',
      highlights: [
        'Developed an AI-powered communication platform for deaf and hearing-impaired users.',
        'Implemented Speech-to-Text and Sign Language-to-Text/Speech features using AI.',
        'Integrated DL, OpenCV, MediaPipe, and Speech Recognition for gesture and voice processing.',
      ],
      stack: ['Python', 'Deep Learning', 'OpenCV', 'MediaPipe', 'Speech Recognition', 'AI'],
      metrics: 'IEEE Project Expo 2K26 • 2nd Place',
      githubUrl: 'https://github.com/Aravind-online',
    },
    {
      id: '02',
      title: 'RAG-Based Model',
      category: 'Retrieval-Augmented Generation',
      timeline: '2026',
      description:
        'A RAG-based system for semantic search and PDF question answering using vector embeddings and Gemini API.',
      highlights: [
        'Built a RAG model using Python, LangChain, FAISS, and Google Gemini API.',
        'Implemented semantic search and vector embeddings for PDF-based question answering.',
        'Focused on context-aware response generation and information retrieval workflows.',
      ],
      stack: ['Python', 'LangChain', 'FAISS', 'Gemini API', 'RAG', 'Vector Search'],
      metrics: 'Semantic Search • PDF QA',
      githubUrl: 'https://github.com/Aravind-online',
    },
    {
      id: '03',
      title: 'Student Depression Prediction',
      category: 'Machine Learning Model',
      timeline: '2026',
      description:
        'A prediction system built with a Random Forest model to identify student depression risk from structured data patterns.',
      highlights: [
        'Built a Random Forest model achieving 86.78% accuracy.',
        'Used Python, Pandas, Scikit-learn, Streamlit, and Joblib for the pipeline and model deployment.',
        'Demonstrated practical ML workflow from preprocessing to evaluation and deployment.',
      ],
      stack: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit', 'Joblib', 'Random Forest'],
      metrics: '86.78% Accuracy',
      githubUrl: 'https://github.com/Aravind-online',
    },
    {
      id: '04',
      title: 'AI Automation for Business Operations',
      category: 'Workflow Automation',
      timeline: '2026',
      description:
        'AI-powered business workflow automation using modern automation tooling to simplify and accelerate operations.',
      highlights: [
        'Developed AI-powered business workflow automation using N8N.',
        'Applied automation mindset to process optimization and intelligent task orchestration.',
        'Built practical AI workflows to drive business efficiency and user value.',
      ],
      stack: ['Python', 'AI Automation', 'N8N', 'Workflow Design', 'Business Ops'],
      metrics: 'Automation Workflow',
      githubUrl: 'https://github.com/Aravind-online',
    },
  ];

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-[#050508] text-white py-28 px-6 md:px-12 flex flex-col justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 left-0 text-[18vw] font-black text-white/[0.02] select-none pointer-events-none leading-none uppercase font-display">
        PROJECTS
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <span>04</span>
              <span className="w-8 h-[1px] bg-cyan-500/50" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 font-display">
              Production Projects
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-sm">
            Architected, deployed, and tested production-style projects spanning backend security,
            microservices, cloud persistence, and predictive deep learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Card Watermark Number */}
              <div className="absolute top-6 right-8 text-6xl sm:text-7xl font-black font-display text-white/[0.03] group-hover:text-cyan-500/10 transition-colors pointer-events-none select-none">
                {proj.id}
              </div>

              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {proj.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10">
                    {proj.timeline}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-3 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Brief overview */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-normal">
                  {proj.description}
                </p>

                {/* Bullet Highlights */}
                <div className="space-y-2 mb-6">
                  {proj.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-slate-400 leading-relaxed">
                      <span className="text-cyan-400 font-bold mt-0.5">•</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom bar: Tech tags + Links */}
              <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
                
                {/* Stack Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Link & Metric Badge */}
                <div className="flex items-center justify-between gap-4 pt-2">
                  <span className="text-[11px] font-mono text-cyan-400/90 font-bold">
                    {proj.metrics}
                  </span>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-slate-200 bg-white/5 hover:bg-cyan-500/20 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition-all duration-200"
                  >
                    <span>View GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
