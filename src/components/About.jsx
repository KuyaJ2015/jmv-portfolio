import { useInView } from '../hooks/useInView'

const STATS = [
  { value: '3+', label: 'Years Learning' },
  { value: '10+', label: 'Projects Built' },
  { value: '4', label: 'Skills Areas' },
  { value: '100%', label: 'Passion' },
]

export default function About({ dark }) {
  const { ref, visible } = useInView(0.2)

  const card = `rounded-2xl p-6 transition-all duration-300 ${dark ? 'glass hover:border-violet-500/40' : 'glass-light hover:border-violet-400/50 shadow-lg'}`

  return (
    <section id="about" ref={ref} className="relative min-h-screen flex items-center py-24 px-5 sm:px-8 md:px-20 z-10">
      <div className="max-w-6xl mx-auto w-full">

        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-violet-400 text-sm font-600 tracking-widest uppercase mb-3">Get To Know Me</p>
          <h2 className={`text-4xl md:text-5xl font-800 ${dark ? 'text-white' : 'text-gray-900'}`}>
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left — Avatar + stats */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>

            {/* Avatar placeholder */}
            <div className="relative mx-auto w-48 h-48 sm:w-64 sm:h-64 mb-10">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-violet-600 to-pink-600 flex items-center justify-center text-8xl shadow-2xl shadow-violet-500/30 animate-float">
                🧑‍💻
              </div>
              <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-2xl shadow-lg animate-float-slow">
                🇵🇭
              </div>
              {/* Orbit ring */}
              <div className="absolute inset-0 rounded-full border border-violet-500/20 animate-spin-slow scale-110" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {STATS.map((s, i) => (
                <div key={s.label} className={`${card} text-center`}
                  style={{ transitionDelay: `${i * 100 + 300}ms` }}>
                  <div className="text-3xl font-800 text-gradient mb-1">{s.value}</div>
                  <div className={`text-xs font-500 tracking-wide ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Bio */}
          <div className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <h3 className={`text-2xl font-700 mb-5 ${dark ? 'text-white' : 'text-gray-900'}`}>
              James Marvin Valmeo
            </h3>

            <p className={`text-sm leading-loose mb-4 font-300 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              Hi! I'm a passionate <span className="text-violet-400 font-500">Frontend Developer</span> and <span className="text-pink-400 font-500">Graphic Designer</span> based in the Philippines. I specialize in creating beautiful, user-friendly interfaces using modern technologies like HTML, CSS, JavaScript, and Tailwind CSS.
            </p>

            <p className={`text-sm leading-loose mb-4 font-300 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              Beyond coding, I'm skilled in <span className="text-violet-400 font-500">Adobe Creative Suite</span> — Photoshop, Illustrator, and Premiere Pro — creating everything from logos and branding assets to social media graphics and video content.
            </p>

            <p className={`text-sm leading-loose mb-8 font-300 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm also a <span className="text-pink-400 font-500">content creator</span> for Mr. Liw TV, where I combine my design and video skills to produce engaging content. My goal is to keep growing, keep building, and deliver work that truly makes an impact.
            </p>

            {/* Info pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: '📍', text: 'Philippines' },
                { icon: '🎓', text: 'Frontend Dev' },
                { icon: '📧', text: 'iamjames.valmeo@gmail.com' },
                { icon: '💼', text: 'Open to Work' },
              ].map(i => (
                <span key={i.text} className={`flex items-center gap-2 text-xs px-3 py-2 rounded-full border font-400
                  ${dark ? 'border-violet-500/20 bg-violet-500/5 text-gray-300' : 'border-violet-300/40 bg-violet-50 text-gray-700'}`}>
                  {i.icon} {i.text}
                </span>
              ))}
            </div>

            <div className="flex gap-4 flex-wrap">
              <a href="#contact"
                className="px-6 py-3 rounded-full text-sm font-600 text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:-translate-y-0.5">
                Hire Me
              </a>
              <a href="https://github.com/KuyaJ2015" target="_blank"
                className={`px-6 py-3 rounded-full text-sm font-500 border transition-all duration-300 hover:-translate-y-0.5
                  ${dark ? 'border-violet-500/30 text-violet-300 hover:bg-violet-500/10' : 'border-violet-400 text-violet-600 hover:bg-violet-50'}`}>
                <i className="fa-brands fa-github mr-2" />GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
