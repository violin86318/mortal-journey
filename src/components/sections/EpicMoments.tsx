import React from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const MOMENTS = [
    {
        title: '小绿瓶的拾取',
        chapter: '人界篇 · 起点',
        realm: '凡人',
        desc: '在采药的悬崖边，韩立意外踢到了一个沾满泥土的瓶子，并悄悄将其藏起。这看似不起眼的一踢，拉开了一代天尊的修仙序幕。一个凡人，终于握住了改变命运的唯一筹码。',
        review: '“这是全书最大的金手指，但真正让韩立走到最后的是他日后的隐忍与保密。机缘再大，没有与之匹配的心性，也是枉然。”',
        bg: 'bg-wood/20',
        color: 'text-spirit'
    },
    {
        title: '激战墨大夫',
        chapter: '人界篇 · 炼气',
        realm: '炼气期',
        desc: '识破墨大夫长久以来的伪善与夺舍阴谋，韩立不仅没有惊慌失措，反而将计就计，凭借暗藏的底牌与算计将其反杀。',
        review: '“这是韩立修仙界的‘第一堂课’，从此‘防人之心不可无’成了韩天尊一生的格言。”',
        bg: 'bg-wood/30',
        color: 'text-wood'
    },
    {
        title: '血色试炼求生',
        chapter: '人界篇 · 筑基',
        realm: '炼气期巅峰',
        desc: '残酷的禁地生杀，为了筑基丹，无数低阶修士在其中厮杀送命。韩立在中心区域凭着隐匿和算计坑杀强敌，并邂逅南宫婉，春风一度。',
        review: '“第一次展现韩立惊人的战斗素养和果断杀伐的爽局。也是本书凡人流黑森林法则的最经典体现。”',
        bg: 'bg-blood/20',
        color: 'text-blood'
    },
    {
        title: '虚天殿乱战',
        chapter: '人界篇 · 结丹',
        realm: '结丹初期',
        desc: '在多方元婴老怪的夹击下，韩立不仅成功保命，还在最后关头利用血玉蜘蛛将虚天鼎连同九曲灵参一起收走，在众老怪眼皮底下远遁汪洋。',
        review: '“结丹期修士在元婴老怪的虎口夺食的巅峰操作，惊险刺激，爽感十足。”',
        bg: 'bg-primary/20',
        color: 'text-primary'
    },
    {
        title: '坠魔谷之危',
        chapter: '人界篇 · 化神',
        realm: '元婴中期',
        desc: '面对古老魔族跨界而来的分魂，人界各大宗门死伤惨重。韩立以大庚剑阵、辟邪神雷与众多底牌力挽狂澜，灭杀古魔。',
        review: '“确立了韩立在人界的顶尖战力地位，玄剑门传承与魔道之力的双重展现。”',
        bg: 'bg-sword/20',
        color: 'text-sword'
    },
    {
        title: '一剑惊天劈半乘',
        chapter: '灵界篇 · 合体',
        realm: '合体初期',
        desc: '在魔界跨界入侵的绝境中，韩立首度召唤部分玄天斩灵剑本体，一剑挥出，蕴含空间法则的一击将敌方半部大乘魔修瞬间重创。',
        review: '“灵界篇高潮之一。玄天之宝的威力第一次真正展现，震撼全场！”',
        bg: 'bg-tribulation/20',
        color: 'text-tribulation'
    },
    {
        title: '广寒界涅槃',
        chapter: '灵界篇 · 大乘前夕',
        realm: '合体期巅峰',
        desc: '在灵界各大族群觊觎的广寒界中，韩立击杀多方强敌，搜刮海量资源，为日后突破大乘期打下了最坚实的底蕴。',
        review: '“韩立的副本扫荡能力在广寒界得到了极致的展现，也是灵界篇资源积累的关键转折点。”',
        bg: 'bg-spirit/20',
        color: 'text-spirit'
    },
    {
        title: '渡劫飞升真仙界',
        chapter: '灵界篇 · 飞升',
        realm: '大乘巅峰',
        desc: '在众人的仰望下，韩立迎战修仙界最恐怖的九九重天劫。雷电洗体，法则加身，最终破空而去，留下了关于“韩天尊”的无尽传说。',
        review: '“一个人界的小子，终于在这个位面登顶。那个仰向更高界面的身影，就是凡人修仙的最终幻想。”',
        bg: 'bg-primary/10',
        color: 'text-primary'
    },
    {
        title: '大罗之战',
        chapter: '仙界篇 · 巅峰',
        realm: '大罗金仙',
        desc: '面对天庭九元观的围剿，韩立展现大罗之威，真言宝轮倒转时光，各种法则对碰，打出了毁天灭地的一战。',
        review: '“仙界篇法术对轰的巅峰，从人界的符箓飞剑到仙界的法则大碰撞，视觉冲击力极强。”',
        bg: 'bg-ink/20',
        color: 'text-ink-dark'
    },
    {
        title: '证道时间道祖',
        chapter: '仙界篇 · 终局',
        realm: '道祖',
        desc: '与原时间道祖古或今的惊世之战。时间长河在两人的交锋中止息、崩塌。最终韩立斩碎旧的宿命，登顶万道之巅，一切归于平淡。',
        review: '“一介凡人，走到修炼的终点。一幅横跨不知多少万册的水墨画卷在这一刻缓缓合上。”',
        bg: 'bg-white/10 dark:bg-black/40',
        color: 'text-ink dark:text-ink-dark'
    },
    {
        title: '“我韩某人，从不做无把握之事”',
        chapter: '贯穿全书的核心理念',
        realm: '所有境界',
        desc: '每次面对绝境或是诱惑，韩立总能冷静分析利弊，摸清敌人的底牌，准备好撤退的后手。这一句台词，是他一生行事的最佳注解。',
        review: '“这是凡人流区别于其他修仙文的灵魂：不无脑热血，唯有绝对的理智，才能在这条大道上走得最远。”',
        bg: 'bg-gradient-to-r from-wood/10 to-primary/10',
        color: 'text-ink-muted'
    }
];

