import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ScrollText } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const NAV_LINKS = [
    { label: '首页', href: '#hero' },
    { label: '作品总览', href: '#overview' },
    { label: '修炼体系', href: '#cultivation' },
    { label: '人物图鉴', href: '#characters' },
    { label: '人物关系', href: '#relations' },
    { label: '法宝灵物', href: '#artifacts' },
    { label: '势力门派', href: '#factions' },
    { label: '世界地理', href: '#geography' },
    { label: '剧情编年', href: '#timeline' },
    { label: '名场面', href: '#epic-moments' },
    { label: '凡人哲学', href: '#philosophy' },
    { label: '影视动画', href: '#media' },
];

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = NAV_LINKS.map(link => link.href.substring(1));
            let current = '';
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && window.scrollY >= element.offsetTop - 100) {
                    current = section;
                }
            }
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToHash = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
        e.preventDefault();
        const element = document.getElementById(hash.substring(1));
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80, // Account for fixed header
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                isScrolled
                    ? 'bg-paper/80 dark:bg-paper-dark/80 backdrop-blur-md border-b border-ink-fade shadow-sm py-3'
                    : 'bg-transparent py-5'
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <ScrollText className="w-8 h-8 text-primary" strokeWidth={1.5} />
                        <h1 className="text-2xl font-title tracking-widest text-ink dark:text-ink-dark font-medium hidden sm:block">
                            凡人修仙传<span className="text-primary text-sm tracking-normal ml-2">大道长生</span>
                        </h1>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex space-x-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => scrollToHash(e, link.href)}
                                className={cn(
                                    'px-3 py-2 rounded-md text-sm transition-colors duration-300 font-sans',
                                    activeSection === link.href.substring(1)
                                        ? 'text-primary font-bold bg-primary/10'
                                        : 'text-ink/80 dark:text-ink-dark/80 hover:text-ink dark:hover:text-ink-dark hover:bg-ink/5 dark:hover:bg-ink-dark/5'
                                )}
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-ink/10 dark:hover:bg-ink-dark/10 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === 'light' ? (
                                <Sun className="w-5 h-5 text-primary" />
                            ) : (
                                <Moon className="w-5 h-5 text-blue-300" />
                            )}
                        </button>

                        {/* Mobile menu button */}
                        <button
                            className="xl:hidden p-2 text-ink dark:text-ink-dark"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer (Bamboo Scroll visual metaphor) */}
            <div
                className={cn(
                    'fixed inset-0 z-40 bg-paper/95 dark:bg-paper-dark/95 backdrop-blur-lg transform transition-transform duration-500 xl:hidden pt-24 border-l-4 border-wood',
                    isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <nav className="flex flex-col space-y-4 px-6 max-h-[80vh] overflow-y-auto">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => scrollToHash(e, link.href)}
                            className={cn(
                                'text-xl py-3 border-b border-ink-fade font-title tracking-wide transition-colors',
                                activeSection === link.href.substring(1)
                                    ? 'text-primary border-primary/50'
                                    : 'text-ink dark:text-ink-dark'
                            )}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
