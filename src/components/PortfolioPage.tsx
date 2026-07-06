
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";

function PortfolioPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6">
          {/* Botão Voltar */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            {t('portfolioPage.back')}
          </button>

          {/* Título */}
          <h1 className="text-3xl font-bold text-foreground">
            {t('portfolioPage.title')}
          </h1>

          {/* Grid de Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(t('portfolioLinks.items', { returnObjects: true }) as any[]).map((item: any, index: number) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card border rounded-xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">
                      {item.name}
                    </h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {item.description}
                      </p>
                    )}
                  </div>
                  <svg
                    className="h-5 w-5 text-muted-foreground group-hover:text-primary flex-shrink-0 ml-4"
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
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
