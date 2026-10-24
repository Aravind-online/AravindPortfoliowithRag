import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Cloud, Database, GitBranch, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative min-h-screen bg-[#050508] text-white py-28 px-6 md:px-12 flex flex-col justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 left-0 text-[18vw] font-black text-white/[0.02] select-none pointer-events-none leading-none uppercase font-display">
        CAREER
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>02</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>Work History</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 font-display">
            Professional Experience
          </h2>
        </div>

        {/* Experience Card */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
          
          {/* Top Row: Title, Company, Date, Location */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white font-display">
                  AI & ML Engineer
                </h3>
                <div className="flex flex-wrap items-center gap-3 text-cyan-400 font-semibold text-sm sm:text-base mt-1">
                  <span>GenLab</span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300 font-normal">Machine Learning & Deep Learning</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>Jul 2026 – Present</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>Nagercoil, Tamil Nadu</span>
              </div>
            </div>
          </div>

          {/* Core Accomplishments */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="glass-card p-5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm mb-2">
                <Database className="w-4 h-4" />
                <span>ML & DL Pipelines</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Worked on machine learning and deep learning techniques, including data preprocessing,
                model development, training, and evaluation for applied AI solutions.
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-sm mb-2">
                <Cloud className="w-4 h-4" />
                <span>RAG Applications</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Developed AI applications using Retrieval-Augmented Generation (RAG) for information
                retrieval and context-aware response generation across document-based question answering.
              </p>
            </div>

            <div className="glass-card p-5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2">
                <GitBranch className="w-4 h-4" />
                <span>Web Development Intern</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Earlier served as a Web Development Intern at Alric Infotech, building responsive pages
                using HTML, CSS, and JavaScript with UI/UX-first design decisions.
              </p>
            </div>

          </div>

          {/* Tech Stack Chips */}
          <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 mr-2 uppercase">Core Technologies:</span>
            {['Python', 'SQL', 'ReactJS', 'TensorFlow', 'RAG', 'LangChain', 'FAISS', 'OpenCV', 'GitHub', 'Azure'].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
