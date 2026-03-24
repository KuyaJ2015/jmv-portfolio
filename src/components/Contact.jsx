import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { useInView } from '../hooks/useInView'

export default function Contact({ dark }) {
  const { ref, visible } = useInView(0.2)
  const formRef = useRef()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  const handle = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const submit = e => {
    e.preventDefault()
    setSending(true)
    setError(false)

    emailjs.send(
      'service_9polsuc',
      'template_6104kbl',
      {
        name: `${form.firstName} ${form.lastName}`,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      'QEqCR2LSx78E80ayb'
    )
    .then(() => {
      setSent(true)
      setSending(false)
      setForm({ firstName: '', lastName: '', email: '', phone: '', message: '' })
      setTimeout(() => setSent(false), 3500)
    })
    .catch(() => {
      setSending(false)
      setError(true)
      setTimeout(() => setError(false), 3500)
    })
  }

  const inputCls = `w-full rounded-xl px-5 py-3.5 text-sm outline-none border transition-all duration-200
    ${dark
      ? 'bg-white/5 border-white/10 text-white placeholder-gray-500 focus:border-violet-500 focus:shadow-lg focus:shadow-violet-500/10'
      : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:shadow-lg focus:shadow-violet-300/20'
    }`

  return (
    <section id="contact" ref={ref} className="relative py-24 px-5 sm:px-8 md:px-20 z-10">

      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/5 via-transparent to-pink-600/5 pointer-events-none" />

      <div className="max-w-5xl mx-auto">

        <div className={`text-center mb-14 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-violet-400 text-sm font-600 tracking-widest uppercase mb-3">Say Hello</p>
          <h2 className={`text-4xl md:text-5xl font-800 ${dark ? 'text-white' : 'text-gray-900'}`}>
            Get In <span className="text-gradient">Touch</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* Left */}
          <div className={`transition-all duration-700 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="text-8xl mb-8 animate-float text-center">🧑‍💻</div>

            <p className={`text-sm leading-loose mb-8 ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's build something great together!
            </p>

            <div className="space-y-3">
              {[
                { icon: 'fa-solid fa-envelope', label: 'Email', value: 'iamjames.valmeo@gmail.com', href: 'mailto:iamjames.valmeo@gmail.com' },
                { icon: 'fa-brands fa-github', label: 'GitHub', value: 'github.com/KuyaJ2015', href: 'https://github.com/KuyaJ2015' },
                { icon: 'fa-brands fa-linkedin-in', label: 'LinkedIn', value: 'James Marvin Valmeo', href: 'https://www.linkedin.com/in/james-marvin-valmeo-a5a454382/' },
                { icon: 'fa-brands fa-facebook-f', label: 'Facebook', value: 'KuyaJMV1995', href: 'https://www.facebook.com/KuyaJMV1995/' },
              ].map(item => (
                <a key={item.label} href={item.href} target="_blank" rel="noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5 group
                    ${dark ? 'border-white/8 bg-white/3 hover:border-violet-500/40 hover:bg-violet-500/5' : 'border-gray-200 bg-white/60 hover:border-violet-400/60 hover:bg-violet-50'}`}>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-violet-500/20 flex items-center justify-center text-violet-400 text-sm flex-shrink-0 group-hover:from-violet-600/30">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <div className={`text-xs font-500 mb-0.5 ${dark ? 'text-gray-500' : 'text-gray-400'}`}>{item.label}</div>
                    <div className={`text-sm font-500 ${dark ? 'text-gray-300' : 'text-gray-700'}`}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <form ref={formRef} onSubmit={submit}
            className={`transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input name="firstName" value={form.firstName} onChange={handle} placeholder="First Name" required className={inputCls} />
              <input name="lastName" value={form.lastName} onChange={handle} placeholder="Last Name" required className={inputCls} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email Address" required className={inputCls} />
              <input name="phone" value={form.phone} onChange={handle} placeholder="Phone No." className={inputCls} />
            </div>
            <textarea name="message" value={form.message} onChange={handle} placeholder="Message" required rows={6}
              className={`${inputCls} resize-none mb-4`} />

            <button type="submit" disabled={sending}
              className={`w-full py-4 rounded-xl font-700 text-sm text-white transition-all duration-300 hover:-translate-y-0.5
                ${sent
                  ? 'bg-gradient-to-r from-green-500 to-emerald-600 shadow-lg shadow-green-500/30'
                  : error
                  ? 'bg-gradient-to-r from-red-500 to-red-600 shadow-lg shadow-red-500/30'
                  : 'bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50'
                }`}>
              {sent ? '✓ Message Sent! I\'ll get back to you soon.' : sending ? 'Sending...' : error ? '✗ Failed to send. Try again.' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}