import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const plans = [
  {
    id: 1,
    tag: 'Adults',
    name: 'The Sharp',
    price: '₦5,500',
    period: '/ visit',
    items: [
      'Premium fade + design',
      'Hot towel shave',
      'Beard sculpt',
      'Scalp treatment',
    ],
  },
  {
    id: 2,
    tag: 'Children',
    name: 'The Fresh',
    price: '₦3,500',
    period: '/ visit',
    items: [
      'Kids haircut + lineup',
      'Basic shampoo',
      'Standard finish',
      'Free lollipop 🍭',
    ],
  },
  {
    id: 3,
    tag: 'Home Service',
    name: 'Oga Package',
    price: '₦12,000',
    period: '/ visit',
    items: [
      'We come to you',
      'Full grooming experience',
      'Complimentary drinks',
      'Priority booking',
    ],
  },
]

const Pricing = () => {
  const [selected, setSelected] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="relative w-full py-24 px-8 overflow-hidden">

      {/* Animated background */}
      <div
        className="absolute inset-0 z-0"
        style={{ background: 'linear-gradient(135deg, #0a0806 0%, #1a0f00 50%, #0a0806 100%)' }}
      />

      {/* Animated gold orbs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-5 z-0"
        style={{ background: 'radial-gradient(circle, #C9A84C, transparent)', top: '-20%', left: '-10%' }}
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-5 z-0"
        style={{ background: 'radial-gradient(circle, #8B6914, transparent)', bottom: '-10%', right: '-10%' }}
        animate={{ scale: [1.2, 1, 1.2], x: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Animated horizontal line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px z-0"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          ref={ref}
          className="mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[4px] uppercase mb-3" style={{ color: '#C9A84C' }}>
            Pricing
          </p>
          <h2 className="font-playfair text-5xl font-black text-white mb-3">
            Luxury Made Affordable
          </h2>
          <p className="text-white/40 text-base">
            No hidden charges. Just clean cuts and honest pricing.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => {
            const isSelected = selected === i

            return (
              <motion.div
                key={plan.id}
                className="relative rounded-2xl p-7 cursor-pointer flex flex-col"
                style={{
                  background: isSelected
                    ? 'linear-gradient(160deg, #2d1a00, #1a0f00)'
                    : 'rgba(255,255,255,0.03)',
                  border: isSelected
                    ? '1px solid #C9A84C'
                    : '1px solid rgba(255,255,255,0.08)',
                  boxShadow: isSelected
                    ? '0 20px 60px rgba(201,168,76,0.15)'
                    : 'none',
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                onClick={() => setSelected(i)}
                whileHover={{ y: -6 }}
              >

                {/* Most popular badge */}
                {i === 0 && (
                  <div
                    className="absolute -top-3 left-6 px-4 py-1 rounded-full text-xs font-medium tracking-widest uppercase"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)', color: '#fff' }}
                  >
                    Most Popular
                  </div>
                )}

                {/* Tag */}
                <p className="text-xs tracking-widest uppercase mb-3" style={{ color: '#C9A84C' }}>
                  {plan.tag}
                </p>

                {/* Name */}
                <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="font-playfair text-4xl font-black" style={{ color: '#C9A84C' }}>
                    {plan.price}
                  </span>
                  <span className="text-white/30 text-sm ml-2">{plan.period}</span>
                </div>

                {/* Items — flex-1 pushes button to bottom */}
                <ul className="flex-1 space-y-3 mb-8">
                  {plan.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-white/60 text-sm">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: '#C9A84C' }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Button — always at bottom */}
                <motion.button
                  className="w-full py-3 rounded-lg text-sm font-medium tracking-widest uppercase"
                  style={{
                    background: isSelected
                      ? 'linear-gradient(135deg, #C9A84C, #8B6914)'
                      : 'transparent',
                    border: isSelected
                      ? 'none'
                      : '1px solid rgba(255,255,255,0.1)',
                    color: isSelected ? '#fff' : 'rgba(255,255,255,0.3)',
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelected(i)
                  }}
                >
                  Book This
                </motion.button>

              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Pricing