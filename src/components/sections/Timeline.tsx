import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type TimelineNode = {
    phase: string;
    age: string;
    realm: string;
    event: string;
    desc: string;
    important?: boolean;
};

type TimelinePhase = {
    title: string;
    color: string;
    bgPhase: string;
    nodes: TimelineNode[];
};

const TIMELINE_DATA: TimelinePhase[] = [
    {
        title: '凡人岁月',
        color: 'text-wood',
        bgPhase: 'from-wood/10 to-transparent',
        nodes: [
            { phase: '凡人阶段', age: '10岁', realm: '凡人', event: '离家，入七玄门', desc: '出身青牛镇贫苦农家，被三叔介绍参加七玄门考核，成为记名弟子。' },
            { phase: '凡人阶段', age: '14岁', realm: '炼气期', event: '神秘小瓶', desc: '在山谷捡到能够催熟灵药的神秘小瓶，从此改变命运。', important: true },
            { phase: '凡人阶段', age: '18岁', realm: '炼气期', event: '斩杀墨大夫', desc: '识破墨大夫夺舍阴谋，反杀恩师，得到长春功后续及修仙界常识。', important: true },
        ]
    },
    {
        title: '修真起步',
        color: 'text-spirit',
        bgPhase: 'from-spirit/10 to-transparent',
        nodes: [
            { phase: '黄枫谷', age: '21岁', realm: '炼气期', event: '血色试炼', desc: '持有升仙令加入黄枫谷。参加最惨烈的血色试炼，结识南宫婉。', important: true },
            { phase: '黄枫谷', age: '25岁', realm: '筑基期', event: '服药筑基', desc: '利用小绿瓶催熟灵药，服用海量筑基丹，强行筑基成功。' },
            { phase: '乱星海', age: '40岁+', realm: '筑基后期', event: '魔道入侵，遁走海外', desc: '遭逢魔道入侵天南，被当做弃子，借助上古传送阵逃往数十万里外的乱星海。' },
        ]
    },
    {
        title: '乱星海风云',
        color: 'text-primary',
        bgPhase: 'from-primary/10 to-transparent',
        nodes: [
            { phase: '星海岁月', age: '126岁', realm: '结丹期', event: '杀妖取丹，成功结丹', desc: '在小寰岛隐居修炼，后在内星海历经机缘成功结丹，炼制本命法宝青竹蜂云剑。', important: true },
            { phase: '星海岁月', age: '200余岁', realm: '结丹后期', event: '虚渊大殿与元婴老怪起舞', desc: '被极阴祖师逼迫探险虚渊大殿，获得虚天鼎，带走九曲灵参，得罪数名元婴老怪。', important: true },
        ]
    },
    {
        title: '名震天南',
        color: 'text-tribulation',
        bgPhase: 'from-tribulation/10 to-transparent',
        nodes: [
            { phase: '重返天南', age: '220余岁', realm: '元婴期', event: '结婴成功，成为长老', desc: '返回天南，突破元婴期，成为落云宗长老，名震一方。', important: true },
            { phase: '重返天南', age: '800余岁', realm: '化神期', event: '坠魔谷战役，化神巅峰', desc: '解决人界古魔之劫，搜集五行材料突破化神期，成为人界第一人。' },
            { phase: '飞升', age: '900余岁', realm: '化神期', event: '修补节点，飞升灵界', desc: '通过空间节点，历经空间风暴，九死一生飞升灵界。', important: true },
        ]
    },
    {
        title: '灵界巨擘',
        color: 'text-blood',
        bgPhase: 'from-blood/10 to-transparent',
        nodes: [
            { phase: '飞升之初', age: '千余岁', realm: '炼虚期', event: '法体双修，天渊城立足', desc: '功力大毁后重修，加入天渊城抵御异族，后进军魔界洗煞。' },
            { phase: '灵界巅峰', age: '数千岁', realm: '大乘期', event: '进阶大乘，力压群雄', desc: '历经广寒界机缘，魔劫之战，突破大乘期，拥有玄天斩灵剑，纵横灵界无敌手。', important: true },
            { phase: '真仙飞升', age: '万余岁', realm: '大乘期', event: '渡劫飞升真仙界', desc: '硬抗九九天劫，携诸亲信，成功飞升最高界面——真仙界。', important: true },
        ]
    },
    {
        title: '仙界道祖',
        color: 'text-white',
        bgPhase: 'from-white/10 to-transparent',
        nodes: [
            { phase: '仙界底层', age: '一万+岁', realm: '真仙', event: '重头再来，北寒仙域', desc: '遭到天庭高台通缉，灵力受损散尽三千道境，从底层散仙做起。' },
            { phase: '仙界中坚', age: '无法计数', realm: '金仙 / 大罗', event: '修天造化诀，掌控时间', desc: '聚时间法则之丝，入灰界，战天庭，步步登高，证道大罗。' },
            { phase: '万道之巅', age: '无尽岁月', realm: '道祖', event: '斩古道祖，终结轮回', desc: '斩杀原时间道祖古或今，打破天道宿命，成为万界至高的时间道祖。', important: true },
        ]
    },
];

