import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const features = [
    {
      title: 'Expert Barbers',
      desc: 'Our team of certified professionals bring years of experience and passion to every cut.',
    },
    {
      title: 'Premium Products',
      desc: 'We use only the finest grooming products to ensure the best results for your hair and skin.',
    },
    {
      title: 'Quality Assured',
      desc: 'Every service is held to the highest standard. We don\'t cut corners — we cut hair.',
    },
  ]

  return (
    <section id="about" className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/images/100.png"
        alt="about background"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => { e.currentTarget.style.display = 'none' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: 'rgba(10, 5, 2, 0.72)' }} />

      {/* Ambient Blobs */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20 z-0"
        style={{ background: 'radial-gradient(circle, rgba(200,155,60,0.18), transparent)', top: '-10%', left: '-5%' }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-72 h-72 rounded-full opacity-20 z-0"
        style={{ background: 'radial-gradient(circle, rgba(176,122,42,0.15), transparent)', bottom: '0%', right: '5%' }}
        animate={{ scale: [1.2, 1, 1.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-20">
          
          {/* Left Image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden"
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/images/100.png"
              alt="About Naija Cuts"
              className="w-full h-64 md:h-80 object-cover rounded-2xl"
              onError={(e) => { e.currentTarget.style.display = 'none' }}
            />
            <div className="absolute inset-0 rounded-2xl" style={{ border: '1px solid rgba(200,155,60,0.25)' }} />
            
            <motion.div
              className="absolute bottom-6 left-6 px-5 py-3 rounded-xl backdrop-blur-md"
              style={{ background: 'rgba(15, 10, 5, 0.7)', border: '1px solid rgba(200,155,60,0.3)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="font-playfair text-3xl font-black text-white">8+</p>
              <p className="text-xs tracking-widest uppercase mt-0.5" style={{ color: '#C89B3C' }}>Years of Excellence</p>
            </motion.div>
          </motion.div>

          {/* Right Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xs tracking-[4px] uppercase mb-4" style={{ color: '#C89B3C' }}>About Us</p>
            <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Our Commitment <br />
              <span style={{ color: '#C89B3C' }}>to Excellence</span>
            </h2>
            <p className="text-white/65 text-base leading-relaxed mb-6">
              At Naija Cuts, we believe grooming is more than just a haircut — it's an experience. Founded in Lagos with a passion for precision and style, we have been serving the Nigerian gentleman for over 8 years across Lagos and Abuja.
            </p>
            <p className="text-white/65 text-base leading-relaxed mb-8">
              Every barber on our team is trained to the highest standard. We combine traditional techniques with modern styles to give you a look that commands respect wherever you go.
            </p>
            
            <motion.button
              className="w-full md:w-auto px-8 py-4 text-sm font-medium tracking-widest uppercase text-white rounded-xl"
              style={{ background: 'linear-gradient(135deg, #C89B3C, #8A6420)' }}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(200,155,60,0.25)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Book With Us →
            </motion.button>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-6 rounded-2xl cursor-pointer backdrop-blur-md"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(200,155,60,0.15)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + (i * 0.15) }}
              whileHover={{ y: -6, borderColor: 'rgba(200,155,60,0.4)', boxShadow: '0 20px 40px rgba(0,0,0,0.35)' }}
            >
              <div
                className="w-10 h-10 rounded-full mb-5 flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, #C89B3C, #8A6420)' }}
              >
                <span className="text-white text-sm">✦</span>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-3">{f.title}</h3>
              <p className="text-white/55 text-sm leading-relaxed mb-5">{f.desc}</p>
              <button className="text-xs tracking-widest uppercase flex items-center gap-2 font-medium" style={{ color: '#C89B3C' }}>
                Learn More <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About;