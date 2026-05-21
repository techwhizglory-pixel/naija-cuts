import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const testimonials = [
  {
    id: 1,
    name: 'Jason Okafor',
    location: 'Lagos Island',
    initials: 'JO',
    service: 'Classic Fade',
    rating: 5,
    text: 'Mehn, these guys are on another level. My barber in VI has nothing on them. The fade was immaculate, the service was top tier. I no dey go anywhere else.',
  },
  {
    id: 2,
    name: 'Collins Eze',
    location: 'Lekki, Lagos',
    initials: 'CE',
    service: 'Kids Haircut',
    rating: 5,
    text: 'Came in with my 2 kids and they handled them so well. Patient, gentle and the cuts were sharp. My boys were looking fresh for the whole week. Will definitely be back.',
  },
  {
    id: 3,
    name: 'Prosper Adebayo',
    location: 'Ikoyi, Lagos',
    initials: 'PA',
    service: 'Home Service',
    rating: 5,
    text: 'The Oga Package home service is something else. They came fully equipped, professional and on time. Felt like a king the whole time. Worth every naira.',
  },
  {
    id: 4,
    name: 'Samuel Nwosu',
    location: 'Abuja, Maitama',
    initials: 'SN',
    service: 'Hot Towel Shave',
    rating: 5,
    text: 'I did the hot towel shave before my wedding. Best decision I made that week — after marrying her of course. The attention to detail is insane.',
  },
  {
    id: 5,
    name: 'Kasia Okonkwo',
    location: 'Victoria Island',
    initials: 'KO',
    service: 'Kids Haircut',
    rating: 5,
    text: 'Brought my son in for his first proper haircut and they made him feel so comfortable. He was laughing the whole time. We are now regulars every two weeks.',
  },
  {
    id: 6,
    name: 'Emeka Daniels',
    location: 'Port Harcourt',
    initials: 'ED',
    service: 'Shape & Design',
    rating: 5,
    text: 'The design work these guys do is not from here. I showed them a reference and they exceeded it. People were stopping me on the street to ask where I got my hair done.',
  },
]

const TestiCard = ({ testimonial, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl p-6 flex flex-col"
      style={{
        background: 'linear-gradient(160deg, #1a0f00, #0a0806)',
        border: '1px solid rgba(201,168,76,0.12)',
      }}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(201,168,76,0.35)',
        boxShadow: '0 20px 48px rgba(201,168,76,0.1)',
      }}
    >
      {/* Big quote mark */}
      <div
        className="absolute top-4 right-5 font-playfair text-7xl leading-none opacity-10"
        style={{ color: '#C9A84C' }}
      >
        "
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} style={{ color: '#C9A84C' }}>★</span>
        ))}
      </div>

      {/* Service tag */}
      <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#C9A84C' }}>
        {testimonial.service}
      </p>

      {/* Review text */}
      <p className="text-white/60 text-sm leading-relaxed flex-1 italic mb-6">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{testimonial.name}</p>
          <p className="text-white/30 text-xs mt-0.5">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const [page, setPage] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % 2)
    }, 9000)
    return () => clearInterval(timer)
  }, [])

  const current = page === 0 ? testimonials.slice(0, 3) : testimonials.slice(3, 6)

  return (
    <section className="relative w-full py-24 px-8 overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0a0806 0%, #1a0f00 50%, #0a0806 100%)' }}
      />

      {/* Animated orbs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-5 z-0"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-10%', right: '10%' }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full opacity-5 z-0"
        style={{ background: 'radial-gradient(circle, #8B6914, transparent)', bottom: '0%', left: '5%' }}
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header row */}
        <div className="flex items-end justify-between mb-12">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[4px] uppercase mb-3" style={{ color: '#C9A84C' }}>
              Testimonials
            </p>
            <h2 className="font-playfair text-5xl font-black text-white mb-2">
              The Naija Cuts Family
            </h2>
            <p className="text-white/40 text-base">
              Real clients. Real reactions. No packaging.
            </p>
          </motion.div>

          {/* Arrow buttons */}
          <div className="flex gap-3">
            <motion.button
              className="w-10 h-10 rounded-full border flex items-center justify-center"
              style={{ borderColor: 'rgba(201,168,76,0.3)', color: 'rgba(201,168,76,0.5)' }}
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
            className="grid grid-cols-3 gap-6"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -60 }}
            transition={{ duration: 0.5 }}
          >
            {current.map((t, i) => (
              <TestiCard key={t.id} testimonial={t} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {[0, 1].map((dot) => (
            <button
              key={dot}
              onClick={() => setPage(dot)}
              className="transition-all duration-300 rounded-full"
              style={{
                width: page === dot ? '32px' : '8px',
                height: '8px',
                background: page === dot ? '#C9A84C' : 'rgba(201,168,76,0.2)',
              }}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials