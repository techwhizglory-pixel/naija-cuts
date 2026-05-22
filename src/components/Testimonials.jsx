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

// Pure presentation component avoiding internal scroll interactions to support clean exits
const TestiCard = ({ testimonial }) => {
  return (
    <motion.div
      className="relative rounded-2xl p-6 flex flex-col h-full min-h-[260px]"
      style={{
        background: 'linear-gradient(160deg, #1a0f00, #0a0806)',
        border: '1px solid rgba(201,168,76,0.12)',
      }}
      whileHover={{
        y: -6,
        borderColor: 'rgba(201,168,76,0.35)',
        boxShadow: '0 20px 48px rgba(201,168,76,0.1)',
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Big quote mark */}
      <div
        className="absolute top-2 right-5 font-playfair text-7xl leading-none opacity-10 select-none"
        style={{ color: '#C9A84C' }}
      >
        &ldquo;
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} style={{ color: '#C9A84C' }}>★</span>
        ))}
      </div>

      {/* Service tag */}
      <p className="text-xs tracking-widest uppercase mb-3 font-semibold" style={{ color: '#C9A84C' }}>
        {testimonial.service}
      </p>

      {/* Review text */}
      <p className="text-white/70 text-sm leading-relaxed flex-1 italic mb-6">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
          style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{testimonial.name}</p>
          <p className="text-white/40 text-xs mt-0.5">{testimonial.location}</p>
        </div>
      </div>
    </motion.div>
  )
}

const Testimonials = () => {
  const [page, setPage] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true })

  // Determine viewport layout dynamically
  useEffect(() => {
    const handleResize = () => {
      const mobileView = window.innerWidth < 768
      setIsMobile(mobileView)
      setPage(0) // Reset view cleanly on transformation to avoid empty array offsets
    }
    
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Auto layout progression safely adapted to responsive thresholds
  useEffect(() => {
    const totalPages = isMobile ? testimonials.length : 2
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages)
    }, 8000)
    return () => clearInterval(timer)
  }, [isMobile])

  // Handle slide controls
  const handleNext = () => {
    const totalPages = isMobile ? testimonials.length : 2
    setPage((prev) => (prev + 1) % totalPages)
  }

  const handlePrev = () => {
    const totalPages = isMobile ? testimonials.length : 2
    setPage((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Calculate rendering window partitions
  const currentTestimonials = isMobile 
    ? testimonials.slice(page, page + 1)
    : testimonials.slice(page * 3, (page * 3) + 3)

  const dotArray = Array.from({ length: isMobile ? testimonials.length : 2 })

  return (
    <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Background Matrix */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0a0806 0%, #1a0f00 50%, #0a0806 100%)' }}
      />

      {/* Ambient Radial Blurs */}
      <motion.div
        className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full opacity-5 z-0"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-10%', right: '10%' }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full opacity-5 z-0"
        style={{ background: 'radial-gradient(circle, #8B6914, transparent)', bottom: '0%', left: '5%' }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Block Container */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[4px] uppercase mb-2" style={{ color: '#C9A84C' }}>
              Testimonials
            </p>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-black text-white mb-3">
              The Naija Cuts Family
            </h2>
            <p className="text-white/50 text-sm md:text-base">
              Real clients. Real reactions. No packaging.
            </p>
          </motion.div>

          {/* Navigation Control Buttons */}
          <div className="flex gap-3 self-end md:self-auto">
            <motion.button
              className="w-10 h-10 rounded-full border flex items-center justify-center"
              style={{ borderColor: 'rgba(201,168,76,0.3)', color: 'rgba(201,168,76,0.6)' }}
              whileHover={{ scale: 1.05, borderColor: '#C9A84C', color: '#C9A84C' }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
            >
              ←
            </motion.button>
            <motion.button
              className="w-10 h-10 rounded-full flex items-center justify-center text-white"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
            >
              →
            </motion.button>
          </div>
        </div>

        {/* Dynamic Responsive Animate Grid */}
        <div className="min-h-[340px] md:min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
            >
              {currentTestimonials.map((t) => (
                <TestiCard key={t.id} testimonial={t} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Scaled Tracker Dots */}
        <div className="flex justify-center gap-2 mt-8 md:mt-10">
          {dotArray.map((_, dot) => (
            <button
              key={dot}
              onClick={() => setPage(dot)}
              className="transition-all duration-300 rounded-full h-2"
              style={{
                width: page === dot ? '24px' : '8px',
                background: page === dot ? '#C9A84C' : 'rgba(201,168,76,0.2)',
              }}
              aria-label={`Go to page ${dot + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials;