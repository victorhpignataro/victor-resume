import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Briefcase,
} from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import { LanguageToggle } from "./LanguageToggle"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"

export function Header() {
  const { t } = useTranslation();
  const age = 29;

  const primaryStack = [
    {
      name: "React",
      icon: "icons/react.svg",
      color: "text-cyan-700 border-cyan-200 bg-cyan-50 dark:text-cyan-300 dark:border-cyan-400/40 dark:bg-cyan-500/10"
    },
    {
      name: "Angular",
      icon: "icons/angular.svg",
      color: "text-red-700 border-red-200 bg-red-50 dark:text-red-300 dark:border-red-400/40 dark:bg-red-500/10"
    },
    {
      name: "Vue",
      icon: "icons/vue.svg",
      color: "text-emerald-700 border-emerald-200 bg-emerald-50 dark:text-emerald-300 dark:border-emerald-400/40 dark:bg-emerald-500/10"
    }
  ]

  const secondaryStack = ["TypeScript", "Next.js", "CSS", "Tailwind", "HTML", "FlexBox", "Grid" ]

  return (
    <header className="relative flex flex-col md:flex-row gap-6 bg-card border rounded-xl p-6">

      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 pointer-events-none"></div>

      <img
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        className="w-20 h-20 rounded-xl object-cover border relative z-10"
        alt="Victor Henrique Pignataro"
      />

      <div className="flex-1 relative z-10">

        {/* NAME */}
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Victor Henrique Pignataro
        </h1>

        {/* TITLE */}
        <p className="text-primary font-medium">
          {t('header.role')}
        </p>

        {/* INFO ROW */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mt-3">
          <div className="text-sm flex flex-col gap-1">
            <div className="flex items-center gap-1">
              <div className="mt-[2px]">
                <Mail className="w-4 h-4" />
              </div>
              <div className="flex">
                victorpignataro@msn.com
              </div>
            </div>
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {t('header.location')}
            </span>
            <span className="flex items-center gap-1">
              <span className="mt-[2px]">{age} {t('header.age')}</span>
              <span className="opacity-40">•</span>
              <span>{t('header.single')}</span>
            </span>
          </div>
        </div>

        {/* STACK BADGES */}
        <div className="flex flex-wrap gap-2 mt-4">
          {primaryStack.map((tech) => (
            <span
              key={tech.name}
              className={`flex items-center gap-1 text-xs px-3 py-1 rounded-md border font-medium ${tech.color}`}
            >
              <img
                src={`${import.meta.env.BASE_URL}${tech.icon}`}
                className="w-3.5 h-3.5"
                alt={tech.name}
              />
              {tech.name}
            </span>
          ))}
          {secondaryStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded-md bg-secondary text-secondary-foreground border"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      {/* ACTIONS */}
      <div className="flex flex-col items-end gap-3 justify-between">
        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <a href="https://github.com/victorhpignataro" target="_blank" className="p-2 rounded-md hover:bg-accent">
              <Github className="w-5 h-5" />
            </a>
            <a href="https://www.linkedin.com/in/victor-pignataro-992440101/" target="_blank" className="p-2 rounded-md hover:bg-accent">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
          <Link 
            to="/portfolio" 
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
          >
            <Briefcase className="w-4 h-4" />
            <span>{t('header.portfolio')}</span>
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}
