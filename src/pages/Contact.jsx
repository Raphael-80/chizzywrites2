import React from "react";
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
import { useForm, ValidationError } from "@formspree/react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  const [state, handleSubmit] = useForm("mdeazlje");

  if (state.succeeded) {
    return (
      <div className="min-h-screen bg-chizzy-paper text-chizzy-ink dark:bg-chizzy-dark dark:text-chizzy-white">
        <Navbar />

        <main className="flex min-h-[70vh] items-center justify-center px-6 py-20">
          <div className="max-w-xl text-center">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#b7791f]">
              Message received
            </p>

            <h1 className="heading-font mb-6 text-4xl font-bold md:text-6xl">
              Thank you for reaching out.
            </h1>

            <p className="leading-8 text-black/60 dark:text-white/60">
              Your message has been sent successfully. Thank you for contacting
              ChizzyWrites. We'll get back to you as soon as possible.
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-4 font-medium text-white transition-all hover:gap-5 dark:bg-[#f5f2ea] dark:text-[#111111]"
            >
              Return home
              <FiArrowUpRight size={18} />
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-chizzy-paper text-chizzy-ink transition-colors duration-300 dark:bg-chizzy-dark dark:text-chizzy-white">
        {/* Hero */}
        <section className="px-6 pb-24 pt-40">
          <div className="mx-auto max-w-7xl">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-[#b7791f]">
              Get in touch
            </p>

            <h1 className="heading-font max-w-5xl text-6xl leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Let's
              <br />
              <span className="italic">talk.</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-black/60 dark:text-white/60 md:text-xl">
              Have a question, an idea, feedback, or simply want to say hello?
              I'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="border-t border-black/5 px-6 py-24 dark:border-white/5">
          <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
            {/* Contact Information */}
            <div className="lg:col-span-4">
              <p className="mb-6 text-sm uppercase tracking-[0.25em] text-[#b7791f]">
                Contact
              </p>

              <h2 className="heading-font mb-8 text-4xl leading-tight md:text-5xl">
                Start a
                <br />
                conversation.
              </h2>

              <div className="space-y-7">
                {/* Email */}
                <a
                  href="mailto:chizzyfrancisca8@gmail.com"
                  className="group flex items-start gap-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/10 dark:border-white/10">
                    <FiMail size={18} />
                  </div>

                  <div>
                    <p className="mb-1 text-xs uppercase tracking-[0.15em] text-black/40 dark:text-white/40">
                      Email
                    </p>

                    <p className="text-sm font-medium transition-colors group-hover:text-[#b7791f]">
                      chizzyfrancisca8@gmail.com
                    </p>
                  </div>
                </a>

                {/* Social Links */}
                <div>
                  <p className="mb-4 text-xs uppercase tracking-[0.15em] text-black/40 dark:text-white/40">
                    Follow
                  </p>

                  <div className="flex gap-3">
                    <a
                      href="https://www.instagram.com/3056francisca/?utm_source=ig_web_button_share_sheet"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all hover:bg-[#171717] hover:text-white dark:border-white/10 dark:hover:bg-[#f5f2ea] dark:hover:text-[#111111]"
                    >
                      <FiInstagram size={17} />
                    </a>

                    <a
                      href="#"
                      aria-label="Twitter"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all hover:bg-[#171717] hover:text-white dark:border-white/10 dark:hover:bg-[#f5f2ea] dark:hover:text-[#111111]"
                    >
                      <FiTwitter size={17} />
                    </a>

                    <a
                      href="#"
                      aria-label="LinkedIn"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all hover:bg-[#171717] hover:text-white dark:border-white/10 dark:hover:bg-[#f5f2ea] dark:hover:text-[#111111]"
                    >
                      <FiLinkedin size={17} />
                    </a>

                    <a
                      href="https://www.tiktok.com/@joan.chi6?is_from_webapp=1&sender_device=pc"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="TikTok"
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-black/10 transition-all hover:bg-[#171717] hover:text-white dark:border-white/10 dark:hover:bg-[#f5f2ea] dark:hover:text-[#111111]"
                    >
                      <FaTiktok size={17} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7 lg:col-start-6">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-3 block text-sm font-medium"
                  >
                    Your name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    autoComplete="name"
                    required
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-lg outline-none transition-colors placeholder:text-black/25 focus:border-[#b7791f] dark:border-white/15 dark:placeholder:text-white/25"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-3 block text-sm font-medium"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-lg outline-none transition-colors placeholder:text-black/25 focus:border-[#b7791f] dark:border-white/15 dark:placeholder:text-white/25"
                  />

                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="mt-2 block text-sm text-red-600"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-3 block text-sm font-medium"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's on your mind?"
                    required
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-lg outline-none transition-colors placeholder:text-black/25 focus:border-[#b7791f] dark:border-white/15 dark:placeholder:text-white/25"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-3 block text-sm font-medium"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Write your message..."
                    required
                    className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-4 text-lg outline-none transition-colors placeholder:text-black/25 focus:border-[#b7791f] dark:border-white/15 dark:placeholder:text-white/25"
                  />
                </div>

                {/* Submission Error */}
                {state.errors && (
                  <p
                    role="alert"
                    className="rounded-lg bg-red-50 p-4 text-sm text-red-700 dark:bg-red-950/30 dark:text-red-300"
                  >
                    Something went wrong while sending your message. Please
                    check your details and try again.
                  </p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center gap-3 rounded-full bg-[#171717] px-7 py-4 font-medium text-white transition-all hover:gap-5 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-[#f5f2ea] dark:text-[#111111]"
                >
                  {state.submitting ? "Sending..." : "Send message"}
                  {!state.submitting && <FiArrowRight size={18} />}
                </button>

                {state.submitting && (
                  <p
                    role="status"
                    className="text-sm text-black/60 dark:text-white/60"
                  >
                    Sending your message...
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#171717] px-6 py-28 text-[#f5f2ea] dark:bg-black">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-[#b7791f]">
              Before you go
            </p>

            <h2 className="heading-font mb-8 text-4xl leading-tight md:text-5xl lg:text-6xl">
              Maybe there's
              <br />
              something to read.
            </h2>

            <Link
              to="/articles"
              className="inline-flex items-center gap-3 rounded-full bg-[#f5f2ea] px-7 py-4 font-medium text-[#111111] transition-all hover:gap-5"
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
