export default function Footer({ dark }) {
  return (
    <footer className={`relative z-10 border-t py-8 px-5 sm:px-8 md:px-20
      ${dark ? 'border-white/8 bg-black/20' : 'border-gray-200 bg-white/40'}`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <a href="#home" className="text-lg font-800">
          <span className={dark ? 'text-white' : 'text-gray-900'}>JM</span>
          <span className="text-gradient">Valmeo</span>
        </a>

        <ul className="flex flex-wrap justify-center gap-6">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`}
                className={`text-xs font-500 tracking-widest uppercase transition-colors duration-200
                  ${dark ? 'text-gray-500 hover:text-violet-400' : 'text-gray-400 hover:text-violet-600'}`}>
                {l}
              </a>
            </li>
          ))}
        </ul>

        <p className={`text-xs ${dark ? 'text-gray-600' : 'text-gray-400'}`}>
          © 2025 James Marvin Valmeo
        </p>
      </div>
    </footer>
  )
}
