import React, { useState } from 'react';
import {
  Code2,
  Server,
  Database,
  Cloud,
  Cpu,
  ShieldCheck,
  CheckCircle,
  Terminal,
  Layers,
  ArrowRight
} from 'lucide-react';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'languages', label: 'Programming' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI & ML' },
    { id: 'design', label: 'UI/UX & Design' },
    { id: 'data', label: 'Data Analytics' },
    { id: 'tools', label: 'Development Tools' },
  ];

  const skillGroups = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: Code2,
      accent: 'teal',
      description: 'Core programming language used for AI, automation, and software development workflows.',
      skills: [
        { name: 'Python', level: 'Primary' },
      ],
    },
    {
      id: 'web',
      title: 'Web Development',
      icon: Server,
      accent: 'cyan',
      description: 'Modern front-end technologies used to build interactive, responsive web experiences.',
      skills: [
        { name: 'ReactJS', level: 'Frontend' },
        { name: 'HTML5', level: 'Structure' },
        { name: 'CSS3', level: 'Styling' },
        { name: 'JavaScript', level: 'Interactive' },
      ],
    },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      icon: Cpu,
      accent: 'purple',
      description: 'Machine learning and AI libraries for building predictive models and intelligent systems.',
      skills: [
        { name: 'NumPy', level: 'Data Ops' },
        { name: 'Pandas', level: 'Data Prep' },
        { name: 'Scikit-learn', level: 'ML' },
        { name: 'TensorFlow', level: 'Framework' },
        { name: 'NLP', level: 'Text AI' },
      ],
    },
    {
      id: 'design',
      title: 'UI/UX & Design Tools',
      icon: Layers,
      accent: 'pink',
      description: 'Design and prototyping tools used for user-focused interface creation and product workflows.',
      skills: [
        { name: 'Figma', level: 'Design' },
        { name: 'Adobe XD', level: 'Prototype' },
        { name: 'Adobe Photoshop', level: 'Editing' },
      ],
    },
    {
      id: 'data',
      title: 'Data Analytics',
      icon: Database,
      accent: 'blue',
      description: 'Data analysis and visualization tools for insights, reporting, and decision support.',
      skills: [
        { name: 'SQL', level: 'Querying' },
        { name: 'Power BI', level: 'Visualization' },
        { name: 'Microsoft Excel', level: 'Analytics' },
      ],
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: Terminal,
      accent: 'emerald',
      description: 'Version control, collaboration, and deployment tooling for efficient software delivery.',
      skills: [
        { name: 'Git', level: 'Versioning' },
        { name: 'GitHub', level: 'Collab' },
        { name: 'Docker', level: 'Container' },
      ],
    },
  ];

  const filteredGroups = activeCategory === 'all'
    ? skillGroups
    : skillGroups.filter((g) => g.id === activeCategory);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-[#050508] text-white py-28 px-6 md:px-12 flex flex-col justify-center overflow-hidden border-t border-white/5"
    >
      {/* Background Watermark */}
      <div className="absolute top-12 right-0 text-[18vw] font-black text-white/[0.02] select-none pointer-events-none leading-none uppercase font-display">
        SERVICES
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>03</span>
            <span className="w-8 h-[1px] bg-cyan-500/50" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 font-display">
            What I Build & Master
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mt-3">
            A comprehensive overview of programming languages, enterprise frameworks, cloud
            infrastructure, and applied AI systems I leverage to build scalable software.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-white/10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              type="button"
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] font-bold'
                  : 'bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => {
            const IconComponent = group.icon;
            return (
              <div
                key={group.title}
                className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {group.title}
                  </h3>
                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-4 border-t border-white/10">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="glass-badge p-2.5 rounded-xl flex flex-col justify-between"
                    >
                      <span className="text-xs font-bold text-slate-200">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400/90 mt-0.5">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
