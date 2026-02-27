import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Film, MonitorPlay, ChevronUp, Bot, Sparkles } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const Footer = () => {
    const [clickCount, setClickCount] = useState(0);
    const { theme } = useTheme();

    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handTitleClick = () => {
        setClickCount(prev => prev + 1);
        if (clickCount >= 4) {
            // 渡劫小彩蛋：触发屏幕震动和紫色闪电
            document.body.style.animation = 'shake 0.5s ease-in-out';

            const flash = document.createElement('div');
            flash.className = 'fixed inset-0 bg-tribulation z-[9999] pointer-events-none opacity-0 mix-blend-screen';
            flash.style.animation = 'lightning 0.3s ease-out';
            document.body.appendChild(flash);

            setTimeout(() => {
                document.body.style.animation = '';
                flash.remove();
                setClickCount(0);
            }, 500);

            console.log('⚡ 天劫降临，你已扛下一道紫霄神雷！');
        }
    };

    // 小绿瓶彩蛋
    const [isBottleClicked, setBottleClicked] = useState(false);
    const handleBottleClick = () => {
        setBottleClicked(true);
        console.log('🌿 恭喜你发现了神秘小瓶！灵药催熟中……');
        setTimeout(() => setBottleClicked(false), 3000);
    };

    return (
        <footer id="media" className="relative bg-paper-dark text-ink-dark pt-24 pb-12 border-t mt-12 overflow-hidden border-ink/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">

                {/* 影视区 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 pb-12 border-b border-ink/10">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <MonitorPlay className="w-8 h-8 text-primary" />
                            <h3 className="text-2xl font-title">影视与动画改编</h3>
                        </div>
                        <div className="space-y-4 text-sm text-ink-dark/70 leading-relaxed mb-6">
                            <p>
                                《凡人修仙传》动画版由<strong>原力动画（Original Force）</strong>与<strong>万维猫动画</strong>联合制作，并在哔哩哔哩（Bilibili）独家播出。该作被誉为近年来最成功的国漫改编之一。
                            </p>
                            <p>
                                动画采用了顶级的真人动作捕捉技术（动捕），使得战斗场面无比丝滑流畅，完美还原了修仙界斗法时的“行云流水”与法术对抗的震撼感。剧中大量的微表情和写实的动作设计，也极大增强了凡人流“真实修魔”的代入感。
                            </p>
                            <div className="pl-4 border-l-2 border-primary/50 text-ink-dark/80 space-y-2 mt-4">
                                <p><span className="text-primary font-bold">第一季《风起天南》</span>：忠实复现了七玄门风云与血色试炼的残酷，初露锋芒。</p>
                                <p><span className="text-sword font-bold">特别篇《燕家堡之战》</span>：魔道入侵前夕，王牌斗剑场面封神。</p>
                                <p><span className="text-spirit font-bold">第二季《魔道争锋》</span>：天南大乱，韩立在战火中摸爬滚打，最终被迫远走他乡。</p>
                                <p><span className="text-tribulation font-bold">第三季《星海飞驰》</span>：动画进入了最精彩的乱星海篇章，海域修仙、杀妖取丹，特效与口碑再创巅峰。</p>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mt-6">
                            <span className="text-xs border border-ink-dark/30 px-3 py-1 rounded-full bg-ink-dark/5"><span className="text-primary mr-1">◆</span> B站百亿播放达成</span>
                            <span className="text-xs border border-ink-dark/30 px-3 py-1 rounded-full bg-ink-dark/5"><span className="text-sword mr-1">◆</span> 顶尖动捕技术</span>
                            <span className="text-xs border border-ink-dark/30 px-3 py-1 rounded-full bg-ink-dark/5"><span className="text-blood mr-1">◆</span> 真人影视化筹备中</span>
                        </div>
                    </div>

                    <div className="bg-black/40 rounded-xl border border-white/10 flex items-center justify-center h-48 sm:h-auto overflow-hidden group cursor-pointer relative">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity grayscale mix-blend-overlay" />
                        <div className="relative z-10 flex flex-col items-center group-hover:scale-110 transition-transform duration-500">
                            <Film className="w-12 h-12 text-white/50 mb-2" />
                            <span className="text-xs tracking-widest text-white/50 uppercase">动画视觉暂缺</span>
                        </div>
                    </div>
                </div>

                {/* 底部信息区 */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-center md:text-left">
                        <h4
                            onClick={handTitleClick}
                            className="text-xl font-title tracking-widest text-ink-dark mb-2 cursor-pointer select-none"
                            title="点我试试"
                        >
                            凡人修仙传
                        </h4>
                        <p className="text-xs text-ink-dark/50">
                            本网站为粉丝致敬作品，小说版权归忘语及相关平台所有。
                        </p>
                        <p className="text-xs text-ink-dark/40 mt-1 italic">
                            "献给所有在平凡生活中默默坚持的人——你就是自己的韩立。"
                        </p>
                    </div>

                    <button
                        onClick={handleScrollTop}
                        className="flex flex-col items-center text-ink-dark/40 hover:text-primary transition-colors group"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <ChevronUp className="w-8 h-8 mb-1" />
                        </motion.div>
                        <span className="text-xs font-title tracking-widest">御剑乘风去</span>
                    </button>
                </div>

                {/* 极小的禁制文字 */}
                <div className="mt-12 text-center text-[10px] text-ink-dark/20 cursor-default select-none pointer-events-none">
                    此页面已被韩某人布下辟邪神雷禁制，乱入者杀无赦...
                </div>
            </div>

            {/* 小绿瓶隐藏彩蛋 */}
            <div
                onClick={handleBottleClick}
                className="absolute bottom-4 left-4 w-6 h-6 opacity-5 hover:opacity-100 transition-opacity cursor-pointer text-spirit flex items-center justify-center z-50"
                title="神秘小瓶"
            >
                <Bot className="w-4 h-4" />
                {isBottleClicked && (
                    <motion.div
                        initial={{ scale: 0, opacity: 1, y: 0 }}
                        animate={{ scale: 2, opacity: 0, y: -50 }}
                        className="absolute bottom-6 pointer-events-none"
                    >
                        <Sparkles className="w-6 h-6 text-spirit" />
                    </motion.div>
                )}
            </div>

            <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        @keyframes lightning {
          0% { opacity: 0; }
          20% { opacity: 0.8; }
          40% { opacity: 0; }
          60% { opacity: 0.6; }
          100% { opacity: 0; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
