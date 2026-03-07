function Projects() {
  const projects = [
    {
      name: "Bot Builder Interface",
      description:
        "Tree-based visual builder for chatbot automation with drag-and-drop components.",
      stack: ["React", "TypeScript", "Zustand"],
    },
    {
      name: "Ticket Platform UI",
      description:
        "Frontend architecture for customer support ticket platform with reusable UI components.",
      stack: ["React", "Ant Design", "GraphQL"],
    },
    {
      name: "IoT Inventory Dashboard",
      description:
        "Dashboard for managing SIM cards and IoT devices with real-time inventory data.",
      stack: ["React", "Redux", "Node.js"],
    },
  ]

  return (
    <section className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h2 className="text-lg font-semibold text-cyan-400 mb-6">
        Projects
      </h2>

      <div className="space-y-5">
        {projects.map((project) => (
          <div key={project.name}>
            <h3 className="font-semibold text-white">
              {project.name}
            </h3>

            <p className="text-sm text-slate-400 mt-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-slate-800 px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects;