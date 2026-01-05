
import React from 'react';
import { SOCIALS } from '../constants';

interface NavbarProps {
  onThemeToggle: () => void;
  currentTheme: 'dark' | 'colorful';
}

const Navbar: React.FC<NavbarProps> = ({ onThemeToggle, currentTheme }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center glass m-4 rounded-2xl">
      <div className="flex items-center space-x-3">
        <div className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-white shadow-lg transition-colors ${currentTheme === 'colorful' ? 'bg-gradient-to-br from-pink-500 to-purple-600' : 'bg-blue-600'}`}>
          PD
        </div>
        <span className="font-extrabold tracking-tighter text-white hidden sm:block text-lg">PLABON DEY</span>
      </div>
      
      <div className="flex items-center space-x-6 text-sm font-semibold text-slate-400">
        <a href="#projects" className="hover:text-white transition-colors">Top 10 Projects</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        
        <div className="h-4 w-px bg-white/10 hidden md:block"></div>
        
        <button 
          onClick={onThemeToggle}
          className={`p-2 rounded-xl transition-all border ${currentTheme === 'colorful' ? 'bg-white/20 border-white/40 text-yellow-300' : 'bg-white/5 border-white/10 text-slate-400'}`}
          title="Toggle Theme"
        >
          {currentTheme === 'dark' ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
          )}
        </button>

        <a href={SOCIALS.github} target="_blank" className="hidden sm:block hover:text-white transition-colors">
          GitHub
        </a>

        <a href={`mailto:${SOCIALS.email}`} className={`px-5 py-2 rounded-xl font-bold transition-all border ${currentTheme === 'colorful' ? 'bg-white text-indigo-900 border-white' : 'bg-white/10 text-white border-white/20 hover:bg-white/20'}`}>
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
