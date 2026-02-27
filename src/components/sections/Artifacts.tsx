import React from 'react';
import { motion } from 'framer-motion';
import { Sword, Book, FlaskConical, Diamond, Shield, Zap } from 'lucide-react';
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
    { name: '掌天瓶 (小绿瓶)', type: '至高仙器 / 造化之物', source: '七玄门外山谷捡取', desc: '全书核心金手指。本身是仙界九元观镇观之宝，流落人界被韩立所得。可吸收月光凝聚绿液，无视年份催熟一切灵草灵药，内部更蕴含玄天斩灵剑遗存法则与穿梭时空之能。', moment: '无数次救韩立于水火，助他炼丹突破；后期凭借穿梭时空回到过去，补全时间法则。', color: 'text-spirit border-spirit/40' },
    { name: '青竹蜂云剑', type: '本命法宝 / 飞剑成套', source: '天雷竹炼制', desc: '韩立的标志性法宝。由极其珍稀的三大灵木之一天雷竹炼制成七十二口飞剑，可释放辟邪神雷克制魔道妖物。', moment: '大庚剑阵、春黎剑阵多次越阶杀敌；仙界篇融合法则成为斩杀道祖的利器。', color: 'text-sword border-sword/40' },
    { name: '虚天鼎', type: '乱星海第一秘宝', source: '虚渊大殿探宝所得', desc: '蕴含极寒之焰“乾蓝冰焰”，鼎内存放补天丹。不仅是极强的防御法宝，还可用来收摄敌人、辅助炼丹炼器。', moment: '元婴期多次用来防御必杀之击，是人界篇韩立手中最顶级的古宝。', color: 'text-paper dark:text-ink-dark border-ink-fade' },
    { name: '八灵尺', type: '灵界灵宝', source: '昆吾山探秘', desc: '上古时期威震昆吾山的顶级灵宝，蕴含空间法则之力。不仅能困敌锁阵，还能释放出八只强大灵兽虚影助阵。', moment: '人界篇后期及初入灵界时的重要依仗，多次化解危局。', color: 'text-wood border-wood/40' },
    { name: '玄天斩灵剑', type: '玄天之宝', source: '灵界玄天仙藤结出', desc: '界面孕育的法则之宝，蕴含毁灭性的空间法则。挥出一剑，天地变色，无坚不摧，可斩断万物甚至法则之丝。', moment: '灵界最终魔劫之战，韩立手持此剑，斩杀各族大乘期强者，威震百族，奠定灵界第一人地位。', color: 'text-tribulation border-tribulation/40' },
    { name: '罗吒琵琶', type: '魔界圣器', source: '魔界副本', desc: '蕴含极速与切割法则，弹奏间可释放出极其锐利的空间裂缝，威力绝伦。', moment: '仙界篇中作为极其锋锐的攻击手段，多次切割强敌防御。', color: 'text-blood border-blood/40' },
];