const Timeline = () => {
    return (
        <section id="timeline" className="relative py-24 px-4 sm:px-8 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 z-10 relative"
            >
                <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4 drop-shadow-sm">
                    『 编年史 · 万载修仙路 』
                </h2>
                <p className="text-lg text-ink-muted font-sans max-w-2xl mx-auto">
                    从一名山村稚童，到长生久视的时间道祖。<br />韩立走过了无数纪元，回首望去，身后已是尸骨如山的大道坦途。
                </p>
                <div className="w-16 h-px bg-primary mx-auto mt-6 opacity-50" />
            </motion.div>

            <div className="relative">
                <div className="absolute left-[38px] md:left-[50%] top-0 bottom-0 w-1 bg-ink-fade md:-translate-x-[2px] z-0 pointer-events-none" />

                {TIMELINE_DATA.map((phase, phaseIdx) => (
                    <div key={phase.title} className="relative mb-8">
                        {/* Phase Title Node */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="sticky top-24 z-20 flex justify-center mb-8"
                        >
                            <div className="bg-paper dark:bg-paper-dark border-2 border-current px-6 py-2 rounded-full font-title text-xl shadow-lg" style={{ color: `var(--${phase.color.split('-')[1]})` }}>
                                {phase.title}
                            </div>
                        </motion.div>

                        {phase.nodes.map((node, i) => (
                            <motion.div
                                key={node.event}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className={cn(
                                    "relative flex items-center justify-start md:justify-center mb-12 group",
                                    i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
                                )}
                            >
                                {/* Node Dot */}
                                <div className={cn(
                                    "absolute left-[40px] md:left-[50%] -translate-x-1/2 rounded-full bg-paper border-[4px] z-10 transition-all duration-300",
                                    node.important ? "border-primary w-6 h-6 shadow-[0_0_8px_rgba(197,151,62,0.6)]" : "w-5 h-5 border-ink-fade/80 group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(197,151,62,0.8)]"
                                )} />

                                <div className="w-full pl-24 md:pl-0 md:w-[45%]">
                                    <div className={cn(
                                        "p-5 rounded-lg border backdrop-blur-sm transition-all shadow-sm hover:shadow-md",
                                        node.important ? "bg-primary/5 dark:bg-primary/10 border-primary/30" : "bg-paper/30 dark:bg-paper-dark/30 border-ink-fade hover:border-primary/20",
                                        i % 2 === 0 ? "md:text-right" : "md:text-left"
                                    )}>
                                        <div className={cn("text-xs font-bold mb-2 flex items-center gap-2", i % 2 === 0 ? "md:justify-end" : "md:justify-start", phase.color)}>
                                            {node.important && <Star className="w-3 h-3 fill-current animate-pulse" />}
                                            <span>{node.age} • 境界: {node.realm}</span>
                                        </div>
                                        <h4 className="text-xl font-title text-ink dark:text-ink-dark mb-2">{node.event}</h4>
                                        <p className="text-sm font-sans text-ink-muted dark:text-ink-dark/70 leading-relaxed">{node.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Timeline;
