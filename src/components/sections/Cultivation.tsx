import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Zap, Flame, Infinity } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type Realm = {
    name: string;
    desc: string;
    lifespan: string;
    features: string;
    hanli: string;
    color: string;
    icon: React.ElementType;
};

const MORTAL_REALMS: Realm[] = [
    { name: '炼气期', desc: '修仙入门，分十三层。感应天地灵气，引气入体。', lifespan: '百余岁', features: '可使用基础法术、低阶法器，辟谷有一定效果', hanli: '七玄门入门，修炼长春功，服用筑基丹前极为艰难的积累', color: 'text-wood var(--wood)', icon: Sparkles },
    { name: '筑基期', desc: '修仙之基，分初、中、后三期。寿命大增，可御剑飞行。', lifespan: '两百余岁', features: '丹田液化，灵力大增，可开辟洞府，真正踏入修仙界', hanli: '黄枫谷时期，血色试炼大丰收，修仙路上第一个关键跳板', color: 'text-spirit var(--spirit)', icon: Sparkles },
    { name: '结丹期', desc: '凝结金丹于丹田，实力发生质变。', lifespan: '五六百岁', features: '可炼制本命法宝，寿元数倍于常人，成为一派长老级别', hanli: '乱星海隐姓埋名历练，结交多方势力，最终海域结丹', color: 'text-primary var(--primary)', icon: Sparkles },
    { name: '元婴期', desc: '金丹碎而元婴出，元神离体不死。可瞬移，沟通天地之力。', lifespan: '千余岁', features: '元神出窍，具备毁天灭地的威能，人界顶尖人物', hanli: '重返天南，名震一方。大晋修仙界纵横，搜集五行材料', color: 'text-tribulation var(--tribulation)', icon: Zap },
    { name: '化神期', desc: '元婴化神，可初步领悟天地法则，撕裂空间。', lifespan: '两千余岁', features: '人界巅峰战力，极少露面，大多在寻求飞升的途径', hanli: '修补空间节点，飞升灵界前的人界第一人', color: 'text-tribulation var(--tribulation)', icon: Zap },
    { name: '炼虚期', desc: '元神返璞归真，初步掌握五行之力，可调动天地法则。', lifespan: '更长（面临天劫考验）', features: '必须挺过一次次威力骤增的小天劫，稍有不慎灰飞烟灭', hanli: '灵界人妖两族中坚力量，探索上古遗迹的重要战力', color: 'text-blood var(--blood)', icon: Flame },
    { name: '合体期', desc: '元婴与肉身合二为一，天人合一。', lifespan: '极长', features: '能身化万千，灵界真正的高层掌权者', hanli: '大乘期前的最终过渡，多次越阶战杀强敌', color: 'text-sword var(--sword)', icon: Zap },
    { name: '大乘期', desc: '下界（人、灵两界）修仙的巅峰，神识通天彻地。', lifespan: '万年以上', features: '法力近乎无尽，可自创法则雏形，只待渡飞升天劫', hanli: '灵界无敌，统领群雄，准备飞升仙界所需的玄天之宝', color: 'text-primary var(--primary)', icon: Infinity },
    { name: '渡劫期', desc: '渡过飞升大天劫。', lifespan: '飞升之路', features: '天雷洗体，脱胎换骨，转化为仙灵之躯', hanli: '历经生死大劫，成功飞升北寒仙域，跨入仙界', color: 'text-[#e6c981] var(--gold)', icon: Zap },
];

const IMMORTAL_REALMS: Realm[] = [
    { name: '真仙 / 仙人', desc: '飞升仙界后的起始', lifespan: '永生（受天衰限制）', features: '将体内灵力完全转化为仙灵力', hanli: '初入仙界，仙元石匮乏，重修功法，步履维艰', color: 'text-spirit var(--spirit)', icon: Sparkles },
    { name: '玄仙 / 金仙', desc: '仙界中坚', lifespan: '受法则反噬限制', features: '凝聚法则之丝，掌握一定的大道法则', hanli: '修炼《大天造化诀》，探索时间法则的奥秘', color: 'text-primary var(--primary)', icon: Flame },
    { name: '太乙 / 大罗金仙', desc: '近乎至高的存在', lifespan: '寿与天齐', features: '身合大道，举手投足改变一方天地规则', hanli: '大罗之战，对抗天庭道祖，斩尸成仙', color: 'text-tribulation var(--tribulation)', icon: Zap },
    { name: '道祖', desc: '仙界至高存在，万界敬仰。', lifespan: '亘古不灭', features: '完全执掌一种大道（如时间、空间、轮回），本源不灭即不死', hanli: '成就时间道祖，超越轮回，到达修炼的尽头', color: 'text-white', icon: Infinity },
];

