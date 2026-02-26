import React from 'react';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';

const Hero = () => {
    return (
        <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

            {/* Background Mountain Silhouettes SVG Layers */}
            <div className="absolute inset-x-0 bottom-0 pointer-events-none z-0">
                {/* Farthest Mountain */}
                <motion.div
                    className="absolute bottom-0 w-full opacity-30 dark:opacity-20"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.3 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                >
                    <svg viewBox="0 0 1200 600" preserveAspectRatio="none" className="w-full h-auto min-h-[40vh] fill-ink-muted dark:fill-ink-dark">
                        <path d="M0 600 V300 Q150 250 300 350 T600 200 T900 350 T1200 250 V600 Z" />
                    </svg>
                </motion.div>

                {/* Middle Mountain */}
                <motion.div
                    className="absolute bottom-0 w-full opacity-60 dark:opacity-40"
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 0.6 }}
                    transition={{ duration: 1.8, ease: "easeOut", delay: 0.2 }}
                >
                    <svg viewBox="0 0 1200 600" preserveAspectRatio="none" className="w-full h-auto min-h-[30vh] fill-ink dark:fill-ink-dark/70">
                        <path d="M0 600 V400 Q200 300 400 350 T800 250 T1200 350 V600 Z" />
                    </svg>
                </motion.div>

                {/* Overlay mist at the bottom */}
                <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-paper dark:from-paper-dark to-transparent" />
            </div>

            {/* Subtle cloud animations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
                <motion.div
                    className="absolute top-1/3 -left-1/4 w-1/2 h-24 bg-white/20 dark:bg-black/20 blur-3xl rounded-full mix-blend-screen"
                    animate={{ x: [0, 1000, 0] }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute top-1/4 -right-1/4 w-3/4 h-32 bg-white/10 dark:bg-black/10 blur-3xl rounded-full mix-blend-screen"
                    animate={{ x: [0, -1200, 0] }}
                    transition={{ duration: 80, repeat: Infinity, ease: "linear", delay: 10 }}
                />
            </div>

            <div className="relative z-10 flex flex-col items-center mt-12 px-4 text-center">
                {/* Title Reveal */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                >
                    <h1 className="text-6xl sm:text-7xl md:text-9xl font-title tracking-[0.2em] mb-4 text-ink dark:text-ink-dark drop-shadow-lg">
                        凡人修仙传
                    </h1>
                    <div className="w-24 h-1 bg-primary mx-auto my-6 opacity-80" />
                </motion.div>

                <motion.p
                    className="text-xl md:text-2xl font-sans tracking-widest text-ink/80 dark:text-ink-dark/80 mb-10 max-w-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: 1.5 }}
                >
                    一介凡人，踏上修仙之路，<br className="sm:hidden" />历经万难，终成大道
                </motion.p>

                {/* Quote Block */}
                <motion.div
                    className="bg-paper/80 dark:bg-paper-dark/80 backdrop-blur-sm px-8 py-6 rounded-lg border border-ink/10 dark:border-ink-dark/10 shadow-lg max-w-3xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    <div className="text-4xl text-primary font-serif absolute -top-4 -left-2 opacity-50">"</div>
                    <p className="text-lg md:text-xl italic font-sans text-ink-muted dark:text-ink-dark/70 relative z-10 px-4">
                        修仙一途，本就是逆天而行。一个资质平庸的凡人，能走到哪一步，全凭自己。
                    </p>
                    <div className="text-4xl text-primary font-serif absolute -bottom-8 -right-2 opacity-50">"</div>
                </motion.div>

                <motion.p
                    className="mt-6 text-sm md:text-base font-mono tracking-widest text-ink/60 dark:text-ink-dark/50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                >
                    忘语 著 · 凡人流开山之作 · 网络仙侠巅峰
                </motion.p>

                {/* Read more CTA button */}
                <motion.button
                    onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                    className="mt-16 group flex flex-col items-center gap-2 text-ink/70 hover:text-primary dark:text-ink-dark/70 dark:hover:text-primary transition-colors cursor-pointer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 4 }}
                >
                    <span className="font-title tracking-widest text-lg">展开古卷</span>
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ScrollText className="w-8 h-8 group-hover:drop-shadow-[0_0_8px_rgba(197,151,62,0.8)] transition-all" />
                    </motion.div>
                </motion.button>
            </div>

        </section>
    );
};

export default Hero;
