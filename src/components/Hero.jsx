import { useEffect, useState } from 'react'

const ROLES = ['Frontend Developer', 'Graphic Designer', 'Content Creator', 'UI/UX Enthusiast']

export default function Hero({ dark }) {
  const [text, setText] = useState('')
  const [roleIdx, setRoleIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const role = ROLES[roleIdx]
    let t
    if (!deleting && charIdx < role.length) t = setTimeout(() => setCharIdx(i => i + 1), 80)
    else if (!deleting && charIdx === role.length) t = setTimeout(() => setDeleting(true), 2200)
    else if (deleting && charIdx > 0) t = setTimeout(() => setCharIdx(i => i - 1), 45)
    else { setDeleting(false); setRoleIdx(i => (i + 1) % ROLES.length) }
    setText(role.slice(0, charIdx))
    return () => clearTimeout(t)
  }, [charIdx, deleting, roleIdx])

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center text-center px-5 sm:px-8 z-10">

      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-pink-600/10 blur-3xl pointer-events-none animate-pulse-slow" style={{ animationDelay: '2s' }} />

      {/* Badge */}
      <div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-600 tracking-widest uppercase mb-8 border animate-fade-up
        ${dark ? 'border-violet-500/30 bg-violet-500/10 text-violet-300' : 'border-violet-400/40 bg-violet-100 text-violet-700'}`}>
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        Available for Work
      </div>

      {/* Name */}
      <h1 className={`font-black leading-tight mb-4 animate-fade-up ${dark ? 'text-white' : 'text-gray-900'}`}
        style={{ fontSize: 'clamp(40px,7vw,88px)', animationDelay: '0.15s', animationFillMode: 'both', opacity: 0 }}>
        Hi, I'm{' '}
        <span className="text-gradient">James Marvin</span>
      </h1>

      {/* Typing */}
      <div className="text-2xl md:text-3xl font-700 text-violet-400 mb-6 h-10"
        style={{ animation: 'fadeUp 0.7s 0.3s ease both', opacity: 0 }}>
        {text}
        <span className="inline-block w-0.5 h-7 bg-violet-400 ml-1 align-middle animate-blink" />
      </div>

      {/* Description */}
      <p className={`max-w-xl text-base leading-relaxed mb-10 font-300
        ${dark ? 'text-gray-400' : 'text-gray-600'}`}
        style={{ animation: 'fadeUp 0.7s 0.45s ease both', opacity: 0 }}>
        Frontend Developer & Graphic Designer based in the Philippines. I craft visually stunning, responsive web experiences and compelling digital content that leave lasting impressions.
      </p>

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 justify-center mb-16"
        style={{ animation: 'fadeUp 0.7s 0.6s ease both', opacity: 0 }}>
        <a href="#projects"
          className="px-8 py-3.5 rounded-full font-600 text-white text-sm bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/40 hover:-translate-y-1">
          View My Work →
        </a>
        <a href="https://docs.google.com/document/d/1rWkFlthbciaz4Ddn877LHoEOdvLcMJoc/edit?usp=sharing" target="_blank"
          className={`px-8 py-3.5 rounded-full font-500 text-sm border transition-all duration-300 hover:-translate-y-1
            ${dark ? 'border-violet-500/40 text-violet-300 hover:bg-violet-500/10' : 'border-violet-400 text-violet-600 hover:bg-violet-50'}`}>
          <i className="fa-solid fa-download mr-2" />Download CV
        </a>
      </div>

      {/* Social icons */}
      <div className="flex gap-4" style={{ animation: 'fadeUp 0.7s 0.75s ease both', opacity: 0 }}>
        {[
          { icon: 'fa-brands fa-github', url: 'https://github.com/KuyaJ2015', label: 'GitHub' },
          { icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/james-marvin-valmeo-a5a454382/', label: 'LinkedIn' },
          { icon: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/KuyaJMV1995/', label: 'Facebook' },
        ].map(s => (
          <a key={s.icon} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label}
            className={`w-11 h-11 rounded-full flex items-center justify-center text-sm border transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-400 hover:shadow-lg hover:shadow-violet-500/20
              ${dark ? 'border-white/15 text-gray-400 bg-white/5' : 'border-gray-300 text-gray-600 bg-white/60'}`}>
            <i className={s.icon} />
          </a>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className={`text-xs tracking-widest uppercase ${dark ? 'text-gray-500' : 'text-gray-400'}`}>Scroll</span>
        <div className={`w-0.5 h-8 rounded-full ${dark ? 'bg-gradient-to-b from-violet-500 to-transparent' : 'bg-gradient-to-b from-violet-400 to-transparent'}`} />
      </div>

      <style>{`@keyframes fadeUp{from{opacity:0;transform:translateY(24px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  )
}