const EpicMoments = () => {
    return (
        <section id="epic-moments" className="relative py-24 px-4 sm:px-8 bg-paper/50 dark:bg-paper-dark/50 overflow-hidden border-t items-center flex flex-col border-b border-ink-fade/50">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 max-w-7xl mx-auto z-10"
            >
                <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4 drop-shadow-sm">
                    『 名场面 · 惊鸿一瞥 』
                </h2>
                <p className="text-lg text-ink-muted font-sans max-w-2xl mx-auto">
                    修仙万载，总有一些瞬间，凝固在了岁月长河之中，被后人代代传颂。
                </p>
                <div className="w-16 h-px bg-primary mx-auto mt-6 opacity-50" />
            </motion.div>

            <div className="flex flex-col gap-12 w-full max-w-6xl mx-auto z-10">
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

                        <div className="flex flex-col lg:flex-row p-8 sm:p-12 relative z-10 gap-8 h-full">
                            {/* Left Column - Title & Metadata */}
                            <div className="lg:w-1/3 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-ink-fade/50 pb-6 lg:pb-0 lg:pr-8">
                                <span className="text-xs font-bold text-ink-muted mb-2 tracking-widest">{moment.chapter}</span>
                                <h3 className={cn("text-3xl lg:text-4xl font-title mb-6 leading-tight", moment.color)}>{moment.title}</h3>
                                <span className="inline-block mt-auto bg-ink/5 dark:bg-ink-dark/10 text-ink/70 dark:text-ink-dark/70 text-sm px-4 py-2 rounded-lg w-max border border-ink-fade/30 font-bold">
                                    所在境界: {moment.realm}
                                </span>
                            </div>

                            {/* Right Column - Description & Review */}
                            <div className="lg:w-2/3 flex flex-col justify-center">
                                <p className="text-ink dark:text-ink-dark font-sans leading-relaxed mb-8 text-lg xl:text-xl text-justify">
                                    {moment.desc}
                                </p>

                                <div className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary p-5 rounded-r-lg text-sm text-ink-muted dark:text-ink-dark/80 italic shadow-inner relative">
                                    <div className="absolute -left-2 -top-2 text-2xl text-primary opacity-50 font-serif">"</div>
                                    <span className="relative z-10 pl-2 block">{moment.review}</span>
                                </div>
                            </div>
                        </div>

                        {/* Hover decorative shine line */}
                        <div className="absolute left-0 top-0 w-1.5 h-full bg-current opacity-0 group-hover:opacity-100 transition-opacity scale-y-0 group-hover:scale-y-100 duration-500 origin-top" style={{ color: `var(--${moment.color.split('-')[1]})` }} />
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default EpicMoments;
