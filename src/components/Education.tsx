import { useTranslation } from "react-i18next";

function Education() {
  const { t } = useTranslation();

  return (
    <section className="bg-card border rounded-xl p-6">
      <h2 className="text-lg font-semibold text-primary mb-4">
        {t('education.title')}
      </h2>

      <div>
        <h3 className="text-foreground font-medium flex items-center">
          <div className="flex items-center bg-white mr-2 rounded">
            <img src={`${import.meta.env.BASE_URL}ufu-logo.png`} alt="Uberlândia Federal University logo" className="w-8 h-8"></img>
          </div>
          <span>
            <span>{t('education.degree')}</span>
            <p className="text-sm text-muted-foreground">
              {t('education.university')}
            </p>

          </span> 
          

        </h3>

      </div>
    </section>
  )
}

export default Education;
