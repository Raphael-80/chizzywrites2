import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { articles } from "../data/article";
import ArticleCard from "../components/ArticleCard";
import SEO from "../components/SEO";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
    const featuredArticle = articles.find(
        (article) => article.featured
    );

    const latestArticles = articles.filter(
        (article) => !article.featured
    );

    <SEO
        description="ChizzyWrites explores life, ideas, culture, personal growth and the stories that shape how we see the world."
        url="/"
    />
    return (
        <div>
            <Navbar />
            <main className="
    min-h-screen
    bg-chizzy-paper
    text-chizzy-ink
    dark:bg-chizzy-dark
    dark:text-chizzy-white
    transition-colors
    duration-300
  ">

                {/* Hero Section!!!!!!!!!!!!! */}

                <section className="
min-h-[85vh]
flex
items-center
pt-20
px-6
">
                    <div className="
max-w-7xl
mx-auto
w-full
grid
lg:grid-cols-2
gap-16
items-center
">
                        <div>
                            <p className="
text-sm
uppercase
tracking-[0.3em]
text-[#b7791f]
font-semibold
mb-6
">
                                ChizzyWrites
                            </p>

                            <h1 className="
heading-font
text-6xl
md:text-7xl
lg:text-8xl
leading-[0.95]
tracking-tight
mb-8
">
                                Ideas worth
                                <br />
                                <span className="italic">
                                    reading.
                                </span>
                            </h1>

                            <p className="
max-w-xl
text-lg
md:text-xl
leading-8
text-black/60
dark:text-white/60
mb-10
">
                                Thought-provoking articles about technology,
                                life, creativity, culture and the ideas shaping
                                the world around us.
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
dark:bg-[#f5f2ea]
text-white
dark:text-[#111111]
font-medium
hover:gap-5
transition-all
"
                            >
                                Explore articles
                                <FiArrowRight size={18} />
                            </Link>
                        </div>

                        {/* Hero iMAGE */}
                        <div className="relative">
                            <div className="
overflow-hidden
rounded-[2rem]
rotate-2
hover:rotate-0
transition-transform
duration-700
">
                                <img src={featuredArticle.image}
                                    alt={featuredArticle.title}
                                    className="
w-full
aspect-[4/5]
object-cover
"/>
                            </div>
                            <div className="
absolute
-bottom-8
-left-8
max-w-sm
p-6
rounded-2xl
bg-[#f8f6f1]
dark:bg-[#1b1b1b]
shadow-2xl
border
border-black/5
dark:border-white/5
">
                                <p className="
text-xs
uppercase
tracking-[0.2em]
text-[#b7791f]
mb-3
">
                                    Featured
                                </p>
                                <h2 className="
heading-font
text-xl
leading-tight
mb-3
">
                                    {featuredArticle.title}
                                </h2>

                                <Link to={`/article/${featuredArticle.slug}`} className="
inline-flex
items-center
gap-2
text-sm
font-medium
hover:text-[#b7791f]
">
                                    Read article
                                    <FiArrowUpRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Latest Articles */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto">
                        <div className="
flex
flex-col
md:flex-row
md:items-end
justify-between
gap-6
mb-12
">
                            <div>
                                <p className="
text-sm
uppercase
tracking-[0.25em]
text-[#b7791f]
mb-4
">
                                    Fresh from the desk
                                </p>

                                <h2 className="
heading-font
text-4xl
md:text-5xl
">
                                    Latest articles
                                </h2>
                            </div>
                            <Link to="/articles"
                                className="
inline-flex
items-center
gap-2
text-sm
font-medium
hover:text-[#b7791f]
">
                                View All
                                <FiArrowRight size={17} />
                            </Link>
                        </div>

                        <div className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-x-8
gap-y-16
">
                            {latestArticles.reverse().map((article) => (
                                <ArticleCard key={article.id} article={article} />
                            ))}
                        </div>
                    </div>
                </section>

                {/* Topics */}
                <section className="
py-32
px-6
border-y
border-black/5
dark:border-white/5
">
                    <div className="max-w-7xl mx-auto">
                        <p className="
text-sm
uppercase
tracking-[0.25em]
text-[#b7791f]
mb-5
">
                            Explore
                        </p>
                        <h2 className="
heading-font
text-4xl
md:text-5xl
mb-12
">
                            Find something
                            <br />
                            worth thinking about.
                        </h2>
                        <div className="
grid
grid-cols-2
md:grid-cols-3
lg:grid-cols-6
gap-4
">
                            {[
                                "Technology",
                                "Business",
                                "Life",
                                "Culture",
                                "Ideas",
                                "Spiritual Growth",
                                "Health",
                                "Personal",
                            ].map((topic) => (

                                <Link
                                    key={topic}
                                    to={`/categories?topic=${topic.toLowerCase()}`}
                                    className="
p-6
rounded-2xl
border
border-black/10
dark:border-white/10
hover:bg-[#171717]
hover:text-white
dark:hover:bg-[#f5f2ea]
dark:hover:text-[#111111]
transition-all
"
                                >
                                    <span className="text-sm font-medium">
                                        {topic}
                                    </span>
                                </Link>

                            ))}
                        </div>
                    </div>
                </section>

               
            </main>
            <Footer />
        </div>
    )
}