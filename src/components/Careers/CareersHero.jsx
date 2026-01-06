export default function CareersHero() {
  return (
    <section className="relative w-full max-w-[1920px] mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[697px] mt-[100px]">
      {/* Gradient Background */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: "linear-gradient(-49.0697deg, rgb(20, 48, 96) 3.443%, rgb(221, 161, 82) 100.39%)" 
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-4 xl:px-0">
        {/* Main Heading */}
        <div 
          className="absolute left-4 sm:left-8 md:left-16 lg:left-4 xl:left-[360px] top-16 sm:top-24 md:top-32 lg:top-[193px]"
          style={{
            color: '#DDA152',
            fontSize: 'clamp(32px, 5vw, 80px)',
            fontFamily: 'Griggs',
            fontWeight: '400',
            lineHeight: '1.264'
          }}
        >
          <p className="mb-0">Join the team</p>
          <p>shaping homes and futures.</p>
        </div>
        
        {/* Description */}
        <p 
          className="absolute left-4 sm:left-8 md:left-16 lg:left-4 xl:left-[366px] top-32 sm:top-40 md:top-48 lg:top-[408px] font-gotham-book text-white text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-[1.264] w-[calc(100%-2rem)] sm:w-[600px] md:w-[650px] lg:w-[calc(100%-2rem)] xl:w-[715px]"
        >
          At Modulerz, we design kitchens and wardrobes that last, and we build careers the same way.
        </p>
      </div>
    </section>
  );
}

