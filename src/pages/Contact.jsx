import { Link } from "react-router-dom";
import {
    FiArrowRight,
    FiArrowUpRight,
    FiMail,
    FiInstagram,
    FiTwitter,
    FiLinkedin,
} from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <main
                className="
        min-h-screen
        bg-chizzy-paper
        text-chizzy-ink
        dark:bg-chizzy-dark
        dark:text-chizzy-white
        transition-colors
        duration-300
      "
            >
                {/* Hero */}
                <section className="pt-40 pb-24 px-6">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-sm uppercase tracking-[0.3em] text-[#b7791f] font-semibold mb-6">
                            Get in touch
                        </p>

                        <h1 className="heading-font text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight max-w-5xl">
                            Let's
                            <br />
                            <span className="italic">talk.</span>
                        </h1>

                        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-8 text-black/60 dark:text-white/60">
                            Have a question, an idea, feedback, or simply want
                            to say hello? I'd love to hear from you.
                        </p>
                    </div>
                </section>

                {/* Contact Content */}
                <section className="border-t border-black/5 dark:border-white/5 px-6 py-24">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">

                        {/* Contact Information */}
                        <div className="lg:col-span-4">
                            <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-6">
                                Contact
                            </p>

                            <h2 className="heading-font text-4xl md:text-5xl leading-tight mb-8">
                                Start a
                                <br />
                                conversation.
                            </h2>

                            <div className="space-y-7">
                                {/* Email */}
                                <a
                                    href="mailto:hello@chizzywrites.com"
                                    className="group flex items-start gap-4"
                                >
                                    <div className="w-11 h-11 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                                        <FiMail size={18} />
                                    </div>

                                    <div>
                                        <p className="text-xs uppercase tracking-[0.15em] text-black/40 dark:text-white/40 mb-1">
                                            Email
                                        </p>

                                        <p className="text-sm font-medium group-hover:text-[#b7791f] transition-colors">
                                            chizzyfrancisca8@gmail.com
                                        </p>
                                    </div>
                                </a>

                                {/* Socials */}
                                <div>
                                    <p className="text-xs uppercase tracking-[0.15em] text-black/40 dark:text-white/40 mb-4">
                                        Follow
                                    </p>

                                    <div className="flex gap-3">
                                        <a
                                            href="https://www.instagram.com/3056francisca/?utm_source=ig_web_button_share_sheet"
                                            aria-label="Instagram"
                                            className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-black/10
                      dark:border-white/10
                      flex
                      items-center
                      justify-center
                      hover:bg-[#171717]
                      hover:text-white
                      dark:hover:bg-[#f5f2ea]
                      dark:hover:text-[#111111]
                      transition-all
                    "
                                        >
                                            <FiInstagram size={17} />
                                        </a>

                                        <a
                                            href="#"
                                            aria-label="Twitter"
                                            className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-black/10
                      dark:border-white/10
                      flex
                      items-center
                      justify-center
                      hover:bg-[#171717]
                      hover:text-white
                      dark:hover:bg-[#f5f2ea]
                      dark:hover:text-[#111111]
                      transition-all
                    "
                                        >
                                            <FiTwitter size={17} />
                                        </a>

                                        <a
                                            href="#"
                                            aria-label="LinkedIn"
                                            className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-black/10
                      dark:border-white/10
                      flex
                      items-center
                      justify-center
                      hover:bg-[#171717]
                      hover:text-white
                      dark:hover:bg-[#f5f2ea]
                      dark:hover:text-[#111111]
                      transition-all
                    "
                                        >
                                            <FiLinkedin size={17} />
                                        </a>

                                        <a
                                            href="https://www.tiktok.com/@joan.chi6?is_from_webapp=1&sender_device=pc"
                                            aria-label="TikTok"
                                            className="
                      w-11
                      h-11
                      rounded-full
                      border
                      border-black/10
                      dark:border-white/10
                      flex
                      items-center
                      justify-center
                      hover:bg-[#171717]
                      hover:text-white
                      dark:hover:bg-[#f5f2ea]
                      dark:hover:text-[#111111]
                      transition-all
                    "
                                        >
                                            <FaTiktok size={17} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-7 lg:col-start-6">
                            <form className="space-y-8">

                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="block text-sm font-medium mb-3"
                                    >
                                        Your name
                                    </label>

                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        className="
                    w-full
                    bg-transparent
                    border-b
                    border-black/15
                    dark:border-white/15
                    px-0
                    py-4
                    text-lg
                    outline-none
                    placeholder:text-black/25
                    dark:placeholder:text-white/25
                    focus:border-[#b7791f]
                    transition-colors
                  "
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium mb-3"
                                    >
                                        Email address
                                    </label>

                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="
                    w-full
                    bg-transparent
                    border-b
                    border-black/15
                    dark:border-white/15
                    px-0
                    py-4
                    text-lg
                    outline-none
                    placeholder:text-black/25
                    dark:placeholder:text-white/25
                    focus:border-[#b7791f]
                    transition-colors
                  "
                                    />
                                </div>

                                {/* Subject */}
                                <div>
                                    <label
                                        htmlFor="subject"
                                        className="block text-sm font-medium mb-3"
                                    >
                                        Subject
                                    </label>

                                    <input
                                        id="subject"
                                        type="text"
                                        placeholder="What's on your mind?"
                                        className="
                    w-full
                    bg-transparent
                    border-b
                    border-black/15
                    dark:border-white/15
                    px-0
                    py-4
                    text-lg
                    outline-none
                    placeholder:text-black/25
                    dark:placeholder:text-white/25
                    focus:border-[#b7791f]
                    transition-colors
                  "
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium mb-3"
                                    >
                                        Message
                                    </label>

                                    <textarea
                                        id="message"
                                        rows="5"
                                        placeholder="Write your message..."
                                        className="
                    w-full
                    bg-transparent
                    border-b
                    border-black/15
                    dark:border-white/15
                    px-0
                    py-4
                    text-lg
                    outline-none
                    resize-none
                    placeholder:text-black/25
                    dark:placeholder:text-white/25
                    focus:border-[#b7791f]
                    transition-colors
                  "
                                    />
                                </div>

                                {/* Submit */}
                                <button
                                    type="submit"
                                    className="
                  inline-flex
                  items-center
                  gap-3
                  px-7
                  py-4
                  rounded-full
                  bg-[#171717]
                  text-white
                  dark:bg-[#f5f2ea]
                  dark:text-[#111111]
                  font-medium
                  hover:gap-5
                  transition-all
                "
                                >
                                    Send message
                                    <FiArrowRight size={18} />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="bg-[#171717] text-[#f5f2ea] dark:bg-black px-6 py-28">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-5">
                            Before you go
                        </p>

                        <h2 className="heading-font text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
                            Maybe there's
                            <br />
                            something to read.
                        </h2>

                        <Link
                            to="/articles"
                            className="
              inline-flex
              items-center
              gap-3
              px-7
              py-4
              rounded-full
              bg-[#f5f2ea]
              text-[#111111]
              font-medium
              hover:gap-5
              transition-all
            "
                        >
                            Explore articles
                            <FiArrowUpRight size={18} />
                        </Link>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}