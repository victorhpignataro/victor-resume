import { useTranslation } from "react-i18next";

function Experience() {
  const { t } = useTranslation();

  return (
    <section className="bg-card p-6 rounded-xl border">
      <h2 className="text-lg font-semibold text-primary mb-6">
        {t('experience.title')}
      </h2>

      <div className="space-y-6">

        {(t('experience.jobs', { returnObjects: true }) as any[]).map((job: any, index: number) => (
          <Job
            key={index}
            role={job.role}
            company={job.company}
            period={job.period}
            description={job.description}
            stack={job.stack}
          />
        ))}

      </div>
    </section>
  )
}

interface JobProps {
  role: string
  company: string
  period: string
  description: string[]
  stack?: string[]
}

function Job({ role, company, period, description, stack }: JobProps) {
  return (
    <div className="relative">


      <div className="flex items-start justify-between gap-4">
        <h3 className="font-semibold text-foreground">
          {role} — {company}
        </h3>

        <span className="text-sm text-muted-foreground whitespace-nowrap">
          {period}
        </span>
      </div>

      <div className="mt-3 text-sm text-muted-foreground space-y-2">
        {description.map((text, i) => (
          <p key={i}>{text}</p>
        ))}
      </div>

      {stack && (
        <div className="flex flex-wrap gap-2 mt-4">
          {stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

    </div>
  )
}

export default Experience