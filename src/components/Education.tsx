function Education() {
  return (
    <section className="bg-slate-900 p-6 rounded-xl border border-slate-800">
      <h2 className="text-lg font-semibold text-cyan-400 mb-4">
        Education
      </h2>

      <div>
        <h3 className="text-white font-medium flex items-center">
          <div className="flex items-center bg-white mr-2 rounded">
            <img src="/ufu-logo.png" alt="Uberlândia Federal University logo" className="w-8 h-8"></img>
          </div>
          <span>
            <span>Bachelor in Computer Science</span>
            <p className="text-sm text-slate-400">
              Federal University of Uberlândia
            </p>

          </span> 
          

        </h3>

      </div>
    </section>
  )
}

export default Education;
