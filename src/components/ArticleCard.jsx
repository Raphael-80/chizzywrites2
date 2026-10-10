import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
    return (
        <article className="group">
            <Link to={`/article/${article.slug}`}>

                <div className="overflow-hidden rounded-2xl mb-5">
                    <img
                        src={article.image}
                        alt={article.title}
                        className="
              w-full
              aspect-[16/10]
              object-cover
              group-hover:scale-105
              transition-transform
              duration-700
            "
                    />
                </div>

                <div className="space-y-3">

                    <span
                        className="
              text-xs
              uppercase
              tracking-[0.2em]
              text-[#b7791f]
              font-semibold
            "
                    >
                        {article.category}
                    </span>

                    <h3
                        className="
              heading-font
              text-2xl
              leading-tight
              group-hover:text-[#b7791f]
              transition-colors
            "
                    >
                        {article.title}
                    </h3>

                    <p
                        className="
              text-sm
              leading-6
              text-black/60
              dark:text-white/50
              line-clamp-3
            "
                    >
                        {article.excerpt}
                    </p>

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
                        <span>{article.date}</span>

                        <span>•</span>

                        <span>{article.readTime}</span>
                    </div>

                </div>
            </Link>
        </article>
    );
}