"use client";

import { useState } from "react";
import { Award } from "lucide-react";

const certificates = [
    {
        title: "Junior Web Developer",
        issuer: "BNSP & LSP Teknologi Digital",
        category: "Technical",
        file: "/certificates/bnsp-junior-web-developer.pdf",
    },

    {
        title: "UI/UX & Frontend Engineering",
        issuer: "LMS - IT Division",
        category: "Technical",
        file: "/certificates/uiux-frontend-engineering.pdf",
    },

    {
        title: "Laravel API Service for Beginners",
        issuer: "LMS - IT Division",
        category: "Technical",
        file: "/certificates/laravel-api-service.pdf",
    },

    {
        title: "Project Management 101",
        issuer: "LMS - IT Division",
        category: "Technical",
        file: "/certificates/project-management-101.pdf",
    },

    {
        title: "Microsoft Office Desktop Application",
        issuer: "Trust Training Partners",
        category: "Technical",
        file: "/certificates/microsoft-office.pdf",
    },

    {
        title: "Supervisor Staff ITVENTURE",
        issuer: "HMPSTI Universitas Brawijaya",
        category: "Organization",
        file: "/certificates/staff-spv-itventure.png",
    },

    {
        title: "Staff Kesehatan YUWARAJA",
        issuer: "Fakultas Vokasi Universitas Brawijaya",
        category: "Organization",
        file: "/certificates/staff-kesehatan-yuwaraja.pdf",
    },
];

export default function Certificates() {

    const [activeFilter, setActiveFilter] = useState("All");

    const filteredCertificates =
        activeFilter === "All"
            ? certificates
            : certificates.filter(
                (cert) => cert.category === activeFilter
            );

    return (
        <section
            id="certificates"
            className="min-h-screen bg-[#f7f3ed] px-8 lg:px-20 pt-40 lg:pt-40"
        >
            <div className="max-w-375 mx-auto">

                {/* Label */}
                <p className="uppercase tracking-[0.25em] text-[#8b5e47] text-sm">
                    Certificates
                </p>

                {/* Title */}
                <h2
                    className="mt-6 text-[#3f241b] font-(family-name:--font-cormorant) text-[50px] leading-none"
                >
                    Terus belajar dan berkembang.
                </h2>

                {/* Filter */}
                <div className="flex flex-wrap gap-4 mt-20">

                    {[
                        "All",
                        "Technical",
                        "Organization"
                    ].map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-8 py-4 rounded-full transition-all duration-300
                ${activeFilter === filter
                                    ? "bg-[#8b5e47] text-white"
                                    : "border border-[#d8cdbf] text-[#7a6759]"
                                }
            `}
                        >
                            {filter}
                        </button>
                    ))}

                </div>

                {/* Cards */}
                <div className="grid lg:grid-cols-3 gap-6 mt-14">

                    {filteredCertificates.map((cert) => (
                        <a
                            key={cert.title}
                            href={cert.file}
                            target="_blank"
                            className="bg-[#fbf8f4] border border-[#ddd1c4] rounded-4xl p-8 hover:-translate-y-1 transition"
                        >
                            <div className="flex justify-between items-start">

                                <div
                                    className="w-12 h-12 rounded-full bg-[#f1e6d8] flex items-center justify-center"
                                >
                                    <Award
                                        size={22}
                                        className="text-[#8b5e47]"
                                    />
                                </div>

                                <span
                                    className="px-4 py-2 rounded-full text-[12px] bg-[#f1e6d8] text-[#8b7768] text-sm uppercase tracking-wide"
                                >
                                    {cert.category}
                                </span>

                            </div>

                            <h3
                                className="mt-7 font-(family-name:--font-cormorant) text-[25px] leading-tight text-[#3f241b]"
                            >
                                {cert.title}
                            </h3>

                            <p
                                className="mt-3 text-[#7a6759] text-[18px]"
                            >
                                {cert.issuer}
                            </p>

                        </a>
                    ))}

                </div>

            </div>
        </section>
    );
}