import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
    const [darkMode, setDarkMode] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;

        if (darkMode) {
            root.dataset.theme = "dark";
            localStorage.setItem("theme", "dark");
        } else {
            root.dataset.theme = "light";
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode((current) => !current)}
            aria-label={
                darkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
            }
            className="
        w-10
        h-10
        rounded-full
        flex
        items-center
        justify-center
        bg-black/5
        dark:bg-white/10
        hover:bg-black/10
        dark:hover:bg-white/15
        transition-colors
        duration-300
      "
        >
            {darkMode ? (
                <FiSun size={18} />
            ) : (
                <FiMoon size={18} />
            )}
        </button>
    );
}