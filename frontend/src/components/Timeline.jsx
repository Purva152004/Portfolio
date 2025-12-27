import { motion } from "framer-motion";

const timelineData = [
  {
    title: "DSA with Java",
    org: "Apna College",
    status: "Completed",
  },
  {
    title: "Full Stack Development",
    org: "Apna College",
    status: "Completed",
  },
  {
    title: "Programming in Java",
    org: "NPTEL",
    status: "Completed",
  },
  {
    title: "DSA using Java",
    org: "NPTEL",
    status: "Completed",
  },
  {
    title: "Generative AI",
    org: "SkillUp",
    status: "Completed",
  },
  {
    title: "Prompt Engineering",
    org: "SkillUp",
    status: "Completed",
  },
];

export default function Timeline() {
  return (
    <section className="py-20 max-w-4xl mx-auto px-6">
      <h2 className="text-3xl font-poppins mb-12 text-center">
        Certifications & Achievements
      </h2>

      <div className="relative border-l border-slate-300 dark:border-slate-700">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            {/* Dot */}
            <span className="absolute -left-[6px] w-3 h-3 bg-accent rounded-full" />

            {/* Card */}
            <div className="p-5 border rounded-lg bg-white dark:bg-slate-900 shadow-sm">
              <h3 className="font-poppins text-lg">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.org}</p>
              <span className="inline-block mt-2 text-xs text-gold">
                ✔ {item.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
