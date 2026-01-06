import { imgCAM93, imgElegantModernLivingRoomWithEntertainmentCenter1, imgCover3Copy22, imgImage1 } from '../../assets/images';

export default function WhatWeDo() {
  const items = [
    {
      image: imgCAM93,
      title: "Modular Kitchens",
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      textColor: "text-[#143060]"
    },
    {
      image: imgCover3Copy22,
      title: "Wardrobes & Storage",
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      textColor: "text-[#143060]"
    },
    {
      image: imgElegantModernLivingRoomWithEntertainmentCenter1,
      title: "Living Spaces",
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      textColor: "text-[#143060]"
    },
    {
      image: imgImage1,
      overlayImage: imgCover3Copy22,
      title: "Turnkey Interiors",
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      textColor: "text-[#143060]",
      hasOverlay: true
    }
  ];

  return (
    <section className="relative bg-[#f8f5ed] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto py-8 sm:py-12 md:py-16 lg:py-0 overflow-visible" style={{ zIndex: 1 }}>
      {/* Rounded corner fill - Hero section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
      
      {/* Mobile/Tablet Layout - Stacked */}
      <div className="block lg:hidden px-4 sm:px-6 md:px-8 py-8 space-y-12 sm:space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h2 
            className="font-griggs text-[#DDA152] mb-2"
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              lineHeight: '1.264'
            }}
          >
            What We Do
          </h2>
          <p 
            className="font-griggs text-[#143060]"
            style={{
              fontSize: 'clamp(20px, 4vw, 32px)',
              lineHeight: '1.264'
            }}
          >
            Complete Moduler Interior Solutions
          </p>
        </div>
        
        {items.map((item, index) => (
          <div key={index} className="w-full">
            <div className="w-full aspect-[2/1] rounded-lg overflow-hidden mb-4">
              {item.hasOverlay ? (
                <div className="relative w-full h-full">
                  <img 
                    src={item.overlayImage} 
                    alt={`${item.title} Background`} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              ) : (
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>
            <div className="px-2">
              <h3 className="font-griggs text-[#143060] text-[28px] sm:text-[32px] mb-4">
                {item.title}
              </h3>
              <p className={`font-gotham-book ${item.textColor} text-[14px] sm:text-[15px] leading-[1.264]`}>
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Medium Desktop Layout (lg: 1024px to 2xl) - Centered */}
      <div className="hidden lg:block 2xl:hidden relative min-h-[1745px] py-8 px-4">
        <div className="relative w-full max-w-[1200px] mx-auto space-y-16">
          {/* Heading */}
          <div className="text-center">
            <h2 
              className="font-griggs text-[#DDA152] mb-2 text-[60px]"
              style={{ lineHeight: '1.264' }}
            >
              What We Do
            </h2>
            <p 
              className="font-griggs text-[#143060] text-[28px]"
              style={{ lineHeight: '1.264' }}
            >
              Complete Moduler Interior Solutions
            </p>
          </div>
          
          {items.map((item, index) => (
            <div key={index} className="w-full">
              <div className="w-full max-w-[900px] mx-auto aspect-[2/1] rounded-lg overflow-hidden mb-6">
                {item.hasOverlay ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={item.overlayImage} 
                      alt={`${item.title} Background`} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                )}
              </div>
              <div className="w-full max-w-[900px] mx-auto px-4">
                <h3 className="font-griggs text-[#143060] text-[32px] mb-4">
                  {item.title}
                </h3>
                <p className={`font-gotham-book ${item.textColor} text-[15px] leading-[1.264]`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Large Desktop Layout (2xl: 1536px+) - Absolute positioning */}
      <div className="hidden 2xl:block relative h-[1745px]">
        {/* Heading - Centered */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[95px] text-center w-full">
          <span 
            className="font-griggs block"
            style={{ 
              color: '#DDA152', 
              fontSize: '80px', 
              fontFamily: 'Griggs', 
              fontWeight: '400', 
              lineHeight: '104px', 
              wordWrap: 'break-word' 
            }}
          >
            What We Do<br/>
          </span>
          <span 
            className="font-griggs"
            style={{ 
              color: '#143060', 
              fontSize: '32px', 
              fontFamily: 'Griggs', 
              fontWeight: '400', 
              lineHeight: '41.60px', 
              wordWrap: 'break-word' 
            }}
          >
            Complete Moduler Interior Solutions
          </span>
        </div>
        
        {/* Item 1 - Modular Kitchens */}
        <div className="absolute left-[391px] top-[319px] w-[500px] h-[250px] rounded-lg overflow-hidden border-2 border-gray-200">
          <img 
            src={imgCAM93} 
            alt="Modular Kitchens" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute left-[1017px] top-[351px] w-[421px]">
          <h3 className="font-griggs text-[#143060] text-[32px] mb-4">
            Modular Kitchens
          </h3>
          <p className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[393px]">
            {items[0].description}
          </p>
        </div>
        
        {/* Item 2 - Wardrobes & Storage */}
        <div className="absolute left-[1030px] top-[660px] w-[500px] h-[250px] rounded-lg overflow-hidden border-2 border-gray-200">
          <img 
            src={imgCover3Copy22} 
            alt="Wardrobes & Storage" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute left-[501px] top-[707px] w-[421px]">
          <h3 className="font-griggs text-[#143060] text-[32px] mb-4">
            Wardrobes & Storage
          </h3>
          <p className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[399px]">
            {items[1].description}
          </p>
        </div>
        
        {/* Item 3 - Living Spaces */}
        <div className="absolute left-[391px] top-[1001px] w-[500px] h-[250px] rounded-lg overflow-hidden border-2 border-gray-200">
          <img 
            src={imgElegantModernLivingRoomWithEntertainmentCenter1} 
            alt="Living Spaces" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute left-[1017px] top-[1034px] w-[421px]">
          <h3 className="font-griggs text-[#143060] text-[32px] mb-4">
            Living Spaces
          </h3>
          <p className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[381px]">
            {items[2].description}
          </p>
        </div>
        
        {/* Item 4 - Turnkey Interiors */}
        <div className="absolute left-[1030px] top-[1342px] w-[500px] h-[250px] rounded-lg overflow-hidden border-2 border-gray-200 relative">
          <img 
            src={imgCover3Copy22} 
            alt="Turnkey Interiors Background" 
            className="w-full h-full object-cover rounded-lg"
          />
          <img 
            src={imgImage1} 
            alt="Turnkey Interiors" 
            className="absolute inset-0 w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="absolute left-[501px] top-[1389px] w-[421px]">
          <h3 className="font-griggs text-[#143060] text-[32px] mb-4">
            Turnkey Interiors
          </h3>
          <p className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[399px]">
            {items[3].description}
          </p>
        </div>
      </div>
    </section>
  );
}
