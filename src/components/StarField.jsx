import { useEffect, useRef } from 'react'

export default function StarField({ dark }) {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight
    let id

    const stars = Array.from({ length: 220 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.8 + 0.2,
      alpha: Math.random(),
      delta: (Math.random() * 0.006 + 0.001) * (Math.random() > 0.5 ? 1 : -1),
    }))

    const shoots = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * W * 0.6, y: Math.random() * H * 0.4,
      len: Math.random() * 140 + 60,
      speed: Math.random() * 10 + 6,
      alpha: 0, frame: i * 120,
    }))

    let f = 0

    function draw() {
      ctx.clearRect(0, 0, W, H)
      f++

      const starColor = dark ? 'rgba(255,255,255,' : 'rgba(80,60,140,'

      stars.forEach(s => {
        s.alpha += s.delta
        if (s.alpha <= 0 || s.alpha >= 1) s.delta *= -1
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `${starColor}${Math.max(0, Math.min(1, s.alpha))})`
        ctx.fill()
      })

      shoots.forEach(s => {
        if (f < s.frame) return
        s.x += s.speed; s.y += s.speed * 0.45; s.alpha -= 0.02
        if (s.alpha <= 0) {
          s.x = Math.random() * W * 0.5; s.y = Math.random() * H * 0.35
          s.alpha = 1; s.frame = f + Math.random() * 180 + 60
        }
        const g = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len * 0.45)
        g.addColorStop(0, `rgba(180,140,255,${s.alpha})`)
        g.addColorStop(1, 'rgba(180,140,255,0)')
        ctx.beginPath()
        ctx.moveTo(s.x, s.y); ctx.lineTo(s.x - s.len, s.y - s.len * 0.45)
        ctx.strokeStyle = g; ctx.lineWidth = 1.8; ctx.stroke()
      })

      id = requestAnimationFrame(draw)
    }

    draw()
    const onResize = () => { W = canvas.width = window.innerWidth; H = canvas.height = window.innerHeight }
    window.addEventListener('resize', onResize)
    return () => { cancelAnimationFrame(id); window.removeEventListener('resize', onResize) }
  }, [dark])

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />
}
