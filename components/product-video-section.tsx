'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState, useRef } from 'react';

export default function ProductVideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left — Copy */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/15 mb-6">
                            <Play className="w-3.5 h-3.5 text-primary" />
                            <span className="text-xs font-medium text-primary">Product Demo</span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl font-bold mb-6 tracking-tight leading-tight">
                            See How MLera{' '}
                            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Works</span>
                        </h2>

                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            Watch how MLera transforms scattered ML content into a structured learning experience. Guided roadmaps, inline terminology, and real progress tracking — all in one place.
                        </p>

                        <ul className="space-y-3">
                            {[
                                'Step-by-step structured roadmaps',
                                'Built-in lexicon for instant clarity',
                                'Visual progress tracking dashboard',
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right — Video */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="relative group"
                    >
                        <div className="rounded-2xl overflow-hidden shadow-xl border border-border/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10">
                            {/* Browser chrome */}
                            <div className="bg-card border-b border-border px-4 py-3 flex items-center gap-2">
                                <div className="flex gap-1.5">
                                    <div className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                                </div>
                                <div className="flex-1 ml-3">
                                    <div className="bg-muted rounded-md px-3 py-1 text-xs text-muted-foreground max-w-xs">
                                        app.mlera.in/demo
                                    </div>
                                </div>
                            </div>

                            {/* Video with overlay */}
                            <div className="relative aspect-video">
                                <video
                                    ref={videoRef}
                                    className="w-full h-full bg-black"
                                    controls={isPlaying}
                                    preload="metadata"
                                    playsInline
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                    onEnded={() => setIsPlaying(false)}
                                >
                                    <source src="/product-demo.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>

                                {/* Creative Play overlay */}
                                <AnimatePresence>
                                    {!isPlaying && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            onClick={handlePlay}
                                            className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer group/overlay"
                                        >
                                            {/* Glass background with subtle blur */}
                                            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-all duration-500 group-hover/overlay:bg-black/30 group-hover/overlay:backdrop-blur-none" />

                                            {/* Animated play button */}
                                            <div className="relative z-20">
                                                {/* Pulse rings */}
                                                <motion.div
                                                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
                                                    transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                                    className="absolute inset-0 rounded-full border-2 border-white/50"
                                                />
                                                <motion.div
                                                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                                                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
                                                    className="absolute inset-0 rounded-full border-2 border-white/30"
                                                />

                                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/10 backdrop-blur-md border border-white/40 flex items-center justify-center transition-all duration-300 group-hover/overlay:bg-white/20 group-hover/overlay:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                                                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1.5 transition-transform duration-300 group-hover/overlay:scale-110" />
                                                </div>
                                            </div>

                                            {/* Creative labels */}
                                            <div className="relative z-20 mt-8 text-center space-y-1">
                                                <motion.div
                                                    initial={{ y: 5, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                                                >
                                                    <span className="text-white font-bold text-sm sm:text-base tracking-widest uppercase">Watch Demo</span>
                                                </motion.div>
                                                <p className="text-white/70 text-xs font-medium tracking-tight">Experience Structured Learning</p>
                                            </div>

                                            {/* Corner accents */}
                                            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
                                            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
