// import { Link } from "react-router-dom";
// import { FiSearch } from "react-icons/fi";
// import ThemeToggle from "./ThemeToggle";

// export default function Navbar() {
//   return (
//     <header
//       className="
//         fixed
//         top-0
//         left-0
//         right-0
//         z-50
//         bg-[#f8f6f1]/95
//         dark:bg-[#111111]/95
//         text-[#171717]
//         dark:text-white
//         backdrop-blur-xl
//         border-b
//         border-black/10
//         dark:border-white/10
//         transition-colors
//         duration-300
//       "
//     >
//       <nav
//         className="
//           max-w-7xl
//           mx-auto
//           px-6
//           lg:px-10
//           h-20
//           flex
//           items-center
//           justify-between
//         "
//       >
//         {/* Logo */}

//         <Link
//           to="/"
//           className="
//             heading-font
//             text-2xl
//             font-semibold
//             tracking-tight
//             text-[#171717]
//             dark:text-white
//           "
//         >
//           Chizzy
//           <span className="text-[#b7791f]">
//             Writes
//           </span>
//         </Link>

//         {/* Desktop Navigation */}

//         <div
//           className="
//             hidden
//             md:flex
//             items-center
//             gap-8
//             text-sm
//           "
//         >
//           <Link
//             to="/articles"
//             className="
//               text-[#171717]/70
//               dark:text-white/75
//               hover:text-[#b7791f]
//               transition-colors
//             "
//           >
//             Articles
//           </Link>

//           <Link
//             to="/categories"
//             className="
//               text-[#171717]/70
//               dark:text-white/75
//               hover:text-[#b7791f]
//               transition-colors
//             "
//           >
//             Categories
//           </Link>

//           <Link
//             to="/about"
//             className="
//               text-[#171717]/70
//               dark:text-white/75
//               hover:text-[#b7791f]
//               transition-colors
//             "
//           >
//             About
//           </Link>

//           <Link
//             to="/contact"
//             className="
//               text-[#171717]/70
//               dark:text-white/75
//               hover:text-[#b7791f]
//               transition-colors
//             "
//           >
//             Contact
//           </Link>
//         </div>

//         {/* Actions */}

//         <div className="flex items-center gap-3">
//           <button
//             className="
//               w-10
//               h-10
//               rounded-full
//               flex
//               items-center
//               justify-center
//               text-[#171717]
//               dark:text-white
//               hover:bg-black/5
//               dark:hover:bg-white/5
//               transition
//             "
//           >
//             <FiSearch size={18} />
//           </button>

//           <ThemeToggle />
//         </div>
//       </nav>
//     </header>
//   );
// }


