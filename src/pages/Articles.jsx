import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

import { articles } from "../data/article";
import SEO from "../components/SEO";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Articles() {
    const [activeCategory, setActiveCategory] =
        useState("All");

    const categories = [
        "All",
        ...new Set(
            articles.map((article) => article.category)
        ),
    ];

    const filteredArticles = useMemo(() => {
        if (activeCategory === "All") {
            return articles;
        }

        return articles.filter(
            (article) =>
                article.category === activeCategory
        );
    }, [activeCategory]);

    const featuredArticle = articles.find(
        (article) => article.featured
    );

    const archiveArticles = filteredArticles.filter(
        (article) =>
            !featuredArticle ||
            article.id !== featuredArticle.id
    );

    <SEO
        title="Articles"
        description="Explore the latest articles from ChizzyWrites covering life, culture, ideas, personal growth and more."
        url="/articles"
    />

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
                {/* Header */}

                <section className="pt-36 md:pt-44 pb-20 px-6">
                    <div className="max-w-7xl mx-auto">

                        <p
                            className="
              text-xs
              md:text-sm
              uppercase
              tracking-[0.3em]
              text-[#b7791f]
              font-semibold
              mb-6
            "
                        >
                            The ChizzyWrites Journal
                        </p>

                        <div
                            className="
              grid
              lg:grid-cols-[1fr_420px]
              gap-10
              items-end
            "
                        >
                            <h1
                                className="
                heading-font
                text-6xl
                md:text-7xl
                lg:text-8xl
                leading-[0.9]
                tracking-tight
              "
                            >
                                Articles
                            </h1>

                            <p
                                className="
                text-base
                md:text-lg
                leading-8
                text-black/60
                dark:text-white/60
                max-w-md
                lg:pb-2
              "
                            >
                                Ideas, perspectives and stories
                                worth taking your time to read.
                                Explore thoughtful writing on life,
                                mindset, technology, culture and
                                everything in between.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Featured Article */}

                {featuredArticle && (
                    <section className="px-6 pb-24">
                        <div className="max-w-7xl mx-auto">

                            <Link
                                to={`/article/${featuredArticle.slug}`}
                                className="group block"
                            >
                                <div
                                    className="
                  grid
                  lg:grid-cols-2
                  bg-[#eeeae2]
                  dark:bg-[#1a1a1a]
                  rounded-[2rem]
                  overflow-hidden
                  transition-colors
                "
                                >
                                    {/* Image */}

                                    <div className="overflow-hidden">
                                        <img
                                            src={featuredArticle.image}
                                            alt={featuredArticle.title}
                                            className="
                      w-full
                      h-full
                      min-h-[350px]
                      lg:min-h-[500px]
                      object-cover
                      group-hover:scale-105
                      transition-transform
                      duration-1000
                    "
                                        />
                                    </div>

                                    {/* Content */}

                                    <div
                                        className="
                    flex
                    flex-col
                    justify-center
                    p-8
                    md:p-12
                    lg:p-16
                  "
                                    >
                                        <span
                                            className="
                      text-xs
                      uppercase
                      tracking-[0.25em]
                      text-[#b7791f]
                      font-semibold
                      mb-6
                    "
                                        >
                                            Featured Article
                                        </span>

                                        <h2
                                            className="
                      heading-font
                      text-4xl
                      md:text-5xl
                      leading-tight
                      mb-6
                      group-hover:text-[#b7791f]
                      transition-colors
                    "
                                        >
                                            {featuredArticle.title}
                                        </h2>

                                        <p
                                            className="
                      text-base
                      md:text-lg
                      leading-8
                      text-black/60
                      dark:text-white/60
                      mb-8
                    "
                                        >
                                            {featuredArticle.excerpt}
                                        </p>

                                        <div
                                            className="
                      flex
                      items-center
                      justify-between
                      gap-4
                      pt-6
                      border-t
                      border-black/10
                      dark:border-white/10
                    "
                                        >
                                            <div
                                                className="
                        flex
                        items-center
                        gap-3
                        text-xs
                        text-black/50
                        dark:text-white/50
                      "
                                            >
                                                <span>
                                                    {featuredArticle.date}
                                                </span>

                                                <span>•</span>

                                                <span>
                                                    {featuredArticle.readTime}
                                                </span>
                                            </div>

                                            <span
                                                className="
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-medium
                      "
                                            >
                                                Read article
                                                <FiArrowRight
                                                    size={16}
                                                    className="
                          group-hover:translate-x-1
                          transition-transform
                        "
                                                />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    </section>
                )}

                {/* Category Filter */}

                <section className="px-6 pb-16">
                    <div className="max-w-7xl mx-auto">

                        <div
                            className="
              flex
              gap-3
              overflow-x-auto
              pb-3
              scrollbar-hide
            "
                        >
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                    className={`
                  shrink-0
                  px-5
                  py-2.5
                  rounded-full
                  text-sm
                  transition-all
                  ${activeCategory === category
                                            ? "bg-[#171717] text-white dark:bg-[#f5f2ea] dark:text-[#111111]"
                                            : "border border-black/10 dark:border-white/10 hover:border-[#b7791f] hover:text-[#b7791f]"
                                        }
                `}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Article Archive */}

                <section className="px-6 pb-32">
                    <div className="max-w-7xl mx-auto">

                        <div
                            className="
              flex
              items-center
              justify-between
              mb-12
              pb-5
              border-b
              border-black/10
              dark:border-white/10
            "
                        >
                            <div>
                                <p
                                    className="
                  text-xs
                  uppercase
                  tracking-[0.25em]
                  text-[#b7791f]
                  mb-2
                "
                                >
                                    Archive
                                </p>

                                <h2 className="heading-font text-3xl md:text-4xl">
                                    {activeCategory === "All"
                                        ? "Latest articles"
                                        : activeCategory}
                                </h2>
                            </div>

                            <span
                                className="
                text-sm
                text-black/40
                dark:text-white/40
              "
                            >
                                {archiveArticles.length}{" "}
                                {archiveArticles.length === 1
                                    ? "article"
                                    : "articles"}
                            </span>
                        </div>

                        {archiveArticles.length > 0 ? (
                            <div
                                className="
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-x-8
                gap-y-16
              "
                            >
                                {archiveArticles.reverse().map((article) => (
                                    <ArticleCard
                                        key={article.id}
                                        article={article}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div
                                className="
                py-20
                text-center
                text-black/50
                dark:text-white/50
              "
                            >
                                <p className="heading-font text-3xl mb-3">
                                    Nothing here yet.
                                </p>

                                <p className="text-sm">
                                    More articles in this category
                                    are coming soon.
                                </p>
                            </div>
                        )}

                    </div>
                </section>
            </main>
            <Footer />
        </div>
    );
}