import { imgRectangle29, imgRectangle31, imgModernMinimalistBedroomWithBuiltDesk2 } from '../../assets/images';

export default function ModulerzDifference() {
  const blocks = [
    {
      image: imgRectangle29,
      title: "German Precision. Indian Performance",
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageLeft: true,
      imagePosition: { left: '313px', top: '305px', width: '680px', height: '360px' },
      textPosition: { left: '1063px', top: '379px', width: '424px' }
    },
    {
      image: imgModernMinimalistBedroomWithBuiltDesk2,
      title: "Built Beyond Trends",
      titleLines: ["Built", "Beyond Trends"],
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageLeft: false,
      imagePosition: { left: '933px', top: '801px', width: '680px', height: '360px' },
      textPosition: { left: '311px', top: '863px', width: '424px' }
    },
    {
      image: imgRectangle31,
      title: "What We Promise. We Deliver.",
      description: "Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      imageLeft: true,
      imagePosition: { left: '313px', top: '1288px', width: '680px', height: '360px' },
      textPosition: { left: '1063px', top: '1362px', width: '424px' }
    }
  ];

  return (
    <section className="relative bg-[#143060] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto py-8 sm:py-12 md:py-16 lg:py-0">
      {/* Rounded corner fill - WhyChoose section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#dda152] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#dda152] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
      
      {/* Mobile/Tablet Layout */}
      <div className="block lg:hidden px-4 sm:px-6 md:px-8 py-8 space-y-12 sm:space-y-16">
        {/* Heading */}
        <div className="text-center">
          <h2 
            className="font-griggs text-[#dda152]"
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              lineHeight: '1.3'
            }}
          >
            The Modulerz Difference
          </h2>
        </div>
        
        {blocks.map((block, index) => (
          <div key={index} className="w-full">
            <div className="w-full aspect-[17/9] rounded-[20px] overflow-hidden mb-6">
              {block.imageLeft && index === 0 ? (
                <div className="relative w-full h-full">
                  <div className="absolute bg-[#bda162] inset-0 rounded-[20px]" />
                  <img 
                    src={block.image} 
                    alt={block.title} 
                    className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              ) : (
                <img 
                  src={block.image} 
                  alt={block.title} 
                  className="w-full h-full object-cover rounded-[20px]"
                />
              )}
            </div>
            <div className="px-2">
              <h3 
                className="font-griggs text-[#dda152] mb-4"
                style={{
                  fontSize: 'clamp(28px, 5vw, 45px)',
                  lineHeight: '1.264'
                }}
              >
                {block.titleLines ? (
                  <>
                    <span className="block">{block.titleLines[0]}</span>
                    <span className="block">{block.titleLines[1]}</span>
                  </>
                ) : (
                  block.title
                )}
              </h3>
              <p className="font-gotham-book text-[#e3dcce] text-[14px] sm:text-[15px] leading-[1.264]">
                {block.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Medium Desktop Layout (lg: 1024px to 2xl) */}
      <div className="hidden lg:block 2xl:hidden relative min-h-[1800px] py-8 px-4">
        <div className="relative w-full max-w-[1200px] mx-auto space-y-16">
          {/* Heading */}
          <div className="text-center">
            <h2 
              className="font-griggs text-[#dda152] text-[60px]"
              style={{ lineHeight: '1.3' }}
            >
              The Modulerz Difference
            </h2>
          </div>
          
          {blocks.map((block, index) => (
            <div key={index} className="w-full">
              <div className="w-full max-w-[900px] mx-auto aspect-[17/9] rounded-[20px] overflow-hidden mb-6">
                {block.imageLeft && index === 0 ? (
                  <div className="relative w-full h-full">
                    <div className="absolute bg-[#bda162] inset-0 rounded-[20px]" />
                    <img 
                      src={block.image} 
                      alt={block.title} 
                      className="absolute inset-0 w-full h-full object-cover rounded-[20px]"
                    />
                  </div>
                ) : (
                  <img 
                    src={block.image} 
                    alt={block.title} 
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                )}
              </div>
              <div className="w-full max-w-[900px] mx-auto px-4">
                <h3 
                  className="font-griggs text-[#dda152] mb-4 text-[36px]"
                  style={{ lineHeight: '1.264' }}
                >
                  {block.titleLines ? (
                    <>
                      <span className="block">{block.titleLines[0]}</span>
                      <span className="block">{block.titleLines[1]}</span>
                    </>
                  ) : (
                    block.title
                  )}
                </h3>
                <p className="font-gotham-book text-[#e3dcce] text-[15px] leading-[1.264]">
                  {block.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Large Desktop Layout (2xl: 1536px+) - Absolute positioning */}
      <div className="hidden 2xl:block relative h-[1800px]">
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
            {blocks[0].description}
          </p>
        </div>
        
        {/* Block 2 - Built Beyond Trends */}
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
            {blocks[1].description}
          </p>
        </div>
        <div className="absolute left-[933px] top-[801px] w-[680px] h-[360px] rounded-[20px] overflow-hidden">
          <img 
            src={imgModernMinimalistBedroomWithBuiltDesk2} 
            alt="Built Beyond Trends" 
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
        
        {/* Block 3 - What We Promise. We Deliver. */}
        <div className="absolute left-[313px] top-[1288px] w-[680px] h-[360px] rounded-[20px] overflow-hidden">
          <img 
            src={imgRectangle31} 
            alt="What We Promise" 
            className="w-full h-full object-cover rounded-[20px]"
          />
        </div>
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
            {blocks[2].description}
          </p>
        </div>
      </div>
    </section>
  );
}
