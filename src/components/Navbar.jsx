import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-dark/60 backdrop-blur-md border-b border-gold/10">
      <div className="flex items-center justify-between px-6 md:px-12 py-4 md:py-6">
        <h1 className="font-playfair text-2xl md:text-4xl text-cream">
          Naija <span className="text-gold">Cuts</span>
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 text-base text-cream">
          <li><button onClick={() => scrollTo('home')} className="hover:text-gold transition-colors duration-200">Home</button></li>
          <li><button onClick={() => scrollTo('about')} className="hover:text-gold transition-colors duration-200">About</button></li>
          <li><button onClick={() => scrollTo('services')} className="hover:text-gold transition-colors duration-200">Services</button></li>
          <li><button onClick={() => scrollTo('booking')} className="hover:text-gold transition-colors duration-200">Contact</button></li>
        </ul>

        {/* Desktop button */}
        <button
          onClick={() => scrollTo('booking')}
          className="hidden md:block bg-gold text-dark px-8 py-3 text-sm font-medium tracking-widest uppercase"
        >
          Book A Session
        </button>

        {/* Hamburger */}
        <button
          className="md:hidden text-cream text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 py-6 bg-dark/95 border-t border-gold/10">
          <button onClick={() => scrollTo('home')} className="text-cream hover:text-gold text-lg">Home</button>
          <button onClick={() => scrollTo('about')} className="text-cream hover:text-gold text-lg">About</button>
          <button onClick={() => scrollTo('services')} className="text-cream hover:text-gold text-lg">Services</button>
          <button onClick={() => scrollTo('booking')} className="text-cream hover:text-gold text-lg">Contact</button>
          <button
            onClick={() => scrollTo('booking')}
            className="bg-gold text-dark px-8 py-3 text-sm font-medium tracking-widest uppercase"
          >
            Book A Session
          </button>
        </div>
      )}
    </nav>
  )
}

export default Navbar