import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  return (
    <section className="bg-card border rounded-xl p-6">
      <h2 className="text-lg font-semibold text-primary mb-6">
        {t('projects.title')}
      </h2>

      <div className="space-y-5">
        {(t('projects.items', { returnObjects: true }) as any[]).map((project: any) => (
          <div key={project.name}>
            <h3 className="font-semibold text-foreground">
              {project.name}
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-2">
              {project.stack.map((tech: string) => (
                <span
                  key={tech}
                  className="text-xs bg-muted px-2 py-1 rounded"
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