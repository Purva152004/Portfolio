export default function Projects() {
  const projects = [
    {
      name: "Voice For Voiceless",
      desc: "Real-time animal rescue platform using MERN stack.",
      img: "/voice.png",
    },
    {
      name: "Zerodha Clone",
      desc: "Stock trading dashboard with live market data.",
      img: "/zerodha.png",
      link: "https://github.com/Purva152004/Zerodha",
    },
    {
      name: "Student Management System",
      desc: "A full-stack web application to manage student records, courses, and academic data with secure authentication and efficient CRUD operations.",
      img: "/student.jpg",
      link: "https://github.com/Purva152004/ccProject.git",
    },
    {
      name: "WanderLust",
      desc: "Travel platform with auth, search & Cloudinary.",
      img: "/wanderlust.png",
      link: "https://github.com/Purva152004/wanderlust_Mproject",
    },
  ];

  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-poppins mb-12">
        Featured <span className="text-accent">Projects</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.name}
            className="group rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 backdrop-blur border border-white/20 shadow-xl hover:-translate-y-2 transition"
          >
            <div className="h-44 overflow-hidden">
              <img
                src={p.img}
                alt={p.name}
                className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                {p.desc}
              </p>
              {p.link && (
                <a
                  href={p.link}
                  className="inline-block mt-4 text-accent font-medium"
                >
                  View Code →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