const SKILLS: Artifact[] = [
    { name: '长春功', type: '木属性基础功法', source: '七玄门墨大夫传授', desc: '入门功法，修炼极慢，附带一些基础木系法术。虽然低级，但却是韩立走上修仙之路的起点。', moment: '韩立的倒霉开局，受制于资质极差，几乎无法寸进，直到开始喝绿液催熟的灵药。', color: 'text-wood border-wood/30' },
    { name: '大衍决', type: '神识秘术 / 核心功法', source: '千竹教 / 大衍神君', desc: '专门壮大神识、操控傀儡的逆天功法。韩立借此神识远超同阶，甚至可以分神数百使用剑阵与傀儡。', moment: '配合七十二口飞剑组成大庚剑阵，没有大衍决的神识支撑绝无可能。', color: 'text-primary border-primary/40' },
    { name: '明王决 / 梵圣真魔功', type: '人魔妖合一炼体神功', source: '妖族 / 魔界', desc: '融合佛宗明王诀、魔族梵圣魔功与妖族托天魔功于一体的顶级炼体功法，修成后肉身强悍无匹，可硬撼法宝。三头六臂法相极具压迫感。', moment: '让人族修士韩立拥有了比妖魔更可怕的肉身搏杀能力，近战几乎无敌。', color: 'text-blood border-blood/40' },
    { name: '炼神术', type: '仙界禁术', source: '仙界副本寻得', desc: '仙界神识秘术，修炼后神识暴增，但会引发极大痛苦与反噬。', moment: '在仙界多次遭遇强敌大乱斗时，凭借超强神识洞察秋毫，抢夺先机。', color: 'text-tribulation border-tribulation/40' },
    { name: '破灭法目 / 真实之眼', type: '瞳术天赋', source: '炼化多种灵液与异兽双目', desc: '从最初的明清灵水，到后期的星海巨兽之眼，韩立的瞳术一再升级，可看穿虚伪、幻象，甚至直接攻击敌人神魂。', moment: '无数次勘破敌人的隐匿阵法与致命陷阱，是韩立“保命第一”理念的核心技能体现。', color: 'text-spirit border-spirit/40' },
    { name: '大天造化诀 (时间法则)', type: '仙界至高功法', source: '真言门 / 弥罗老祖', desc: '仙界篇核心。修炼三大至尊法则之一的时间法则，可衍生真言宝轮、光阴净瓶、幻辰沙等，最终可逆转光阴、静止时间。', moment: '韩立借此历经无数纪元苦修，最终证位时间道祖，终结古或今的轮回宿命。', color: 'text-white border-ink-fade bg-ink dark:bg-transparent' },
];

const MONSTERS: Artifact[] = [
    { name: '噬金虫 (候金虫)', type: '奇虫榜第一', source: '乱星海培育', desc: '水火不侵，万物皆法抗，无物不吞。成群结队如金色浪潮，修仙界闻风丧胆。最终进化为噬金仙。', moment: '啃噬各种坚不可摧的法宝和阵法，韩立的王牌军团。', color: 'text-primary border-primary/40' },
    { name: '啼魂兽', type: '刑兽后裔 / 鬼道煞星', source: '乱星海异渊', desc: '专克各种阴魂恶鬼、尸煞邪物。成长后化为绝色少女，在冥界大放异彩。', moment: '人界遭遇各种极阴老怪物时，啼魂一出，阴尸邪魅灰飞烟灭。', color: 'text-ink-dark border-ink-dark/40' },
    { name: '九曲灵参', type: '天地灵物', source: '虚天殿带出', desc: '不仅是至极灵药，后更修炼成妖修本体（曲儿），拥有极为强大的木属性天赋。', moment: '为韩立炼制高级丹药提供了无可替代的灵药胚子。', color: 'text-wood border-wood/40' },
]

