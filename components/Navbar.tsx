"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY < 300) {
                setActiveSection("");
                return;
            }

            const sections = [
                "about",
                "skills",
                "projects",
                "experience",
                "certificates",
                "contact",
            ];

            const scrollPosition = window.scrollY + 200;

            sections.forEach((section) => {
                const element = document.getElementById(section);

                if (!element) return;

                if (
                    scrollPosition >= element.offsetTop &&
                    scrollPosition <
                    element.offsetTop + element.offsetHeight
                ) {
                    setActiveSection(section);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleNavbar = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleNavbar);

        return () =>
            window.removeEventListener(
                "scroll",
                handleNavbar
            );
    }, []);

    const menuItems = [
        "about",
        "skills",
        "projects",
        "experience",
        "certificates",
        "contact",
    ];

    return (
        <header className="fixed top-5 left-0 right-0 z-50">
            <div className="max-w-325 mx-auto px-6">
                <nav
                    className="bg-[#faf7f2]/80 backdrop-blur-xl border border-[#e7ddd1]/70 rounded-full h-18 px-6 flex items-center justify-between shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
                >
                    {/* Logo */}
                    <a href="#home">
                        <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full bg-[#8b5e47] flex items-center justify-center text-white font-semibold"></div>
                            <span className="font-(family-name:--font-cormorant) text-[#3f241b] text-[36px] font-semibold tracking-tight">
                                Home
                            </span>
                        </div>
                    </a>

                    {/* Menu */}
                    <ul className="hidden md:flex items-center gap-3">
                        {menuItems.map((item) => (
                            <li key={item}>
                                <a href={`#${item}`}>
                                    <button
                                        className={` px-6 py-3 rounded-full transition-all duration-300 ${activeSection === item
                                            ? "bg-[#8b5e47] text-white scale-105 shadow-[0_4px_20px_rgba(139,94,71,0.25)]"
                                            : "text-[#6d584b] hover:text-[#3f241b] hover:bg-[#f1e6d8] hover:scale-105"
                                            } `}
                                    >
                                        {item.charAt(0).toUpperCase() + item.slice(1)}
                                    </button>
                                </a>
                            </li>
                        ))}

                    </ul>

                    {/* Right Button */}
                    <a href="#contact">
                        <button
                            className="bg-[#8b5e47] hover:bg-[#7a513d] transition px-8 py-3 rounded-full text-white font-semibold"
                        >
                            Let's talk
                        </button>
                    </a>
                </nav>
            </div >
        </header >
    );
}