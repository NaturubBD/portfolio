
import React from 'react';
import { NAME, SOCIALS, EXPERIENCES, SKILLS, EDUCATION, RESEARCH, ABOUT_ME, PROFILE_IMAGE } from '../constants';

const PrintableCV: React.FC = () => {
  return (
    <div id="printable-cv" className="hidden print:block bg-white text-slate-900 p-0 min-h-screen font-sans leading-normal">
      {/* Europass-inspired Layout */}
      <div className="flex min-h-screen">
        
        {/* Sidebar (Left Column) */}
        <div className="w-[32%] bg-[#f4f7f9] p-8 border-r border-slate-200 flex flex-col h-full" style={{ backgroundColor: '#f4f7f9', minHeight: '100vh' }}>
          {/* Profile Image */}
          <div className="mb-10 flex justify-center">
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md bg-slate-300">
              <img 
                src={PROFILE_IMAGE} 
                alt={NAME} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contact Information */}
          <section className="mb-10">
            <h2 className="text-[12px] font-black uppercase tracking-widest text-blue-700 mb-5 border-b-2 border-blue-100 pb-1">Contact Details</h2>
            <div className="space-y-4 text-[11px] text-slate-700">
              <div className="flex flex-col gap-1">
                <span className="font-black text-[9px] uppercase text-slate-400">Email</span>
                <span className="break-all font-medium">{SOCIALS.email}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-black text-[9px] uppercase text-slate-400">Phone</span>
                <span className="font-medium">{SOCIALS.phone}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-black text-[9px] uppercase text-slate-400">LinkedIn</span>
                <span className="break-all font-medium text-blue-800">linkedin.com/in/plabon5150</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-black text-[9px] uppercase text-slate-400">Location</span>
                <span className="font-medium">{SOCIALS.address}</span>
              </div>
            </div>
          </section>

          {/* Skills Matrix */}
          <section className="mb-10">
            <h2 className="text-[12px] font-black uppercase tracking-widest text-blue-700 mb-5 border-b-2 border-blue-100 pb-1">Core Skills</h2>
            <div className="space-y-5">
              {Object.entries(SKILLS).map(([category, list]) => (
                <div key={category}>
                  <h3 className="text-[9px] font-black uppercase text-slate-500 mb-2">{category.replace('_', ' & ')}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {list.map(skill => (
                      <span key={skill} className="text-[10px] bg-white px-2 py-0.5 rounded shadow-sm border border-slate-200 text-slate-800 font-semibold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Languages */}
          <section className="mt-auto pt-6">
            <h2 className="text-[12px] font-black uppercase tracking-widest text-blue-700 mb-4 border-b-2 border-blue-100 pb-1">Languages</h2>
            <div className="space-y-2 text-[11px]">
              <div className="flex justify-between font-semibold">
                <span>Bengali</span>
                <span className="text-blue-600">Native</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>English</span>
                <span className="text-blue-600">Professional</span>
              </div>
            </div>
          </section>
        </div>

        {/* Main Content (Right Column) */}
        <div className="w-[68%] p-12 bg-white flex flex-col">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-1">{NAME.toUpperCase()}</h1>
            <p className="text-blue-600 font-bold text-xl tracking-wide uppercase">Senior Software Engineer</p>
          </div>

          {/* Summary */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-800 mb-5">
              <span className="w-8 h-[3px] bg-blue-600"></span>
              Professional Profile
            </h2>
            <p className="text-[12px] leading-relaxed text-slate-600 font-medium text-justify">
              {ABOUT_ME}
            </p>
          </section>

          {/* Work Experience */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-800 mb-6">
              <span className="w-8 h-[3px] bg-blue-600"></span>
              Work Experience
            </h2>
            <div className="space-y-8">
              {EXPERIENCES.map((exp, i) => (
                <div key={i} className="relative">
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="font-extrabold text-slate-900 text-[13px]">{exp.role}</h3>
                    <span className="text-[10px] font-black text-blue-700 bg-blue-50 px-2 py-1 rounded tracking-tight">{exp.period}</span>
                  </div>
                  <p className="text-[11px] text-blue-600 font-bold mb-3">{exp.company}</p>
                  <ul className="space-y-2">
                    {exp.description.map((desc, j) => (
                      <li key={j} className="text-[11px] text-slate-600 flex gap-2 leading-snug">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-800 mb-5">
              <span className="w-8 h-[3px] bg-blue-600"></span>
              Education
            </h2>
            <div className="space-y-5">
              {EDUCATION.map((edu, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline mb-1">
                    <h3 className="text-[12px] font-extrabold text-slate-900">{edu.degree}</h3>
                    <span className="text-[10px] text-slate-400 font-black">{edu.year}</span>
                  </div>
                  <p className="text-[11px] text-slate-700 font-medium">{edu.institution}</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{edu.location}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Research & Publications */}
          <section className="mt-auto">
            <h2 className="flex items-center gap-3 text-sm font-black uppercase tracking-widest text-slate-800 mb-5">
              <span className="w-8 h-[3px] bg-blue-600"></span>
              Key Research Highlights
            </h2>
            <div className="space-y-4">
              {RESEARCH.map((res, i) => (
                <div key={i} className="p-4 bg-[#f8fafc] rounded-lg border-l-[6px] border-blue-600 shadow-sm">
                  <h3 className="text-[11px] font-extrabold text-slate-900 mb-1">{res.title}</h3>
                  <p className="text-[10px] text-slate-600 leading-normal italic">{res.description}</p>
                  <div className="mt-2 text-[10px] font-black uppercase text-blue-700 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    Outcome: {res.outcome}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrintableCV;
