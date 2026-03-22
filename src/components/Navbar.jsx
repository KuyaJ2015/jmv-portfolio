import { useState, useEffect } from 'react'

const NAV = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-12 h-20 transition-all duration-500
      ${scrolled
        ? dark ? 'bg-space-900/90 backdrop-blur-xl border-b border-violet-600/20 shadow-lg' : 'bg-white/80 backdrop-blur-xl border-b border-violet-300/40 shadow-lg'
        : 'bg-transparent'
      }`}>

      {/* Logo */}
      <a href="#home" className="text-xl font-black tracking-tight">
        <span className={dark ? 'text-white' : 'text-gray-900'}>JM</span>
        <span className="text-gradient">Valmeo</span>
      </a>

      {/* Links */}
      <ul className="flex items-center gap-8">
        {NAV.map(n => (
          <li key={n}>
            <a
              href={`#${n.toLowerCase()}`}
              onClick={() => setActive(n)}
              className={`text-sm font-500 tracking-wide transition-all duration-200 relative py-1
                ${active === n ? 'text-violet-400' : dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}
              `}
            >
              {n}
              {active === n && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* Right side */}
      <div className="flex items-center gap-3">
        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-300
            ${dark ? 'bg-white/10 hover:bg-white/20 text-yellow-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}
          title={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {dark ? '☀️' : '🌙'}
        </button>

        <a
          href="#contact"
          className="px-5 py-2.5 rounded-full text-sm font-600 text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5"
        >
          Let's Connect
        </a>
      </div>
    </nav>
  )
}
