import { useTheme } from './hooks/useTheme'
import StarField from './components/StarField'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const { dark, toggle } = useTheme()

  return (
    <div className={`min-h-screen transition-colors duration-500 ${dark ? 'bg-space-900 text-white' : 'bg-indigo-50 text-gray-900'}`}>
      <StarField dark={dark} />
      <Navbar dark={dark} toggleTheme={toggle} />
      <main>
        <Hero dark={dark} />
        <About dark={dark} />
        <Skills dark={dark} />
        <Projects dark={dark} />
        <Contact dark={dark} />
      </main>
      <Footer dark={dark} />
    </div>
  )
}
