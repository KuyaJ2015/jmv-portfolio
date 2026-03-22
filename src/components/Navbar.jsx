import { useState, useEffect } from 'react'

const NAV = ['Home', 'About', 'Skills', 'Projects', 'Contact']

export default function Navbar({ dark, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNav = (n) => { setActive(n); setMenuOpen(false) }

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 md:h-20 transition-all duration-500
        ${scrolled
          ? dark ? 'bg-space-900/90 backdrop-blur-xl border-b border-violet-600/20 shadow-lg' : 'bg-white/80 backdrop-blur-xl border-b border-violet-300/40 shadow-lg'
          : 'bg-transparent'
        }`}>

        {/* Logo */}
        <a href="#home" className="text-xl font-black tracking-tight z-10">
          <span className={dark ? 'text-white' : 'text-gray-900'}>JM</span>
          <span className="text-gradient">Valmeo</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV.map(n => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} onClick={() => handleNav(n)}
                className={`text-sm font-500 tracking-wide transition-all duration-200 relative py-1
                  ${active === n ? 'text-violet-400' : dark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                {n}
                {active === n && <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-500 to-pink-500 rounded-full" />}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={toggleTheme}
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-300
              ${dark ? 'bg-white/10 hover:bg-white/20 text-yellow-300' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}`}>
            {dark ? '☀️' : '🌙'}
          </button>
          <a href="#contact"
            className="px-5 py-2.5 rounded-full text-sm font-600 text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/30 hover:-translate-y-0.5">
            Let's Connect
          </a>
        </div>

        {/* Mobile Right */}
        <div className="flex md:hidden items-center gap-2 z-10">
          <button onClick={toggleTheme}
            className={`w-9 h-9 rounded-full flex items-center justify-center text-sm transition-all duration-300
              ${dark ? 'bg-white/10 text-yellow-300' : 'bg-gray-200 text-gray-700'}`}>
            {dark ? '☀️' : '🌙'}
          </button>
          <button onClick={() => setMenuOpen(o => !o)} aria-label="Toggle menu"
            className={`w-9 h-9 rounded-full flex flex-col items-center justify-center gap-1 transition-all duration-300
              ${dark ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'}`}>
            <span className={`block h-0.5 rounded-full transition-all duration-300 ${dark ? 'bg-white' : 'bg-gray-800'} ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} style={{width:'18px'}} />
            <span className={`block h-0.5 rounded-full transition-all duration-300 ${dark ? 'bg-white' : 'bg-gray-800'} ${menuOpen ? 'opacity-0' : ''}`} style={{width:'18px'}} />
            <span className={`block h-0.5 rounded-full transition-all duration-300 ${dark ? 'bg-white' : 'bg-gray-800'} ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} style={{width:'18px'}} />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div className={`absolute inset-0 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0'} ${dark ? 'bg-black/60' : 'bg-black/30'}`}
          onClick={() => setMenuOpen(false)} />
        <div className={`absolute top-16 left-0 right-0 transition-all duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
          ${dark ? 'bg-space-900/95 backdrop-blur-xl border-b border-violet-500/20' : 'bg-white/95 backdrop-blur-xl border-b border-violet-200'}`}>
          <ul className="flex flex-col py-4 px-6">
            {NAV.map(n => (
              <li key={n}>
                <a href={`#${n.toLowerCase()}`} onClick={() => handleNav(n)}
                  className={`block py-3.5 text-sm font-500 border-b transition-colors duration-200
                    ${dark ? 'border-white/5 text-gray-300 hover:text-violet-400' : 'border-gray-100 text-gray-700 hover:text-violet-600'}
                    ${active === n ? (dark ? 'text-violet-400' : 'text-violet-600') : ''}`}>
                  {n}
                </a>
              </li>
            ))}
            <li className="pt-4 pb-2">
              <a href="#contact" onClick={() => setMenuOpen(false)}
                className="block text-center py-3 rounded-full text-sm font-600 text-white bg-gradient-to-r from-violet-600 to-pink-600">
                Let's Connect
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
