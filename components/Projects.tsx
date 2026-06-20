import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        category: "WEB APP · UMKM",
        title: "PudingnyaKita App",
        description:
            "Aplikasi web pemesanan yang dikembangkan untuk membantu UMKM PudingnyaKita dalam melayani pelanggan secara online serta mempermudah proses pemesanan produk.",

        image: "/projects/puding.png",

        tech: ["Next.js", "MySQL", "React", "Tailwind CSS", "JavaScript"],

        features: [
            "Pemesanan produk online",
            "Katalog produk",
            "Keranjang belanja",
            "Riwayat pesanan",
        ],

        demo: "https://pudingnyakita-app.vercel.app",
        github: "https://github.com/nadila-yanuarika/puding-app",
        reverse: false,
    },

    {
        category: "WEB APP · LAUNDRY",
        title: "BersihBersinar Laundry App",

        description:
            "Website layanan laundry yang dikembangkan untuk BersihBersinar Laundry, memudahkan pelanggan melihat informasi layanan dan melakukan pemesanan secara online dengan tampilan yang sederhana dan mudah digunakan.",

        image: "/projects/laundry.png",

        tech: ["Laravel", "PHP", "Tailwind CSS", "MySQL"],

        features: [
            "Pemesanan layanan laundry",
            "Katalog layanan",
            "Informasi layanan",
            "Kontak pelanggan",
        ],

        demo: "https://web-laundry-pi.vercel.app",
        github: "https://github.com/nadila-yanuarika/web-laundry",
        reverse: true,
    },

    {
        category: "COLLABORATION · CMS",
        title: "Content Management System (CMS)",

        description:
            "Proyek Content Management System (CMS) yang dikerjakan secara tim selama program magang di cmlabs. Saya berkontribusi dalam pengembangan frontend dan implementasi antarmuka pengguna untuk mendukung kebutuhan pengelolaan konten website.",

        image: "/projects/cms.png",

        tech: ["React", "TypeScript", "Node.js", "MySQL", "Tailwind CSS"],

        features: [
            "Landing page CMS",
            "Halaman login",
            "Desain responsif",
            "Kolaborasi tim",
        ],

        demo: "https://cms-team3.vercel.app",
        github: "https://github.com/nadila-yanuarika/cms-team3",
        reverse: false,
    },
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen bg-[#f7f3ed] px-8 lg:px-20 pt-40 lg:pt-40"
        >
            <div className="max-w-375 mx-auto">

                <p className="uppercase tracking-[0.25em] text-[#8b5e47] text-sm">
                    Selected Work
                </p>

                <h2
                    className="mt-6 text-[#3f241b] font-(family-name:--font-cormorant) text-[55px] leading-none"
                >
                    Proyek yang telah saya kembangkan.
                </h2>

                <div className="mt-20 space-y-20">

                    {projects.map((project) => (
                        <div
                            key={project.title}
                            className={`grid lg:grid-cols-2 gap-18 items-center ${project.reverse
                                ? "lg:[&>*:first-child]:order-2"
                                : ""}`}
                        >
                            {/* IMAGE */}
                            <div
                                className="bg-[#fbf8f4] border border-[#e7ddd1] rounded-[40px] p-6"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full rounded-[28px] object-cover"
                                />
                            </div>

                            {/* CONTENT */}
                            <div>
                                <p className="uppercase tracking-[0.18em] text-[#8b7768] text-sm">
                                    {project.category}
                                </p>
                                <h3
                                    className="mt-4 font-(family-name:--font-cormorant) text-[50px] leading-none text-[#3f241b]"
                                >
                                    {project.title}
                                </h3>

                                <p
                                    className="mt-8 text-[#7a6759] text-[15px] leading-relaxed max-w-xl"
                                >
                                    {project.description}
                                </p>

                                {/* TECH */}
                                <div className="flex flex-wrap gap-3 mt-8">
                                    {project.tech.map((item) => (
                                        <span
                                            key={item}
                                            className="px-5 py-2 rounded-full text-[15px] bg-[#f1e6d8] text-[#5b4335]"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>

                                {/* FEATURES */}
                                <div className="grid grid-cols-2 gap-y-4 mt-10">

                                    {project.features.map((feature) => (
                                        <div
                                            key={feature}
                                            className="text-[#7a6759] text-[15px]"
                                        >
                                            • {feature}
                                        </div>
                                    ))}

                                </div>

                                {/* BUTTONS */}
                                <div className="flex flex-wrap items-center gap-4 mt-12">
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        className="bg-[#8b5e47] hover:bg-[#7a513d] transition px-8 py-4 rounded-full text-[15px] text-white flex items-center gap-2 text-lg"
                                    >
                                        Live Demo
                                        <ArrowUpRight size={18} />
                                    </a>

                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="border border-[#d8cdbf] bg-white px-8 py-4 rounded-full text-[15px] text-[#3f241b] flex items-center gap-2 text-lg hover:bg-[#faf7f2] transition"
                                    >
                                        <FaGithub size={18} />
                                        GitHub
                                    </a>

                                </div>

                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
}