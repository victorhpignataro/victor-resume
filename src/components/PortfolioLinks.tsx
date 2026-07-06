
import { useTranslation } from "react-i18next";

function PortfolioLinks() {
  const { t } = useTranslation();

  return (
    <section className="bg-card border rounded-xl p-6">
      <h2 className="text-lg font-semibold text-primary mb-6">
        {t('portfolioLinks.title')}
      </h2>

      <div className="space-y-4">
        {(t('portfolioLinks.items', { returnObjects: true }) as any[]).map((link: any, index: number) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors group"
          >
            <div className="flex-1">
              <h3 className="font-medium text-foreground group-hover:text-primary">
                {link.name}
              </h3>
              {link.description && (
                <p className="text-sm text-muted-foreground">
                  {link.description}
                </p>
              )}
            </div>
            <svg
              className="h-5 w-5 text-muted-foreground group-hover:text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        ))}
      </div>
    </section>
  );
}

export default PortfolioLinks;
