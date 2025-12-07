import React from 'react';
import { Play } from 'lucide-react';

const VideoCard = ({ title, category }: { title: string, category: string }) => (
    <div className="group relative aspect-video rounded-2xl overflow-hidden bg-secondary border border-white/5 hover:border-accent/50 transition-all cursor-pointer">
        {/* Placeholder Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
            <span className="text-accent text-sm font-medium mb-2">{category}</span>
            <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{title}</h3>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                <Play className="w-6 h-6 text-white fill-current ml-1" />
            </div>
        </div>
    </div>
);

const VideoShowcase: React.FC = () => {
    return (
        <section id="video-editing" className="py-20 bg-secondary/30">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Visual Storytelling</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Crafting narratives through precise editing, color grading, and motion graphics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <VideoCard title="Tech Product Review" category="Commercial" />
                    <VideoCard title="Cinematic Travel Vlog" category="Lifestyle" />
                    <VideoCard title="Corporate Brand Story" category="Documentary" />
                    <VideoCard title="Music Video Production" category="Creative" />
                </div>
            </div>
        </section>
    );
};

export default VideoShowcase;
