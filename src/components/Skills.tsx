function Skills() {
  const skills = [
    "React",
    "Next.js",
    "Angular",
    "Vue",
    "TypeScript",
    "Node.js",
    "GraphQL",
    "Docker",
    "Git"
  ]

  return (
    <section className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h2 className="text-lg font-semibold text-cyan-400 mb-4">
        Skills
      </h2>

      <div className="flex flex-wrap gap-2">
        {skills.map(s => (
          <span
            key={s}
            className="bg-slate-800 px-2 py-1 rounded text-sm"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  )
}

export default Skills;