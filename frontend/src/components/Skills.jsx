export default function Skills() {
  const skills = [
    // Frontend
    ["HTML", 95],
    ["CSS", 90],
    ["JavaScript", 92],
    ["React", 95],

    // Backend
    ["Node.js", 90],
    ["Core Java", 95],

    // Databases
    ["MySQL", 92],
    ["MongoDB", 88],

    // Tools
    ["Git", 90],
    ["GitHub", 90],
  ];

  return (
    <section className="py-28 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-poppins mb-12 text-center">
        Technical <span className="text-accent">Skills</span>
      </h2>

      {skills.map(([skill, val]) => (
        <div key={skill} className="mb-6">
          <div className="flex justify-between mb-2 text-sm font-medium">
            <span>{skill}</span>
            <span>{val}%</span>
          </div>

          <div className="h-3 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-700"
              style={{ width: `${val}%` }}
            />
          </div>
        </div>
      ))}
    </section>
  );
}
