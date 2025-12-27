// import { FiSun, FiMoon } from "react-icons/fi";
// import { useEffect, useState } from "react";

// export default function Navbar() {
//   const [dark, setDark] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     dark
//       ? document.documentElement.classList.add("dark")
//       : document.documentElement.classList.remove("dark");
//   }, [dark]);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
//         ${scrolled
//           ? "bg-white/80 dark:bg-[#0b1020]/80 backdrop-blur-xl shadow-md"
//           : "bg-transparent"
//         }`}
//     >
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
//         <h1 className="font-poppins text-lg tracking-wide">
//           Purva <span className="text-accent">Potbhare</span>
//         </h1>

//         <button
//           onClick={() => setDark(!dark)}
//           className="p-2 rounded-lg hover:bg-black/10 dark:hover:bg-white/10 transition"
//         >
//           {dark ? <FiSun /> : <FiMoon />}
//         </button>
//       </div>
//     </nav>
//   );
// }
import { FiSun, FiMoon } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    dark
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [dark]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-white/85 dark:bg-[#0b1020]/85 backdrop-blur-xl shadow-lg"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo + Name */}
        <div className="flex items-center gap-4">
          {/* Logo */}
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white font-bold text-xl flex items-center justify-center shadow-lg">
            PP
          </div>

          {/* Name */}
          <div className="leading-tight">
            <h1 className="font-poppins text-xl md:text-2xl tracking-wide">
              Purva <span className="text-accent">Potbhare</span>
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Right actions */}
        <button
          onClick={() => setDark(!dark)}
          className="p-3 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur border border-white/20 hover:scale-110 transition"
        >
          {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
        </button>
      </div>
    </nav>
  );
}
