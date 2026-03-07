import './App.css'

function App() {
  return (
    <div className="container">
      <header>
        <h1>Victor Henrique Pignataro</h1>
        <p>Frontend Software Developer</p>
        <div className="contact">
          Age 28 • Single<br />
          Prudente de Moraes St. - 1369, Parque Industrial<br />
          São José do Rio Preto – SP, Brazil<br />
          +55 (17) 99225-9449 • victorpignataro@msn.com
        </div>
      </header>

      <div className="content">
        <div>
          <div className="section">
            <h2>Professional Summary</h2>
            <p>
              Professional software developer focused on frontend applications, with strong attention to UI/UX usability.
              Passionate about building visual interfaces that add value to products by projecting information in an intuitive
              and clear way. Experienced with Angular, ReactJS and VueJS, seeking challenges in building advanced and reusable
              components that integrate a harmonious and maintainable visual system.
            </p>
          </div>

          <div className="section">
            <h2>Professional Experience</h2>

            <div className="job">
              <h3>Developer – Neppo Tecnologia</h3>
              <span>12/2022 – Present</span>
              <p>
                Frontend developer focused on refactoring screen usability and improving user experience.
                Participated in projects such as attendance layout experience, a complete ticket platform frontend,
                and a bot builder tree component.
              </p>
            </div>

            <div className="job">
              <h3>Front-end Developer – Neppo Tecnologia / Algar Telecom</h3>
              <span>04/2020 – 12/2022</span>
              <p>
                Worked on a project for partner company Algar Telecom. Developed frontend features for an inventory
                control and management application for SIM cards and IoT products. Participated in a version transition
                using ReactJS and Ant Design.
              </p>
            </div>

            <div className="job">
              <h3>Fullstack Developer – MixSolutions</h3>
              <span>07/2019 – 04/2020</span>
              <p>
                Developed software for call center service control and inventory management in the PBX/IP telephony industry.
                Led the reconstruction and modernization of the frontend interface, improving usability and management processes.
              </p>
            </div>

            <div className="job">
              <h3>Intern Developer Analyst – Neppo Tecnologia</h3>
              <span>04/2018 – 07/2019</span>
              <p>
                Participated in training programs and contributed to evaluation software development. After assessment,
                transferred to production teams to contribute to company development projects.
              </p>
            </div>

            <div className="job">
              <h3>Computer Support – Pignatari Consultores Contábeis</h3>
              <span>2013 – 2014</span>
              <p>
                Maintained office network infrastructure, program configuration, and hardware repair and replacement.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div className="section">
            <h2>Education</h2>
            <p>Bachelor Degree in Computer Science<br />
            Federal University of Uberlândia</p>
          </div>

          <div className="section">
            <h2>Languages</h2>
            <ul>
              <li>Portuguese – Native</li>
              <li>English – Intermediate</li>
              <li>Spanish – Basic</li>
            </ul>
          </div>

          <div className="section">
            <h2>Technologies</h2>
            <div>
              <span className="badge">ReactJS</span>
              <span className="badge">NextJS</span>
              <span className="badge">Angular</span>
              <span className="badge">VueJS</span>
              <span className="badge">Redux</span>
              <span className="badge">SWR</span>
              <span className="badge">Ant Design</span>
              <span className="badge">Chart.js</span>
              <span className="badge">GraphQL</span>
              <span className="badge">JavaScript (ES6)</span>
              <span className="badge">TypeScript</span>
              <span className="badge">HTML5/CSS3</span>
              <span className="badge">MySQL</span>
              <span className="badge">PostgreSQL</span>
              <span className="badge">MongoDB</span>
              <span className="badge">Java</span>
              <span className="badge">Spring Boot</span>
              <span className="badge">PHP</span>
              <span className="badge">Laravel</span>
              <span className="badge">Docker</span>
              <span className="badge">Git</span>
            </div>
          </div>

          <div className="section">
            <h2>Courses & Certifications</h2>
            <ul>
              <li>English Course (Private Teacher)</li>
              <li>Leadership, Ability to Learn and Resilience – PUC</li>
              <li>Produce Maintainable CSS With Sass</li>
              <li>Create Web Page Layouts With CSS</li>
              <li>Manage Your Code Project With Git & GitHub</li>
              <li>Build Web Apps with ReactJS</li>
              <li>Learn Programming With JavaScript</li>
              <li>VueJS Course – Neppo</li>
              <li>C++ Course – UFU</li>
              <li>Cobol Course – UFU</li>
              <li>Drupal Course – UFU</li>
              <li>Linux & Office Courses</li>
            </ul>
          </div>
        </div>
      </div>

      <footer>
        © 2026 Victor Henrique Pignataro
      </footer>
    </div>
  )
}

export default App
