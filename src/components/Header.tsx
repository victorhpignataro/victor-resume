import {
  Github,
  Linkedin,
  Mail,
  MapPin
} from "lucide-react"

export function Header() {
  const birthDate = new Date("1997-01-01")
  const age = new Date().getFullYear() - birthDate.getFullYear()

  const primaryStack = [
    {
      name: "React",
      icon: "icons/react.svg",
      color: "text-cyan-300 border-cyan-400/40 bg-cyan-500/10"
    },
    {
      name: "Angular",
      icon: "icons/angular.svg",
      color: "text-red-300 border-red-400/40 bg-red-500/10"
    },
    {
      name: "Vue",
      icon: "icons/vue.svg",
      color: "text-emerald-300 border-emerald-400/40 bg-emerald-500/10"
    }
  ]

  const secondaryStack = ["TypeScript", "Next.js", "CSS", "Tailwind", "HTML", "FlexBox", "Grid" ]

  return (
    <header className="relative flex flex-col md:flex-row  gap-6 bg-slate-900/80 backdrop-blur-xl p-6 rounded-xl border border-slate-800 shadow-lg">

      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 pointer-events-none"></div>

      <img
        src={`${import.meta.env.BASE_URL}profile.jpg`}
        className="w-20 h-20 rounded-xl object-cover border border-slate-700 relative z-10"
        alt="Victor Henrique Pignataro"
      />

      <div className="flex-1 relative z-10">

        {/* NAME */}
        <h1 className="text-3xl font-bold tracking-tight">
          Victor Henrique Pignataro
        </h1>

        {/* TITLE */}
        <p className="text-cyan-400 font-medium">
          Frontend Software Developer
        </p>

        {/* INFO ROW */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-400 mt-3">

          <div className="text-sm mt-2">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              São José do Rio Preto - SP, Brazil
            </span>

            <span className="flex items-center gap-1">
              <span>{age} years old</span>
              <span className="opacity-40">•</span>
              <span>Single</span>
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
              className="text-xs px-2 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300"
            >
              {tech}
            </span>
          ))}

        </div>

      </div>
      
      {/* BUTTON GROUP */}
      <div className="gap-2 ml-2">
        <div className="flex items-center gap-2 ml-2">
        <a
          href="mailto:victorpignataro@msn.com"
          className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-800 border border-slate-700 hover:border-cyan-400/60 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] transition-all"
        >
          <Mail className="w-4 h-4" />
          Email
        </a>

        <a
          href="https://github.com/titipignataro"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-800 border border-slate-700 hover:border-cyan-400/60 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] transition-all"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/victor-pignataro-992440101/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 px-2 py-1 rounded-md bg-slate-800 border border-slate-700 hover:border-cyan-400/60 hover:text-white hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] transition-all"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>
</div>
      </div>
    </header>
  )
}
export default Header;