import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { num: 2400, suffix: '+', label: 'Clients Served' },
  { num: 8, suffix: ' yrs', label: 'Experience' },
  { num: 4.9, suffix: '★', label: 'Average Rating' },
  { num: 12, suffix: '', label: 'Expert Barbers' },
]

const CountUp = ({ target, suffix }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const isDecimal = target % 1 !== 0
    const duration = 2000
    const steps = 60
    const stepTime = duration / steps
    let current = 0
    const timer = setInterval(() => {
      current += target / steps
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
    }, stepTime)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span ref={ref}>{count}{suffix}</span>
}

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="w-full py-12 md:py-16 px-4 md:px-8" style={{ background: 'linear-gradient(135deg, #0a0806 0%, #1a0f00 50%, #0a0806 100%)' }}>
      <motion.div
        ref={ref}
        className="max-w-5xl mx-auto bg-white rounded-2xl px-6 py-8 md:px-12 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        style={{ boxShadow: '0 8px 48px rgba(201,168,76,0.1)' }}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {stats.map((stat, i) => (
          <motion.div key={i} className="text-center" initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: i * 0.15 }}>
            <p className="font-playfair font-black text-3xl sm:text-4xl md:text-5xl mb-1 md:mb-2" style={{ color: '#C9A84C' }}>
              <CountUp target={stat.num} suffix={stat.suffix} />
            </p>
            <p className="text-[10px] md:text-xs tracking-widest uppercase text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Stats