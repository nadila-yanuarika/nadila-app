import {
    Mail,
    ArrowUp
} from "lucide-react";
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-[#f7f3ed] border-t border-[#e6dbcf]">
            <div className="max-w-375 mx-auto px-8 lg:px-20 py-10">

                <div className="flex flex-col lg:flex-row items-center justify-between gap-10">

                    {/* LEFT */}
                    <div className="flex items-center gap-5">

                        <div>
                            <h3 className="text-[#3f241b] text-xl font-medium">
                                Nadila Yanuarika Rimawati
                            </h3>

                            <p className="text-[#7a6759] mt-1">
                               Software Development · Information Systems · Computer Networks
                            </p>
                        </div>

                    </div>

                    {/* SOCIAL */}
                    <div className="flex items-center gap-6">
                        <a
                            href="https://github.com/nadila-yanuarika"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8b5e47] hover:text-[#6f4936] transition hover:-translate-y-1"
                        >
                            <Github size={22} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/nadila-yanuarika/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8b5e47] hover:text-[#6f4936] transition hover:-translate-y-1"
                        >
                            <Linkedin size={22} />
                        </a>

                        <a
                            href="https://www.instagram.com/nadilaayan.__/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8b5e47] hover:text-[#6f4936] transition hover:-translate-y-1"
                        >
                            <Instagram size={22} />
                        </a>

                        <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=yanuarikanadila@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8b5e47] hover:text-[#6f4936] transition hover:-translate-y-1"
                        >
                            <Mail size={22} />
                        </a>

                    </div>

                </div>

                {/* BOTTOM */}
                <div className="mt-12 pt-8 border-t border-[#e6dbcf] flex flex-col lg:flex-row items-center justify-between gap-5">

                    <p className="text-[#8a7768] text-center lg:text-left">
                        © {new Date().getFullYear()} Nadila Yanuarika Rimawati.
                        All rights reserved.
                    </p>

                    <a
                        href="#home"
                        className="w-12 h-12 rounded-full border border-[#ddd1c4] flex items-center justify-center text-[#8b5e47] hover:bg-[#8b5e47] hover:text-white transition"
                    >
                        <ArrowUp size={20} />
                    </a>

                </div>

            </div>
        </footer>
    );
}