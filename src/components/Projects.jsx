import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const PROJECTS = [
  {
    title: 'Digital Clock',
    desc: 'A real-time digital clock using JavaScript\'s Date object and DOM manipulation. Updates every second with hours, minutes and seconds.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    emoji: '🕐',
    color: 'from-violet-600 to-blue-600',
    github: 'https://github.com/KuyaJ2015',
    demo: '#',
  },
  {
    title: 'Coffee Shop Landing Page',
    desc: 'Visually appealing landing page for a coffee shop with featured products, responsive layout, and smooth call-to-action sections.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    emoji: '☕',
    color: 'from-amber-600 to-orange-600',
    github: 'https://github.com/KuyaJ2015',
    demo: '#',
  },
  {
    title: 'Countdown Timer',
    desc: 'Functional countdown timer using setInterval and the Date API. Displays days, hours, minutes, and seconds remaining.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    emoji: '⏱️',
    color: 'from-emerald-600 to-teal-600',
    github: 'https://github.com/KuyaJ2015',
    demo: '#',
  },
  {
    title: 'JoyTube',
    desc: 'Custom video-browsing web app inspired by YouTube\'s UI. Practices APIs, dynamic content rendering, and responsive layouts.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    emoji: '▶️',
    color: 'from-red-600 to-pink-600',
    github: 'https://github.com/KuyaJ2015',
    demo: '#',
  },
  {
    title: 'SOUNDSTACK',
    desc: 'Drag & drop music queue app with YouTube video support built with React and Vite. Features playlist management and live YouTube embedding.',
    tags: ['React', 'Vite', 'JavaScript'],
    emoji: '🎵',
    color: 'from-violet-600 to-pink-600',
    github: 'https://github.com/KuyaJ2015/soundstack',
    demo: '#',
  },
  {
    title: 'Portfolio Website',
    desc: 'This portfolio! Built with React, Vite, and Tailwind CSS. Features dark/light mode, space animations, and fully responsive design.',
    tags: ['React', 'Tailwind', 'Vite'],
    emoji: '🚀',
    color: 'from-pink-600 to-violet-600',
    github: 'https://github.com/KuyaJ2015',
    demo: '#',
  },
]

function ProjectCard({ project, dark, index }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-2xl overflow-hidden border transition-all duration-400 group
        ${dark ? 'bg-white/4 border-white/8 hover:border-violet-500/50' : 'bg-white/80 border-gray-200 hover:border-violet-400/60'}
        ${hovered ? '-translate-y-2 shadow-2xl shadow-violet-500/15' : ''}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image / preview area — ZOOM effect on hover */}
      <div className="relative h-48 overflow-hidden">
        <div className={`w-full h-full bg-gradient-to-br ${project.color} flex items-center justify-center
          transition-transform duration-500 ${hovered ? 'scale-110' : 'scale-100'}`}>
          <div className="absolute inset-0 bg-black/20" />
          <span className="text-7xl relative z-10 filter drop-shadow-2xl"
            style={{ transform: hovered ? 'scale(1.15) rotate(5deg)' : 'scale(1)', transition: 'transform 0.5s ease' }}>
            {project.emoji}
          </span>
        </div>

        {/* Hover overlay with links */}
        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}>
          <a href={project.demo}
            className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
            title="Live Demo">
            <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
          </a>
          <a href={project.github} target="_blank" rel="noreferrer"
            className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all"
            title="GitHub">
            <i className="fa-brands fa-github" />
          </a>
        </div>
      </div>

      {/* Card body */}
      <div className="p-5">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map(t => (
            <span key={t} className={`text-xs font-500 px-2.5 py-1 rounded-full border
              ${dark ? 'border-white/15 text-gray-400 bg-white/5' : 'border-gray-200 text-gray-600 bg-gray-50'}`}>
              {t}
            </span>
          ))}
        </div>

        <h3 className={`text-base font-700 mb-2 ${dark ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
        <p className={`text-xs leading-relaxed mb-4 font-300 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>{project.desc}</p>

        <div className="flex gap-3">
          <a href={project.demo}
            className="flex-1 text-center py-2.5 rounded-xl text-xs font-600 text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all duration-300">
            Live Demo
          </a>
          <a href={project.github} target="_blank" rel="noreferrer"
            className={`flex-1 text-center py-2.5 rounded-xl text-xs font-500 border transition-all duration-300
              ${dark ? 'border-white/15 text-gray-300 hover:border-violet-500/50 hover:text-violet-300' : 'border-gray-300 text-gray-600 hover:border-violet-400 hover:text-violet-600'}`}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  )
}

export default function Projects({ dark }) {
  const { ref, visible } = useInView(0.1)

  return (
    <section id="projects" ref={ref} className="relative py-24 px-6 md:px-20 z-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-6 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-violet-400 text-sm font-600 tracking-widest uppercase mb-3">My Work</p>
          <h2 className={`text-4xl md:text-5xl font-800 mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className={`text-sm max-w-lg mx-auto leading-relaxed ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
            Here are some of my recent projects. Hover over each card to see a zoom preview and access live demo or GitHub links.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {PROJECTS.map((p, i) => (
            <div key={p.title} className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              <ProjectCard project={p} dark={dark} index={i} />
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center">
          <a href="https://github.com/KuyaJ2015" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-600 text-white bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-violet-500/40 hover:-translate-y-1 text-sm">
            <i className="fa-brands fa-github" />
            Check My Github →
          </a>
        </div>
      </div>
    </section>
  )
}
