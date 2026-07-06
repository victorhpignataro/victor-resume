import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const contentArray = t('about.content', { returnObjects: true }) as string[];

  return (
    <section className="bg-card p-6 rounded-xl border">
      <h2 className="text-lg font-semibold text-primary mb-3">
        {t('about.title')}
      </h2>

      <div className="text-muted-foreground leading-relaxed space-y-2">
        {contentArray.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}

export default About;