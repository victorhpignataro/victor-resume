import About from "./components/About";
import Courses from "./components/Courses";
import Education from "./components/Education";
import Experience from "./components/Experience";
import { Header } from "./components/Header";
import Languages from "./components/Languages";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased">
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <div className="flex flex-col gap-6">
          <Header />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-6">
              <About />
              <Projects />
              <Experience />
            </div>
            <div className="flex flex-col gap-6">
              <Skills />
              <Languages />
              <Education />
              <Courses />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;