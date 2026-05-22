// Marquee.jsx
import { motion } from 'framer-motion'

const items = [
  "Precision Cuts", "Hot Towel Shave", "Beard Sculpting",
  "Hair Design", "VIP Experience", "Book Online"
]

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden py-4 md:py-6" style={{ background: '#C9A84C' }}>
      <motion.div
        className="flex whitespace-nowrap"
        style={{ gap: '2rem' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="text-white text-xs md:text-sm font-medium tracking-widest uppercase flex items-center flex-shrink-0 min-w-max"
            style={{ gap: '2rem' }}
          >
            {item}
            <span className="text-white/40 ml-8">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee