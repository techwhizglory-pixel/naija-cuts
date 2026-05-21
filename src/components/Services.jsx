import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const services = [
  {
    id: 1,
    tag: 'Haircuts',
    title: 'The Classic Fade',
    desc: 'Low, mid, or high — precision fades tailored to your style and preferences.',
    price: '₦5,000',
    image: '/images/30.jpg',
  },
  {
    id: 2,
    tag: 'Shaves',
    title: 'Hot Towel Shave',
    desc: 'Traditional razor shave with hot towel and premium products.',
    price: '₦4,000',
    image: '/images/40.jpg',
  },
  {
    id: 3,
    tag: 'Styling',
    title: 'Dread Locking',
    desc: 'Expert installation, twists, retention and styling for a clean look.',
    price: '₦15,000',
    image: '/images/50.jpg',
  },
  {
    id: 4,
    tag: 'Luxury',
    title: 'Manicure & Pedicure',
    desc: 'Full nail care treatment with premium products for clean groomed hands and feet.',
    price: '₦6,000',
    image: '/images/60.jpg',
  },
  {
    id: 5,
    tag: 'Creative',
    title: 'Hair Dying',
    desc: 'Bold colors or natural tones — vibrant long-lasting results guaranteed.',
    price: '₦12,000',
    image: '/images/70.jpg',
  },
  {
    id: 6,
    tag: 'Exclusive',
    title: 'Shape & Design',
    desc: 'Custom patterns, tribal lines, and bespoke hair art. Your cut, your identity.',
    price: '₦6,500',
    image: '/images/20.jpg',
  },
]

const ServiceCard = ({ service, index }) => {
  const [expanded, setExpanded] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <>
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(false)}
          />
        )}
      </AnimatePresence>

      <motion.div
        ref={ref}
        className={`relative rounded-2xl overflow-hidden cursor-pointer ${
          expanded
            ? 'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[480px] h-[560px]'
            : 'h-[380px]'
        }`}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onClick={() => setExpanded(!expanded)}
        whileHover={{ y: expanded ? 0 : -8 }}
      >
        {/* Full background image */}
        <img
          src={service.image}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => { e.target.style.display = 'none' }}
        />

        {/* Dark gradient overlay — stronger at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,8,6,0.2) 0%, rgba(10,8,6,0.5) 40%, rgba(10,8,6,0.95) 100%)'
          }}
        />

        {/* Gold icon top right */}
        <div
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
        >
          <span className="text-white text-sm">✦</span>
        </div>

        {/* Content at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#C9A84C' }}>
            {service.tag}
          </p>
          <h3 className="font-playfair text-xl font-bold text-white mb-2">
            {service.title}
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            {service.desc}
          </p>

          {/* Price + Book Now */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10">
            <p className="font-playfair text-xl font-bold" style={{ color: '#C9A84C' }}>
              {service.price}
            </p>
            <motion.button
              className="text-xs tracking-widest uppercase px-4 py-2 text-white flex items-center gap-2"
              style={{ color: '#C9A84C' }}
              whileHover={{ x: 4 }}
              onClick={(e) => e.stopPropagation()}
            >
              BOOK NOW →
            </motion.button>
          </div>
        </div>

        {expanded && (
          <motion.p
            className="absolute top-4 left-4 text-xs text-white/40 tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            TAP TO CLOSE
          </motion.p>
        )}
      </motion.div>
    </>
  )
}

const Services = () => {
  const [page, setPage] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % 2)
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  const currentServices = page === 0 ? services.slice(0, 3) : services.slice(3, 6)

  return (
    <section id="services" className="w-full py-20 px-8" style={{ background: '#F5F0E8' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header row — heading left, arrows right */}
        <div className="flex items-end justify-between mb-10">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[4px] uppercase mb-3 flex items-center gap-2" style={{ color: '#C9A84C' }}>
              What We Offer <span className="inline-block w-8 h-px bg-gold align-middle" style={{ background: '#C9A84C' }}></span>
            </p>
            <h2 className="font-playfair text-5xl font-black text-gray-900 mb-2">
              Our Services
            </h2>
            <p className="text-gray-400 text-base">
              Experience the difference. Every style, a statement.
            </p>
          </motion.div>

          {/* Arrow buttons */}
          <div className="flex gap-3">
            <motion.button
              className="w-10 h-10 rounded-full border flex items-center justify-center text-gray-400"
              style={{ borderColor: '#D1C5A8' }}
              whileHover={{ scale: 1.1, borderColor: '#C9A84C', color: '#C9A84C' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage((prev) => (prev + 1) % 2)}
            >
              ←
            </motion.button>
            <motion.button
              className="w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPage((prev) => (prev + 1) % 2)}
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid grid-cols-3 gap-5"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
          >
            {currentServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              onClick={() => setPage(dot)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: page === dot ? '32px' : '8px',
                height: '8px',
                background: page === dot ? '#C9A84C' : '#D1C5A8',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Services