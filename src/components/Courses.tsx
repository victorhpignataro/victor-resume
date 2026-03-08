import { useTranslation } from "react-i18next";

export default function Courses() {
  const { t } = useTranslation();

  return (
    <section className="rounded-2xl border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold mb-4">
        {t('courses.title')}
      </h2>

      <div className="flex flex-wrap gap-2">
        {(t('courses.items', { returnObjects: true }) as string[]).map((course, index) => (
          <span
            key={index}
            className="text-xs px-3 py-1.5 rounded-full border bg-secondary text-secondary-foreground"
          >
            {course}
          </span>
        ))}
      </div>
    </section>
  );
}
