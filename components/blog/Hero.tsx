export function Hero() {
  return (
    <section className="pb-8 md:pb-12">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="mb-12 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-heading">
            <span className="hero-engineering">Engineering</span>
            <br />
            <span className="hero-meets-color italic hero-meets" style={{ fontFamily: 'var(--font-playfair-display)' }}>meets</span>
            <br />
            <span className="hero-business">Business</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mt-6 font-heading">
            an inside look: made by students, for students!
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Image 1 - Engineering */}
          <div className="transform rotate-2">
            <div className="aspect-square bg-gray-200 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=600&fit=crop"
                alt="Student working on circuit board"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 2 - Business Presentation */}
          <div className="transform -rotate-2">
            <div className="aspect-square bg-gray-200 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="Business presentation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Image 3 - Collaboration */}
          <div className="transform rotate-1">
            <div className="aspect-square bg-gray-200 overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=600&fit=crop"
                alt="Students collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

