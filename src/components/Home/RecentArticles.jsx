import { imgLShapedModularKitchenLayout1, imgImage2, img3DRenderingMinimalLoftLuxuryWoodWalkClosetWithWardrobe1 } from '../../assets/images';

export default function RecentArticles() {
  const articles = [
    {
      image: imgLShapedModularKitchenLayout1,
      title: "5 Key Steps to Designing a Functional Modular Kitchen",
      imageLeft: "44px",
      imageTop: "303px",
      textLeft: "86px",
      textTop: "704px"
    },
    {
      image: imgImage2,
      title: "Is Professional Interior Design Only for High Budgets?",
      imageLeft: "678.66px",
      imageTop: "303px",
      textLeft: "720px",
      textTop: "704px"
    },
    {
      image: img3DRenderingMinimalLoftLuxuryWoodWalkClosetWithWardrobe1,
      title: "Wardrobe Design Trends Hyderabad 2025",
      imageLeft: "1313.32px",
      imageTop: "303px",
      textLeft: "1347px",
      textTop: "704px"
    }
  ];

  return (
    <section className="relative bg-[#f8f5ed] h-[1017px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto">
      {/* Rounded corner fill - Testimonials section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#dda152]" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#dda152]" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
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
      {articles.map((article, index) => (
        <div key={index}>
          {/* Image */}
          <div 
            className="absolute rounded-lg overflow-hidden"
            style={{
              left: article.imageLeft,
              top: article.imageTop,
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
              left: article.textLeft,
              top: article.textTop,
              width: '500px',
              lineHeight: '2.09'
            }}
          >
            <p className="font-gotham-medium mb-0 text-[24px]">
              {article.title}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
