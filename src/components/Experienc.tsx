function Experience() {
  return (
    <section className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h2 className="text-lg font-semibold text-cyan-400 mb-6">
        Experience
      </h2>

      <div className="space-y-6">

        <Job
          role="Developer"
          company="Neppo Tecnologia"
          period="12/2022 – Present"
          bullets={[
            "Refactored UI improving usability and user experience",
            "Developed frontend architecture for a ticket platform",
            "Built dynamic bot builder tree component",
            "Improved screen usability and visual interaction flows"
          ]}
        />

        <Job
          role="Front-end Developer"
          company="Neppo Tecnologia / Algar Telecom"
          period="04/2020 – 12/2022"
          bullets={[
            "Developed inventory management interface for SIM cards and IoT products",
            "Implemented ReactJS frontend architecture",
            "Migrated legacy frontend to React with Ant Design",
            "Collaborated with telecom product teams"
          ]}
        />

        <Job
          role="Fullstack Developer"
          company="MixSolutions"
          period="07/2019 – 04/2020"
          bullets={[
            "Developed software for call center and PBX/IP telephony management",
            "Led frontend interface modernization",
            "Improved usability of service control dashboards",
            "Integrated inventory management features"
          ]}
        />

        <Job
          role="Intern Developer Analyst"
          company="Neppo Tecnologia"
          period="04/2018 – 07/2019"
          bullets={[
            "Participated in internal developer training programs",
            "Contributed to evaluation and testing software",
            "Joined production teams after technical assessment",
            "Supported development of internal company systems"
          ]}
        />

        <Job
          role="Computer Support"
          company="Pignatari Consultores Contábeis"
          period="2013 – 2014"
          bullets={[
            "Maintained office network infrastructure",
            "Configured business software environments",
            "Performed hardware repair and replacement",
            "Provided general IT support for office operations"
          ]}
        />

      </div>
    </section>
  )
}

function Job({ role, company, period, bullets }) {
  return (
    <div>
      <h3 className="font-semibold text-white">
        {role} — {company}
      </h3>

      <p className="text-sm text-slate-400 mb-2">
        {period}
      </p>

      <ul className="list-disc ml-5 text-slate-300 text-sm space-y-1">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  )
}

export default Experience