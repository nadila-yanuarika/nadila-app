import {
    Code2,
    Database,
    Palette,
    Users,
    MessageSquare,
    Lightbulb,
    Clock3,
    Server,
    Globe,
    Network
} from "lucide-react";
import {
    SiHtml5,
    SiCss,
    SiJavascript,
    SiPhp,
    SiMysql,
    SiReact,
    SiNodedotjs,
    SiFigma,
} from "react-icons/si";

const expertise = [
    {
        name: "Software Development",
        icon: Code2,
    },
    {
        name: "Information Systems",
        icon: Database,
    },
    {
        name: "Computer Networks",
        icon: Server,
    },
    {
        name: "Web Development",
        icon: Code2,
    },
];

const techStack = [
    { icon: SiHtml5, name: "HTML" },
    { icon: SiCss, name: "CSS" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiPhp, name: "PHP" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiFigma, name: "Figma" },
];

const softSkills = [
    {
        name: "Leadership",
        icon: Users,
    },
    {
        name: "Communication",
        icon: MessageSquare,
    },
    {
        name: "Teamwork",
        icon: Users,
    },
    {
        name: "Problem Solving",
        icon: Lightbulb,
    },
    {
        name: "Time Management",
        icon: Clock3,
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="min-h-screen bg-[#f7f3ed] px-8 lg:px-20 pt-40 lg:pt-40"
        >
            <div className="max-w-375 mx-auto">

                {/* Label */}
                <p className="uppercase tracking-[0.3em] text-[#8b5e47] text-sm">
                    Skills
                </p>

                {/* Heading */}
                <h2
                    className="font-(family-name:--font-cormorant) text-[#3f241b] text-[55px] leading-none mt-6"
                >
                   Kompetensi dan teknologi yang saya kuasai.
                </h2>

                <div className="flex flex-col lg:flex-row gap-14 mt-20">

                    {/* LEFT */}
                    <div className="lg:w-3/5">
                        {/* AREA OF EXPERTISE */}
                        <div>
                            <p className="uppercase text-[#8b7768] tracking-widest text-sm mb-8">
                                Area of Expertise
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {expertise.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.name}
                                            className="bg-[#fbf8f4] border border-[#e6dbcf] rounded-4xl p-6"
                                        >
                                            <div className="flex items-center gap-4">
                                                <Icon
                                                    className="text-[#8b5e47]"
                                                    size={24}
                                                />

                                                <h3 className="text-[#3f241b] text-lg">
                                                    {item.name}
                                                </h3>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* TECH STACK */}
                        <div className="mt-12">

                            <p className="uppercase text-[#8b7768] tracking-widest text-sm mb-8">
                                Tech Stack
                            </p>

                            <div className="overflow-hidden bg-[#fbf8f4] border border-[#e6dbcf] rounded-4xl py-8">
                                <div className="flex flex-nowrap gap-4 animate-marquee">
                                    {[...techStack, ...techStack, ...techStack].map((tech, index) => {
                                        const Icon = tech.icon;

                                        return (
                                            <div
                                                key={index}
                                                className="flex flex-col items-center gap-3 min-w-20"
                                            >
                                                <Icon
                                                    size={42}
                                                    className="text-[#8b5e47]"
                                                />

                                                <span className="text-[#3f241b] text-sm whitespace-nowrap">
                                                    {tech.name}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="lg:w-2/5">
                        <p className="uppercase text-[#8b7768] tracking-widest text-sm mb-8">
                            Soft Skills
                        </p>

                        <div className="flex flex-wrap gap-4">

                            {softSkills.map((skill) => {
                                const Icon = skill.icon;

                                return (
                                    <div
                                        key={skill.name}
                                        className="border border-[#e6dbcf] bg-[#fbf8f4] rounded-full px-7 py-4 flex items-center gap-3"
                                    >
                                        <Icon
                                            size={18}
                                            className="text-[#8b5e47] w-5 h-5"
                                        />

                                        <span className="text-[#3f241b] text-[18px]">
                                            {skill.name}
                                        </span>

                                    </div>
                                );
                            })}

                        </div>

                        {/* Exploring Card */}
                        <div
                            className="mt-12 bg-[#fbf8f4] border border-[#e6dbcf] rounded-4xl p-8"
                        >
                            <p className="uppercase tracking-widest text-[#8b7768] text-sm">
                                Fokus Saat Ini
                            </p>

                            <h3
                                className="mt-6 font-(family-name:--font-cormorant) text-[24px] text-[#3f241b] leading-tight"
                            >
                                Information Technology,
                                Software Development,
                                dan Digital Solutions.
                            </h3>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}