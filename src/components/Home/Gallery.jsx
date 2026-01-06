import { imgCAM12, imgLuxuriousKitchenWithStainlessSteelAppliancesContemporaryMansion3DRendering1, imgCAM0041 } from '../../assets/images';

export default function Gallery() {
  const projects = [
    {
      image: imgCAM12,
      title: "Mr Laxma Reddy",
      location: "Villa Project",
      imageLeft: "44px",
      imageTop: "303px",
      textLeft: "86px",
      textTop: "704px"
    },
    {
      image: imgLuxuriousKitchenWithStainlessSteelAppliancesContemporaryMansion3DRendering1,
      title: "Dinesh Gosikonda",
      location: "Uppal",
      imageLeft: "678.66px",
      imageTop: "303px",
      textLeft: "720px",
      textTop: "704px"
    },
    {
      image: imgCAM0041,
      title: "Rajender Reddy M",
      location: "Kompally",
      imageLeft: "1313.32px",
      imageTop: "303px",
      textLeft: "1347px",
      textTop: "704px"
    }
  ];

  return (
    <section className="relative bg-[#f8f5ed] h-[1017px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto">
      {/* Rounded corner fill - ModulerzDifference section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#143060]" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#143060]" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
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
          Discover Our Crafted Spaces.
        </p>
        <p 
          className="font-gotham-book"
          style={{
            color: '#896010',
            fontSize: '32px',
            lineHeight: '2.09'
          }}
        >
          Spaces Designed. Modulerz Engineered.
        </p>
      </div>
      
      {/* Projects */}
      {projects.map((project, index) => (
        <div key={index}>
          {/* Image */}
          <div 
            className="absolute rounded-lg overflow-hidden"
            style={{
              left: project.imageLeft,
              top: project.imageTop,
              width: '570.909px',
              height: '380.606px'
            }}
          >
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          
          {/* Text */}
          <div 
            className="absolute font-gotham-book text-[#143060]"
            style={{
              left: project.textLeft,
              top: project.textTop,
              width: '500px',
              lineHeight: '2.09'
            }}
          >
            <p className="font-gotham-medium mb-0 text-[24px]">
              {project.title}
            </p>
            <p className="text-[15px]">
              {project.location}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
