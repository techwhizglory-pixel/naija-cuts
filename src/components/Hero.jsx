import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const words = ["Precision.", "Style.", "Excellence."]

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [currentWord, setCurrentWord] = useState(0)

  useEffect(() => {
    const handleMouse = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouse)
    return () => window.removeEventListener('mousemove', handleMouse)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col md:flex-row overflow-hidden">

      {/* Mouse follower glow */}
      <motion.div
        className="fixed w-64 h-64 rounded-full pointer-events-none z-30 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 70%)',
          left: mousePosition.x - 128,
          top: mousePosition.y - 128,
        }}
      />

      {/* LEFT SIDE */}
      <div
        className="w-full md:w-1/2 relative flex items-center px-8 md:px-20 overflow-hidden min-h-screen pb-16 md:pb-0"
        style={{ background: 'linear-gradient(135deg, #1a0f00 0%, #2d1a00 50%, #1a0a2e 100%)' }}
      >

        {/* Watermark scissor */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none">
          <div style={{
            fontSize: '380px',
            lineHeight: 1,
            userSelect: 'none',
            transform: 'rotate(-15deg)',
            color: '#C9A84C',
            opacity: 0.04,
          }}>
            ✂
          </div>
        </div>

        {/* Animated bg circles */}
        <motion.div
          className="absolute w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, #C9A84C, transparent)',
            top: '-20%', left: '-20%', opacity: 0.08
          }}
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, #6B2040, transparent)',
            bottom: '5%', right: '-10%', opacity: 0.1
          }}
          animate={{ scale: [1.2, 1, 1.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 pt-28 md:pt-24">

          {/* Label */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <p className="text-gold text-xs tracking-[6px] uppercase">Premium Grooming</p>
            <motion.div
              className="h-px bg-gold"
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Headline */}
          <div className="mb-6 overflow-hidden">
            <motion.h1
              className="font-playfair font-black text-cream leading-[1.05]"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-4xl md:text-6xl">Where Every</span>
              <span className="block text-4xl md:text-6xl">Cut Defines</span>
              <motion.span
                key={currentWord}
                className="block text-5xl md:text-7xl italic"
                style={{ color: '#C9A84C' }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
              >
                {words[currentWord]}
              </motion.span>
            </motion.h1>
          </div>

          {/* Subtext */}
          <motion.p
            className="text-cream/50 text-sm md:text-base leading-relaxed mb-10 max-w-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Lagos finest barbershop experience. Where precision meets culture, every cut tells a story.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.button
              className="text-dark px-8 py-4 text-sm font-medium tracking-widest uppercase"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book A Session
            </motion.button>
            <motion.button
              className="border border-gold/30 text-cream px-8 py-4 text-sm font-medium tracking-widest uppercase"
              whileHover={{ scale: 1.05, borderColor: '#C9A84C' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              View Gallery →
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="flex gap-8 md:gap-10 pt-6 border-t border-gold/10 mb-16 md:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {[
              { num: '2,400+', label: 'Clients Served' },
              { num: '8 yrs', label: 'Experience' },
              { num: '4.9★', label: 'Rating' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <p className="font-playfair text-2xl md:text-3xl text-cream font-bold">{stat.num}</p>
                <p className="text-cream/30 text-xs tracking-widest uppercase mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>

      {/* RIGHT SIDE - Image */}
      <div className="hidden md:block w-full md:w-1/2 relative overflow-hidden min-h-screen">
        <motion.img
          src="/images/10.png"
          alt="barber"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        />

        {/* Overlays */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, #1a0f00 0%, transparent 35%)' }}
        />
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, #0a0806 0%, transparent 40%)' }}
        />

        {/* Animated gold bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Floating availability card */}
        <motion.div
          className="absolute bottom-10 left-8 backdrop-blur-md px-5 py-4 border border-gold/20 rounded-lg"
          style={{ background: 'rgba(10,8,6,0.75)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <div>
              <p className="text-cream text-xs font-medium tracking-wide">Next Available Slot</p>
              <p className="text-cream/40 text-xs mt-0.5">Today · 3:00 PM</p>
            </div>
          </div>
        </motion.div>

        {/* Floating review card */}
        <motion.div
          className="absolute top-24 right-8 backdrop-blur-md px-5 py-4 border border-gold/20 rounded-lg"
          style={{ background: 'rgba(10,8,6,0.75)' }}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <p className="text-yellow-400 text-xs mb-1">★★★★★</p>
          <p className="text-cream text-xs font-medium">"Best barber in Lagos!"</p>
          <p className="text-cream/40 text-xs mt-1">— Emeka O.</p>
        </motion.div>

      </div>
    </section>
  )
}

export default Hero