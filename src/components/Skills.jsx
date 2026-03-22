import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const ALL_SKILLS = [
  { name: 'HTML/CSS', pct: 90, cat: 'Frontend', color: 'from-orange-400 to-red-500' },
  { name: 'JavaScript', pct: 78, cat: 'Frontend', color: 'from-yellow-400 to-orange-400' },
  { name: 'Tailwind CSS', pct: 85, cat: 'Frontend', color: 'from-cyan-400 to-blue-500' },
  { name: 'React', pct: 72, cat: 'Frontend', color: 'from-blue-400 to-cyan-400' },
  { name: 'Adobe Photoshop', pct: 88, cat: 'Design', color: 'from-blue-500 to-violet-500' },
  { name: 'Adobe Illustrator', pct: 84, cat: 'Design', color: 'from-violet-500 to-orange-400' },
  { name: 'Adobe Premiere Pro', pct: 80, cat: 'Design', color: 'from-violet-600 to-pink-500' },
  { name: 'Graphic Design', pct: 90, cat: 'Design', color: 'from-pink-500 to-rose-500' },
  { name: 'Java (OOP)', pct: 65, cat: 'Backend', color: 'from-red-500 to-orange-500' },
  { name: 'MySQL', pct: 68, cat: 'Backend', color: 'from-blue-600 to-cyan-500' },
  { name: 'Git / GitHub', pct: 75, cat: 'Tools', color: 'from-gray-400 to-gray-600' },
  { name: 'CapCut / Video Edit', pct: 85, cat: 'Tools', color: 'from-pink-400 to-red-400' },
]

const TABS = ['All', 'Frontend', 'Design', 'Backend', 'Tools']

function SkillCard({ skill, visible, delay, dark }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`rounded-2xl p-5 border transition-all duration-300 cursor-default
        ${dark
          ? hovered ? 'bg-white/8 border-violet-500/50 shadow-lg shadow-violet-500/10 -translate-y-1' : 'bg-white/4 border-white/8'
          : hovered ? 'bg-white shadow-xl border-violet-300/60 -translate-y-1' : 'bg-white/70 border-gray-200/80'
        }`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? (hovered ? 'translateY(-4px)' : 'translateY(0)') : 'translateY(20px)',
        transition: `opacity 0.5s ${delay}ms ease, transform 0.3s ease, border-color 0.3s, box-shadow 0.3s`,
      }}
    >
      <div className="flex justify-between items-center mb-3">
        <span className={`text-sm font-600 ${dark ? 'text-white' : 'text-gray-800'}`}>{skill.name}</span>
        <span className="text-xs font-700 text-violet-400">{skill.pct}%</span>
      </div>
      <div className={`h-1.5 rounded-full overflow-hidden ${dark ? 'bg-white/8' : 'bg-gray-200'}`}>
        <div
          className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{
            width: visible ? `${skill.pct}%` : '0%',
            transitionDelay: `${delay + 200}ms`,
            boxShadow: hovered ? `0 0 8px rgba(168,85,247,0.5)` : 'none',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills({ dark }) {
  const [activeTab, setActiveTab] = useState('All')
  const { ref, visible } = useInView(0.15)

  const filtered = activeTab === 'All' ? ALL_SKILLS : ALL_SKILLS.filter(s => s.cat === activeTab)

  return (
    <section id="skills" ref={ref} className="relative py-24 px-5 sm:px-8 md:px-20 z-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-violet-400 text-sm font-600 tracking-widest uppercase mb-3">What I Know</p>
          <h2 className={`text-4xl md:text-5xl font-800 ${dark ? 'text-white' : 'text-gray-900'}`}>
            My <span className="text-gradient">Skills</span>
          </h2>
        </div>

        {/* Filter Tabs */}
        <div className={`flex justify-center mb-10 transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className={`flex flex-wrap justify-center gap-1 p-1.5 rounded-2xl ${dark ? 'bg-white/5 border border-white/10' : 'bg-gray-100 border border-gray-200'}`}>
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-xs font-600 tracking-wide transition-all duration-300
                  ${activeTab === tab
                    ? 'bg-gradient-to-r from-violet-600 to-pink-600 text-white shadow-lg shadow-violet-500/30'
                    : dark ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
              >{tab}</button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} visible={visible} delay={i * 60} dark={dark} />
          ))}
        </div>
      </div>
    </section>
  )
}
