import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experienc";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Languages from "./components/Languages";
import Education from "./components/Education";

export default function Resume() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6">
      <div className="max-w-[1200px] mx-auto space-y-8">

        <Header />

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-10">

          <main className="space-y-8">
            <About />
            <Experience />
            <Projects />
          </main>

          <aside className="space-y-8">
            <Skills />
            <Languages />
            <Education />
          </aside>

        </div>
      </div>
    </div>
  )
}