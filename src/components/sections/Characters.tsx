import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Filter } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type Character = {
    id: string;
    name: string;
    title: string;
    race: string;
    realm: string;
    faction: string;
    relation: '主角' | '伴侣/红颜' | '挚友/同伴' | '师长/前辈' | '对手/反派' | '其他';
    desc: string;
    tags: string[];
    color: string;
    bg: string;
};

const CHARACTERS: Character[] = [
    { id: 'hanli', name: '韩立', title: '韩老魔 / 天尊', race: '人族', realm: '道祖 (时间)', faction: '无定属 (散修/天庭通缉)', relation: '主角', desc: '相貌普通的青年，性格谨慎，心思缜密，无利不起早。从一个山村凡人，靠着神秘小瓶与不懈的毅力，硬生生走出了一条前无古人的修仙大道。', tags: ['极其谨慎', '跑路专家', '杀伐果断', '小绿瓶'], color: 'text-primary', bg: 'bg-primary' },
    { id: 'nangong', name: '南宫婉', title: '轮回女帝', race: '人族', realm: '大罗金仙', faction: '掩月宗 / 轮回殿', relation: '伴侣/红颜', desc: '韩立唯一的正妻。血色禁地中与韩立结下不解之缘。温婉坚韧，为了跟随韩立的步伐，付出极大努力。后觉醒轮回殿主之女身份。', tags: ['正妻道侣', '轮回体质', '血色禁地'], color: 'text-blood', bg: 'bg-blood' },
    { id: 'ziling', name: '紫灵仙子', title: '妙音门主', race: '人/魔', realm: '大罗 / 道祖级', faction: '妙音门 / 魔界', relation: '伴侣/红颜', desc: '乱星海第一美女，绝代尤物。与韩立红尘纠葛极深，数次分合。飞升魔界后历经坎坷，最终在仙界与韩立重逢。', tags: ['绝世容颜', '魔界飞升', '红颜知己'], color: 'text-tribulation', bg: 'bg-tribulation' },
    { id: 'yinyue', name: '银月', title: '玲珑妖妃', race: '妖族 (天狼)', realm: '大乘 / 真仙', faction: '灵界妖族', relation: '伴侣/红颜', desc: '曾化为器灵陪伴韩立无数岁月，也是最了解韩立内心的人之一。后恢复肉身份离，灵界重逢时感情深厚。', tags: ['器灵', '天狼血脉', '羁绊极深'], color: 'text-sword', bg: 'bg-sword' },
    { id: 'litao', name: '厉飞雨', title: '厉师兄', race: '人族 (凡人)', realm: '无 (凡人武者)', faction: '七玄门', relation: '挚友/同伴', desc: '“杀人放火厉飞雨，万人敬仰韩天尊”。韩立在七玄门唯一交心的挚友。为报仇不惜燃烧寿元，后代受韩立拂照。', tags: ['挚交', '背锅侠', '凡人巅峰'], color: 'text-wood', bg: 'bg-wood' },
    { id: 'dayan', name: '大衍神君', title: '天才神君', race: '人族', realm: '化神级神识 (残魂)', faction: '千竹教', relation: '师长/前辈', desc: '惊才绝艳的奇人，自创《大衍决》。以残魂状态寄宿，成为韩立的良师益友，最后在其帮助下完成了傀儡终极梦想后含笑坐化。', tags: ['引路人', '傀儡宗师', '半师半友'], color: 'text-ink-muted', bg: 'bg-ink-muted' },
    { id: 'mo', name: '墨大夫', title: '墨居仁', race: '人族 (凡人)', realm: '无', faction: '墨府', relation: '师长/前辈', desc: '引韩立入门的“恩师”，却暗藏夺舍祸心。给韩立上了修仙界最生动的一课：修仙界弱肉强食，防人之心不可无。', tags: ['启蒙恩师', '险恶用心', '第一课'], color: 'text-wood', bg: 'bg-wood' },
    { id: 'shikun', name: '石穿空', title: '三皇子', race: '魔族', realm: '大罗', faction: '仙界魔域', relation: '挚友/同伴', desc: '仙界篇中韩立生死与共的兄弟。重情重义，在灰界与魔界副本中与韩立并肩作战，结下深厚友谊。', tags: ['魔界皇子', '生死之交', '豪爽'], color: 'text-blood', bg: 'bg-blood' },
    { id: 'jiyin', name: '极阴老祖', title: '极阴祖师', race: '人族', realm: '元婴期', faction: '极阴岛', relation: '对手/反派', desc: '乱星海魔道枭雄。阴险毒辣，虚渊大殿中多次算计韩立，后被韩立反杀。', tags: ['乱星海大敌', '阴毒', '天都尸火'], color: 'text-blood', bg: 'bg-blood' },
    { id: 'mocai', name: '墨彩环', title: '彩环', race: '人族 (凡人)', realm: '无', faction: '墨府', relation: '伴侣/红颜', desc: '墨大夫之女。因没有灵根无法修仙，与韩立仙凡两隔，成为韩立心中长久的遗憾。仙界篇轮回再续前缘。', tags: ['仙凡之别', '白月光', '意难平'], color: 'text-wood', bg: 'bg-wood' },
    { id: 'li', name: '李化元', title: '李师叔', race: '人族', realm: '结丹期', faction: '黄枫谷', relation: '师长/前辈', desc: '韩立的记名师傅。虽有私心，但也给了韩立庇护和功法指引。魔道入侵时战死。', tags: ['黄枫谷师傅', '护短', '陨落'], color: 'text-spirit', bg: 'bg-spirit' },
];

const FILTERS = ['全部', '主角', '伴侣/红颜', '挚友/同伴', '师长/前辈', '对手/反派'];

const CharacterGraph = () => {
    // SVG based connection graph simulating relationship network
    return (
        <div className="relative w-full h-[600px] bg-paper/30 dark:bg-paper-dark/30 rounded-xl border border-ink-fade overflow-hidden mb-20 flex items-center justify-center p-4">
            <div className="absolute inset-0 z-0 bg-ink-splash opacity-5 dark:opacity-[0.02]" />

            <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" viewBox="0 0 1000 600">
                <defs>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* Connection Lines */}
                {/* Hanli to Nangong */}
                <line x1="500" y1="300" x2="350" y2="200" stroke="#8b2500" strokeWidth="2" strokeDasharray="5,5" className="opacity-60" />
                {/* Hanli to Ziling */}
                <line x1="500" y1="300" x2="650" y2="180" stroke="#6b4c9a" strokeWidth="2" strokeDasharray="5,5" className="opacity-60" />
                {/* Hanli to Li Feiyu */}
                <line x1="500" y1="300" x2="300" y2="400" stroke="#a8c8e0" strokeWidth="2" className="opacity-80" />
                {/* Hanli to Mo Daifu */}
                <line x1="500" y1="300" x2="680" y2="420" stroke="#c5973e" strokeWidth="2" className="opacity-80" />
                {/* Hanli to Dayan */}
                <line x1="500" y1="300" x2="500" y2="100" stroke="#c5973e" strokeWidth="2" className="opacity-80" />
                {/* Hanli to Jiyin */}
                <line x1="500" y1="300" x2="800" y2="300" stroke="#ff0000" strokeWidth="2" strokeDasharray="2,2" className="opacity-60" />
            </svg>

            {/* Nodes mapping roughly to SVG coords */}
            <div className="relative w-full max-w-[1000px] h-full z-20">
                <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-paper border-4 border-primary shadow-[0_0_20px_rgba(197,151,62,0.6)] flex items-center justify-center font-title text-xl font-bold z-30">韩立</div>
                </div>

                <div className="absolute left-[35%] top-[33.3%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-paper border-2 border-blood flex items-center justify-center font-title text-blood shadow-sm group-hover:scale-110 transition-transform z-30">南宫婉</div>
                    <span className="text-xs mt-1 bg-paper/80 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">道侣 正妻</span>
                </div>

                <div className="absolute left-[65%] top-[30%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-paper border-2 border-tribulation flex items-center justify-center font-title text-tribulation shadow-sm group-hover:scale-110 transition-transform z-30">紫灵</div>
                    <span className="text-xs mt-1 bg-paper/80 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">红颜知己 纠葛深</span>
                </div>

                <div className="absolute left-[30%] top-[66.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-paper border-2 border-sword flex items-center justify-center font-title text-sword shadow-sm group-hover:scale-110 transition-transform z-30">厉飞雨</div>
                    <span className="text-xs mt-1 bg-paper/80 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">唯一真知己</span>
                </div>

                <div className="absolute left-[68%] top-[70%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-paper border-2 border-wood flex items-center justify-center font-title text-wood shadow-sm group-hover:scale-110 transition-transform z-30">墨大夫</div>
                    <span className="text-xs mt-1 bg-paper/80 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">启蒙恩师 夺舍</span>
                </div>

                <div className="absolute left-[50%] top-[16.6%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-paper border-2 border-primary/50 flex items-center justify-center font-title text-ink-muted shadow-sm group-hover:scale-110 transition-transform z-30">大衍神君</div>
                    <span className="text-xs mt-1 bg-paper/80 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">半师半友</span>
                </div>

                <div className="absolute left-[80%] top-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group cursor-pointer">
                    <div className="w-16 h-16 rounded-full bg-paper border-2 border-blood border-dashed flex items-center justify-center font-title text-blood shadow-sm group-hover:scale-110 transition-transform z-30">极阴</div>
                    <span className="text-xs mt-1 bg-paper/80 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">死敌</span>
                </div>
            </div>

            {/* Legend */}
            <div className="absolute bottom-4 left-4 bg-paper/80 dark:bg-paper-dark/80 p-3 rounded text-xs border border-ink-fade font-sans">
                <div className="flex items-center gap-2 mb-1"><div className="w-3 h-0.5 bg-[#8b2500] border-dashed" /> 红颜/道侣</div>
                <div className="flex items-center gap-2 mb-1"><div className="w-3 h-0.5 bg-[#a8c8e0]" /> 挚友</div>
                <div className="flex items-center gap-2 mb-1"><div className="w-3 h-0.5 bg-[#c5973e]" /> 师恩录传承</div>
                <div className="flex items-center gap-2"><div className="w-3 h-0.5 bg-[#ff0000] border-dashed" /> 敌对</div>
            </div>

            <div className="absolute top-4 right-4 text-ink-muted font-sans text-sm opacity-50 pointer-events-none">
                * 图谱为简化版示例
            </div>
        </div>
    );
};

