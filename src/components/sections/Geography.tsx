import React from 'react';
import { motion } from 'framer-motion';
import { Map, Cloud, Star } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type RealmLocation = {
    name: string;
    desc: string;
    events: string;
    color: string;
};

const GEOGRAPHY = {
    human: [
        { name: '天南修仙界', desc: '人界较弱的修仙区域之一，资源贫瘠。分为七大派、魔道六宗等势力。', events: '韩立修仙起点，包含七玄门、黄枫谷、血色禁地。', color: 'text-wood' },
        { name: '乱星海', desc: '海域广阔，妖兽众多，资源丰富但极其危险。势力分内外星海。', events: '韩立躲避战乱之地，结丹并搜集大量资源，结识紫灵。', color: 'text-spirit' },
        { name: '大晋国', desc: '人界修仙核心区域，名门大派林立，佛魔正道昌盛。', events: '韩立元婴期历练，修补空间节点，昆吾山副本。', color: 'text-primary' },
        { name: '北极冰原 / 其他', desc: '极端寒冷之地，有隐秘的上古遗迹。', events: '结识冰凤，最终破空飞升之地。', color: 'text-sword' },
    ],
    spirit: [
        { name: '风元大陆 (人妖两族)', desc: '灵界三块大陆之一，人妖两族偏安一隅（天渊城）。', events: '韩立化神至大乘期的主要活动范围，对抗异族与魔劫。', color: 'text-ink-muted' },
        { name: '魔界', desc: '与灵界平行的上位界面，环境恶劣，崇尚物理与魔功。', events: '魔族入侵（魔劫），韩立深入魔界洗劫池水等资源。', color: 'text-blood' },
        { name: '广寒界', desc: '上古仙界的碎片秘境，百年开启一次。', events: '韩立获得仙界炼器传承等巨额机缘。', color: 'text-sword' },
    ],
    immortal: [
        { name: '北寒仙域', desc: '仙界边缘区域，资源较匮乏，由天庭统辖。', events: '飞升仙界落脚点，重修功法，参与冥寒仙府之争。', color: 'text-sword' },
        { name: '灰界', desc: '与仙界对立的阴暗位面，煞气弥漫。', events: '洗煞池洗去煞气，大闹九幽域。', color: 'text-ink-muted' },
        { name: '中土仙域', desc: '仙界核心地带，天庭大本营。', events: '最终大罗之战与道祖之争的战场。', color: 'text-primary' },
    ]
};

const LocationGroup = ({ title, locations, icon: Icon, delay = 0 }: { title: string, locations: RealmLocation[], icon: any, delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="mb-12 relative"
    >
        <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="p-2 bg-paper dark:bg-paper-dark rounded shadow-sm border border-ink-fade">
                <Icon className="w-5 h-5 text-ink-muted dark:text-ink-dark" />
            </div>
            <h3 className="text-2xl font-title text-ink dark:text-ink-dark">{title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {locations.map((loc, i) => (
                <motion.div
                    key={loc.name}
                    whileHover={{ y: -5, x: 5 }}
                    className={cn("p-5 bg-paper/30 dark:bg-paper-dark/30 backdrop-blur border-l-4 border-t border-r border-b border-ink-fade rounded shadow-sm hover:shadow-md transition-all group relative overflow-hidden", loc.color.replace('text-', 'border-l-'))}
                >
                    {/* subtle paper grain on card overlay */}
                    <div className="absolute inset-0 bg-ink-splash opacity-5 mix-blend-overlay pointer-events-none" />

                    <h4 className={cn("text-xl font-title mb-2 drop-shadow-sm", loc.color)}>{loc.name}</h4>
                    <p className="text-sm font-sans text-ink-muted dark:text-ink-dark/70 mb-3 line-clamp-2 group-hover:line-clamp-none transition-all">{loc.desc}</p>
                    <div className="text-xs bg-ink/5 dark:bg-ink-dark/10 p-2 rounded text-ink/80 dark:text-ink-dark/80 italic border border-ink-fade/50">
                        {loc.events}
                    </div>
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const Geography = () => {
    return (
        <section id="geography" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
            {/* Background large map icon faded out */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] dark:opacity-[0.02]">
                <Map className="w-[800px] h-[800px]" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16 relative z-10"
            >
                <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4 drop-shadow-sm">
                    『 世界地理 · 诸天万界 』
                </h2>
                <p className="text-lg text-ink-muted font-sans max-w-2xl mx-auto">
                    人道渺渺，仙道莽莽。三千大千世界，亿万生灵之属。
                </p>
                <div className="w-16 h-px bg-primary mx-auto mt-6 opacity-50" />
            </motion.div>

            <div className="relative z-10 border-l border-ink-fade pl-6 sm:pl-10 ml-2">
                <LocationGroup title="人界位面 (底层天地)" locations={GEOGRAPHY.human} icon={Map} delay={0.1} />
                <LocationGroup title="灵界/魔界位面 (中层天地)" locations={GEOGRAPHY.spirit} icon={Cloud} delay={0.3} />
                <LocationGroup title="真仙界位面 (至高天地)" locations={GEOGRAPHY.immortal} icon={Star} delay={0.5} />
            </div>
        </section>
    );
};

export default Geography;
