import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <section className="bg-card p-6 rounded-xl border">
      <h2 className="text-lg font-semibold text-primary mb-3">
        {t('about.title')}
      </h2>

      <p className="text-muted-foreground leading-relaxed">
        {t('about.content')}
      </p>
    </section>
  )
}

export default About;