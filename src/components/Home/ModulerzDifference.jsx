import { imgRectangle29, imgRectangle31, imgModernMinimalistBedroomWithBuiltDesk2 } from '../../assets/images';

export default function ModulerzDifference() {
  return (
    <section className="relative bg-[#143060] h-[1800px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto">
      {/* Rounded corner fill - WhyChoose section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#dda152]" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#dda152]" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
      {/* Heading - Centered */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 top-[82px] text-center w-[1149px]"
        style={{
          color: '#dda152',
          fontSize: '80px',
          fontFamily: 'Griggs',
          fontWeight: '400',
          lineHeight: '1.3'
        }}
      >
        The Modulerz Difference
      </div>
      
      {/* Block 1 - German Precision. Indian Performance */}
      {/* Image on left */}
      <div className="absolute left-[313px] top-[305px] w-[680px] h-[360px] rounded-[20px] overflow-hidden relative">
        <div className="absolute bg-[#bda162] inset-0 rounded-[20px]" />
        <div className="absolute inset-0 overflow-hidden rounded-[20px]">
          <img 
            src={imgRectangle29} 
            alt="German Precision" 
            className="absolute h-[108.19%] left-[0.02%] top-[-4.09%] w-full object-cover"
          />
        </div>
      </div>
      {/* Text on right */}
      <div className="absolute left-[1063px] top-[379px] w-[424px]">
        <h3 
          className="font-griggs text-[#dda152] mb-4"
          style={{
            fontSize: '45px',
            lineHeight: '1.264'
          }}
        >
          German Precision. Indian Performance
        </h3>
        <p className="font-gotham-book text-[#e3dcce] text-[15px] leading-[1.264] w-[458px]">
          Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
      
      {/* Block 2 - Built Beyond Trends */}
      {/* Text on left */}
      <div className="absolute left-[311px] top-[863px] w-[424px]">
        <h3 
          className="font-griggs text-[#dda152] mb-4"
          style={{
            fontSize: '45px',
            lineHeight: '1.264'
          }}
        >
          <span className="block">Built</span>
          <span className="block">Beyond Trends</span>
        </h3>
        <p className="font-gotham-book text-[#e3dcce] text-[15px] leading-[1.264] w-[458px]">
          Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
      {/* Image on right */}
      <div className="absolute left-[933px] top-[801px] w-[680px] h-[360px] rounded-[20px] overflow-hidden">
        <img 
          src={imgModernMinimalistBedroomWithBuiltDesk2} 
          alt="Built Beyond Trends" 
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>
      
      {/* Block 3 - What We Promise. We Deliver. */}
      {/* Image on left */}
      <div className="absolute left-[313px] top-[1288px] w-[680px] h-[360px] rounded-[20px] overflow-hidden">
        <img 
          src={imgRectangle31} 
          alt="What We Promise" 
          className="w-full h-full object-cover rounded-[20px]"
        />
      </div>
      {/* Text on right */}
      <div className="absolute left-[1063px] top-[1362px] w-[424px]">
        <h3 
          className="font-griggs text-[#dda152] mb-4"
          style={{
            fontSize: '45px',
            lineHeight: '1.264'
          }}
        >
          What We Promise. We Deliver.
        </h3>
        <p className="font-gotham-book text-[#e3dcce] text-[15px] leading-[1.264] w-[458px]">
          Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
        </p>
      </div>
    </section>
  );
}
