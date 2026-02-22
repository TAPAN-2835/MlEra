'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState, useRef } from 'react';

export default function BrandVideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);
    const [isSeeking, setIsSeeking] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
            setHasStarted(true);
        }
    };

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight leading-tight">
                        Built to Rethink How Machine Learning{' '}
                        <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">is Learned</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        MLera isn&apos;t another course platform. It&apos;s a structured operating system designed from the ground up to make ML education clear, guided, and measurable.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.97 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50 transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-primary/10 max-w-[900px] mx-auto">
                        <div className="relative aspect-video">
                            <video
                                ref={videoRef}
                                className="w-full h-full bg-black"
                                controls={hasStarted || isPlaying}
                                preload="metadata"
                                playsInline
                                onPlay={() => {
                                    setIsPlaying(true);
                                    setHasStarted(true);
                                }}
                                onPause={() => setIsPlaying(false)}
                                onSeeking={() => setIsSeeking(true)}
                                onSeeked={() => setIsSeeking(false)}
                                onEnded={() => {
                                    setIsPlaying(false);
                                    setHasStarted(false);
                                }}
                            >
                                <source src="/branding-video.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            {/* Creative Play overlay for branding video */}
                            <AnimatePresence>
                                {!isPlaying && !hasStarted && !isSeeking && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onClick={handlePlay}
                                        className="absolute inset-0 z-10 flex flex-col items-center justify-center cursor-pointer group/overlay"
                                    >
                                        {/* Glass background */}
                                        <div className="absolute inset-0 bg-black/50 backdrop-blur-[3px] transition-all duration-500 group-hover/overlay:bg-black/35 group-hover/overlay:backdrop-blur-[1px]" />

                                        {/* Play Button and Text Layout */}
                                        <div className="relative z-20 flex flex-col items-center">
                                            <div className="relative mb-6">
                                                {/* Pulse rings */}
                                                <motion.div
                                                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                                                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                                                    className="absolute inset-0 rounded-full border-2 border-primary/40 shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                                                />

                                                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-xl border border-white/30 flex items-center justify-center transition-all duration-300 group-hover/overlay:scale-110 group-hover/overlay:rotate-12 group-hover/overlay:border-white/50 shadow-2xl">
                                                    <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1.5" />
                                                </div>
                                            </div>

                                            <div className="text-center px-4">
                                                <motion.h4
                                                    initial={{ y: 10, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    className="text-white text-xl sm:text-2xl font-black italic tracking-tighter uppercase drop-shadow-lg mb-1"
                                                >
                                                    Our Visionary Story
                                                </motion.h4>
                                                <p className="text-white/80 font-medium text-xs sm:text-sm tracking-widest uppercase group-hover/overlay:text-white transition-colors">
                                                    A New Era of Intelligence
                                                </p>
                                            </div>
                                        </div>

                                        {/* Decorative branding elements */}
                                        <div className="absolute top-8 left-8 flex items-center gap-3">
                                            <div className="w-8 h-[1px] bg-white/40" />
                                            <span className="text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase">Documentary</span>
                                        </div>
                                        <div className="absolute bottom-8 right-8 flex items-center gap-3">
                                            <span className="text-[10px] text-white/40 font-bold tracking-[0.3em] uppercase">MLera Vision 2025</span>
                                            <div className="w-8 h-[1px] bg-white/40" />
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center text-sm text-muted-foreground mt-8 max-w-lg mx-auto"
                >
                    Backed by IIIT Dharwad Research Park — building the future of structured ML education.
                </motion.p>
            </div>
        </section>
    );
}
