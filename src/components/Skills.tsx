function Skills() {
const skills = [
  { name: "React", level: 80 },
  { name: "Vue", level: 70 },
  { name: "Angular", level: 50 },
  { name: "AngularJS", level: 60 },
  
  { name: "HTML", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 60 },
  { name: "AntDesign", level: 80 },
  { name: "MUI", level: 80 },
  { name: "Chart.js", level: 70 },
  { name: "CSS/SCSS", level: 80 },
  { name: "Next.js", level: 50 },
  { name: "SWR"},
  { name: "Redux"},
  { name: "GraphQL"},
  { name: "MySQL" },
  { name: "PostgreSQL" },
  { name: "MongoDB" },
  { name: "Java" },
  { name: "Spring Boot" },
  { name: "PHP" },
  { name: "Laravel" },
  { name: "Docker" },
  { name: "Git" }
]

  return (
    <section className="bg-card p-6 rounded-xl border">
      <h2 className="text-lg font-semibold text-primary mb-4">
        Skills
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <div key={skill.name} className="flex flex-col">

            <span className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border">
              {skill.name}
            </span>

            {skill.level && (
              <div className="w-full h-1.5 bg-muted rounded mt-1 overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            )}

          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills;