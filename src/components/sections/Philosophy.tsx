import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Scale, ShieldAlert, Heart, Quote } from 'lucide-react';

const QUOTES = [
    "修仙一途，本就是逆天而行。",
    "我韩某人，从不做没有把握的事。",
    "实力不够的时候，低头不丢人。",
    "机缘这种东西，三分天注定，七分靠自己。",
    "修仙路漫漫，能活着就是最大的胜利。",
    "既然踏上了这条路，就回不了头了。",
    "不是每个人都能成为天才，但每个人都可以成为韩立。",
];

const PHILOSOPHIES = [
    {
        title: '极其谨慎',
        icon: ShieldAlert,
        desc: '不冒不必要的险，每一步都要有退路。战前不仅要做满分的准备，还要给自己留120分逃跑的底牌。这不是胆小，这是修仙界最稀缺的生存智慧。'
    },
    {
        title: '绝对务实',
        icon: Scale,
        desc: '实力才是硬道理，其他都是虚的。不追求虚名，不逞英雄，不为了所谓的面子去招惹强敌。一切行动的核心都是为了提升活下去的资本。'
    },
    {
        title: '恩怨分明',
        icon: Heart,
        desc: '韩立虽修忘情道，但并非无情。记恩也记仇，若有人相助，日后必有厚报；若有人算计，骨灰也给你扬了。克制但不滥情，理智且通透。'
    }
];

const Philosophy = () => {
    return (
        <section id="philosophy" className="relative py-24 px-4 sm:px-8 bg-paper dark:bg-paper-dark">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 max-w-7xl mx-auto"
            >
                <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4 drop-shadow-sm">
                    『 凡人道 · 大道至简 』
                </h2>
                <p className="text-lg text-ink-muted font-sans max-w-2xl mx-auto">
                    为什么是《凡人修仙传》？因为它写出了多数普通人在现实世界的倒影。
                </p>
                <div className="w-16 h-px bg-primary mx-auto mt-6 opacity-50" />
            </motion.div>

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-8">
                        <BookOpen className="w-8 h-8 text-primary" />
                        <h3 className="text-2xl font-title text-ink dark:text-ink-dark">韩立的处世哲学</h3>
                    </div>

                    <div className="space-y-6">
                        {PHILOSOPHIES.map((item, i) => (
                            <div key={item.title} className="flex gap-4 p-5 rounded-lg border border-ink-fade bg-ink/5 dark:bg-ink-dark/5 hover:bg-ink/10 dark:hover:bg-ink-dark/10 transition-colors">
                                <div className="mt-1">
                                    <div className="w-10 h-10 rounded-full bg-paper dark:bg-paper-dark flex items-center justify-center border border-primary/30 shadow-sm text-primary">
                                        <item.icon className="w-5 h-5" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold font-sans text-ink dark:text-ink-dark mb-2">{item.title}</h4>
                                    <p className="text-sm leading-relaxed text-ink-muted dark:text-ink-dark/70">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-6 border-l-4 border-wood bg-wood/5 rounded-r">
                        <h4 className="font-bold text-wood mb-2">现实共鸣</h4>
                        <p className="text-sm leading-relaxed text-ink-muted dark:text-ink-dark/70">
                            资质平庸如同背景普通的我们；谨慎小心就像职场上的步步为营；贵人相伴与小人算计，更是在社会大染缸里打拼的缩影。每个在大城市里默默奋斗、绝不放弃的普通人，其实都是韩立。这，才是凡人流的精神内核。
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    {/* subtle decoration */}
                    <div className="absolute top-0 right-0 text-[120px] font-title opacity-5 dark:opacity-5 text-primary leading-none pointer-events-none select-none">道</div>

                    <div className="flex items-center gap-3 mb-8">
                        <Quote className="w-8 h-8 text-tribulation" />
                        <h3 className="text-2xl font-title text-ink dark:text-ink-dark">万载修仙语录录</h3>
                    </div>

                    <div className="space-y-4 relative z-10 pl-6 border-l-2 border-ink-fade/40">
                        {QUOTES.map((quote, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="py-2"
                            >
                                <p className="font-sans text-lg italic text-ink/80 dark:text-ink-dark/80 relative">
                                    <span className="absolute -left-6 text-primary/40 text-sm">"</span>
                                    {quote}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Philosophy;
