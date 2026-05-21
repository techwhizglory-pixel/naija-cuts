const Navbar = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-12 py-6 bg-dark/60 backdrop-blur-md border-b border-gold/10">
      <h1 className="font-playfair text-4xl text-cream">Naija <span className="text-gold">Cuts</span></h1>
      <div>
        <ul className="flex gap-8 text-base text-cream">
          <li><button onClick={() => scrollTo('home')} className="hover:text-gold transition-colors duration-200">Home</button></li>
          <li><button onClick={() => scrollTo('about')} className="hover:text-gold transition-colors duration-200">About</button></li>
          <li><button onClick={() => scrollTo('services')} className="hover:text-gold transition-colors duration-200">Services</button></li>
          <li><button onClick={() => scrollTo('booking')} className="hover:text-gold transition-colors duration-200">Contact</button></li>
        </ul>
      </div>
      <button
        onClick={() => scrollTo('booking')}
        className="bg-gold text-dark px-8 py-3 text-sm font-medium tracking-widest uppercase"
      >
        Book A Session
      </button>
    </nav>
  )
}

export default Navbar