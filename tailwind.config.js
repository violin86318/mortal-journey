/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                paper: {
                    DEFAULT: '#f7f3eb',
                    dark: '#1a1a1e'
                },
                ink: {
                    DEFAULT: '#2c2c2c',
                    dark: '#e8e0d0',
                    muted: '#5a5a5a',
                },
                primary: '#c5973e', // 丹药金
                spirit: '#4a8c7f', // 灵石青
                tribulation: '#6b4c9a', // 雷劫紫
                blood: '#8b2500', // 血煞红
                sword: '#a8c8e0', // 剑光蓝白
                wood: '#8b7355', // 枯木褐
            },
            fontFamily: {
                sans: ['"Noto Serif SC"', '"LXGW WenKai"', 'serif'],
                title: ['"Ma Shan Zheng"', '"ZCOOL QingKe HuangYou"', 'serif'],
                english: ['"Crimson Text"', '"Lora"', 'serif'],
            },
            backgroundImage: {
                // Will be replaced with subtle CSS gradients and patterns
                'gradient-ink': 'linear-gradient(to bottom, #f7f3eb, #e8e4dc)',
                'gradient-ink-dark': 'linear-gradient(to bottom, #1a1a1e, #111111)',
            }
        },
    },
    plugins: [],
}
