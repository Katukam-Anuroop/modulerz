import SolutionsHero from './SolutionsHero';
import { imgCAM93, imgCover3Copy22, imgElegantModernLivingRoomWithEntertainmentCenter1, imgImage1 } from '../../assets/images';

export default function Solutions() {
  const solutions = [
    {
      title: "Moduler Kitchens",
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      image: imgCAM93,
      imageAlt: "Modular Kitchen",
      textColor: "text-[#231f20]"
    },
    {
      title: "Wardrobes & Storage",
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      image: imgCover3Copy22,
      imageAlt: "Wardrobes & Storage",
      textColor: "text-[#1e1e1e]"
    },
    {
      title: "Living Spaces",
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      image: imgElegantModernLivingRoomWithEntertainmentCenter1,
      imageAlt: "Living Spaces",
      textColor: "text-[#231f20]"
    },
    {
      title: "Turnkey Interiors",
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      image: imgImage1,
      imageAlt: "Turnkey Interiors",
      textColor: "text-[#143060]",
      hasOverlay: true,
      overlayImage: imgCover3Copy22
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SolutionsHero />
      
      {/* Solutions Content Section */}
      <section className="relative bg-[#f8f5ed] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto py-8 sm:py-12 md:py-16 lg:py-0">
        {/* Rounded corner fill - Hero section color */}
        <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
        <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
        
        {/* Mobile/Tablet Layout - Stacked */}
        <div className="block lg:hidden px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16 md:space-y-20">
          {solutions.map((solution, index) => (
            <div key={index} className="w-full">
              {/* Image */}
              <div className="w-full aspect-[2/1] rounded-[20px] overflow-hidden mb-6">
                {solution.hasOverlay ? (
                  <div className="relative w-full h-full">
                    <img 
                      src={solution.overlayImage} 
                      alt={`${solution.imageAlt} Background`} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <img 
                      src={solution.image} 
                      alt={solution.imageAlt} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <img 
                    src={solution.image} 
                    alt={solution.imageAlt} 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              {/* Text Content */}
              <div className="px-2 sm:px-4">
                <h2 
                  className="font-griggs text-[#143060] mb-4 sm:mb-6 text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px]"
                  style={{
                    lineHeight: '1.264'
                  }}
                >
                  {solution.title}
                </h2>
                <p className={`font-gotham-book ${solution.textColor} text-[14px] sm:text-[15px] leading-[1.264]`}>
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Medium Desktop Layout (lg: 1024px to 2xl) - Centered with adjusted positioning */}
        <div className="hidden lg:block 2xl:hidden relative min-h-[3300px] py-8 px-4">
          <div className="relative w-full max-w-[1200px] mx-auto space-y-16">
            {/* 1. Modular Kitchens */}
            <div>
              <div className="w-full max-w-[900px] mx-auto aspect-[2/1] rounded-[20px] overflow-hidden mb-6">
                <img src={imgCAM93} alt="Modular Kitchen" className="w-full h-full object-cover rounded-[20px]" />
              </div>
              <div className="w-full max-w-[900px] mx-auto px-4">
                <h2 className="font-griggs text-[#143060] mb-6 text-[36px]" style={{ lineHeight: '1.264' }}>Moduler Kitchens</h2>
                <p className="font-gotham-book text-[#231f20] text-[15px] leading-[1.264]">
                  Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
              </div>
            </div>
            
            {/* 2. Wardrobes & Storage */}
            <div>
              <div className="w-full max-w-[900px] mx-auto aspect-[2/1] rounded-[20px] overflow-hidden mb-6">
                <img src={imgCover3Copy22} alt="Wardrobes & Storage" className="w-full h-full object-cover rounded-[20px]" />
              </div>
              <div className="w-full max-w-[900px] mx-auto px-4">
                <h2 className="font-griggs text-[#143060] mb-6 text-[36px]" style={{ lineHeight: '1.264' }}>Wardrobes & Storage</h2>
                <p className="font-gotham-book text-[#1e1e1e] text-[15px] leading-[1.264]">
                  Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
              </div>
            </div>
            
            {/* 3. Living Spaces */}
            <div>
              <div className="w-full max-w-[900px] mx-auto aspect-[2/1] rounded-[20px] overflow-hidden mb-6">
                <img src={imgElegantModernLivingRoomWithEntertainmentCenter1} alt="Living Spaces" className="w-full h-full object-cover rounded-[20px]" />
              </div>
              <div className="w-full max-w-[900px] mx-auto px-4">
                <h2 className="font-griggs text-[#143060] mb-6 text-[36px]" style={{ lineHeight: '1.264' }}>Living Spaces</h2>
                <p className="font-gotham-book text-[#231f20] text-[15px] leading-[1.264]">
                  Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
              </div>
            </div>
            
            {/* 4. Turnkey Interiors */}
            <div>
              <div className="w-full max-w-[900px] mx-auto aspect-[2/1] rounded-[20px] overflow-hidden mb-6 relative">
                <img src={imgCover3Copy22} alt="Turnkey Interiors Background" className="w-full h-full object-cover rounded-[20px]" />
                <div className="absolute inset-0 w-full h-full">
                  <img src={imgImage1} alt="Turnkey Interiors" className="w-full h-full object-cover rounded-[20px]" />
                </div>
              </div>
              <div className="w-full max-w-[900px] mx-auto px-4">
                <h2 className="font-griggs text-[#143060] mb-6 text-[36px]" style={{ lineHeight: '1.264' }}>Turnkey Interiors</h2>
                <p className="font-gotham-book text-[#143060] text-[15px] leading-[1.264]">
                  Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Large Desktop Layout (2xl: 1536px+) - Full size absolute positioning */}
        <div className="hidden 2xl:block relative h-[3300px]">
          {/* 1. Modular Kitchens - Image first, then text below */}
          <div className="absolute left-[366px] top-[73px] w-[1080px] h-[540px] rounded-[20px] overflow-hidden">
            <img 
              src={imgCAM93} 
              alt="Modular Kitchen" 
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="absolute left-[366px] top-[640px]">
            <h2 
              className="font-griggs text-[#143060] mb-6"
              style={{
                fontSize: '40px',
                lineHeight: '1.264'
              }}
            >
              Moduler Kitchens
            </h2>
            <p className="font-gotham-book text-[#231f20] text-[15px] leading-[1.264] w-[747px]">
              Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          
          {/* 2. Wardrobes & Storage - Image, text below */}
          <div className="absolute left-[366px] top-[842px] w-[1080px] h-[540px] rounded-[20px] overflow-hidden">
            <img 
              src={imgCover3Copy22} 
              alt="Wardrobes & Storage" 
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="absolute left-[366px] top-[1409px]">
            <h2 
              className="font-griggs text-[#143060] mb-6"
              style={{
                fontSize: '40px',
                lineHeight: '1.264'
              }}
            >
              Wardrobes & Storage
            </h2>
            <p className="font-gotham-book text-[#1e1e1e] text-[15px] leading-[1.264] w-[955px]">
              Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          
          {/* 3. Living Spaces - Image, text below */}
          <div className="absolute left-[366px] top-[1618px] w-[1080px] h-[540px] rounded-[20px] overflow-hidden">
            <img 
              src={imgElegantModernLivingRoomWithEntertainmentCenter1} 
              alt="Living Spaces" 
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>
          <div className="absolute left-[366px] top-[2185px]">
            <h2 
              className="font-griggs text-[#143060] mb-6"
              style={{
                fontSize: '40px',
                lineHeight: '1.264'
              }}
            >
              Living Spaces
            </h2>
            <p className="font-gotham-book text-[#231f20] text-[15px] leading-[1.264] w-[864px]">
              Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
          
          {/* 4. Turnkey Interiors - Image with overlay, text below */}
          <div className="absolute left-[366px] top-[2452px] w-[1080px] h-[540px] rounded-[20px] overflow-hidden relative">
            <img 
              src={imgCover3Copy22} 
              alt="Turnkey Interiors Background" 
              className="w-full h-full object-cover rounded-[20px]"
            />
            <div className="absolute inset-0 w-full h-full">
              <img 
                src={imgImage1} 
                alt="Turnkey Interiors" 
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
          <div className="absolute left-[366px] top-[3019px]">
            <h2 
              className="font-griggs text-[#143060] mb-6"
              style={{
                fontSize: '40px',
                lineHeight: '1.264'
              }}
            >
              Turnkey Interiors
            </h2>
            <p className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[905px]">
              Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

