import { imgTurnaround, imgTechDriven, imgTurnkey, imgPersonalized, imgUnwavering, imgTransparent } from '../../assets/images';

export default function WhyChoose() {
  const features = [
    {
      image: imgTurnaround,
      title: "Fast",
      subtitle: "Turnaround"
    },
    {
      image: imgTechDriven,
      title: "Technology-Driven Manufacturing",
      subtitle: ""
    },
    {
      image: imgTurnkey,
      title: "Turnkey Solutions & Job Work",
      subtitle: ""
    },
    {
      image: imgPersonalized,
      title: "Personalized",
      subtitle: "Designs"
    },
    {
      image: imgUnwavering,
      title: "Unwavering",
      subtitle: "Quality Control"
    },
    {
      image: imgTransparent,
      title: "Transparent Communication",
      subtitle: ""
    }
  ];

  return (
    <section className="relative bg-[#dda152] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto py-8 sm:py-12 md:py-16 lg:py-0">
      {/* Rounded corner fill - WhatWeDo section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#f8f5ed] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#f8f5ed] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
      
      {/* Mobile/Tablet Layout */}
      <div className="block lg:hidden px-4 sm:px-6 md:px-8 py-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 
            className="font-griggs text-[#143060]"
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              lineHeight: '1.3'
            }}
          >
            Why Choose Modulerz
          </h2>
        </div>
        
        {/* Grid - 2 columns on mobile, 3 on tablet */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#143060] to-[#dda152] rounded-[15px] p-4 sm:p-6 md:p-8 h-[200px] sm:h-[250px] md:h-[322px] flex flex-col items-center justify-center text-center"
              style={{ backgroundImage: "linear-gradient(127.9deg, rgb(20, 48, 96) 3.1044%, rgb(221, 161, 82) 258.76%)" }}
            >
              <img src={feature.image} alt={feature.title} className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mb-4 sm:mb-6 object-contain" />
              <h3 className="font-griggs text-white text-[20px] sm:text-[24px] md:text-[32px] leading-[1.264]">
                {feature.title}
                {feature.subtitle && (
                  <>
                    <br />
                    {feature.subtitle}
                  </>
                )}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Medium Desktop Layout (lg: 1024px to 2xl) */}
      <div className="hidden lg:block 2xl:hidden relative min-h-[1004px] py-8 px-4">
        <div className="relative w-full max-w-[1400px] mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 
              className="font-griggs text-[#143060] text-[60px]"
              style={{ lineHeight: '1.3' }}
            >
              Why Choose Modulerz
            </h2>
          </div>
          
          {/* Grid - 3 columns */}
          <div className="grid grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-[#143060] to-[#dda152] rounded-[15px] p-8 h-[280px] flex flex-col items-center justify-center text-center"
                style={{ backgroundImage: "linear-gradient(127.9deg, rgb(20, 48, 96) 3.1044%, rgb(221, 161, 82) 258.76%)" }}
              >
                <img src={feature.image} alt={feature.title} className="w-20 h-20 mb-6 object-contain" />
                <h3 className="font-griggs text-white text-[28px] leading-[1.264]">
                  {feature.title}
                  {feature.subtitle && (
                    <>
                      <br />
                      {feature.subtitle}
                    </>
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Desktop Layout (2xl: 1536px+) - Absolute positioning */}
      <div className="hidden 2xl:block relative h-[1004px]">
        {/* Heading - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[95px] text-center">
          <h2 
            className="font-griggs text-[#143060]"
            style={{
              fontSize: '80px',
              lineHeight: '1.3'
            }}
          >
            Why Choose Modulerz
          </h2>
        </div>
        
        {/* Grid - 3 columns, 2 rows */}
        <div className="absolute left-[313px] top-[255px] grid grid-cols-3 gap-8 w-[1294px]">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#143060] to-[#dda152] rounded-[15px] p-8 h-[322px] flex flex-col items-center justify-center text-center"
              style={{ backgroundImage: "linear-gradient(127.9deg, rgb(20, 48, 96) 3.1044%, rgb(221, 161, 82) 258.76%)" }}
            >
              <img src={feature.image} alt={feature.title} className="w-24 h-24 mb-6 object-contain" />
              <h3 className="font-griggs text-white text-[32px] leading-[1.264]">
                {feature.title}
                {feature.subtitle && (
                  <>
                    <br />
                    {feature.subtitle}
                  </>
                )}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
