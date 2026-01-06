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
    <section className="relative bg-[#dda152] h-[1004px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto">
      {/* Rounded corner fill - WhatWeDo section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#f8f5ed]" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#f8f5ed]" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
      
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
    </section>
  );
}
