import {
    Mail,
    ArrowUpRight,
    Download,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    return (
        <section
            id="contact"
            className="min-h-screen bg-[#f7f3ed] px-8 lg:px-20 pt-40 lg:pt-40 py-32"
        >
            <div className="max-w-375 mx-auto">

                {/* Label */}
                <p className="uppercase tracking-[0.25em] text-[#8b5e47] text-sm">
                    Contact
                </p>

                {/* Title */}
                <h2
                    className=" mt-6 text-[#3f241b] font-(family-name:--font-cormorant) text-[55px] leading-none "
                >
                    Mari berkolaborasi bersama.
                </h2>

                <div className="grid lg:grid-cols-2 gap-14 mt-20 items-start">

                    {/* LEFT */}
                    <div>

                        <p className="text-[#7a6759] text-[18px] leading-relaxed max-w-2xl">
                            Terbuka untuk peluang kerja, kolaborasi, maupun posisi
                            entry-level di bidang Web Development, Frontend Development,
                            dan UI/UX Design. Saya dapat dihubungi melalui email atau media sosial berikut.
                        </p>

                        <div className="mt-12 space-y-5">

                            {/* EMAIL */}
                            <a
                                href="https://mail.google.com/mail/?view=cm&fs=1&to=yanuarikanadila@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" flex items-center justify-between bg-[#fbf8f4] border border-[#ddd1c4] rounded-4xl p-6 hover:-translate-y-1 transition "
                            >
                                <div className="flex items-center gap-5">

                                    <div
                                        className=" w-12 h-12 rounded-full bg-[#f1e6d8] flex items-center justify-center "
                                    >
                                        <Mail
                                            size={22}
                                            className="text-[#8b5e47]"
                                        />
                                    </div>

                                    <div>
                                        <p className="uppercase text-[#8b7768] tracking-widest text-sm">
                                            Email
                                        </p>

                                        <h3 className="text-[#3f241b] text-[18px] text-xl font-medium">
                                            yanuarikanadila@gmail.com
                                        </h3>
                                    </div>

                                </div>

                                <ArrowUpRight
                                    size={20}
                                    className="text-[#8b5e47]"
                                />
                            </a>

                            {/* LINKEDIN */}
                            <a
                                href="https://www.linkedin.com/in/nadila-yanuarika/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" flex items-center justify-between bg-[#fbf8f4] border border-[#ddd1c4] rounded-4xl p-6 hover:-translate-y-1 transition "
                            >
                                <div className="flex items-center gap-5">

                                    <div className="w-12 h-12 rounded-full bg-[#f1e6d8] flex items-center justify-center">
                                        <FaLinkedin
                                            size={22}
                                            className="text-[#8b5e47]"
                                        />
                                    </div>

                                    <div>
                                        <p className="uppercase text-[#8b7768] tracking-widest text-sm">
                                            LinkedIn
                                        </p>

                                        <h3 className="text-[#3f241b] text-[18px] text-xl font-medium">
                                            /in/nadila-yanuarika
                                        </h3>
                                    </div>

                                </div>

                                <ArrowUpRight
                                    size={20}
                                    className="text-[#8b5e47]"
                                />
                            </a>

                            {/* GITHUB */}
                            <a
                                href="https://github.com/nadila-yanuarika"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" flex items-center justify-between bg-[#fbf8f4] border border-[#ddd1c4] rounded-4xl p-6 hover:-translate-y-1 transition "
                            >
                                <div className="flex items-center gap-5">

                                    <div className="w-12 h-12 rounded-full bg-[#f1e6d8] flex items-center justify-center">
                                        <FaGithub
                                            size={20}
                                            className="text-[#8b5e47]"
                                        />
                                    </div>

                                    <div>
                                        <p className="uppercase text-[#8b7768] tracking-widest text-sm">
                                            GitHub
                                        </p>

                                        <h3 className="text-[#3f241b] text-[18px] text-xl font-medium">
                                            @nadila-yanuarika
                                        </h3>
                                    </div>

                                </div>

                                <ArrowUpRight
                                    size={20}
                                    className="text-[#8b5e47]"
                                />
                            </a>

                            {/* INSTAGRAM */}
                            <a
                                href="https://www.instagram.com/nadilaayan.__/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" flex items-center justify-between bg-[#fbf8f4] border border-[#ddd1c4] rounded-4xl p-6 hover:-translate-y-1 transition "
                            >
                                <div className="flex items-center gap-5">

                                    <div className="w-12 h-12 rounded-full bg-[#f1e6d8] flex items-center justify-center">
                                        <FaInstagram
                                            size={20}
                                            className="text-[#8b5e47]"
                                        />
                                    </div>

                                    <div>
                                        <p className="uppercase text-[#8b7768] tracking-widest text-sm">
                                            Instagram
                                        </p>

                                        <h3 className="text-[#3f241b] text-[18px] text-xl font-medium">
                                            @nadilaayan.__
                                        </h3>
                                    </div>

                                </div>

                                <ArrowUpRight
                                    size={20}
                                    className="text-[#8b5e47]"
                                />
                            </a>

                        </div>

                    </div>

                    {/* RIGHT CARD */}
                    <div
                        className=" bg-[#fbf8f4] border border-[#ddd1c4] rounded-[40px] p-10 flex flex-col "
                    >
                        <div>

                            <p className="uppercase tracking-[0.25em] text-[#8b5e47] text-sm">
                                Status Saat Ini
                            </p>

                            <h3
                                className=" mt-6 text-[#3f241b] font-(family-name:--font-cormorant) text-[30px] leading-none "
                            >
                                Terbuka untuk Peluang Baru
                            </h3>

                            <p className="mt-6 text-[#7a6759] text-[15px] text-lg leading-relaxed">
                                Lulusan D3 Teknologi Informasi Universitas Brawijaya dengan minat
                                pada pengembangan web, frontend development, dan desain UI/UX.
                                Terbuka untuk peluang kerja, kolaborasi, maupun proyek yang dapat
                                memberikan dampak dan pengalaman baru.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-8">

                                {[
                                    "Web Development",
                                    "Frontend",
                                    "UI/UX",
                                    "React",
                                    "Figma",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className=" px-5 py-2 rounded-full text-[12px] bg-[#f1e6d8] text-[#5b4335] "
                                    >
                                        {item}
                                    </span>
                                ))}

                            </div>

                        </div>

                        <a
                            href="/CV_Nadila_Yanuarika_Rimawati.pdf"
                            target="_blank"
                            className="mt-8 bg-[#8b5e47] hover:bg-[#7a513d] transition text-white px-8 py-4 rounded-full flex items-center gap-3 w-fit"
                        >
                            <Download size={18} />
                            View CV
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
}