import { Link } from "react-router-dom";
import {
    FiArrowUpRight,
    FiInstagram,
    FiTwitter,
    FiLinkedin,
} from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-[#171717] text-[#f5f2ea] dark:bg-black">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 lg:gap-16">

                    {/* Brand */}
                    <div>
                        <Link
                            to="/"
                            className="heading-font text-3xl tracking-tight inline-block mb-6"
                        >
                            ChizzyWrites<span className="text-[#b7791f]">.</span>
                        </Link>

                        <p className="max-w-sm text-white/60 leading-7 text-sm">
                            Thought-provoking articles, ideas and perspectives
                            about life, technology, creativity, culture and the
                            world around us.
                        </p>

                        <Link
                            to="/articles"
                            className="inline-flex items-center gap-2 mt-7 text-sm font-medium hover:text-[#b7791f] transition-colors"
                        >
                            Explore articles
                            <FiArrowUpRight size={16} />
                        </Link>
                    </div>

                    {/* Explore */}
                    <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] text-[#b7791f] mb-6">
                            Explore
                        </h3>

                        <div className="flex flex-col gap-4 text-sm text-white/60">
                            <Link
                                to="/"
                                className="hover:text-white transition-colors"
                            >
                                Home
                            </Link>

                            <Link
                                to="/articles"
                                className="hover:text-white transition-colors"
                            >
                                Articles
                            </Link>

                            <Link
                                to="/categories"
                                className="hover:text-white transition-colors"
                            >
                                Categories
                            </Link>

                            <Link
                                to="/about"
                                className="hover:text-white transition-colors"
                            >
                                About
                            </Link>
                        </div>
                    </div>

                    {/* Topics */}
                    <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] text-[#b7791f] mb-6">
                            Topics
                        </h3>

                        <div className="flex flex-col gap-4 text-sm text-white/60">
                            <Link
                                to="/categories?topic=technology"
                                className="hover:text-white transition-colors"
                            >
                                Technology
                            </Link>

                            <Link
                                to="/categories?topic=business"
                                className="hover:text-white transition-colors"
                            >
                                Business
                            </Link>

                            <Link
                                to="/categories?topic=life"
                                className="hover:text-white transition-colors"
                            >
                                Life
                            </Link>

                            <Link
                                to="/categories?topic=culture"
                                className="hover:text-white transition-colors"
                            >
                                Culture
                            </Link>

                            <Link
                                to="/categories?topic=ideas"
                                className="hover:text-white transition-colors"
                            >
                                Ideas
                            </Link>
                        </div>
                    </div>

                    {/* Connect */}
                    <div>
                        <h3 className="text-xs uppercase tracking-[0.2em] text-[#b7791f] mb-6">
                            Connect
                        </h3>

                        <div className="flex flex-col gap-4 text-sm text-white/60">
                            <Link
                                to="/contact"
                                className="hover:text-white transition-colors"
                            >
                                Contact
                            </Link>

                            <a
                                href="https://www.instagram.com/3056francisca/?utm_source=ig_web_button_share_sheet"
                                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                            >
                                Instagram
                                <FiArrowUpRight size={13} />
                            </a>

                            <a
                                href="https://www.facebook.com/share/1c7PsU5cjv/"
                                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                            >
                                Facebook
                                <FiArrowUpRight size={13} />
                            </a>

                            {/* <a
                                href="#"
                                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                            >
                                Twitter
                                <FiArrowUpRight size={13} />
                            </a> */}
                            <a
                                href="https://www.tiktok.com/@joan.chi6?is_from_webapp=1&sender_device=pc"
                                className="inline-flex items-center gap-2 hover:text-white transition-colors">
                                TikTok
                                <FiArrowUpRight size={13} />

                            </a>

                            <a
                                href="https://substack.com/@focusforge21?utm_source=share&utm_medium=web&r=8lwkne"
                                className="inline-flex items-center gap-2 hover:text-white transition-colors"
                            >
                                Substack
                                <FiArrowUpRight size={13} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Editorial Statement */}
                <div className="border-t border-white/10 mt-20 pt-12">
                    <div className="max-w-4xl">
                        <p className="heading-font text-3xl md:text-4xl lg:text-5xl leading-tight text-white/90">
                            "The best ideas aren't always the loudest.
                            Sometimes, they're the ones that make you stop
                            and think."
                        </p>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 mt-12 pt-7 flex flex-col md:flex-row items-center justify-between gap-5">
                    <p className="text-xs text-white/40">
                        © {new Date().getFullYear()} ChizzyWrites. All rights reserved.
                    </p>

                    <div className="flex items-center gap-6 text-xs text-white/40">
                        <Link
                            to="/"
                            className="hover:text-white transition-colors"
                        >
                            Privacy
                        </Link>

                        <Link
                            to="/"
                            className="hover:text-white transition-colors"
                        >
                            Terms
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}