const ItemSection = ({ title, items, icon: Icon }: { title: string, items: Artifact[], icon: React.ElementType }) => (
    <div className="mb-24">
        <div className="flex items-center justify-center gap-3 mb-10">
            <Icon className="w-8 h-8 text-primary opacity-80" />
            <h3 className="text-3xl font-title text-ink dark:text-ink-dark tracking-wider">{title}</h3>
            <Icon className="w-8 h-8 text-primary opacity-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
                <motion.div
                    key={item.name}
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={cn(
                        "p-6 rounded-xl bg-paper/60 dark:bg-paper-dark/60 border backdrop-blur-md transition-all duration-300 group flex flex-col",
                        item.color.split(' ')[1], // Use the border color class
                        "hover:bg-paper dark:hover:bg-paper-dark hover:shadow-xl relative overflow-hidden"
                    )}
                >
                    {/* Subtle flare effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 md:-top-16 md:-right-16 md:w-48 md:h-48 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-700 pointer-events-none"
                        style={{ backgroundColor: 'currentColor', color: `var(--${item.color.split('-')[1]})` }}
                    />

                    <div className="flex flex-col mb-4 relative z-10">
                        <h4 className={cn("text-xl md:text-2xl font-title drop-shadow-sm mb-2", item.color.split(' ')[0])}>{item.name}</h4>
                        <span className="text-[10px] md:text-xs px-2 py-1 bg-ink/5 dark:bg-ink-dark/10 rounded font-bold border border-ink-fade self-start">{item.type}</span>
                    </div>

                    <div className="space-y-4 font-sans relative z-10 flex-grow text-sm">
                        <p className="text-ink-muted dark:text-ink-dark/70 leading-relaxed border-l-[3px] pl-3 border-ink-fade/50">{item.desc}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-ink-fade/30 relative z-10 space-y-2 text-xs">
                        <div className="flex gap-2 items-start">
                            <span className="font-bold text-ink/70 dark:text-ink-dark/70 shrink-0 bg-ink/5 dark:bg-ink-dark/10 px-1 rounded">渊源:</span>
                            <span className="text-primary/90">{item.source}</span>
                        </div>
                        <div className="flex gap-2 items-start">
                            <span className="font-bold text-ink/70 dark:text-ink-dark/70 shrink-0 bg-ink/5 dark:bg-ink-dark/10 px-1 rounded">高光:</span>
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
        <section id="artifacts" className="relative py-24 px-4 sm:px-8 max-w-[1400px] mx-auto bg-wood/5 dark:bg-black/20 rounded-3xl mb-24 overflow-hidden border border-ink-fade/30 shadow-inner">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none z-0" />
            <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sword/5 via-transparent to-transparent pointer-events-none z-0" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-20 relative z-10"
            >
                <h2 className="text-4xl sm:text-5xl font-title text-ink dark:text-ink-dark mb-4 drop-shadow-sm">
                    『 法宝录 · 功法篇 · 灵兽谱 』
                </h2>
                <p className="text-lg text-ink-muted font-sans max-w-3xl mx-auto">
                    修仙之人，财、侣、法、地缺一不可。机缘所至的至宝、苦修积累的功法、以及那些忠心不二的灵兽，铸就了韩天尊的不败神话。
                </p>
                <div className="w-24 h-px bg-primary mx-auto mt-8 opacity-50" />
            </motion.div>

            <div className="relative z-10">
                <ItemSection title="夺天地造化之至宝与法器" items={MAIN_ARTIFACTS} icon={Sword} />
                <ItemSection title="参悟大道之核心功法与秘术" items={SKILLS} icon={Book} />
                <ItemSection title="相伴万载之奇虫与灵兽" items={MONSTERS} icon={Shield} />

                {/* Other minor sub-sections */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12 mt-16 py-8 border-t border-ink-fade text-ink-muted font-sans text-sm"
                >
                    <div className="flex items-center gap-2 px-6 py-3 bg-paper/50 dark:bg-paper-dark/50 rounded-full border border-ink-fade/50">
                        <FlaskConical className="w-5 h-5 text-spirit" />
                        <span><strong className="text-ink dark:text-ink-dark">灵药体系：</strong>黄龙丹、筑基丹、金髓丸、造化丹</span>
                    </div>
                    <div className="flex items-center gap-2 px-6 py-3 bg-paper/50 dark:bg-paper-dark/50 rounded-full border border-ink-fade/50">
                        <Diamond className="w-5 h-5 text-sword" />
                        <span><strong className="text-ink dark:text-ink-dark">交易等阶：</strong>下品/中品/上品灵石、极品灵石、仙元石</span>
                    </div>
                    <div className="flex items-center gap-2 px-6 py-3 bg-paper/50 dark:bg-paper-dark/50 rounded-full border border-ink-fade/50">
                        <Zap className="w-5 h-5 text-tribulation" />
                        <span><strong className="text-ink dark:text-ink-dark">符箓阵法：</strong>太一化清符、万剑图、九天微尘阵</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Artifacts;
