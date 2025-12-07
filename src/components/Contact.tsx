import React from 'react';
import { Mail, Github, Twitter, Send, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-20 bg-primary relative">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto bg-secondary rounded-3xl p-8 md:p-12 border border-white/5">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Create Something Amazing</h2>
                        <p className="text-gray-400">
                            Whether you need a full-stack web application or a cinematic video edit, I'm ready to bring your vision to life.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-white mb-1">Email Me</h3>
                                    <a href="mailto:prudhvinaik2005@gmail.com" className="text-gray-400 hover:text-accent transition-colors">
                                        prudhvinaik2005@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <a href="https://github.com/prudhviraj0310" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="https://www.instagram.com/heyy.prudhvii/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-accent hover:text-white transition-all">
                                    <Twitter className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full px-4 py-3 rounded-lg bg-primary border border-white/10 text-white focus:border-accent focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full px-4 py-3 rounded-lg bg-primary border border-white/10 text-white focus:border-accent focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    rows={4}
                                    placeholder="Project Details"
                                    className="w-full px-4 py-3 rounded-lg bg-primary border border-white/10 text-white focus:border-accent focus:outline-none transition-colors"
                                ></textarea>
                            </div>
                            <button className="w-full py-3 bg-accent hover:bg-accent-glow text-white rounded-lg font-semibold transition-all flex items-center justify-center gap-2">
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
