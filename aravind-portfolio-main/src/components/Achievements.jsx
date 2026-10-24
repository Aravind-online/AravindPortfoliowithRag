import React from 'react';
import { Award, Terminal, CheckCircle2, Cloud, Sparkles, BookOpen, Trophy, FileCode } from 'lucide-react';

export default function Achievements() {
  const honors = [
    {
      title: 'Secured 3rd place in Wildlife Week Poster Competition 2023',
      issuer: 'Government of Tamil Nadu',
      category: 'Competition',
      description:
        'Earned 3rd place in the Wildlife Week Poster Competition 2023, organized by the Government of Tamil Nadu, recognizing creativity and awareness-driven design.',
      icon: Trophy,
      accent: 'yellow',
    },
    {
      title: 'Secured 2nd Place at IEEE Project Expo 2K26',
      issuer: 'IEEE Project Expo',
      category: 'Project Showcase',
      description:
        'Won 2nd place for HearConnect, an AI-based communication platform designed to assist deaf and hearing-impaired individuals, highlighting impactful social innovation.',
      icon: Sparkles,
      accent: 'purple',
    },
    {
      title: 'Participated in Smart India Hackathon Internal Hackathon',
      issuer: 'Smart India Hackathon',
      category: 'Hackathon',
      description:
        'Participated in the Smart India Hackathon internal hackathons from 2023 to 2025, contributing to problem-solving, prototype development, and collaborative innovation.',
      icon: Terminal,
      accent: 'cyan',
    },
    {
      title: 'Participated in 24-Hour National-Level Hackathon',
      issuer: 'Karpagam Academy of Higher Education',
      category: 'Hackathon',
      description:
        'Took part in a 24-hour national-level hackathon organized by Karpagam Academy of Higher Education, showcasing rapid execution and technical problem-solving under time constraints.',
      icon: BookOpen,
      accent: 'sky',
    },
  ];

  return (
    <section
      id="certifications"
      className="relative min-h-screen bg-[#050508] text-white py-28 px-6 md:px-12 flex flex-col justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 right-0 text-[18vw] font-black text-white/[0.02] select-none pointer-events-none leading-none uppercase font-display">
        HONORS
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>05</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>Honors & Credentials</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 font-display">
            Certifications & Achievements
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mt-3">
            Industry cloud certifications, competitive problem-solving milestones, academic
            leadership, and technical presentations.
          </p>
        </div>

        {/* Honors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {honors.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="glass-panel p-6 sm:p-7 rounded-3xl border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/20">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  
                  <div className="text-xs text-slate-400 font-medium mb-3">
                    {item.issuer}
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-mono text-cyan-400/90 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Verified Credential</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
