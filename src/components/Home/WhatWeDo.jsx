import { imgCAM93, imgElegantModernLivingRoomWithEntertainmentCenter1, imgCover3Copy22, imgImage1 } from '../../assets/images';

export default function WhatWeDo() {
  return (
    <section className="relative bg-[#f8f5ed] h-[1745px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto overflow-visible" style={{ zIndex: 1 }}>
      {/* Rounded corner fill - Hero section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#143060]" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#143060]" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
      {/* Heading - Centered */}
      <div className="absolute left-1/2 -translate-x-1/2 top-[95px] text-center w-full" style={{ width: '100%', height: '100%', textAlign: 'center' }}>
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
      {/* Image on left */}
      <div className="absolute left-[391px] top-[319px] w-[500px] h-[250px] rounded-lg overflow-hidden border-2 border-gray-200">
        <img 
          src={imgCAM93} 
          alt="Modular Kitchens" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Text on right */}
      <div className="absolute left-[1017px] top-[351px] w-[421px]">
        <h3 className="font-griggs text-[#143060] text-[32px] mb-4">
          Modular Kitchens
        </h3>
        <p className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[393px]">
          Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
      
      {/* Item 2 - Wardrobes & Storage */}
      {/* Image on right */}
      <div className="absolute left-[1030px] top-[660px] w-[500px] h-[250px] rounded-lg overflow-hidden border-2 border-gray-200">
        <img 
          src={imgCover3Copy22} 
          alt="Wardrobes & Storage" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Text on left */}
      <div className="absolute left-[501px] top-[707px] w-[421px]">
        <h3 className="font-griggs text-[#143060] text-[32px] mb-4">
          Wardrobes & Storage
        </h3>
        <p className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[399px]">
          Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
      
      {/* Item 3 - Living Spaces */}
      {/* Image on left */}
      <div className="absolute left-[391px] top-[1001px] w-[500px] h-[250px] rounded-lg overflow-hidden border-2 border-gray-200">
        <img 
          src={imgElegantModernLivingRoomWithEntertainmentCenter1} 
          alt="Living Spaces" 
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      {/* Text on right */}
      <div className="absolute left-[1017px] top-[1034px] w-[421px]">
        <h3 className="font-griggs text-[#143060] text-[32px] mb-4">
          Living Spaces
        </h3>
        <p className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[381px]">
          Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
      
      {/* Item 4 - Turnkey Interiors */}
      {/* Image on right with overlay */}
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
      {/* Text on left */}
      <div className="absolute left-[501px] top-[1389px] w-[421px]">
        <h3 className="font-griggs text-[#143060] text-[32px] mb-4">
          Turnkey Interiors
        </h3>
        <p className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[399px]">
          Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
    </section>
  );
}
