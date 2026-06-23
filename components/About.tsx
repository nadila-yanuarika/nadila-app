import { GraduationCap, BadgeCheck, MapPin } from "lucide-react";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen bg-[#f7f3ed] px-8 lg:px-20 pt-40 lg:pt-40"
        >
            <div className="max-w-375 mx-auto">

                {/* Label */}
                <p className="uppercase tracking-[0.3em] text-[#8b5e47] text-sm mb-8">
                    About
                </p>

                {/* Title */}
                <h2
                    className="font-(family-name:--font-cormorant) text-[#3f241b] text-[50px] leading-none max-w-4xl"
                >
                    Belajar, membangun, dan terus berkembang.
                </h2>

                {/* Content */}
                <div className="grid lg:grid-cols-[1fr_650px] gap-24 mt-20">

                    {/* Left */}
                    <div className="space-y-8 text-[#7a6759] text-[20px] leading-relaxed">

                        <p>
                            Fresh Graduate D3 Teknologi Informasi Universitas Brawijaya yang memiliki minat pada
                            bidang Teknologi Informasi, pengembangan sistem, dan pembelajaran teknologi.
                            Saya senang mengeksplorasi teknologi baru serta mengembangkan solusi digital
                            yang mudah digunakan dan bermanfaat.
                        </p>

                        <p>
                            Melalui pengalaman magang, proyek akademik, dan kegiatan organisasi,
                            saya terus mengembangkan kemampuan teknis, komunikasi, kepemimpinan,
                            serta kemampuan berkolaborasi dalam tim.
                        </p>

                        <p>
                            Saya percaya bahwa teknologi dapat menjadi sarana untuk menciptakan
                            perubahan positif, sehingga saya selalu berusaha untuk terus belajar,
                            berkembang, dan berbagi pengetahuan dengan orang lain.
                        </p>

                    </div>

                    {/* Right Card */}
                    <div
                        className="bg-[#fbf8f4] border border-[#e6dbcf] rounded-[40px] p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(139,94,71,0.10)]"
                    >
                        <p className="uppercase text-[#8a7768] tracking-widest text-sm">
                            Profile
                        </p>

                        <h3
                            className="font-(family-name:--font-cormorant) text-[#3f241b] text-[40px] mt-4"
                        >
                            Nadila Yanuarika Rimawati
                        </h3>

                        <div className="mt-10 space-y-8">

                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-full bg-[#f1e6d8] flex items-center justify-center">
                                    <GraduationCap size={24} className="text-[#8b5e47]" />
                                </div>

                                <div>
                                    <p className="uppercase text-[#8a7768] text-[15px] tracking-wider">
                                        Universitas
                                    </p>

                                    <h4 className="text-[#3f241b] text-3xl text-[18px] font-medium">
                                        Universitas Brawijaya
                                    </h4>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-full bg-[#f1e6d8] flex items-center justify-center">
                                    <BadgeCheck size={24} className="text-[#8b5e47]" />
                                </div>

                                <div>
                                    <p className="uppercase text-[#8a7768] text-[15px] tracking-wider">
                                        Program Studi
                                    </p>

                                    <h4 className="text-[#3f241b] text-3xl text-[18px] font-medium">
                                        D3 Teknologi Informasi
                                    </h4>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <div className="w-12 h-12 rounded-full bg-[#f1e6d8] flex items-center justify-center">
                                    <MapPin size={24} className="text-[#8b5e47]" />
                                </div>

                                <div>
                                    <p className="uppercase text-[#8a7768] text-[15px] tracking-wider">
                                        Fakultas
                                    </p>

                                    <h4 className="text-[#3f241b] text-3xl text-[18px] font-medium">
                                        Vokasi
                                    </h4>
                                </div>
                            </div>

                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-3 mt-12">

                            {[
                                "Information Technology",
                                "Software Development",
                                "Computer Networks",
                                "Information Systems"
                            ].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-5 py-2 rounded-full bg-[#f1e6d8] text-[#5b4335]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}