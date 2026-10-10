import { motion } from "framer-motion";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-[#f5f1e8] px-5 pb-10 pt-28 sm:px-8 sm:pt-32 lg:px-10 lg:pt-36">

            <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-col justify-between">

                {/* Top Label */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center justify-between border-b border-black/10 pb-4"
                >
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/50 sm:text-xs">
                        Personal Journal
                    </span>

                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-black/50 sm:text-xs">
                        2026
                    </span>
                </motion.div>

                {/* Main Hero */}
                <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

                    {/* Left */}
                    <div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="font-serif text-[4.5rem] font-medium leading-[0.78] tracking-[-0.065em] text-[#171717] sm:text-[6rem] md:text-[7rem] lg:text-[9rem] xl:text-[10rem]">
                                chizzy
                                <br />

                                <span className="ml-[12%] italic font-normal">
                                    writes
                                </span>
                            </h1>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.25 }}
                            className="mt-10 max-w-lg sm:mt-12"
                        >
                            <p className="text-base leading-7 text-black/60 sm:text-lg sm:leading-8">
                                Thoughts, stories, observations and ideas from
                                my corner of the world. A place to slow down,
                                think deeply and put words to the things that
                                matter.
                            </p>

                            <Link
                                to="/articles"
                                className="group mt-7 inline-flex items-center gap-3 border-b border-black pb-2 text-sm font-semibold text-[#171717]"
                            >
                                Read my stories

                                <FiArrowUpRight
                                    size={17}
                                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Right Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.9, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-md lg:ml-auto"
                    >

                        {/* Image */}
                        <div className="relative aspect-[4/5] overflow-hidden bg-[#d8d0c2]">

                            {/* Replace this div with your actual image later */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-serif text-8xl italic text-black/10">
                                    CW
                                </span>
                            </div>

                            {/* Image overlay */}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6 pt-32 sm:p-8 sm:pt-40">
                                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
                                    Latest story
                                </p>

                                <h2 className="mt-2 max-w-sm font-serif text-2xl leading-tight text-white sm:text-3xl">
                                    Notes from the things I keep thinking about.
                                </h2>

                                <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
                                    <span className="text-xs text-white/60">
                                        5 min read
                                    </span>

                                    <span className="text-xs text-white/60">
                                        Aug 2026
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Number */}
                        <div className="absolute -bottom-6 -left-5 hidden sm:block">
                            <span className="font-serif text-7xl font-medium leading-none text-black/10">
                                01
                            </span>
                        </div>

                    </motion.div>
                </div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex items-center justify-between border-t border-black/10 pt-5"
                >
                    <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                        <FiArrowDown size={14} />
                        Scroll to explore
                    </div>

                    <div className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40 sm:block">
                        Stories · Ideas · Life
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;