import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();

        const query = searchQuery.trim();

        if (!query) return;

        navigate(`/search?q=${encodeURIComponent(query)}`);

        setSearchQuery("");
        setSearchOpen(false);
        setMobileMenuOpen(false);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <header
            className="
        fixed
        top-0
        left-0
        right-0
        z-50
        bg-[#f8f6f1]/95
        dark:bg-[#111111]/95
        text-[#171717]
        dark:text-white
        backdrop-blur-xl
        border-b
        border-black/10
        dark:border-white/10
        transition-colors
        duration-300
      "
        >
            <nav
                className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-10
          h-20
          flex
          items-center
          justify-between
        "
            >
                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMobileMenu}
                    className="
            heading-font
            text-xl
            sm:text-2xl
            font-semibold
            tracking-tight
            text-[#171717]
            dark:text-white
            shrink-0
          "
                >
                    Chizzy
                    <span className="text-[#b7791f]">Writes</span>
                </Link>

                {/* Desktop Navigation */}
                <div
                    className="
            hidden
            md:flex
            items-center
            gap-6
            lg:gap-8
            text-sm
          "
                >
                    <Link
                        to="/articles"
                        className="
              text-[#171717]/70
              dark:text-white/75
              hover:text-[#b7791f]
              transition-colors
            "
                    >
                        Articles
                    </Link>

                    <Link
                        to="/categories"
                        className="
              text-[#171717]/70
              dark:text-white/75
              hover:text-[#b7791f]
              transition-colors
            "
                    >
                        Categories
                    </Link>

                    <Link
                        to="/about"
                        className="
              text-[#171717]/70
              dark:text-white/75
              hover:text-[#b7791f]
              transition-colors
            "
                    >
                        About
                    </Link>

                    <Link
                        to="/contact"
                        className="
              text-[#171717]/70
              dark:text-white/75
              hover:text-[#b7791f]
              transition-colors
            "
                    >
                        Contact
                    </Link>
                </div>

                {/* Desktop Actions */}
                <div className="hidden md:flex items-center gap-2">
                    {searchOpen && (
                        <form
                            onSubmit={handleSearch}
                            className="
                flex
                items-center
                gap-2
                mr-1
                animate-in
                fade-in
                slide-in-from-right-2
                duration-200
              "
                        >
                            <div
                                className="
                  flex
                  items-center
                  w-48
                  lg:w-64
                  h-10
                  rounded-full
                  border
                  border-black/10
                  dark:border-white/10
                  bg-black/5
                  dark:bg-white/5
                  px-4
                "
                            >
                                <FiSearch
                                    size={16}
                                    className="text-black/50 dark:text-white/50 shrink-0"
                                />

                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                    placeholder="Search articles..."
                                    className="
                    w-full
                    bg-transparent
                    outline-none
                    border-none
                    px-2
                    text-sm
                    text-[#171717]
                    dark:text-white
                    placeholder:text-black/40
                    dark:placeholder:text-white/40
                  "
                                />
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    setSearchOpen(false);
                                    setSearchQuery("");
                                }}
                                className="
                  w-10
                  h-10
                  rounded-full
                  flex
                  items-center
                  justify-center
                  hover:bg-black/5
                  dark:hover:bg-white/5
                  transition
                "
                                aria-label="Close search"
                            >
                                <FiX size={18} />
                            </button>
                        </form>
                    )}

                    {/* {!searchOpen && (
            <button
              onClick={() => setSearchOpen(true)}
              className="
                w-10
                h-10
                rounded-full
                flex
                items-center
                justify-center
                text-[#171717]
                dark:text-white
                hover:bg-black/5
                dark:hover:bg-white/5
                transition
              "
              aria-label="Search"
            >
              <FiSearch size={18} />
            </button>
          )} */}

                    <ThemeToggle />
                </div>

                {/* Mobile Actions */}
                <div className="flex md:hidden items-center gap-1">
                    {/* <button
            onClick={() => setSearchOpen((prev) => !prev)}
            className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              hover:bg-black/5
              dark:hover:bg-white/5
              transition
            "
            aria-label="Search"
          >
            {searchOpen ? <FiX size={19} /> : <FiSearch size={19} />}
          </button> */}

                    <ThemeToggle />

                    <button
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="
              w-10
              h-10
              rounded-full
              flex
              items-center
              justify-center
              hover:bg-black/5
              dark:hover:bg-white/5
              transition
            "
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <FiX size={21} /> : <FiMenu size={21} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Search */}
            {searchOpen && (
                <div
                    className="
            md:hidden
            px-4
            pb-4
            border-t
            border-black/5
            dark:border-white/5
          "
                >
                    <form onSubmit={handleSearch} className="pt-3">
                        <div
                            className="
                flex
                items-center
                gap-2
                h-11
                rounded-full
                border
                border-black/10
                dark:border-white/10
                bg-black/5
                dark:bg-white/5
                px-4
              "
                        >
                            <FiSearch
                                size={17}
                                className="text-black/50 dark:text-white/50 shrink-0"
                            />

                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                autoFocus
                                placeholder="Search articles..."
                                className="
                  w-full
                  bg-transparent
                  outline-none
                  border-none
                  text-sm
                  text-[#171717]
                  dark:text-white
                  placeholder:text-black/40
                  dark:placeholder:text-white/40
                "
                            />
                        </div>
                    </form>
                </div>
            )}

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div
                    className="
            md:hidden
            border-t
            border-black/10
            dark:border-white/10
            bg-[#f8f6f1]
            dark:bg-[#111111]
          "
                >
                    <div className="px-4 py-5 space-y-1">
                        <Link
                            to="/articles"
                            onClick={closeMobileMenu}
                            className="
                block
                px-4
                py-3
                rounded-xl
                text-sm
                text-[#171717]/75
                dark:text-white/75
                hover:bg-black/5
                dark:hover:bg-white/5
                hover:text-[#b7791f]
                transition
              "
                        >
                            Articles
                        </Link>

                        <Link
                            to="/categories"
                            onClick={closeMobileMenu}
                            className="
                block
                px-4
                py-3
                rounded-xl
                text-sm
                text-[#171717]/75
                dark:text-white/75
                hover:bg-black/5
                dark:hover:bg-white/5
                hover:text-[#b7791f]
                transition
              "
                        >
                            Categories
                        </Link>

                        <Link
                            to="/about"
                            onClick={closeMobileMenu}
                            className="
                block
                px-4
                py-3
                rounded-xl
                text-sm
                text-[#171717]/75
                dark:text-white/75
                hover:bg-black/5
                dark:hover:bg-white/5
                hover:text-[#b7791f]
                transition
              "
                        >
                            About
                        </Link>

                        <Link
                            to="/contact"
                            onClick={closeMobileMenu}
                            className="
                block
                px-4
                py-3
                rounded-xl
                text-sm
                text-[#171717]/75
                dark:text-white/75
                hover:bg-black/5
                dark:hover:bg-white/5
                hover:text-[#b7791f]
                transition
              "
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
