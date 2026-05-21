import { motion } from 'framer-motion'

const items = [
  "Precision Cuts", "Hot Towel Shave", "Beard Sculpting",
  "Hair Design", "VIP Experience", "Book Online"
]

const Marquee = () => {
  return (
    <div className="w-full bg-gold overflow-hidden py-6">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {/* First set */}
        {items.map((item, i) => (
          <span key={i} className="text-white text-medium font-medium tracking-widest uppercase flex items-center gap-12">
            {item} <span className="text-white/40">✦</span>
          </span>
        ))}
        {/* Second set — exact copy for seamless loop */}
        {items.map((item, i) => (
          <span key={`copy-${i}`} className="text-white text-sm font-medium tracking-widest uppercase flex items-center gap-12">
            {item} <span className="text-white/40">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default Marquee