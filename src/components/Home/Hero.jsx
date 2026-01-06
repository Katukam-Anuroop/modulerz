import { imgCAM92 } from '../../assets/images';

export default function Hero() {
  return (
    <section className="relative w-full h-[1095px] mt-[100px]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0">
        <img 
          src={imgCAM92} 
          alt="Luxury Kitchen" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: "linear-gradient(-61.1027deg, rgba(221, 161, 82, 0) 0.50989%, rgba(75, 79, 92, 0.73) 64.654%, rgb(20, 48, 96) 97.455%)" 
          }}
        />
      </div>
      
      {/* Content - Using absolute positioning to match Figma design */}
      <div className="relative z-10 h-full w-full max-w-[1920px] mx-auto px-4 xl:px-0">
        {/* Heading - Luxury Defined Precision Delivered */}
        <div 
          className="absolute left-4 xl:left-[360px] top-[431px]"
          style={{
            color: '#DDA152',
            fontSize: 'clamp(40px, 4vw, 80px)',
            fontFamily: 'Griggs',
            fontWeight: '400',
            lineHeight: 'clamp(50px, 5vw, 101.14px)',
            wordWrap: 'break-word'
          }}
        >
          Luxury Defined<br/>
          Precision Delivered
        </div>
        
        {/* Description Text */}
        <div className="absolute left-4 xl:left-[366px] top-[646px] w-[calc(100%-2rem)] xl:w-[685px] max-w-[685px]">
          <p className="font-gotham-book text-white text-[15px] leading-[1.264] mb-4">
            A home is not a display piece. It's a space that works every single day.
            <br />
            At Modulerz, we move beyond surface shine and temporary trends to build interiors that deliver long-term strength, function, and calm.
          </p>
          <p className="font-gotham-medium text-white text-[15px] mb-8">
            Finish may fade. Build quality should not.
          </p>
        </div>
        
        {/* Start Your Journey Button */}
        <button 
          className="absolute left-4 xl:left-[366px] top-[888px] bg-[#143060] text-[#dda152] px-[73px] py-4 rounded-[20px] text-[clamp(24px,2vw,36px)] font-griggs h-[88px] w-[min(100%-2rem,446px)]"
        >
          Start Your Journey
        </button>
        
        {/* Right Form - GET A DESIGN CONSULTATION! */}
        <div className="absolute left-4 xl:left-[1244px] top-[888px] bg-[rgba(20,48,96,0.73)] rounded-[10px] p-8 w-[min(calc(100%-2rem),608px)] min-h-[400px] z-50 relative">
          <h2 className="text-[#bda162] text-[24px] font-gotham-book mb-6">
            GET A DESIGN CONSULTATION!
          </h2>
          <form className="space-y-5">
            <div className="border-b border-[#c4b9a1] pb-2">
              <input 
                type="text" 
                className="bg-transparent text-white w-full outline-none font-gotham-book placeholder:text-[#c4b9a1]"
                placeholder="Name"
              />
            </div>
            <div className="border-b border-[#c4b9a1] pb-2">
              <input 
                type="tel" 
                className="bg-transparent text-white w-full outline-none font-gotham-book placeholder:text-[#c4b9a1]"
                placeholder="Phone Number"
              />
            </div>
            <div className="border-b border-[#c4b9a1] pb-2">
              <input 
                type="email" 
                className="bg-transparent text-white w-full outline-none font-gotham-book placeholder:text-[#c4b9a1]"
                placeholder="Email"
              />
            </div>
            <div className="border-b border-[#c4b9a1] pb-2">
              <input 
                type="text" 
                className="bg-transparent text-white w-full outline-none font-gotham-book placeholder:text-[#c4b9a1]"
                placeholder="Location"
              />
            </div>
          </form>
          <button 
            type="submit"
            className="absolute bottom-8 right-8 bg-[#bda162] text-[#143060] rounded-[20px] text-[16px] font-gotham-medium w-[207px] h-[54px]"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </section>
  );
}