const RealmLadder = ({ realms, reversed = false }: { realms: Realm[], reversed?: boolean }) => {
    const displayRealms = reversed ? [...realms].reverse() : realms;

    return (
        <div className="relative py-10 w-full max-w-4xl mx-auto pl-4 sm:pl-0">
            {/* Vertical Connection Line */}
            <div className="absolute left-[24px] sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-primary/5 via-primary/30 to-primary/5 sm:-translate-x-1/2 rounded-full" />

            {displayRealms.map((realm, index) => (
                <motion.div
                    key={realm.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 * (index % 5) }}
                    className={cn(
                        "relative flex items-center mb-12 sm:mb-20 last:mb-0",
                        index % 2 === 0 ? "sm:flex-row-reverse" : "sm:flex-row"
                    )}
                >
                    {/* Timeline Center Node */}
                    <div className="absolute left-0 sm:left-1/2 w-12 h-12 -translate-x-1/2 rounded-full bg-paper dark:bg-paper-dark border-4 border-primary/40 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(197,151,62,0.3)]">
                        <realm.icon className={cn("w-5 h-5", realm.color.split(' ')[0])} />
                    </div>

                    <div className="w-full sm:w-1/2 pl-12 sm:pl-0 sm:px-12">
                        <div className={cn(
                            "p-6 rounded-lg bg-paper/60 dark:bg-paper-dark/60 backdrop-blur border border-ink/5 dark:border-ink-dark/10 shadow-lg hover:shadow-xl hover:bg-paper/80 dark:hover:bg-paper-dark/80 transition-all duration-300",
                            index % 2 === 0 ? "sm:text-right" : "sm:text-left"
                        )}>
                            <h3 className={cn("text-2xl font-title mb-2 drop-shadow-sm", realm.color.split(' ')[0])}>
                                {realm.name}
                            </h3>
                            <p className="text-sm font-sans text-ink-muted dark:text-ink-dark/60 mb-4">{realm.desc}</p>

                            <div className="space-y-2 text-sm">
                                <div className={cn("flex gap-2 text-left", index % 2 === 0 ? "sm:flex-row-reverse sm:text-right" : "")}>
                                    <span className="shrink-0 px-2 py-0.5 bg-ink/5 dark:bg-ink-dark/10 rounded font-bold">寿元</span>
                                    <span className="text-ink/80 dark:text-ink-dark/80">{realm.lifespan}</span>
                                </div>
                                <div className={cn("flex gap-2 text-left", index % 2 === 0 ? "sm:flex-row-reverse sm:text-right" : "")}>
                                    <span className="shrink-0 px-2 py-0.5 bg-ink/5 dark:bg-ink-dark/10 rounded font-bold">特征</span>
                                    <span className="text-ink/80 dark:text-ink-dark/80">{realm.features}</span>
                                </div>
                                <div className={cn("flex gap-2 text-left mt-3 pt-3 border-t border-ink-fade", index % 2 === 0 ? "sm:flex-row-reverse sm:text-right" : "")}>
                                    <span className="shrink-0 px-2 py-0.5 bg-primary/10 text-primary rounded font-bold">韩立履历</span>
                                    <span className="text-ink-muted dark:text-ink-dark/70 italic">{realm.hanli}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

const Cultivation = () => {
    const [activeTab, setActiveTab] = useState<'mortal' | 'immortal'>('mortal');

    return (
        <section id="cultivation" className="relative py-24 px-4 sm:px-8 bg-wood/5 dark:bg-black/20 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4 drop-shadow-sm">
                        『 修炼境界 · 大道无极 』
                    </h2>
                    <p className="text-lg text-ink-muted font-sans max-w-2xl mx-auto mb-8">
                        欲上九天揽月，须踏万里荆棘。修仙本是逆天行事。
                    </p>

                    <div className="flex justify-center gap-4">
                        <button
                            onClick={() => setActiveTab('mortal')}
                            className={cn(
                                "px-8 py-3 rounded-full font-title text-xl transition-all duration-300 border-2",
                                activeTab === 'mortal'
                                    ? "bg-primary text-paper border-primary shadow-[0_0_15px_rgba(197,151,62,0.4)]"
                                    : "bg-transparent text-ink/70 dark:text-ink-dark/70 border-ink/20 hover:border-primary/50"
                            )}
                        >
                            人界/灵界
                        </button>
                        <button
                            onClick={() => setActiveTab('immortal')}
                            className={cn(
                                "px-8 py-3 rounded-full font-title text-xl transition-all duration-300 border-2",
                                activeTab === 'immortal'
                                    ? "bg-tribulation text-paper border-tribulation shadow-[0_0_15px_rgba(107,76,154,0.4)]"
                                    : "bg-transparent text-ink/70 dark:text-ink-dark/70 border-ink/20 hover:border-tribulation/50"
                            )}
                        >
                            真仙界
                        </button>
                    </div>
                </motion.div>

                <AnimatePresence mode='wait'>
                    {activeTab === 'mortal' ? (
                        <motion.div
                            key="mortal"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center mb-8 font-title text-2xl text-ink-muted flex flex-col items-center">
                                <span>凡人登天阶梯</span>
                                <span className="text-sm mt-2 opacity-60">从上至下为修仙境界之升华</span>
                            </div>
                            <RealmLadder realms={MORTAL_REALMS} reversed={true} />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="immortal"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center mb-8 font-title text-2xl text-tribulation/80 flex flex-col items-center">
                                <span>仙界成祖之路</span>
                                <span className="text-sm mt-2 opacity-60 text-ink-muted">大道争锋，法则为尊</span>
                            </div>
                            <RealmLadder realms={IMMORTAL_REALMS} reversed={true} />
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </section>
    );
};

export default Cultivation;
