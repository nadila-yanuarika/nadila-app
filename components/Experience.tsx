const experiences = [
    {
        title: "Fullstack Web Development Intern",
        organization: "PT cmlabs Indonesia Digital",
        year: "2025-2026",
        description:
            "Berkontribusi dalam pengembangan dan pemeliharaan aplikasi web, implementasi fitur baru, serta kolaborasi dengan tim pengembang untuk meningkatkan kualitas dan performa sistem.",
        tags: ["JavaScript", "TypeScript", "React", "Node.js", "Tailwind CSS"],
        image: "/experience/intern.png",
    },

    {
        title: "Health Division Staff",
        organization: "YUWARAJA — Faculty Orientation",
        year: "2024",
        description:
            "Bertanggung jawab mendukung layanan kesehatan dan memastikan kesiapan penanganan peserta selama kegiatan orientasi mahasiswa baru tingkat fakultas.",
        tags: ["Tanggung Jawab", "Kerja Sama Tim", "Kepedulian"],
        image: "/experience/yuwa.jpeg",
    },

    {
        title: "Cluster Supervisor (SPV Cluster)",
        organization: "Study Program Orientation",
        year: "2024",
        description:
            "Mengoordinasikan peserta dalam kelompok binaan, memberikan pendampingan, serta memastikan kelancaran pelaksanaan kegiatan orientasi program studi.",
        tags: ["Kepemimpinan", "Koordinasi", "Komunikasi"],
        image: "/experience/spv.jpeg",
    },
];

export default function Experience() {
    return (
        <section
            id="experience"
            className="min-h-screen bg-[#f7f3ed] px-8 lg:px-20 pt-40 lg:pt-40"
        >
            <div className="max-w-375 mx-auto">

                {/* Label */}

                <p className="uppercase tracking-[0.25em] text-[#8b5e47] text-sm">
                    Experience
                </p>

                {/* Title */}
                <h2
                    className="mt-6 text-[#3f241b] font-(family-name:--font-cormorant) text-[50px] leading-none"
                >
                    Pengalaman yang membentuk perjalanan saya.
                </h2>

                {/* Timeline */}
                <div className="relative mt-20">

                    {/* Vertical Line */}
                    <div
                        className="absolute left-26.25 top-0 bottom-0 w-0.5 bg-[#ddd1c4]"
                    />

                    <div className="space-y-16">

                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="relative flex gap-12"
                            >
                                {/* Dot */}

                                <div
                                    className="w-52.5 flex justify-center relative shrink-0"
                                >
                                    <div
                                        className="w-5 h-5 rounded-full bg-[#8b5e47] mt-4 z-10"
                                    />
                                </div>

                                {/* Card */}

                                <div
                                    className=" flex-1 bg-[#fbf8f4] border border-[#e7ddd1] rounded-[36px] p-10 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-all duration-300 "
                                >
                                    <div className="flex justify-between items-start">

                                        <div>

                                            <h3
                                                className="font-(family-name:--font-cormorant) text-[30px] text-[#3f241b]"
                                            >
                                                {exp.title}
                                            </h3>

                                            <p
                                                className="mt-2 text-[#8b5e47] text-[18px]"
                                            >
                                                {exp.organization}
                                            </p>

                                        </div>

                                        <span
                                            className="text-[#8b7768] text-[15px] tracking-wider"
                                        >
                                            {exp.year}
                                        </span>

                                    </div>

                                    <p
                                        className="mt-5 text-[#7a6759] text-[16px] leading-relaxed max-w-4xl"
                                    >
                                        {exp.description}
                                    </p>

                                    {/* Tags */}

                                    <div className="flex flex-wrap gap-3 mt-8">

                                        {exp.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-5 py-2 rounded-full text-[14px] border border-[#ddd1c4] text-[#4b3427] bg-[#fbf8f4]"
                                            >
                                                {tag}
                                            </span>
                                        ))}

                                    </div>

                                    {
                                        exp.image && (
                                            <div className="mt-8">
                                                <img
                                                    src={exp.image}
                                                    alt={exp.title}
                                                    className="w-full h-100 object-cover rounded-3xl border border-[#e7ddd1]"
                                                />
                                            </div>
                                        )
                                    }

                                </div>
                            </div>
                        ))}

                    </div>
                </div>

            </div>
        </section>
    );
}