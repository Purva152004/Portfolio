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
      desc:
        "A full-stack web application to manage student records, courses, and academic data with secure authentication and efficient CRUD operations.",
      img: "/student.jpg",
      link: "https://github.com/Purva152004/ccProject.git",
    },
    {
      name: "WanderLust",
      desc: "Travel platform with authentication, search, and Cloudinary image uploads.",
      img: "/wanderlust.png",
      link: "https://github.com/Purva152004/wanderlust_Mproject",
    },

    /* 🔹 NEW PROJECTS */

    {
      name: "WeatherFarm",
      desc:
        "Weather forecasting platform for farmers providing real-time weather data, alerts, and crop-friendly insights.",
      img: "/weatherfarm.png",
      link: "https://github.com/Purva152004/MernWeatherAdvisory.git", 
    },
    {
      name: "ChatAI",
      desc:
        "AI-powered chat application with real-time responses, modern UI, and API-based intelligence integration.",
      img: "/chatai.jpeg",
      link: "https://github.com/Purva152004/ChatAI.git",
    },
    {
      name: "Real-Time Polling System",
      desc:
        "Live polling web application with real-time vote updates, multi-select support, and anti-abuse mechanisms using Socket.IO.",
      img: "/Screenshot 2026-02-19 174610",
      link: "https://github.com/Purva152004/realtime-polling-app.git",
    },
    {
      name: "FuelEU Marine Platform",
      desc:
        "A sustainability-focused platform to monitor FuelEU Maritime compliance, emissions data, and marine fuel regulations.",
      img: "/fueleu.png",
      link: "https://github.com/Purva152004/FuelEU-Maritime-Project.git",
    },
  
    {
      name: "Persona Prospect Finder",
      desc:
        "it finds the data in apollo seed and stores in the Excel Sheet",
      img: "/fueleu.png",
      link: "https://github.com/Purva152004/persona-prospect-finder.git",
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
