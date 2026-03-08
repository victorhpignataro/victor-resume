import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

export function LanguageToggle() {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  // Usar resolvedLanguage garante que pegamos apenas 'pt' ou 'en' 
  // mesmo que o i18n.language seja algo como 'pt-BR'
  const currentLang = i18n.resolvedLanguage || i18n.language;

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => changeLanguage('pt')}
        className={`w-9 h-9 p-0 rounded-md transition-all ${
          currentLang.startsWith('pt') ? 'bg-accent ring-2 ring-primary/20' : 'opacity-50 hover:opacity-100'
        }`}
        title="Português"
      >
        <img 
          src={`${import.meta.env.BASE_URL}icons/flag-portuguese.svg`} 
          alt="Português" 
          className="w-5 h-4 object-cover rounded-sm"
        />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => changeLanguage('en')}
        className={`w-9 h-9 p-0 rounded-md transition-all ${
          currentLang.startsWith('en') ? 'bg-accent ring-2 ring-primary/20' : 'opacity-50 hover:opacity-100'
        }`}
        title="English"
      >
        <img 
          src={`${import.meta.env.BASE_URL}icons/flag-english.svg`} 
          alt="English" 
          className="w-5 h-4 object-cover rounded-sm"
        />
      </Button>
    </div>
  );
}