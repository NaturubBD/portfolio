
import React, { useState } from 'react';
import { Project } from '../types';

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const [isForcedPlay, setIsForcedPlay] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const isActive = isHovered || isForcedPlay;

  // Helper to format video URL for autoplay and embedding
  const getEmbedUrl = (url: string) => {
    if (!url) return '';
    let processedUrl = url;

    // Handle Google Drive links specifically
    if (url.includes('drive.google.com')) {
      const fileIdMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
      if (fileIdMatch && fileIdMatch[1]) {
        const fileId = fileIdMatch[1];
        // Preview mode is required for embedding.
        // Autoplay usually requires mute=1 to be respected by browsers.
        return `https://drive.google.com/file/d/${fileId}/preview?autoplay=1&mute=1`;
      }
      processedUrl = url.replace(/\/view.*$/, '/preview').replace(/\/edit.*$/, '/preview');
      const separator = processedUrl.includes('?') ? '&' : '?';
      return `${processedUrl}${separator}autoplay=1&mute=1`;
    }

    // Handle Canva links
    if (url.includes('canva.com')) {
      if (!processedUrl.includes('?embed') && !processedUrl.includes('&embed')) {
        const match = processedUrl.match(/design\/([A-Za-z0-9_-]+)/);
        if (match) {
          processedUrl = `https://www.canva.com/design/${match[1]}/watch?embed`;
        }
      }
      const separator = processedUrl.includes('?') ? '&' : '?';
      return `${processedUrl}${separator}autoplay=1&muted=1`;
    }

    const separator = processedUrl.includes('?') ? '&' : '?';
    return `${processedUrl}${separator}autoplay=1&muted=1`;
  };

  const videoSrc = getEmbedUrl(project.videoUrl || '');

  return (
    <div 
      className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/5 transition-all hover:border-blue-500/30"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsForcedPlay(false);
      }}
    >
      <div className="aspect-video overflow-hidden relative bg-[#010409]">
        {project.videoUrl && isActive ? (
          <div className="absolute inset-0 w-full h-full">
            <iframe 
              src={videoSrc} 
              className="absolute inset-0 w-full h-full border-0 scale-[1.01]"
              allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
              title={project.title}
            />
          </div>
        ) : (
          <>
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
            />
            
            {/* Play Button Overlay */}
            {project.videoUrl && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsForcedPlay(true);
                }}
                className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-300 z-20 cursor-pointer focus:outline-none"
                aria-label="Play video"
              >
                <div className="w-16 h-16 bg-blue-600/90 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 shadow-[0_0_40px_rgba(37,99,235,0.5)] transform transition-transform group-hover:scale-110">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}
          </>
        )}
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-blue-400 bg-blue-400/10 rounded-full mb-4 uppercase">
          {project.category}
        </span>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 mb-6 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="text-[11px] mono text-slate-500 bg-black/40 px-2 py-1 rounded border border-white/5">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
