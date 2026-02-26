import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const MOMENTS = [
    {
        title: '小绿瓶的发现',
        chapter: '人界篇 · 起点',
        realm: '凡人',
        desc: '在采药的悬崖边，韩立意外踢到了一个沾满泥土的瓶子。这看似不起眼的一踢，拉开了一代天尊的修仙序幕。一个凡人，终于握住了改变命运的唯一筹码。',
        review: '“这是全书最大的金手指，但真正让韩立走到最后的是他日后的隐忍。机缘再大，没有与之匹配的心性，也是枉然。”',
        bg: 'bg-wood/20',
        color: 'text-spirit'
    },
    {
        title: '血色试炼',
        chapter: '人界篇 · 筑基',
        realm: '炼气期十三层',
        desc: '残酷的禁地生杀，为了筑基丹，无数低阶修士在其中厮杀送命。韩立在中心区域凭着隐匿和算计，坑杀多名强敌，并邂逅了南宫婉，成就了一段千古情缘。',
        review: '“第一次展现韩立惊人的战斗素养和果断杀伐的爽局。也是本书凡人流黑森林法则的最经典体现。”',
        bg: 'bg-blood/20',
        color: 'text-blood'
    },
    {
        title: '乱星海初到',
        chapter: '人界篇 · 结丹',
        realm: '筑基后期',
        desc: '通过古传送阵，一个人被丢到了极其陌生、语言不通的汪洋海域。面对完全未知的危险，韩立展现了极强的适应力和生存智慧。',
        review: '“换地图的教科书。抛头露面必死无疑，韩立选择乔装打扮、学习文字、闭关修炼，把凡人流的‘苟’发挥到了极致。”',
        bg: 'bg-sword/20',
        color: 'text-sword'
    },
    {
        title: '元婴期突破',
        chapter: '人界篇 · 元婴',
        realm: '结丹后期',
        desc: '在落云宗闭关数十年，终于碎丹成婴。天空异象纷呈，灵气灌体而入，多年的隐忍蛰伏化为震慑一方的实力。',
        review: '“元婴期是人界前期修士的终极梦想。当韩立真的走到这一步时，读者陪伴他历经数百载风雨的代入感直接拉满。”',
        bg: 'bg-primary/20',
        color: 'text-primary'
    },
    {
        title: '渡劫飞升',
        chapter: '灵界篇 · 启程',
        realm: '大乘期巅峰',
        desc: '在众人的仰望下，韩立迎战九九重天劫。雷光劈落，身躯破碎又重组，最终沐浴仙光，破空而去，留下了关于“韩天尊”的无尽传说。',
        review: '“一个人界的小子，终于在这个位面登顶，走向了更广阔的天地。那个仰望星空的身影，让人热血沸腾。”',
        bg: 'bg-tribulation/20',
        color: 'text-tribulation'
    },
    {
        title: '仙界重新洗牌',
        chapter: '仙界篇 · 低谷',
        realm: '真仙境（跌落）',
        desc: '飞升仙界却遭逢大难，法宝尽失，连记忆都出了问题，实力大损落入下界。韩立没有气馁，再次开启了枯燥的捡漏与恢复期。',
        review: '“飞升即是跌境，重新变回底层的反套路设定。凡人无论在哪个境界，都有从头再来的韧性。”',
        bg: 'bg-ink/20',
        color: 'text-ink-dark'
    },
    {
        title: '证道成祖',
        chapter: '仙界篇 · 终局',
        realm: '道祖',
        desc: '与原时间道祖古或今的惊世之战。时间长河在两人的交锋中止息、崩塌。最终韩立斩碎旧的宿命，登顶万道之巅，一切归于平淡。',
        review: '“一介凡人，走到修炼的终点。一幅横跨不知多少万年的水墨画卷在这一刻缓缓合上。”',
        bg: 'bg-primary/30',
        color: 'text-primary'
    },
    {
        title: '“我韩某人，从不做无把握之事”',
        chapter: '贯穿全书',
        realm: '各境界通用',
        desc: '每次面对绝境或是诱惑，韩立总能冷静分析利弊，摸清敌人的底牌，准备好撤退的后手。这一句台词，是他一生行事的最佳注解。',
        review: '“这是凡人流区别于其他修仙文的灵魂：不无脑热血，唯有绝对的理智，才能在这条大道上走得最远。”',
        bg: 'bg-wood/20',
        color: 'text-primary'
    }
];

const EpicMoments = () => {
    return (
        <section id="epic-moments" className="relative py-24 px-4 sm:px-8 bg-paper/50 dark:bg-paper-dark/50 overflow-hidden border-t items-center flex flex-col border-b border-ink-fade/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 max-w-7xl mx-auto"
            >
                <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4 drop-shadow-sm">
                    『 名场面 · 惊鸿一瞥 』
                </h2>
                <p className="text-lg text-ink-muted font-sans max-w-2xl mx-auto">
                    修仙万载，总有一些瞬间，凝固在了岁月长河之中。
                </p>
                <div className="w-16 h-px bg-primary mx-auto mt-6 opacity-50" />
            </motion.div>

            <div className="flex flex-col gap-12 w-full max-w-5xl mx-auto">
                {MOMENTS.map((moment, i) => (
                    <motion.div
                        key={moment.title}
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="group relative overflow-hidden rounded-2xl border border-ink-fade/60 bg-paper dark:bg-paper-dark shadow-xl hover:shadow-2xl transition-all"
                    >
                        {/* Dynamic visual background based on moment theme */}
                        <div className={cn("absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none mix-blend-multiply dark:mix-blend-overlay", moment.bg)} />
                        <div className="absolute inset-0 bg-ink-splash opacity-5 mix-blend-overlay pointer-events-none" />

                        <div className="flex flex-col md:flex-row p-8 sm:p-10 relative z-10 gap-8 h-full">
                            {/* Left Column - Title & Metadata */}
                            <div className="md:w-1/3 flex flex-col justify-center border-b md:border-b-0 md:border-r border-ink-fade/50 pb-6 md:pb-0 md:pr-6">
                                <span className="text-xs font-bold text-ink-muted mb-2">{moment.chapter}</span>
                                <h3 className={cn("text-3xl font-title mb-4", moment.color)}>{moment.title}</h3>
                                <span className="inline-block mt-auto bg-ink/5 dark:bg-ink-dark/10 text-ink/70 dark:text-ink-dark/70 text-sm px-3 py-1 rounded w-max border border-ink-fade/30">
                                    此时境界: {moment.realm}
                                </span>
                            </div>

                            {/* Right Column - Description & Review */}
                            <div className="md:w-2/3 flex flex-col justify-center">
                                <p className="text-ink dark:text-ink-dark font-sans leading-relaxed mb-6 text-lg xl:text-xl">
                                    {moment.desc}
                                </p>

                                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg text-sm text-ink-muted dark:text-ink-dark/80 italic shadow-inner">
                                    {moment.review}
                                </div>
                            </div>
                        </div>

                        {/* Hover decorative shine line */}
                        <div className="absolute left-0 top-0 w-1 h-full bg-current opacity-0 group-hover:opacity-100 transition-opacity scale-y-0 group-hover:scale-y-100 duration-500 origin-top" style={{ color: `var(--${moment.color.split('-')[1]})` }} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EpicMoments;
