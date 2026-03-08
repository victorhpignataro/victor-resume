import { useTranslation } from "react-i18next";

function Languages() {
  const { t } = useTranslation();

  return (
    <section className="bg-card border rounded-xl p-6">
      <h2 className="text-lg font-semibold text-primary mb-4">
        {t('languages.title')}
      </h2>
      <div className="flex flex-col gap-3">
        {(t('languages.items', { returnObjects: true }) as any[]).map((lang: any) => (
          <div key={lang.name} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img 
                src={`${import.meta.env.BASE_URL}icons/${lang.flag}`} 
                alt={`${lang.name} flag`} 
                className="w-5 h-4 object-cover rounded-sm shadow-sm"
              />
              <span className="text-sm text-muted-foreground">{lang.name}</span>
            </div>
            <span className="text-sm font-medium text-foreground">{lang.level}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Languages;