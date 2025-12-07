import React from 'react';
import { Github, FolderGit2 } from 'lucide-react';

const ProjectCard = ({ title, description, tags, repoUrl }: { title: string, description: string, tags: string[], repoUrl: string }) => (
  <div className="group relative rounded-2xl overflow-hidden bg-secondary border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1">
    <div className="h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center group-hover:from-gray-800 group-hover:to-slate-800 transition-colors">
      <FolderGit2 className="w-16 h-16 text-gray-600 group-hover:text-accent transition-colors duration-300" />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded bg-primary text-gray-300 border border-white/5">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white hover:text-accent transition-colors">
          <Github className="w-4 h-4" />
          Code
        </a>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projects = [
    {
      title: "jarvis-learning-server",
      description: "Backend server for a personal AI assistant with learning capabilities.",
      tags: ["Python", "Flask", "AI"],
      repoUrl: "https://github.com/prudhviraj0310/jarvis-learning-server"
    },
    {
      title: "attendance-optimizer",
      description: "Smart attendance management system for optimizing student records.",
      tags: ["Python", "Automation", "Data"],
      repoUrl: "https://github.com/prudhviraj0310/attendance-optimizer"
    },
    {
      title: "Thecos (Web Services)",
      description: "Developing the official web services and digital presence for Thecos as an Intern.",
      tags: ["JavaScript", "Web Architecture", "Internship"],
      repoUrl: "https://github.com/prudhviraj0310/ttcecs-prototype"
    },
    {
      title: "luxury-real-estate-website",
      description: "High-end real estate platform featuring property listings, virtual tours, and premium design aesthetics.",
      tags: ["React", "Tailwind CSS", "Real Estate"],
      repoUrl: "https://github.com/prudhviraj0310/luxury-real-estate-website"
    },
    {
      title: "meo-digital-media",
      description: "Digital media agency portfolio showcasing creative services and client success stories.",
      tags: ["Web Design", "Portfolio", "Agency"],
      repoUrl: "https://github.com/prudhviraj0310/meo-digital-media"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 max-w-xl">
              A selection of my recent work in web development and digital solutions.
            </p>
          </div>
          <a href="https://github.com/prudhviraj0310" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-accent hover:text-accent-glow transition-colors">
            View GitHub Profile <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a href="https://github.com/prudhviraj0310" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-accent hover:text-accent-glow transition-colors">
            View GitHub Profile <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

import { ArrowRight } from 'lucide-react';

export default Projects;
