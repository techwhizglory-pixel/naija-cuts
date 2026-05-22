import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const services = [
  { id: 1, tag: 'Haircuts', title: 'The Classic Fade', desc: 'Low, mid, or high — precision fades tailored to your style and preferences.', price: '₦5,000', image: '/images/30.jpg' },
  { id: 2, tag: 'Shaves', title: 'Hot Towel Shave', desc: 'Traditional razor shave with hot towel and premium products.', price: '₦4,000', image: '/images/40.jpg' },
  { id: 3, tag: 'Styling', title: 'Dread Locking', desc: 'Expert installation, twists, retention and styling for a clean look.', price: '₦15,000', image: '/images/50.jpg' },
  { id: 4, tag: 'Luxury', title: 'Manicure & Pedicure', desc: 'Full nail care treatment with premium products for clean groomed hands and feet.', price: '₦6,000', image: '/images/60.jpg' },
  { id: 5, tag: 'Creative', title: 'Hair Dying', desc: 'Bold colors or natural tones — vibrant long-lasting results guaranteed.', price: '₦12,000', image: '/images/70.jpg' },
  { id: 6, tag: 'Exclusive', title: 'Shape & Design', desc: 'Custom patterns, tribal lines, and bespoke hair art. Your cut, your identity.', price: '₦6,500', image: '/images/20.jpg' },
]

const ServiceCard = ({ service }) => {
  const handleCardBookClick = (e) => {
    e.preventDefault()
    const targetElement = document.getElementById('booking')
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.div
      className="relative rounded-2xl overflow-hidden h-[320px] md:h-[380px] cursor-pointer"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={handleCardBookClick}
    >
      <img 
        src={service.image} 
        alt={service.title} 
        className="absolute inset-0 w-full h-full object-cover" 
        onError={(e) => { e.currentTarget.style.display = 'none' }} 
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(10,8,6,0.2) 0%, rgba(10,8,6,0.5) 40%, rgba(10,8,6,0.95) 100%)' }} />
      <div className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}>
        <span className="text-white text-sm">✦</span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="text-xs tracking-widest uppercase mb-1" style={{ color: '#C9A84C' }}>{service.tag}</p>
        <h3 className="font-playfair text-xl font-bold text-white mb-2">{service.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-4">{service.desc}</p>
        <div className="flex items-center justify-between pt-3 border-t border-white/10">
          <p className="font-playfair text-xl font-bold" style={{ color: '#C9A84C' }}>{service.price}</p>
          <motion.button 
            className="text-xs tracking-widest uppercase flex items-center gap-2 font-semibold" 
            style={{ color: '#C9A84C' }} 
            whileHover={{ x: 4 }} 
          >
            BOOK NOW →
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

const Services = () => {
  const [page, setPage] = useState(0)
  const headingRef = useRef(null)
  const isHeadingInView = useInView(headingRef, { once: true })

  useEffect(() => {
    const timer = setInterval(() => setPage((prev) => (prev + 1) % 2), 9000)
    return () => clearInterval(timer)
  }, [])

  const currentServices = page === 0 ? services.slice(0, 3) : services.slice(3, 6)

  return (
    <section id="services" className="w-full py-16 md:py-20 px-4 md:px-8" style={{ background: '#F5F0E8' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header Block */}
        <div className="flex items-end justify-between mb-8 md:mb-10">
          <motion.div 
            ref={headingRef} 
            initial={{ opacity: 0, y: 30 }} 
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.7 }}
          >
            <p className="text-xs tracking-[4px] uppercase mb-3 flex items-center gap-2" style={{ color: '#C9A84C' }}>
              What We Offer <span className="inline-block w-8 h-px align-middle" style={{ background: '#C9A84C' }}></span>
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-gray-900 mb-2">Our Services</h2>
            <p className="text-gray-400 text-sm md:text-base">Experience the difference. Every style, a statement.</p>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex gap-3 flex-shrink-0">
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

        {/* Smooth Paginated Grid Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
          >
            {currentServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bullet Progress Indicators */}
        <div className="flex justify-center gap-3 mt-6 md:mt-8">
          {[0, 1].map((dot) => (
            <button 
              key={dot} 
              onClick={() => setPage(dot)} 
              className="transition-all duration-300 rounded-full" 
              style={{ 
                width: page === dot ? '32px' : '8px', 
                height: '8px', 
                background: page === dot ? '#C9A84C' : '#D1C5A8' 
              }} 
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services