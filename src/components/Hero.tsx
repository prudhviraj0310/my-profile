import { ArrowRight, Code, Video } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-screen flex items-center justify-center bg-primary text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">


                <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight animate-slide-up">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Prudhvi Raj
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto animate-slide-up delay-100">
                    <span className="text-white font-semibold">Jr. B.Tech Student</span> & <span className="text-accent font-semibold">Web Developer Intern @ Thecos</span>
                </p>
                <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto animate-slide-up delay-150">
                    Bridging the gap between <span className="text-accent font-semibold">Code</span> and <span className="text-purple-400 font-semibold">Content</span>.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-slide-up delay-200">
                    <a href="#projects" className="group px-8 py-3 bg-accent hover:bg-accent-glow text-white rounded-full font-semibold transition-all flex items-center gap-2">
                        <Code className="w-5 h-5" />
                        View Projects
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#video-editing" className="group px-8 py-3 bg-secondary hover:bg-white/10 text-white border border-white/10 rounded-full font-semibold transition-all flex items-center gap-2">
                        <Video className="w-5 h-5" />
                        Video Portfolio
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
