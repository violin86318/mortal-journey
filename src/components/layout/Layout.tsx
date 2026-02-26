import React from 'react';
import Navbar from './Navbar';
import { useTheme } from '../../context/ThemeContext';
import { cn } from './Navbar'; // Reusing cn utility for now

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="relative min-h-screen overflow-hidden selection:bg-primary/30">
            {/* Subtle paper texture overlay */}
            <div
                className="fixed inset-0 pointer-events-none opacity-50 mix-blend-multiply dark:mix-blend-overlay z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Subtle edge ink splashes - using CSS radial gradients to simulate ink drops */}
            <div className="fixed top-0 left-0 w-64 h-64 bg-ink/5 dark:bg-ink-dark/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />
            <div className="fixed bottom-0 right-0 w-[40rem] h-[40rem] bg-wood/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none z-0" />

            <Navbar />

            <main className="relative z-10 flex flex-col">
                {children}
            </main>

            {/* Progress Bar Top */}
            <div className="fixed top-0 left-0 h-0.5 bg-primary z-50 transition-all duration-300 ease-out" id="scroll-progress-bar" style={{ width: '0%' }} />
        </div>
    );
};

export default Layout;
