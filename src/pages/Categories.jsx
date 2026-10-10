import { Link, useSearchParams } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { articles } from "../data/article";
import ArticleCard from "../components/ArticleCard";
import SEO from "../components/SEO";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const categories = [
    "Technology",
    "Mindset",
    "Life",
    "Self Discovery",
    "Politics",
    "Spiritual Growth",
    "Mental Health",
    "Personal Growth",
    "Physical Health",
    "Character Development",
    "Relationships",
    "Social Issues",
    "Career"
];

export default function Categories() {
    const [searchParams] = useSearchParams();
    const selectedTopic = searchParams.get("topic");

    const selectedCategory = categories.find(
        (category) => category.toLowerCase() === selectedTopic
    );

    const filteredArticles = selectedCategory
        ? articles.filter(
            (article) =>
                article.category?.toLowerCase() ===
                selectedCategory.toLowerCase()
        )
        : [];


    <SEO
        title="Categories"
        description="Explore ChizzyWrites articles by category and discover stories covering different areas of life, ideas and culture."
        url="/categories"
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
                <section className="pt-40 pb-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <p className="text-sm uppercase tracking-[0.3em] text-[#b7791f] font-semibold mb-5">
                            Explore
                        </p>

                        <div className="max-w-4xl">
                            <h1 className="heading-font text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight mb-7">
                                Categories<span className="text-[#b7791f]">.</span>
                            </h1>

                            <p className="text-lg md:text-xl leading-8 text-black/60 dark:text-white/60 max-w-2xl">
                                Different subjects, different perspectives.
                                Find something that speaks to where your curiosity
                                takes you.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Category Grid */}
                <section className="px-6 pb-24">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {categories.map((category, index) => {
                                const isActive =
                                    selectedCategory?.toLowerCase() ===
                                    category.toLowerCase();

                                const count = articles.filter(
                                    (article) =>
                                        article.category?.toLowerCase() ===
                                        category.toLowerCase()
                                ).length;

                                return (
                                    <Link
                                        key={category}
                                        to={`/categories?topic=${category.toLowerCase()}`}
                                        className={`
                    group
                    relative
                    min-h-48
                    p-7
                    rounded-2xl
                    border
                    flex
                    flex-col
                    justify-between
                    overflow-hidden
                    transition-all
                    duration-300
                    ${isActive
                                                ? "bg-[#171717] text-white border-[#171717] dark:bg-[#f5f2ea] dark:text-[#111111] dark:border-[#f5f2ea]"
                                                : "border-black/10 dark:border-white/10 hover:bg-[#171717] hover:text-white dark:hover:bg-[#f5f2ea] dark:hover:text-[#111111]"
                                            }
                  `}
                                    >
                                        <div className="flex items-start justify-between">
                                            <span className="text-xs opacity-40">
                                                0{index + 1}
                                            </span>

                                            <FiArrowUpRight
                                                size={20}
                                                className="
                        opacity-40
                        group-hover:opacity-100
                        group-hover:translate-x-1
                        group-hover:-translate-y-1
                        transition-all
                      "
                                            />
                                        </div>

                                        <div>
                                            <h2 className="heading-font text-2xl md:text-3xl">
                                                {category}
                                            </h2>

                                            <p className="text-xs opacity-50 mt-2">
                                                {count} {count === 1 ? "article" : "articles"}
                                            </p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* Selected Category */}
                {selectedCategory && (
                    <section className="border-t border-black/5 dark:border-white/5 py-28 px-6">
                        <div className="max-w-7xl mx-auto">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                                <div>
                                    <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-4">
                                        Category
                                    </p>

                                    <h2 className="heading-font text-4xl md:text-5xl">
                                        {selectedCategory}
                                    </h2>
                                </div>

                                <Link
                                    to="/articles"
                                    className="
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  hover:text-[#b7791f]
                  transition-colors
                "
                                >
                                    All articles
                                    <FiArrowRight size={17} />
                                </Link>
                            </div>

                            {filteredArticles.length > 0 ? (
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                                    {filteredArticles.map((article) => (
                                        <ArticleCard
                                            key={article.id}
                                            article={article}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="py-20 text-center border border-black/10 dark:border-white/10 rounded-2xl">
                                    <h3 className="heading-font text-3xl mb-3">
                                        Nothing here yet.
                                    </h3>

                                    <p className="text-black/50 dark:text-white/50 mb-7">
                                        There aren't any articles in this category yet.
                                    </p>

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
                    text-sm
                    font-medium
                  "
                                    >
                                        Browse all articles
                                        <FiArrowRight size={16} />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* No category selected */}
                {!selectedCategory && (
                    <section className="border-t border-black/5 dark:border-white/5 py-28 px-6">
                        <div className="max-w-3xl mx-auto text-center">
                            <p className="text-sm uppercase tracking-[0.25em] text-[#b7791f] mb-5">
                                Start exploring
                            </p>

                            <h2 className="heading-font text-4xl md:text-5xl leading-tight mb-6">
                                Pick a subject.
                                <br />
                                Follow your curiosity.
                            </h2>

                            <p className="text-black/60 dark:text-white/60 leading-7 mb-8">
                                Choose one of the categories above to discover
                                articles and perspectives from ChizzyWrites.
                            </p>

                            <Link
                                to="/articles"
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
                                Browse all articles
                                <FiArrowRight size={18} />
                            </Link>
                        </div>
                    </section>
                )}
            </main>
            <Footer />
        </div>
    );
}