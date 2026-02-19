
export default function About() {
  const stats = [
    ["CGPA", "9.0"],
    ["LeetCode", "100+"],
    ["Projects", "9 Live"],
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
