import { Link } from "react-router-dom";
import { FiArrowLeft, FiHome } from "react-icons/fi";

export default function NotFound() {
    return (
        <main
            className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        py-32
        bg-[#f8f6f1]
        dark:bg-[#111111]
        text-[#171717]
        dark:text-white
      "
        >
            <div className="max-w-2xl w-full text-center">
                <p
                    className="
            text-[#b7791f]
            text-sm
            font-medium
            uppercase
            tracking-[0.25em]
            mb-6
          "
                >
                    404 — Lost page
                </p>

                <h1
                    className="
            heading-font
            text-7xl
            sm:text-8xl
            lg:text-9xl
            font-semibold
            tracking-tight
            leading-none
            mb-6
          "
                >
                    404
                </h1>

                <h2
                    className="
            heading-font
            text-2xl
            sm:text-3xl
            lg:text-4xl
            font-medium
            mb-4
          "
                >
                    This story doesn't exist.
                </h2>

                <p
                    className="
            text-[#171717]/60
            dark:text-white/60
            text-sm
            sm:text-base
            leading-relaxed
            max-w-md
            mx-auto
            mb-8
          "
                >
                    The page you're looking for may have been moved, deleted,
                    or never existed in the first place.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link
                        to="/"
                        className="
              w-full
              sm:w-auto
              h-12
              px-6
              rounded-full
              bg-[#171717]
              dark:bg-white
              text-white
              dark:text-[#171717]
              flex
              items-center
              justify-center
              gap-2
              text-sm
              font-medium
              hover:opacity-85
              transition
            "
                    >
                        <FiHome size={16} />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="
              w-full
              sm:w-auto
              h-12
              px-6
              rounded-full
              border
              border-black/10
              dark:border-white/10
              flex
              items-center
              justify-center
              gap-2
              text-sm
              font-medium
              hover:bg-black/5
              dark:hover:bg-white/5
              transition
            "
                    >
                        <FiArrowLeft size={16} />
                        Go Back
                    </button>
                </div>
            </div>
        </main>
    );
}