import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, User, Flame, Award } from 'lucide-react';

const Card = ({ title, children, delay }: { title: string, children: React.ReactNode, delay: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay }}
        whileHover={{ y: -5 }}
        className="relative p-6 sm:p-8 bg-paper/50 dark:bg-paper-dark/50 backdrop-blur-sm border border-wood/30 dark:border-wood/20 rounded-xl shadow-md hover:shadow-lg transition-all group overflow-hidden"
    >
        {/* Very subtle border glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <h3 className="text-2xl font-title text-ink dark:text-ink-dark mb-6 flex items-center gap-3">
            {title}
        </h3>
        <div className="space-y-4 font-sans text-ink/80 dark:text-ink-dark/80">
            {children}
        </div>
    </motion.div>
);

const Overview = () => {
    return (
        <section id="overview" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4">『 作品总览 』</h2>
                <p className="text-lg text-ink-muted font-sans max-w-2xl mx-auto">
                    开创“凡人流”先河，影响深远的网络仙侠巨著
                </p>
                <div className="w-16 h-px bg-primary mx-auto mt-6 opacity-50" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <Card title="《凡人修仙传》正传" delay={0.1}>
                    <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/20 transition-colors">
                        <BookOpen className="w-24 h-24" />
                    </div>
                    <ul className="space-y-3 relative z-10">
                        <li className="flex gap-2">
                            <span className="text-primary font-bold min-w-[5rem]">连载时间:</span>
                            <span>2008年 — 2013年</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-primary font-bold min-w-[5rem]">作品体量:</span>
                            <span>约 746 万字 / 2446 章</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-primary font-bold min-w-[5rem]">内容范围:</span>
                            <span>韩立从凡人到飞升仙界的完整历程</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="text-primary font-bold min-w-[5rem]">核心标签:</span>
                            <div className="flex flex-wrap gap-2">
                                {['凡人流', '修仙', '种田', '谨慎', '机缘'].map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-primary/10 text-primary text-sm rounded border border-primary/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </li>
                        <li className="pt-2 text-sm leading-relaxed text-ink-muted dark:text-ink-dark/70">
                            一个普通的山村穷小子，偶然之下，跨入到一个江湖小门派，成了一名记名弟子。虽然资质平庸，但他依靠自身的努力与合理算计，加上一点点机缘，最终在这个尔虞我诈的修仙世界中站稳脚跟，逆天行事，得证大道。
                        </li>
                    </ul>
                </Card>

                <Card title="《凡人修仙之仙界篇》" delay={0.3}>
                    <div className="absolute top-4 right-4 text-tribulation/10 group-hover:text-tribulation/20 transition-colors">
                        <Flame className="w-24 h-24" />
                    </div>
                    <ul className="space-y-3 relative z-10">
                        <li className="flex gap-2">
                            <span className="text-tribulation font-bold min-w-[5rem]">连载时间:</span>
                            <span>2017年 — 2023年</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-tribulation font-bold min-w-[5rem]">作品体量:</span>
                            <span>约 900+ 万字 / 1395 章</span>
                        </li>
                        <li className="flex gap-2">
                            <span className="text-tribulation font-bold min-w-[5rem]">内容范围:</span>
                            <span>韩立在仙界的经历，直至证道成祖</span>
                        </li>
                        <li className="flex gap-2 items-start">
                            <span className="text-tribulation font-bold min-w-[5rem]">核心标签:</span>
                            <div className="flex flex-wrap gap-2">
                                {['仙界', '大道', '轮回', '玄天'].map(tag => (
                                    <span key={tag} className="px-2 py-0.5 bg-tribulation/10 text-tribulation text-sm rounded border border-tribulation/20">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </li>
                        <li className="pt-2 text-sm leading-relaxed text-ink-muted dark:text-ink-dark/70">
                            飞升仙界，一切从零开始。面对更强大的敌人，更广阔的位面，更残酷的丛林法则。韩立失去了人界的顶级实力和法宝指引，依靠凡人时期磨砺出的心性与底牌，在仙界再次步步为营，直指时间道祖之位。
                        </li>
                    </ul>
                </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-1">
                    <Card title="作者简介" delay={0.4}>
                        <div className="flex flex-col items-center mb-4">
                            <div className="w-20 h-20 rounded-full bg-ink/10 dark:bg-ink-dark/10 border-2 border-primary/30 flex items-center justify-center mb-3">
                                <User className="w-10 h-10 text-primary/70" />
                            </div>
                            <h4 className="font-title text-xl font-bold">忘语</h4>
                            <p className="text-sm text-ink-muted mt-1">起点白金作家 · 凡人流祖师</p>
                        </div>
                        <p className="text-sm leading-relaxed">
                            中国网络小说仙侠类代表作家之一。以其严谨的设定、写实的修仙社会描绘和独特的主角性格刻画，在网文界树立了一座丰碑。
                        </p>
                    </Card>
                </div>

                <div className="md:col-span-2">
                    <Card title="凡人流的开创与影响" delay={0.6}>
                        <div className="absolute bottom-[-20%] right-[-5%] text-wood/5 rotate-12 pointer-events-none">
                            <Award className="w-64 h-64" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                            <div>
                                <h4 className="font-bold text-primary mb-2">什么是“凡人流”？</h4>
                                <p className="text-sm leading-relaxed">
                                    主角没有逆天资质、没有天降神装、更没有天下无敌的背景。凭借着自身的谨慎隐忍、不懈努力以及适时的机缘，一步一个脚印在残酷的修仙世界中生存并成长的流派。
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold text-primary mb-2">核心特征</h4>
                                <ul className="text-sm space-y-1 list-disc list-inside">
                                    <li>主角资质平庸（甚至低劣）</li>
                                    <li>性格极度谨慎（不打无准备之仗）</li>
                                    <li>重视资源积累与财富（种田挖矿）</li>
                                    <li>利益至上但有底线的黑暗森林法则</li>
                                </ul>
                            </div>
                            <div className="sm:col-span-2 mt-2 pt-4 border-t border-ink-fade">
                                <p className="text-sm italic text-ink-muted">
                                    "在这部小说之前，修仙是天才与气运之子的游戏；在这部小说之后，修仙成了普通人只要熬得住也能窥探大道的奋斗史。它深刻影响了后世无数修仙网文的创作范式。"
                                </p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Overview;
