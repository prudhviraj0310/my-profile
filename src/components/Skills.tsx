import React from 'react';
import { Code, Database, Palette, Video } from 'lucide-react';

const SkillCard = ({ icon: Icon, title, skills }: { icon: any, title: string, skills: string[] }) => (
    <div className="p-6 rounded-2xl bg-secondary border border-white/5 hover:border-accent/50 transition-all duration-300 hover:-translate-y-1 group">
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Icon className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
        <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-full bg-white/5 text-sm text-gray-400 border border-white/5 hover:border-accent/30 hover:text-white transition-colors">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

const Skills: React.FC = () => {
    const skillSets = [
        {
            icon: Code,
            title: "Frontend Development",
            skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "HTML5/CSS3"]
        },
        {
            icon: Database,
            title: "Backend Development",
            skills: ["Node.js", "Python", "REST APIs", "Firebase", "MongoDB"]
        },
        {
            icon: Video,
            title: "Video Editing",
            skills: ["Premiere Pro", "After Effects", "DaVinci Resolve", "Color Grading", "Sound Design"]
        },
        {
            icon: Palette,
            title: "Creative Design",
            skills: ["UI/UX Design", "Figma", "Photoshop", "Motion Graphics", "Storyboarding"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-primary relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Arsenal</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive toolkit bridging the gap between complex code and compelling visual storytelling.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillSets.map((set, index) => (
                        <SkillCard key={index} {...set} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
