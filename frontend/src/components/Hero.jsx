// import { motion } from "framer-motion";

// export default function Hero() {
//   return (
//     <section className="min-h-screen flex items-center justify-center text-center px-6">
//       <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
//         <h1 className="text-5xl md:text-6xl font-poppins">
//           Purva Potbhare
//         </h1>
//         <p className="mt-4 text-xl text-accent">
//           MERN Stack Developer | Core Java Expert | 100+ LeetCode Solved
//         </p>
//         <p className="mt-6 max-w-xl mx-auto">
//           Building scalable web solutions with clean code and real-world impact.
//         </p>

//         <div className="mt-8 flex justify-center gap-4">
//           <a href="#projects" className="px-6 py-3 bg-accent text-white rounded-lg glow">
//             Explore Projects
//           </a>
//           <a href="/resume.pdf" download className="px-6 py-3 border rounded-lg">
//             View Resume
//           </a>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-28 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.18),transparent_60%)]" />

      <div className="relative text-center max-w-3xl">
        <h1 className="text-5xl md:text-7xl font-poppins mb-4">
          Purva <span className="text-accent">Potbhare</span>
        </h1>

        <p className="text-xl text-slate-600 dark:text-slate-400">
          MERN Stack Developer · Core Java · 100+ LeetCode
        </p>

        <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
          I build scalable, production-ready web applications with clean,
          maintainable code and real-world impact.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-8 py-3 rounded-xl bg-accent text-white shadow-lg hover:scale-105 transition"
          >
            Explore Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 rounded-xl border border-white/20 bg-white/60 dark:bg-white/5 backdrop-blur hover:scale-105 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
