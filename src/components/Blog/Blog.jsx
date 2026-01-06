import BlogHero from './BlogHero';
import { imgCAM12, imgLuxuriousKitchenWithStainlessSteelAppliancesContemporaryMansion3DRendering1, imgCAM0041 } from '../../assets/images';

export default function Blog() {
  // Blog posts data - 3 columns x 2 rows
  // Positions adjusted to be relative to section (subtracted 673px from Figma values)
  const blogPosts = [
    // Row 1
    {
      image: imgCAM12,
      title: "Blog 1",
      description: "Whether you're a creative genius, a sales superstar, or a logistics expert, there's a place for you to shine here.",
      imageLeft: "313px",
      imageTop: "84px", // Image starts at top of section
      textLeft: "351px",
      textTop: "527px" // Text below image (84 + 400 + 43 spacing = 527)
    },
    {
      image: imgLuxuriousKitchenWithStainlessSteelAppliancesContemporaryMansion3DRendering1,
      title: "Blog 2",
      description: "We manage projects end to end and give every role the space to take ownership and grow.",
      imageLeft: "760.39px",
      imageTop: "84px",
      textLeft: "802px",
      textTop: "527px"
    },
    {
      image: imgCAM0041,
      title: "Blog 3",
      description: "Whether you're a creative genius, a sales superstar, or a logistics expert, there's a place for you to shine here.",
      imageLeft: "1207.79px",
      imageTop: "84px",
      textLeft: "1245px",
      textTop: "527px"
    },
    // Row 2
    {
      image: imgCAM12,
      title: "Blog 1",
      description: "Whether you're a creative genius, a sales superstar, or a logistics expert, there's a place for you to shine here.",
      imageLeft: "313px",
      imageTop: "700px", // Second row starts after first row content
      textLeft: "351px",
      textTop: "1123px" // 1796 - 673 = 1123
    },
    {
      image: imgLuxuriousKitchenWithStainlessSteelAppliancesContemporaryMansion3DRendering1,
      title: "Blog 2",
      description: "We manage projects end to end and give every role the space to take ownership and grow.",
      imageLeft: "760.39px",
      imageTop: "700px",
      textLeft: "802px",
      textTop: "1123px"
    },
    {
      image: imgCAM0041,
      title: "Blog 3",
      description: "Whether you're a creative genius, a sales superstar, or a logistics expert, there's a place for you to shine here.",
      imageLeft: "1207.79px",
      imageTop: "700px",
      textLeft: "1245px",
      textTop: "1123px"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <BlogHero />
      
      {/* Blog Posts Section */}
      <section className="relative bg-[#f8f5ed] h-[1330px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto">
        {/* Rounded corner fill - Hero section color */}
        <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
        <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
        
        {/* Mobile/Tablet Layout - Stacked */}
        <div className="block lg:hidden px-4 sm:px-6 md:px-8 py-8 space-y-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="w-full">
              {/* Image */}
              <div className="w-full aspect-square rounded-[20px] overflow-hidden mb-4">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              
              {/* Text Content */}
              <div className="px-2">
                <h3 className="font-griggs text-[#143060] mb-3 text-[24px] sm:text-[28px] md:text-[30px]">
                  {post.title}
                </h3>
                <p className="font-gotham-book text-[#231f20] text-[14px] sm:text-[15px] leading-[1.264]">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Medium Desktop Layout (lg: 1024px to 2xl) - Grid */}
        <div className="hidden lg:block 2xl:hidden relative min-h-[1330px] py-8 px-4">
          <div className="grid grid-cols-3 gap-6 max-w-[1400px] mx-auto">
            {blogPosts.map((post, index) => (
              <div key={index} className="w-full">
                {/* Image */}
                <div className="w-full aspect-square rounded-[20px] overflow-hidden mb-4">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                
                {/* Text Content */}
                <div>
                  <h3 className="font-griggs text-[#143060] mb-3 text-[24px]">
                    {post.title}
                  </h3>
                  <p className="font-gotham-book text-[#231f20] text-[14px] leading-[1.264]">
                    {post.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Large Desktop Layout (2xl: 1536px+) - Absolute positioning */}
        <div className="hidden 2xl:block relative h-[1330px]">
          {blogPosts.map((post, index) => (
            <div key={index}>
              {/* Image */}
              <div 
                className="absolute rounded-[20px] overflow-hidden"
                style={{
                  left: post.imageLeft,
                  top: post.imageTop,
                  width: '400px',
                  height: '400px'
                }}
              >
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              
              {/* Text Content */}
              <div 
                className="absolute font-gotham-book text-[#231f20]"
                style={{
                  left: post.textLeft,
                  top: post.textTop,
                  width: index === 2 || index === 5 ? '327px' : '315px',
                  lineHeight: '1.264'
                }}
              >
                <h3 className="font-griggs text-[#143060] mb-0 text-[30px]">
                  {post.title}
                </h3>
                <p className="mb-0 text-[15px]">&nbsp;</p>
                <p className="text-[15px]">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

