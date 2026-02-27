import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Scale, ShieldAlert, Heart, Quote, Compass } from 'lucide-react';

const QUOTES = [
    "修仙一途，本就是逆天而行。",
    "我韩某人，从不做没有把握的事。",
    "实力不够的时候，低头不丢人。",
    "机缘这种东西，三分天注定，七分靠自己。",
    "既然踏上了这条路，就回不了头了。",
    "不是每个人都能成为天才，但每个人都可以成为韩立。",
    "既然动手了，那就斩草除根，绝不留后患！",
    "什么狗屁名门正派，不过是披着羊皮的狼。在这修仙界，只有活下去才是真理。",
    "别人修仙为长生，我修仙只为求个自保罢了。",
    "天道无常，唯有自身强大，方能在这苍茫天地间立足。",
];

const PHILOSOPHIES = [
    {
        title: '极其谨慎 (苟道宗师)',
        icon: ShieldAlert,
        desc: '不冒不必要的险，每一步都要有退路。战前不仅要做满分的准备，还要给自己留120分逃跑的底牌。这不是胆小，这是修仙界最稀缺的生存智慧。宁可舍弃重宝，也绝不轻易涉险。'
    },
    {
        title: '绝对务实 (唯物修仙)',
        icon: Scale,
        desc: '实力才是硬道理，其他都是虚的。不追求虚名，不逞英雄，不为了所谓的面子去招惹强敌。一切行动的核心都是为了提升活下去的资本。从不在乎正魔之分，只看利益与风险的权衡。'
    },
    {
        title: '恩怨分明 (杀伐果断)',
        icon: Heart,
        desc: '韩立虽修忘情道，但并非无情。记恩也记仇，若有人相助，日后必有厚报；若有人算计，骨灰也给你扬了。一旦结仇，哪怕追杀千万里也必须将其神魂俱灭，绝不养虎为患。'
    },
    {
        title: '财不外露 (财侣法地)',
        icon: Compass,
        desc: '怀璧其罪是修仙界第一铁律。拥有逆天小绿瓶的韩立比任何人都懂这个道理。极少展露全部身家，永远在人前保留三成实力，扮猪吃老虎是日常操作。'
    }
];

const Philosophy = () => {
    return (
        <section id="philosophy" className="relative py-24 px-4 sm:px-8 bg-paper dark:bg-paper-dark border-b border-t border-ink-fade/50">
            {/* Ink wash background effect */}
            <div className="absolute inset-0 bg-ink-splash opacity-[0.03] mix-blend-overlay pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 max-w-7xl mx-auto relative z-10"
            >
                <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4 drop-shadow-sm">
                    『 凡人道 · 大道至简 』
                </h2>
                <p className="text-lg text-ink-muted font-sans max-w-2xl mx-auto leading-relaxed">
                    为什么是《凡人修仙传》？因为它写出了多数普通人在现实世界的倒影。<br />没有天生神力，只有步步为营。
                </p>
                <div className="w-20 h-px bg-primary mx-auto mt-8 opacity-50" />
            </motion.div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                {/* Left Column - Philosophies */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-4 mb-10 pb-4 border-b border-ink-fade/30">
                        <BookOpen className="w-8 h-8 text-primary" />
                        <h3 className="text-3xl font-title text-ink dark:text-ink-dark">韩老魔的处世哲学</h3>
                    </div>

                    <div className="space-y-6">
                        {PHILOSOPHIES.map((item, i) => (
                            <div key={item.title} className="flex gap-5 p-6 rounded-xl border border-ink-fade/50 bg-paper/50 dark:bg-paper-dark/50 hover:bg-paper dark:hover:bg-paper-dark hover:shadow-md transition-all group">
                                <div className="mt-1 shrink-0">
                                    <div className="w-12 h-12 rounded-full bg-ink/5 dark:bg-ink-dark/10 flex items-center justify-center border border-primary/20 group-hover:border-primary/50 text-primary transition-colors">
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold font-title tracking-wide text-ink dark:text-ink-dark mb-3">
                                        {item.title.split(' ')[0]} <span className="text-sm font-sans text-ink-muted font-normal ml-2">{item.title.split(' ')[1]}</span>
                                    </h4>
                                    <p className="text-[15px] leading-relaxed text-ink-muted dark:text-ink-dark/80 text-justify">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 p-8 border-l-4 border-wood bg-wood/5 rounded-r-xl shadow-inner relative overflow-hidden">
                        <div className="absolute right-0 top-0 text-9xl text-wood opacity-5 -translate-y-1/4 translate-x-1/4 font-title rotate-12 pointer-events-none">悟</div>
                        <h4 className="text-xl font-bold font-title text-wood mb-4 relative z-10">现实与凡人的共鸣</h4>
                        <p className="text-[15px] leading-relaxed text-ink-muted dark:text-ink-dark/80 text-justify relative z-10">
                            资质平庸如同出身背景普通的我们；极度谨慎就像职场上的步步为营；贵人相伴与小人算计，更是在社会大染缸里打拼的缩影。每一次境界的突破，都伴随着资源的极度透支与生死一线的博弈。在这部小说里，没有靠血统带来的躺赢，只有用命拼来的明天。每个在现实中默默奋斗、绝不放弃的普通人，其实都在走着自己的“凡人修仙路”。这，才是凡人流经久不衰的精神内核。
                        </p>
                    </div>
                </motion.div>

                {/* Right Column - Quotes */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative lg:pl-8 lg:border-l border-ink-fade/30"
                >
                    {/* subtle decoration */}
                    <div className="absolute top-10 right-10 text-[180px] font-title opacity-[0.02] dark:opacity-[0.02] text-tribulation leading-none pointer-events-none select-none">道</div>

                    <div className="flex items-center gap-4 mb-10 pb-4 border-b border-ink-fade/30">
                        <Quote className="w-8 h-8 text-primary/80" />
                        <h3 className="text-3xl font-title text-ink dark:text-ink-dark">万载修仙经典语录</h3>
                    </div>

                    <div className="space-y-6 relative z-10 pl-6 lg:pl-8">
                        {QUOTES.map((quote, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                className="py-2 group"
                            >
                                <p className="font-sans text-[17px] italic text-ink-muted dark:text-ink-dark/70 relative leading-relaxed group-hover:text-primary dark:group-hover:text-primary transition-colors">
                                    <span className="absolute -left-6 top-1 text-primary/30 text-lg leading-none group-hover:text-primary transition-colors">"</span>
                                    {quote}
                                    <span className="absolute -right-2 bottom-0 text-primary/30 text-lg leading-none opacity-0 group-hover:opacity-100 transition-opacity">"</span>
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
