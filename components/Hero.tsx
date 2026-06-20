import { Download, Mail, ArrowUpRight, GraduationCap } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen bg-[#f7f3ed] px-8 lg:px-20 pt-40 lg:pt-52">
            <div className="max-w-375 mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-24 items-center">

                {/* LEFT */}
                <div>

                    {/* Heading */}
                    <h1
                        className="text-[#3f241b] leading-none font-serif text-4xl lg:text-6xl"
                    >
                        Hi, I'm{" "}
                        <span className="italic font-light text-amber-900">
                            Nadila
                        </span>
                        <br />
                        Yanuarika Rimawati
                    </h1>

                    {/* Description */}
                    <p className="mt-10 text-[#7f6a5c] text-xl leading-relaxed max-w-xl">
                        Mahasiswa D3 Teknologi Informasi Universitas Brawijaya yang
                        memiliki minat pada Frontend Development dan UI/UX Design.
                        Saya senang membangun website yang responsif, mudah digunakan,
                        serta mengutamakan pengalaman pengguna yang baik.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 mt-10">

                        <a href="#projects">
                            <button className="bg-[#8b5e47] hover:bg-[#7a513d] transition px-8 py-4 rounded-full text-white font-medium flex items-center gap-2">
                                View Projects
                                <ArrowUpRight size={18} />
                            </button>
                        </a>

                        <a href="/CV_Nadila_Yanuarika_Rimawati.pdf" target="_blank" rel="noopener noreferrer">
                            <button className="border border-[#ddd2c6] px-8 py-4 rounded-full bg-white flex items-center gap-2 text-[#4b3427] hover:bg-[#faf7f2] transition">
                                <Download size={18} />
                                View CV
                            </button>
                        </a>

                        <a href="#contact">
                            <button className="px-8 py-4 flex items-center gap-2 text-[#4b3427]">
                                <Mail size={18} />
                                Contact Me
                            </button>
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-16 border-t border-[#ddd2c6] pt-10">

                        <div className="grid grid-cols-3 max-w-lg">

                            <div>
                                <p className="text-sm text-[15px] tracking-widest text-[#8f7765] uppercase">
                                    Projects
                                </p>

                                <h3 className="text-4xl font-serif text-[#3f241b] mt-2">
                                    03
                                </h3>
                            </div>

                            <div>
                                <p className="text-sm text-[15px] tracking-widest text-[#8f7765] uppercase">
                                    Experience
                                </p>

                                <h3 className="text-4xl font-serif text-[#3f241b] mt-2">
                                    03
                                </h3>
                            </div>

                            <div>
                                <p className="text-sm text-[15px] tracking-widest text-[#8f7765] uppercase">
                                    Focus
                                </p>

                                <h3 className="text-4xl font-serif italic text-[#3f241b] mt-2">
                                    Web
                                </h3>
                            </div>

                        </div>

                    </div>

                </div>

                {/* RIGHT */}
                <div className="flex justify-center">

                    <div className="relative animate-floating">

                        {/* Card */}
                        <div
                            className="bg-white rounded-[40px] p-5 shadow-xl border border-[#ebe0d3]"
                        >
                            <img
                                src="/profile.jpeg"
                                alt="Nadila"
                                className="w-110 h-142.5 object-cover rounded-4xl"
                            />

                            {/* Bottom Card */}
                            <div
                                className="bg-[#f7efe6] mt-5 rounded-full px-6 py-4 flex items-center gap-4"
                            >
                                <div className="w-12 h-12 rounded-full bg-[#8b5e47] flex items-center justify-center text-white">
                                    <GraduationCap size={20} />
                                </div>

                                <div>
                                    <h4 className="text-2xl text-[#3f241b]">
                                        D3 Information Technology
                                    </h4>

                                    <p className="text-[#7f6a5c]">
                                        Universitas Brawijaya
                                    </p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}