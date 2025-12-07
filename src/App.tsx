import { useState } from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import VideoShowcase from './components/VideoShowcase';
import Contact from './components/Contact';
import { HighlighterDemo } from './components/HighlighterDemo';
import { Menu, X } from 'lucide-react';

function App() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="min-h-screen bg-primary text-white font-sans selection:bg-accent selection:text-white">
            {/* Navigation */}
            <nav className="fixed w-full z-50 bg-primary/80 backdrop-blur-md border-b border-white/5">
                <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                    <a href="#" className="text-2xl font-bold tracking-tighter">
                        PR<span className="text-accent">.</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#skills" className="text-sm text-gray-400 hover:text-white transition-colors">Skills</a>
                        <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors">Projects</a>
                        <a href="#video-editing" className="text-sm text-gray-400 hover:text-white transition-colors">Video Editing</a>
                        <a href="#contact" className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-full text-sm transition-colors border border-white/10">
                            Contact Me
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-primary border-b border-white/5 py-4">
                        <div className="flex flex-col items-center gap-4">
                            <a href="#skills" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Skills</a>
                            <a href="#projects" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Projects</a>
                            <a href="#video-editing" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Video Editing</a>
                            <a href="#contact" className="text-gray-400 hover:text-white" onClick={() => setIsMenuOpen(false)}>Contact</a>
                        </div>
                    </div>
                )}
            </nav>

            <main>
                <Hero />
                <Skills />
                <HighlighterDemo />
                <Projects />
                <VideoShowcase />
                <Contact />
            </main>

            <footer className="bg-secondary py-8 border-t border-white/5">
                <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Prudhvi Raj. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
