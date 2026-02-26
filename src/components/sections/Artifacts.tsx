import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sword, Book, FlaskConical, Diamond } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type Artifact = {
    name: string;
    type: string;
    source: string;
    desc: string;
    moment: string;
    color: string;
};

const MAIN_ARTIFACTS: Artifact[] = [
    { name: '神秘小瓶 (小绿瓶)', type: '至高仙器 / 造化之物', source: '七玄门外山谷捡取', desc: '全书核心金手指。可吸收月光凝聚绿液，无视年份催熟一切灵草灵药，甚至能改变法则。', moment: '无数次救韩立于水火，助他炼丹突破、培育噬金虫与雷竹。', color: 'text-spirit border-spirit/40' },
    { name: '青竹蜂云剑', type: '本命法宝 / 飞剑成套', source: '天雷竹炼制', desc: '韩立的标志性法宝。由极其珍稀的天雷竹炼制成七十二口飞剑，可释放辟邪神雷克制魔道妖物，最终剑阵合一。', moment: '大庚剑阵、春黎剑阵多次越阶杀敌；仙界篇融合法则成为斩杀道祖的利器。', color: 'text-sword border-sword/40' },
    { name: '噬金虫 (候金虫)', type: '奇虫榜第一 / 灵虫', source: '乱星海培育', desc: '无物不吞，水火不侵，抗击打能力极强。成群结队如金色浪潮，修仙界闻风丧胆。', moment: '历经六翼霜蜈、噬金虫群、最终进化为噬金仙，成为韩立最强大的助力之一。', color: 'text-primary border-primary/40' },
    { name: '玄天斩灵剑', type: '玄天之宝', source: '灵界玄天仙藤结出', desc: '法则之宝，蕴含毁灭性的空间法则。挥出一剑，天地变色，可斩断万物。', moment: '灵界最终一战，韩立手持此剑，斩杀各族大乘期强者，威震百族。', color: 'text-tribulation border-tribulation/40' },
];

const SKILLS: Artifact[] = [
    { name: '长春功', type: '木属性基础功法', source: '七玄门墨大夫传授', desc: '入门功法，修炼极慢，附带一些基础木系法术。', moment: '韩立的倒霉开局，受制于资质极差，几乎无法寸进。', color: 'text-wood border-wood/30' },
    { name: '大衍决', type: '神识秘术 / 核心功法', source: '极西之地千竹教 / 大衍神君', desc: '专门壮大神识、操控傀儡的逆天功法。韩立借此神识远超同阶，甚至可以分神多用。', moment: '配合剑阵与傀儡，让韩立在同阶中几乎立于不败之地。', color: 'text-ink-muted dark:text-ink-dark border-ink-fade' },
    { name: '明王决 / 梵圣真魔功', type: '炼体神功', source: '妖族 / 魔界', desc: '内外兼修的顶级炼体功法，修成后肉身强悍无匹，可硬撼法宝。三头六臂法相极具压迫感。', moment: '让人族修士韩立拥有了比妖魔更可怕的肉身搏杀能力。', color: 'text-blood border-blood/40' },
    { name: '大天造化诀 (时间法则)', type: '仙界至高功法', source: '真言门 / 弥罗老祖', desc: '仙界篇核心。修炼三大至尊法则之一的时间法则，可逆转光阴、静止时间。', moment: '韩立借此证位时间道祖，终结轮回的宿命。', color: 'text-white border-white/40' },
];

const ItemSection = ({ title, items, icon: Icon }: { title: string, items: Artifact[], icon: React.ElementType }) => (
    <div className="mb-20">
        <div className="flex items-center justify-center gap-3 mb-10">
            <Icon className="w-8 h-8 text-primary" />
            <h3 className="text-3xl font-title text-ink dark:text-ink-dark">{title}</h3>
            <Icon className="w-8 h-8 text-primary" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, i) => (
                <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={cn(
                        "p-6 rounded-lg bg-paper/40 dark:bg-paper-dark/40 border backdrop-blur transition-all duration-300 group",
                        item.color.split(' ')[1], // Use the border color class
                        "hover:bg-paper/80 dark:hover:bg-paper-dark/80 hover:shadow-lg relative overflow-hidden"
                    )}
                >
                    {/* Subtle flare effect */}
                    <div className="absolute -inset-full animate-[spin_8s_linear_infinite] opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-1000"
                        style={{ background: 'conic-gradient(from 0deg, transparent 0 340deg, currentColor 360deg)' }}
                    />

                    <div className="flex justify-between items-start mb-4 relative z-10">
                        <h4 className={cn("text-2xl font-title drop-shadow-sm", item.color.split(' ')[0])}>{item.name}</h4>
                        <span className="text-xs px-2 py-1 bg-ink/5 dark:bg-ink-dark/10 rounded font-bold border border-ink-fade">{item.type}</span>
                    </div>

                    <div className="space-y-3 font-sans relative z-10">
                        <p className="text-sm text-ink-muted dark:text-ink-dark/60 leading-relaxed border-l-2 pl-3 border-ink-fade">{item.desc}</p>
                        <div className="flex gap-2 text-xs">
                            <span className="font-bold text-ink/70 dark:text-ink-dark/70 shrink-0">渊源:</span>
                            <span className="text-primary/90">{item.source}</span>
                        </div>
                        <div className="flex gap-2 text-xs">
                            <span className="font-bold text-ink/70 dark:text-ink-dark/70 shrink-0">高光:</span>
                            <span className="text-ink/80 dark:text-ink-dark/80 italic">{item.moment}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const Artifacts = () => {
    return (
        <section id="artifacts" className="relative py-24 px-4 sm:px-8 max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4 drop-shadow-sm">
                    『 法宝录与功法篇 』
                </h2>
                <p className="text-lg text-ink-muted font-sans max-w-2xl mx-auto">
                    修仙之人，财侣法地缺一不可。机缘与利器，是斩妖除魔的底气。
                </p>
                <div className="w-16 h-px bg-primary mx-auto mt-6 opacity-50" />
            </motion.div>

            <ItemSection title="标志性法宝与遗宝" items={MAIN_ARTIFACTS} icon={Sword} />
            <ItemSection title="核心功法与秘术" items={SKILLS} icon={Book} />

            {/* Other minor sub-sections could be added here (pills, stones) */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-8 mt-12 py-8 border-t border-ink-fade/50 text-ink-muted dark:text-ink-dark/50"
            >
                <div className="flex items-center gap-2"><FlaskConical className="w-5 h-5 text-spirit" /> 丹药体系：筑基丹、黄龙丹、金髓丸等</div>
                <div className="flex items-center gap-2"><Diamond className="w-5 h-5 text-sword" /> 灵石体系：下品、中品、上品、极品灵石</div>
            </motion.div>
        </section>
    );
};

export default Artifacts;
