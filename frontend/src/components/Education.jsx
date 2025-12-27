import { motion } from "framer-motion";

export default function Education() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto border rounded-xl p-8 bg-white dark:bg-slate-900 shadow-md"
      >
        <h2 className="text-3xl font-poppins mb-6 text-center">
          Education
        </h2>

        <div className="text-center">
          <h3 className="text-xl font-semibold">
            Rashtrasant Tukadoji Maharaj Nagpur University
          </h3>

          <p className="mt-2 text-slate-600 dark:text-slate-400">
            B.Tech in Computer Science Engineering
          </p>

          <p className="mt-1">
            Expected Graduation: <strong>May 2026</strong>
          </p>

          <div className="mt-6 flex justify-center gap-6 flex-wrap">
            <div className="px-6 py-3 border rounded-lg">
              <p className="text-gold text-xl font-semibold">9.0</p>
              <p className="text-sm">CGPA (6 Semesters)</p>
            </div>

            <div className="px-6 py-3 border rounded-lg">
              <p className="text-gold text-xl font-semibold">Top Performer</p>
              <p className="text-sm">Consistent Academic Excellence</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
