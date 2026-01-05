
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import AIChat from './components/AIChat';
import PrintableCV from './components/PrintableCV';
import { PROJECTS, EXPERIENCES, SKILLS, NAME, EDUCATION, SOCIALS, ABOUT_ME, LANGUAGES, HOBBIES, RESEARCH, PROFILE_IMAGE } from './constants';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'colorful'>('dark');

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'colorful' : 'dark');

  const handleDownloadCV = () => {
    window.print();
  };

  const downloadBusinessCard = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = 1050;
    canvas.height = 600;

    const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    grad.addColorStop(0, '#020617');
    grad.addColorStop(0.5, '#0f172a');
    grad.addColorStop(1, '#020617');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'rgba(59, 130, 246, 0.05)';
    ctx.beginPath();
    ctx.moveTo(canvas.width, 0);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(canvas.width - 600, canvas.height);
    ctx.closePath();
    ctx.fill();

    ctx.textBaseline = 'top';
    ctx.textAlign = 'center';
    
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 72px "Plus Jakarta Sans", sans-serif';
    ctx.fillText(NAME.toUpperCase(), canvas.width / 2, 80);

    ctx.fillStyle = '#60a5fa'; 
    ctx.font = '600 36px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('Executive Officer | National Bank PLC', canvas.width / 2, 170);

    ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2 - 200, 230);
    ctx.lineTo(canvas.width / 2 + 200, 230);
    ctx.stroke();

    ctx.textAlign = 'left';
    ctx.fillStyle = '#e2e8f0';
    ctx.font = '400 24px "JetBrains Mono", monospace';
    
    const startX = canvas.width / 2 - 250;
    const startY = 280;
    const spacing = 50;

    const drawIcon = (x: number, y: number, char: string) => {
      ctx.fillStyle = '#3b82f6';
      ctx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(char, x, y);
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '400 24px "JetBrains Mono", monospace';
    };

    drawIcon(startX, startY, 'P:'); ctx.fillText(SOCIALS.phone, startX + 40, startY);
    drawIcon(startX, startY + spacing, 'E:'); ctx.fillText(SOCIALS.email, startX + 40, startY + spacing);
    drawIcon(startX, startY + spacing * 2, 'L:'); ctx.fillText('linkedin.com/in/plabon5150', startX + 40, startY + spacing * 2);
    drawIcon(startX, startY + spacing * 3, 'A:'); ctx.fillText(SOCIALS.address, startX + 40, startY + spacing * 3);

    ctx.textAlign = 'center';
    ctx.fillStyle = '#3b82f6';
    ctx.beginPath();
    ctx.roundRect(50, 50, 60, 60, 12);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 28px "Plus Jakarta Sans", sans-serif';
    ctx.fillText('PD', 80, 65);

    const link = document.createElement('a');
    link.download = `${NAME.replace(' ', '_')}_Business_Card.jpg`;
    link.href = canvas.toDataURL('image/jpeg', 0.98);
    link.click();
  };

  return (
    <>
      {/* Website View Container */}
      <div className={`website-content min-h-screen transition-all duration-700 ${theme === 'colorful' ? 'theme-colorful' : 'bg-[#020617] text-slate-200'}`}>
        <Navbar onThemeToggle={toggleTheme} currentTheme={theme} />
        
        {/* Hero Section */}
        <section className="relative pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
          {theme === 'dark' && (
            <>
              <div className="absolute -top-40 -left-40 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
              <div className="absolute top-1/2 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-[100px]"></div>
            </>
          )}
          
          <div className="flex-1 relative z-10 space-y-8 text-center lg:text-left">
            <div className={`inline-flex items-center space-x-2 px-3 py-1.5 rounded-full text-xs font-medium border ${theme === 'colorful' ? 'bg-white/20 border-white/30 text-white' : 'bg-white/5 border-white/10 text-slate-300'}`}>
              <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${theme === 'colorful' ? 'bg-pink-400' : 'bg-blue-500'}`}></span>
              <span>Available for New Challenges</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-none">
              {NAME.split(' ')[0].toUpperCase()} <br />
              <span className={`text-transparent bg-clip-text ${theme === 'colorful' ? 'bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400' : 'bg-gradient-to-r from-blue-500 via-indigo-400 to-emerald-400'}`}>
                {NAME.split(' ')[1].toUpperCase()}
              </span>
            </h1>
            
            <p className="max-w-xl text-lg md:text-xl text-slate-400 leading-relaxed mx-auto lg:mx-0">
              {ABOUT_ME}
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={handleDownloadCV}
                  className={`px-8 py-4 font-bold rounded-2xl border transition-all flex items-center gap-2 group shadow-xl ${theme === 'colorful' ? 'bg-white text-indigo-900 border-white hover:bg-white/90' : 'bg-blue-600 border-blue-500 text-white hover:bg-blue-500 hover:scale-105'}`}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Download CV (PDF)
                </button>

                <button 
                  onClick={downloadBusinessCard}
                  className={`px-6 py-4 font-bold rounded-2xl border transition-all flex items-center gap-2 group ${theme === 'colorful' ? 'bg-indigo-600/20 border-white/20 text-white hover:bg-indigo-600/40' : 'bg-blue-600/10 border-blue-500/20 text-blue-400 hover:bg-blue-600/20 hover:border-blue-500/40'}`}
                >
                  <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Card (JPG)
                </button>
              </div>
            </div>
          </div>

          {/* Profile Image Area */}
          <div className="relative group w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px]">
            <div className={`absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse ${theme === 'colorful' ? 'bg-pink-500' : 'bg-blue-500'}`}></div>
            <div className={`relative w-full h-full rounded-3xl overflow-hidden border-2 animate-float ${theme === 'colorful' ? 'border-white/40 shadow-2xl shadow-pink-500/20' : 'border-white/10 shadow-2xl shadow-blue-500/10'}`}>
              <img 
                src={PROFILE_IMAGE} 
                alt={NAME} 
                className="w-full h-full object-cover filter contrast-[1.05] select-none"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
              <div className="absolute inset-0 z-20 pointer-events-auto bg-transparent select-none cursor-default" onContextMenu={(e) => e.preventDefault()}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-40 z-10"></div>
            </div>
          </div>
        </section>

        {/* Top 10 Projects Section */}
        <section id="projects" className="px-6 py-32 max-w-7xl mx-auto scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="space-y-2">
              <span className={`font-bold tracking-widest text-xs uppercase block ${theme === 'colorful' ? 'text-pink-400' : 'text-blue-500'}`}>Featured Work</span>
              <h2 className="text-4xl md:text-5xl font-black text-white">Top 10 Projects</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map(p => (
              <div key={p.id} className={`${theme === 'colorful' ? 'colorful-card' : ''} transition-all duration-500 rounded-2xl`}>
                <ProjectCard project={p} />
              </div>
            ))}
          </div>
        </section>

        {/* Research Highlights Section */}
        <section id="research" className="px-6 py-32 bg-white/[0.02] scroll-mt-24">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16">
              <span className={`font-bold tracking-widest text-xs uppercase block mb-2 ${theme === 'colorful' ? 'text-cyan-400' : 'text-blue-500'}`}>Advanced Studies</span>
              <h2 className="text-4xl font-black text-white">Research Highlights</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {RESEARCH.map((item, i) => (
                <div key={i} className={`p-8 rounded-3xl border transition-all duration-300 group ${theme === 'colorful' ? 'bg-white/5 border-white/20 hover:border-white/40' : 'bg-white/[0.03] border-white/5 hover:border-blue-500/30'}`}>
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${theme === 'colorful' ? 'bg-pink-500/20 text-pink-300' : 'bg-blue-500/20 text-blue-400'}`}>
                      {item.domain}
                    </span>
                    <div className="p-2 rounded-lg bg-white/5">
                      <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                  <div className={`p-4 rounded-xl border-l-2 ${theme === 'colorful' ? 'bg-cyan-500/10 border-cyan-400/50' : 'bg-emerald-500/5 border-emerald-400/30'}`}>
                    <span className="text-[10px] font-black uppercase text-slate-500 block mb-1">Impact & Outcome</span>
                    <p className="text-xs text-slate-300 italic">{item.outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education & Languages Section */}
        <section className="px-6 py-32 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <span className={`font-bold tracking-widest text-xs uppercase block mb-2 ${theme === 'colorful' ? 'text-cyan-400' : 'text-emerald-500'}`}>Academic</span>
                <h2 className="text-4xl font-black text-white">Education</h2>
              </div>
              {EDUCATION.map((edu, i) => (
                <div key={i} className={`p-8 rounded-3xl border ${theme === 'colorful' ? 'bg-white/5 border-white/20 hover:border-white/40' : 'bg-white/[0.02] border-white/5 hover:border-blue-500/20'} transition-all group`}>
                  <div className={`text-xs mono mb-2 font-bold ${theme === 'colorful' ? 'text-pink-400' : 'text-blue-400'}`}>{edu.year}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                  <div className="text-slate-300 font-medium mb-2">{edu.institution}</div>
                  <p className="text-slate-500 text-sm">{edu.location}</p>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <div>
                <span className={`font-bold tracking-widest text-xs uppercase block mb-2 ${theme === 'colorful' ? 'text-pink-400' : 'text-blue-500'}`}>Capabilities</span>
                <h2 className="text-4xl font-black text-white">Communication</h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {LANGUAGES.map((lang, i) => (
                  <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className="text-white font-bold">{lang}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <h4 className="text-slate-500 uppercase tracking-widest text-xs font-bold">Hobbies & Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {HOBBIES.map((h, i) => (
                    <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-slate-300 text-sm">{h}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="px-6 py-32 max-w-7xl mx-auto scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            <div className="lg:col-span-2 space-y-12">
              <div>
                <span className={`font-bold tracking-widest text-xs uppercase mb-2 block ${theme === 'colorful' ? 'text-pink-400' : 'text-blue-500'}`}>Career</span>
                <h2 className="text-4xl font-black text-white">Work Experience</h2>
              </div>
              <div className="space-y-12 relative border-l border-white/10 pl-8">
                {EXPERIENCES.map((exp, i) => (
                  <div key={i} className="relative">
                    <div className={`absolute -left-[41px] top-1 w-4 h-4 rounded-full border-2 ${theme === 'colorful' ? 'bg-pink-500 border-white' : 'bg-blue-600 border-[#020617]'}`}></div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <span className="mono text-xs text-slate-500">{exp.period}</span>
                    </div>
                    <div className="text-blue-400 font-medium mb-4">{exp.company}</div>
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((d, j) => (
                        <li key={j} className="text-slate-400 text-sm leading-relaxed">
                          • {d}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/5 text-[10px] text-slate-300 rounded-lg border border-white/10">{t}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-12">
              <h3 className="text-2xl font-bold text-white">Full Stack Arsenal</h3>
              <div className="space-y-6">
                {Object.entries(SKILLS).map(([cat, list], i) => (
                  <div key={i} className={`p-6 rounded-2xl border ${theme === 'colorful' ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/5'}`}>
                    <h4 className="text-xs font-black uppercase tracking-tighter mb-4 text-slate-500">{cat}</h4>
                    <div className="flex flex-wrap gap-2">
                      {list.map((s, skillIndex) => (
                        <span 
                          key={s} 
                          className="skill-animate text-xs text-slate-300 bg-black/30 px-2 py-1 rounded border border-white/5"
                          style={{ animationDelay: `${(i * 5 + skillIndex) * 0.05}s` }}
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-20 border-t border-white/5 text-center">
          <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
            <div className="flex flex-col gap-4">
               <div className="text-white font-bold">{SOCIALS.address}</div>
               <div className="text-blue-400 mono">{SOCIALS.phone}</div>
            </div>
            <div className="flex space-x-6">
              <a href={SOCIALS.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">GitHub</a>
              <a href={SOCIALS.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">LinkedIn</a>
              <a href={`mailto:${SOCIALS.email}`} className="text-slate-400 hover:text-white transition-colors">Email</a>
            </div>
            <div className="text-slate-500 text-xs mono">
              &copy; {new Date().getFullYear()} {NAME}. Derived from official CV records.
            </div>
          </div>
        </footer>
        
        {/* AI Chat Bot Interface */}
        <AIChat />
      </div>

      {/* Print View Container (Absolute sibling to the website content) */}
      <PrintableCV />
    </>
  );
};

export default App;
