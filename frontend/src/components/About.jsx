// // export default function About() {
// //   return (
// //     <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
// //       <div>
// //         <h2 className="text-3xl font-poppins">About Me</h2>
// //         <p className="mt-4">
// //           4th-year CSE student passionate about transforming complex problems into elegant web solutions.
// //           Expert in MERN stack, Core Java, and database optimization with hands-on experience.
// //         </p>
// //       </div>
// //       <div className="grid grid-cols-2 gap-4">
// //         {[
// //           ["CGPA", "9.0"],
// //           ["LeetCode", "100+"],
// //           ["Projects", "3 Live"],
// //           ["Status", "Hiring Ready"],
// //         ].map(([k, v]) => (
// //           <div key={k} className="p-4 border rounded-lg text-center">
// //             <p className="text-gold text-xl">{v}</p>
// //             <p className="text-sm">{k}</p>
// //           </div>
// //         ))}
// //       </div>
// //     </section>
// //   );
// // }
// export default function About() {
//   const stats = [
//     ["CGPA", "9.0"],
//     ["LeetCode", "100+"],
//     ["Projects", "3 Live"],
//     ["Status", "Hiring Ready"],
//   ];

//   return (
//     <section className="py-28 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
//       <div>
//         <h2 className="text-4xl font-poppins mb-6">
//           About <span className="text-accent">Me</span>
//         </h2>
//         <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
//           Final-year Computer Science student passionate about solving complex
//           problems and converting them into scalable full-stack applications.
//           Strong expertise in MERN stack, Core Java, and databases.
//         </p>
//       </div>

//       <div className="grid grid-cols-2 gap-6">
//         {stats.map(([k, v]) => (
//           <div
//             key={k}
//             className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-white/20 shadow-lg p-6 text-center hover:-translate-y-1 transition"
//           >
//             <p className="text-3xl font-bold text-accent">{v}</p>
//             <p className="mt-1 text-sm text-slate-500">{k}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
export default function About() {
  const stats = [
    ["CGPA", "9.0"],
    ["LeetCode", "100+"],
    ["Projects", "4 Live"],
    ["Status", "Hiring Ready"],
  ];

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
      {/* LEFT – IMAGE */}
      <div className="relative flex justify-center">
        {/* Glow */}
        <div className="absolute h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 blur-3xl opacity-30" />

        {/* Image */}
        <div className="relative h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-1 shadow-2xl">
          <img
            src="/profile.jpeg"
            alt="Purva Potbhare"
            className="h-full w-full object-cover rounded-full bg-white"
          />
        </div>
      </div>

      {/* RIGHT – CONTENT */}
      <div>
        <h2 className="text-4xl md:text-5xl font-poppins mb-6">
          About <span className="text-accent">Me</span>
        </h2>

        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
          Final-year Computer Science student passionate about building scalable,
          production-ready applications. Strong in MERN stack, Core Java, and
          Data Structures with proven problem-solving skills.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map(([k, v]) => (
            <div
              key={k}
              className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur border border-white/20 shadow-lg p-6 text-center hover:-translate-y-1 transition"
            >
              <p className="text-3xl font-bold text-accent">{v}</p>
              <p className="mt-1 text-sm text-slate-500">{k}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
