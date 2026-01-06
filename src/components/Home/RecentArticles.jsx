import { imgLShapedModularKitchenLayout1, imgImage2, img3DRenderingMinimalLoftLuxuryWoodWalkClosetWithWardrobe1 } from '../../assets/images';

export default function RecentArticles() {
  const articles = [
    {
      image: imgLShapedModularKitchenLayout1,
      title: "5 Key Steps to Designing a Functional Modular Kitchen"
    },
    {
      image: imgImage2,
      title: "Is Professional Interior Design Only for High Budgets?"
    },
    {
      image: img3DRenderingMinimalLoftLuxuryWoodWalkClosetWithWardrobe1,
      title: "Wardrobe Design Trends Hyderabad 2025"
    }
  ];

  return (
    <section className="relative bg-[#f8f5ed] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto py-8 sm:py-12 md:py-16 lg:py-0">
      {/* Rounded corner fill - Testimonials section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#dda152] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#dda152] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
      
      {/* Mobile/Tablet Layout */}
      <div className="block lg:hidden px-4 sm:px-6 md:px-8 py-8 space-y-8 sm:space-y-12">
        {/* Heading */}
        <div className="text-center">
          <p 
            className="font-griggs mb-2 text-[#143060]"
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              lineHeight: '1.3'
            }}
          >
            Recent Articles
          </p>
          <p 
            className="font-gotham-book text-[#896010]"
            style={{
              fontSize: 'clamp(20px, 4vw, 32px)',
              lineHeight: '2.09'
            }}
          >
            Expert Insights to Elevate Your Space
          </p>
        </div>
        
        {/* Articles */}
        <div className="space-y-8">
          {articles.map((article, index) => (
            <div key={index} className="w-full">
              <div className="w-full aspect-[3/2] rounded-lg overflow-hidden mb-4">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="px-2">
                <p className="font-gotham-medium mb-0 text-[#143060] text-[20px] sm:text-[24px]">
                  {article.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medium Desktop Layout (lg: 1024px to 2xl) */}
      <div className="hidden lg:block 2xl:hidden relative min-h-[1017px] py-8 px-4">
        <div className="relative w-full max-w-[1400px] mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p 
              className="font-griggs mb-2 text-[#143060] text-[60px]"
              style={{ lineHeight: '1.3' }}
            >
              Recent Articles
            </p>
            <p 
              className="font-gotham-book text-[#896010] text-[28px]"
              style={{ lineHeight: '2.09' }}
            >
              Expert Insights to Elevate Your Space
            </p>
          </div>
          
          {/* Articles Grid */}
          <div className="grid grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <div key={index} className="w-full">
                <div className="w-full aspect-[3/2] rounded-lg overflow-hidden mb-4">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div>
                  <p className="font-gotham-medium mb-0 text-[#143060] text-[20px]">
                    {article.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Desktop Layout (2xl: 1536px+) - Absolute positioning */}
      <div className="hidden 2xl:block relative h-[1017px]">
        {/* Heading - Centered */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 top-[53px] text-center w-[1095px]"
        >
          <p 
            className="font-griggs mb-0"
            style={{
              color: '#143060',
              fontSize: '80px',
              lineHeight: '1.3'
            }}
          >
            Recent Articles
          </p>
          <p 
            className="font-gotham-book"
            style={{
              color: '#896010',
              fontSize: '32px',
              lineHeight: '2.09'
            }}
          >
            Expert Insights to Elevate Your Space
          </p>
        </div>
        
        {/* Articles */}
        {articles.map((article, index) => {
          const positions = [
            { imageLeft: "44px", imageTop: "303px", textLeft: "86px", textTop: "704px" },
            { imageLeft: "678.66px", imageTop: "303px", textLeft: "720px", textTop: "704px" },
            { imageLeft: "1313.32px", imageTop: "303px", textLeft: "1347px", textTop: "704px" }
          ];
          const pos = positions[index];
          
          return (
            <div key={index}>
              {/* Image */}
              <div 
                className="absolute rounded-lg overflow-hidden"
                style={{
                  left: pos.imageLeft,
                  top: pos.imageTop,
                  width: '570.909px',
                  height: '380.606px'
                }}
              >
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Title */}
              <div 
                className="absolute font-gotham-book text-[#143060]"
                style={{
                  left: pos.textLeft,
                  top: pos.textTop,
                  width: '500px',
                  lineHeight: '2.09'
                }}
              >
                <p className="font-gotham-medium mb-0 text-[24px]">
                  {article.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
