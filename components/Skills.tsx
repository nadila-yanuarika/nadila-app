import {
    Code2,
    Database,
    Palette,
    Users,
    MessageSquare,
    Lightbulb,
    Clock3,
    Server
} from "lucide-react";

const technicalSkills = [
    {
        name: "HTML",
        description: "Frontend Structure",
        level: "Advanced",
        icon: Code2,
    },

    {
        name: "CSS",
        description: "Responsive Styling",
        level: "Advanced",
        icon: Palette,
    },

    {
        name: "JavaScript",
        description: "Interactive UI",
        level: "Intermediate",
        icon: Code2,
    },

    {
        name: "PHP",
        description: "Backend Development",
        level: "Intermediate",
        icon: Code2,
    },

    {
        name: "MySQL",
        description: "Database Management",
        level: "Intermediate",
        icon: Database,
    },

    {
        name: "React",
        description: "Component-Based UI",
        level: "Intermediate",
        icon: Code2,
    },

    {
        name: "Node.js",
        description: "Backend Development",
        level: "Intermediate",
        icon: Server,
    },

    {
        name: "Figma",
        description: "UI/UX Design",
        level: "Advanced",
        icon: Palette,
    },
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
                    Keahlian dan teknologi yang saya gunakan.
                </h2>

                <div className="grid lg:grid-cols-[1.35fr_0.95fr] gap-14 mt-20">

                    {/* LEFT */}
                    <div>

                        <p className="uppercase text-[#8b7768] tracking-widest text-sm mb-8">
                            Technical
                        </p>

                        <div className="grid md:grid-cols-2 gap-5">

                            {technicalSkills.map((skill) => {
                                const Icon = skill.icon;

                                return (
                                    <div
                                        key={skill.name}
                                        className=" bg-[#fbf8f4] border border-[#e6dbcf] rounded-4xl p-6 hover:-translate-y-1 transition-all duration-300 "
                                    >
                                        <div className="flex items-center gap-4">

                                            <div
                                                className=" w-12 h-12 rounded-full bg-[#f1e6d8] flex items-center justify-center "
                                            >
                                                <Icon
                                                    size={22}
                                                    className="text-[#4b3427]"
                                                />
                                            </div>

                                            <div className="flex-1">
                                                <h3 className="text-[#3f241b] text-xl">
                                                    {skill.name}
                                                </h3>

                                                <p className="text-[#8b7768] text-sm mt-1">
                                                    {skill.description}
                                                </p>
                                            </div>

                                            <span
                                                className=" px-3 py-1 rounded-full bg-[#f1e6d8] text-[#8b5e47] text-xs "
                                            >
                                                {skill.level}
                                            </span>

                                        </div>
                                    </div>
                                );
                            })}

                        </div>

                    </div>

                    {/* RIGHT */}
                    <div>
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
                                Frontend Development,
                                UI/UX Design,
                                dan Pengembangan Aplikasi Web.
                            </h3>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}