const Characters = () => {
    const [filter, setFilter] = useState('全部');

    const filteredChars = filter === '全部' ? CHARACTERS : CHARACTERS.filter(c => c.relation === filter);

    return (
        <section id="characters" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4 drop-shadow-sm">
                    『 人物志 · 修仙路上的过客与知己 』
                </h2>
                <p className="text-lg text-ink-muted font-sans max-w-2xl mx-auto">
                    长生路上尸骨寒，修仙界中无善类。唯有那零星几人，化作漫漫长路的一丝暖意。
                </p>
                <div className="w-16 h-px bg-primary mx-auto mt-6 opacity-50" />
            </motion.div>

            {/* Relationship Graph SVG */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <h3 className="text-2xl font-title text-ink dark:text-ink-dark mb-6 text-center" id="relations">核心人物关系网</h3>
                <CharacterGraph />
            </motion.div>

            {/* Filters */}
            <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mb-10">
                <Filter className="w-5 h-5 text-ink-muted mr-2 hidden sm:block" />
                {FILTERS.map(f => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={cn(
                            "px-4 py-1.5 rounded-full text-sm font-bold transition-colors border",
                            filter === f
                                ? "bg-ink dark:bg-ink-dark text-paper dark:text-paper-dark border-transparent"
                                : "bg-transparent text-ink-muted border-ink-fade hover:border-ink/50"
                        )}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <AnimatePresence>
                    {filteredChars.map((char) => (
                        <motion.div
                            layout
                            key={char.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                            transition={{ duration: 0.4 }}
                            className="relative p-6 rounded-xl bg-paper/50 dark:bg-paper-dark/50 border border-ink-fade/60 overflow-hidden group hover:shadow-lg transition-all"
                        >
                            {/* Background abstract element mapping to realm/color */}
                            <div className={cn("absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-10 blur-2xl group-hover:opacity-20 transition-opacity", char.bg)} />

                            <div className="flex items-start justify-between border-b border-ink-fade pb-4 mb-4">
                                <div className="flex items-center gap-4">
                                    <div className={cn("w-12 h-12 rounded-full flex items-center justify-center text-paper font-title text-2xl drop-shadow-md", char.bg)}>
                                        {char.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="font-title text-xl text-ink dark:text-ink-dark">{char.name}</h4>
                                        <span className="text-xs text-ink-muted">{char.title}</span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className={cn("text-xs px-2 py-0.5 rounded font-bold border", char.color, 'border-current opacity-70')}>{char.relation}</span>
                                    <span className="text-[10px] text-ink-muted">{char.realm}</span>
                                </div>
                            </div>

                            <div className="text-sm font-sans text-ink/80 dark:text-ink-dark/80 min-h-[5rem] mb-4">
                                {char.desc}
                            </div>

                            <div className="flex flex-wrap gap-1 mt-auto">
                                {char.tags.map(tag => (
                                    <span key={tag} className="text-[10px] bg-ink/5 dark:bg-ink-dark/10 px-2 py-1 rounded text-ink-muted">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </section>
    );
};

export default Characters;
