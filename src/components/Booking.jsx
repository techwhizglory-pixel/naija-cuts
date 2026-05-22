import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

const Booking = ({ selectedService, setSelectedService }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', date: '', message: '' })

  // Listen to shifts inside the parent selectedService state property
  useEffect(() => {
    if (selectedService) {
      setForm((prev) => ({ ...prev, service: selectedService }))
    }
  }, [selectedService])

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = `Hello Naija Cuts! I'd like to book a session.\n\n👤 Name: ${form.name}\n📞 Phone: ${form.phone}\n📧 Email: ${form.email || 'Not provided'}\n✂️ Service: ${form.service}\n📅 Date: ${form.date}\n📝 Notes: ${form.message || 'None'}\n\nPlease confirm my booking. Thank you!`
    window.open(`https://wa.me/2349113086817?text=${encodeURIComponent(message)}`, '_blank')
    
    setSubmitted(true)
    setSelectedService("") // Reset selections clean after submission actions pass
  }

  const services = [
    'The Classic Fade', 'Hot Towel Shave', 'Dread Locking',
    'Manicure & Pedicure', 'Hair Dying', 'Shape & Design', 'Home Service (Oga Package)',
  ]

  const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.08)',
  }

  return (
    <section id="booking" className="relative w-full min-h-screen overflow-hidden">
      <img src="/images/90.png" alt="background" className="absolute inset-0 w-full h-full object-cover" onError={(e) => { e.target.style.display = 'none' }} />
      <div className="absolute inset-0" style={{ background: 'rgba(10,8,6,0.82)' }} />
      <motion.div
        className="absolute top-0 left-0 right-0 h-px z-10"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto py-16 md:py-24 px-4 md:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs tracking-[4px] uppercase mb-3" style={{ color: '#C9A84C' }}>Reservations</p>
          <h2 className="font-playfair text-4xl md:text-5xl font-black text-white mb-3">Book A Session</h2>
          <p className="text-white/40 text-base">Reserve your spot today. Walk in sharp, walk out sharper.</p>
        </motion.div>

        {/* Main content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden">
          {/* LEFT — Contact info */}
          <motion.div
            className="p-8 md:p-10 flex flex-col justify-between"
            style={{ background: '#F5F0E8' }}
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div>
              <h3 className="font-playfair text-3xl font-black mb-2" style={{ color: '#1a0f00' }}>Get In Touch</h3>
              <p className="text-sm mb-8 md:mb-10" style={{ color: '#8B6914' }}>We are always available to serve you.</p>

              <div className="space-y-6 md:space-y-8">
                {[
                  { icon: '📞', label: 'WhatsApp Us', value: '09113086817', href: 'https://wa.me/2349113086817', isLink: true },
                  { icon: '📍', label: 'Our Locations', value: 'Lagos & Abuja', sub: 'Business House, Main Branch' },
                  { icon: '🕐', label: 'Business Hours', value: 'Mon — Sun', sub: '9:00 AM — 11:00 PM' },
                ].map((item, i) => (
                  <motion.div key={i} className="flex items-start gap-4" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white text-sm" style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase font-medium mb-1" style={{ color: '#C9A84C' }}>{item.label}</p>
                      {item.isLink
                        ? <a href={item.href} target="_blank" rel="noreferrer" className="text-base font-medium hover:underline" style={{ color: '#1a0f00' }}>{item.value}</a>
                        : <p className="text-base font-medium" style={{ color: '#1a0f00' }}>{item.value}</p>
                      }
                      {item.sub && <p className="text-sm mt-0.5" style={{ color: '#8B6914' }}>{item.sub}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.a
              href="https://wa.me/2349113086817"
              target="_blank"
              rel="noreferrer"
              className="mt-8 md:mt-10 w-full py-4 rounded-xl text-center text-sm font-medium tracking-widest uppercase text-white block"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Chat on WhatsApp →
            </motion.a>
          </motion.div>

          {/* RIGHT — Booking form */}
          <motion.div
            className="p-8 md:p-10"
            style={{ background: 'linear-gradient(160deg, #2d1a00, #1a0f00)' }}
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {submitted ? (
              <motion.div className="h-full flex flex-col items-center justify-center text-center py-16" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-6" style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}>✓</div>
                <h3 className="font-playfair text-3xl font-bold text-white mb-3">Booking Sent!</h3>
                <p className="text-white/50 text-sm leading-relaxed max-w-xs">Your details have been sent to us on WhatsApp. We'll confirm within 30 minutes.</p>
                <motion.button className="mt-8 px-8 py-3 text-sm tracking-widest uppercase text-white rounded-xl" style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }} whileHover={{ scale: 1.05 }} onClick={() => setSubmitted(false)}>Book Another</motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="font-playfair text-2xl md:text-3xl font-black text-white mb-2">Reserve Your Spot</h3>
                <p className="text-white/40 text-sm mb-6 md:mb-8">Fill in your details — we'll confirm via WhatsApp.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'name', label: 'Full Name', placeholder: 'Emeka Johnson', type: 'text', required: true },
                      { name: 'phone', label: 'Phone Number', placeholder: '080XXXXXXXX', type: 'text', required: true },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">{field.label}</label>
                        <input
                          name={field.name} value={form[field.name]} onChange={handleChange}
                          required={field.required} placeholder={field.placeholder} type={field.type}
                          className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all"
                          style={inputStyle}
                          onFocus={(e) => e.target.style.borderColor = '#C9A84C'}
                          onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Email Address</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="emeka@gmail.com"
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all"
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = '#C9A84C'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Service</label>
                      <select
                        name="service" value={form.service} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all"
                        style={{ background: '#1a0f00', border: '1px solid rgba(255,255,255,0.08)' }}
                        onFocus={(e) => e.target.style.borderColor = '#C9A84C'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      >
                        <option value="" disabled>Select service</option>
                        {services.map((s, i) => <option key={i} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Preferred Date</label>
                      <input
                        name="date" type="date" value={form.date} onChange={handleChange} required
                        className="w-full px-4 py-3 rounded-lg text-sm text-white outline-none transition-all"
                        style={{ ...inputStyle, colorScheme: 'dark' }}
                        onFocus={(e) => e.target.style.borderColor = '#C9A84C'}
                        onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs tracking-widest uppercase text-white/40 block mb-2">Additional Notes</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={3}
                      placeholder="Any special requests or preferences..."
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-white/20 outline-none transition-all resize-none"
                      style={inputStyle}
                      onFocus={(e) => e.target.style.borderColor = '#C9A84C'}
                      onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-medium tracking-widest uppercase text-white mt-2"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send to WhatsApp →
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Booking