import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import {
    FiArrowLeft,
    FiArrowUpRight,
    FiArrowRight,
    FiBookmark,
    FiClock,
    FiShare2,
} from "react-icons/fi";

import { articles } from "../data/article";
import ArticleContent from "../components/ArticleContent";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Article() {
    const { slug } = useParams();

    const article = articles.find(
        (item) => item.slug === slug
    );

    const [progress, setProgress] = useState(0);
    const [bookmarked, setBookmarked] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const documentHeight =
                document.documentElement.scrollHeight -
                window.innerHeight;

            const percentage =
                documentHeight > 0
                    ? (scrollTop / documentHeight) * 100
                    : 0;

            setProgress(Math.min(percentage, 100));
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, [slug]);

    if (!article) {
        return (
            <main
                className="
          min-h-screen
          flex
          items-center
          justify-center
          px-6
          bg-chizzy-paper
          dark:bg-chizzy-dark
          text-chizzy-ink
          dark:text-chizzy-white
        "
            >
                <div className="text-center">
                    <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-5">
                        404
                    </p>

                    <h1 className="heading-font text-5xl md:text-6xl mb-8">
                        Article not found.
                    </h1>

                    <Link
                        to="/articles"
                        className="
              inline-flex
              items-center
              gap-2
              px-6
              py-3
              rounded-full
              bg-[#171717]
              text-white
              dark:bg-[#f5f2ea]
              dark:text-[#111111]
              hover:opacity-80
              transition
            "
                    >
                        <FiArrowLeft size={16} />
                        Back to articles
                    </Link>
                </div>
            </main>
        );
    }

    const relatedArticles = articles
        .filter(
            (item) =>
                item.id !== article.id &&
                item.category === article.category
        )
        .slice(0, 3);

    const fallbackArticles = articles
        .filter((item) => item.id !== article.id)
        .slice(0, 3);

    const moreArticles =
        relatedArticles.length >= 3
            ? relatedArticles
            : fallbackArticles;

    const shareArticle = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: article.title,
                    text: article.excerpt,
                    url: window.location.href,
                });
            } catch {
                // User cancelled sharing
            }
        } else {
            await navigator.clipboard.writeText(
                window.location.href
            );
            alert("Article link copied!");
        }
    };

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
                {/* Reading Progress */}

                <div className="fixed top-0 left-0 z-[100] h-[3px] w-full bg-transparent">
                    <div
                        className="
            h-full
            bg-[#b7791f]
            transition-[width]
            duration-100
          "
                        style={{
                            width: `${progress}%`,
                        }}
                    />
                </div>

                {/* Article Header */}

                <header className="pt-36 md:pt-44 pb-16 px-6">
                    <div className="max-w-5xl mx-auto text-center">

                        {/* Category */}

                        <Link
                            to={`/categories?topic=${article.category.toLowerCase()}`}
                            className="
              inline-block
              text-xs
              md:text-sm
              uppercase
              tracking-[0.3em]
              text-[#b7791f]
              font-semibold
              mb-7
              hover:opacity-70
              transition
            "
                        >
                            {article.category}
                        </Link>

                        {/* Title */}

                        <h1
                            className="
              heading-font
              text-5xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              leading-[0.95]
              tracking-tight
              max-w-5xl
              mx-auto
              mb-8
            "
                        >
                            {article.title}
                        </h1>

                        {/* Excerpt */}

                        <p
                            className="
              max-w-2xl
              mx-auto
              text-lg
              md:text-xl
              leading-8
              text-black/60
              dark:text-white/60
              mb-9
            "
                        >
                            {article.excerpt}
                        </p>

                        {/* Metadata */}

                        <div
                            className="
              flex
              flex-wrap
              justify-center
              items-center
              gap-x-4
              gap-y-2
              text-sm
              text-black/50
              dark:text-white/50
            "
                        >
                            <span>
                                By{" "}
                                <span className="text-black dark:text-white">
                                    {article.author}
                                </span>
                            </span>

                            <span>•</span>

                            <span>{article.date}</span>

                            <span>•</span>

                            <span className="flex items-center gap-1.5">
                                <FiClock size={15} />
                                {article.readTime}
                            </span>
                        </div>
                    </div>
                </header>

                {/* Hero Image */}

                <div className="max-w-6xl mx-auto px-4 md:px-6 mb-20">
                    <div className="overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem]">
                        <img
                            src={article.image}
                            alt={article.title}
                            className="
              w-full
              aspect-[16/8]
              object-cover
              hover:scale-[1.02]
              transition-transform
              duration-1000
            "
                        />
                    </div>
                </div>

                {/* Article Body */}

                <article className="max-w-6xl mx-auto px-6 pb-32">

                    <div className="grid lg:grid-cols-[100px_minmax(0,760px)_100px] justify-center gap-8">

                        {/* Desktop Tools */}

                        <aside className="hidden lg:flex flex-col items-center gap-4 pt-2">

                            <button
                                onClick={() =>
                                    setBookmarked((current) => !current)
                                }
                                aria-label="Bookmark article"
                                className={`
                w-12
                h-12
                rounded-full
                border
                flex
                items-center
                justify-center
                transition-all
                ${bookmarked
                                        ? "bg-[#b7791f] text-white border-[#b7791f]"
                                        : "border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/5"
                                    }
              `}
                            >
                                <FiBookmark
                                    size={18}
                                    fill={
                                        bookmarked
                                            ? "currentColor"
                                            : "none"
                                    }
                                />
                            </button>

                            <button
                                onClick={shareArticle}
                                aria-label="Share article"
                                className="
                w-12
                h-12
                rounded-full
                border
                border-black/10
                dark:border-white/10
                flex
                items-center
                justify-center
                hover:bg-black/5
                dark:hover:bg-white/5
                transition
              "
                            >
                                <FiShare2 size={18} />
                            </button>
                        </aside>

                        {/* Main Content */}

                        <div>
                            <ArticleContent
                                content={article.content || []}
                            />

                            {/* Mobile Tools */}

                            <div
                                className="
                lg:hidden
                flex
                justify-center
                gap-3
                mt-12
                pt-8
                border-t
                border-black/10
                dark:border-white/10
              "
                            >
                                <button
                                    onClick={() =>
                                        setBookmarked((current) => !current)
                                    }
                                    className={`
                  w-11
                  h-11
                  rounded-full
                  border
                  flex
                  items-center
                  justify-center
                  ${bookmarked
                                            ? "bg-[#b7791f] text-white border-[#b7791f]"
                                            : "border-black/10 dark:border-white/10"
                                        }
                `}
                                >
                                    <FiBookmark
                                        size={18}
                                        fill={
                                            bookmarked
                                                ? "currentColor"
                                                : "none"
                                        }
                                    />
                                </button>

                                <button
                                    onClick={shareArticle}
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
                "
                                >
                                    <FiShare2 size={18} />
                                </button>
                            </div>

                            {/* Article Footer */}

                            <div
                                className="
                mt-20
                pt-8
                border-t
                border-black/10
                dark:border-white/10
                flex
                items-center
                justify-between
              "
                            >
                                <span
                                    className="
                  text-sm
                  text-black/50
                  dark:text-white/50
                "
                                >
                                    {article.readTime}
                                </span>

                                <button
                                    onClick={() =>
                                        window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                        })
                                    }
                                    className="
                  flex
                  items-center
                  gap-2
                  text-sm
                  hover:text-[#b7791f]
                  transition
                "
                                >
                                    Back to top
                                    <FiArrowUpRight size={15} />
                                </button>
                            </div>
                        </div>
                    </div>
                </article>

                {/* More Articles */}

                <section
                    className="
          border-t
          border-black/5
          dark:border-white/5
          py-24
          md:py-32
          px-6
        "
                >
                    <div className="max-w-7xl mx-auto">

                        <div
                            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              justify-between
              gap-5
              mb-12
            "
                        >
                            <div>
                                <p
                                    className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[#b7791f]
                  mb-4
                "
                                >
                                    Continue reading
                                </p>

                                <h2 className="heading-font text-4xl md:text-5xl">
                                    More to explore
                                </h2>
                            </div>

                            <Link
                                to="/articles"
                                className="
                inline-flex
                items-center
                gap-2
                text-sm
                hover:text-[#b7791f]
                transition
              "
                            >
                                View all articles
                                <FiArrowRight size={16} />
                            </Link>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">

                            {moreArticles.map((item) => (
                                <Link
                                    key={item.id}
                                    to={`/article/${item.slug}`}
                                    className="group"
                                >
                                    <div className="overflow-hidden rounded-2xl mb-5">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="
                      aspect-[16/10]
                      w-full
                      object-cover
                      group-hover:scale-105
                      transition
                      duration-700
                    "
                                        />
                                    </div>

                                    <span
                                        className="
                    text-xs
                    uppercase
                    tracking-[0.2em]
                    text-[#b7791f]
                  "
                                    >
                                        {item.category}
                                    </span>

                                    <h3
                                        className="
                    heading-font
                    text-2xl
                    leading-tight
                    mt-2
                    group-hover:text-[#b7791f]
                    transition
                  "
                                    >
                                        {item.title}
                                    </h3>
                                </Link>
                            ))}

                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}