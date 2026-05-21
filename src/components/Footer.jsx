import { motion } from 'framer-motion'

const Footer = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0a0806 0%, #1a0f00 50%, #0a0806 100%)' }}
    >
      {/* Animated gold line top */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />

      <div className="max-w-6xl mx-auto px-8 py-16">

        {/* Top section */}
        <div className="grid grid-cols-4 gap-12 pb-12 border-b border-white/5">

          {/* Brand */}
          <div className="col-span-1">
            <h2 className="font-playfair text-3xl text-cream mb-3">
              Naija <span style={{ color: '#C9A84C' }}>Cuts</span>
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Premium grooming for the modern Nigerian gentleman. Walk in sharp. Walk out sharper.
            </p>
            <motion.a
              href="https://wa.me/2349113086817"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-medium px-5 py-3 rounded-lg text-white"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #8B6914)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              WhatsApp Us
            </motion.a>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-xs tracking-[3px] uppercase mb-6" style={{ color: '#C9A84C' }}>
              Quick Links
            </p>
            <ul className="space-y-3">
              {[
                { label: 'Home', id: 'home' },
                { label: 'About Us', id: 'about' },
                { label: 'Services', id: 'services' },
                { label: 'Book Now', id: 'booking' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollTo(link.id)}
                    className="text-white/40 text-sm hover:text-gold transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={(e) => e.target.style.color = '#C9A84C'}
                    onMouseLeave={(e) => e.target.style.color = 'rgba(255,255,255,0.4)'}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs tracking-[3px] uppercase mb-6" style={{ color: '#C9A84C' }}>
              Services
            </p>
            <ul className="space-y-3">
              {[
                'The Classic Fade',
                'Hot Towel Shave',
                'Dread Locking',
                'Manicure & Pedicure',
                'Hair Dying',
                'Shape & Design',
              ].map((s) => (
                <li key={s}>
                  <span className="text-white/40 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs tracking-[3px] uppercase mb-6" style={{ color: '#C9A84C' }}>
              Contact
            </p>
            <ul className="space-y-4">
              <li>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Phone</p>
                
                <a  href="https://wa.me/2349113086817"
                  className="text-white/60 text-sm hover:text-gold"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                >
                  09113086817
                </a>
              </li>
              <li>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Location</p>
                <p className="text-white/60 text-sm">Lagos & Abuja</p>
              </li>
              <li>
                <p className="text-xs text-white/30 uppercase tracking-widest mb-1">Hours</p>
                <p className="text-white/60 text-sm">Mon — Sun</p>
                <p className="text-white/60 text-sm">9:00 AM — 11:00 PM</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="flex items-center justify-between pt-8">
          <p className="text-white/20 text-xs">
            © 2025 Naija Cuts. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Built with pride in Nigeria 🇳🇬
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer