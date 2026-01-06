import ProjectsHero from './ProjectsHero';
import { imgCAM12, imgLuxuriousKitchenWithStainlessSteelAppliancesContemporaryMansion3DRendering1, imgCAM0041 } from '../../assets/images';

export default function Projects() {
  // Projects data - 3 columns x 3 rows
  // Top positions adjusted to be relative to section (subtracted 673px from original Figma values)
  const projects = [
    // Row 1
    {
      image: imgCAM12,
      name: "Mr Laxma Reddy",
      location: "Villa Project",
      imageLeft: "310.76px",
      imageTop: "84px", // 757 - 673 = 84
      textLeft: "327px",
      textTop: "360px" // 1033 - 673 = 360
    },
    {
      image: imgLuxuriousKitchenWithStainlessSteelAppliancesContemporaryMansion3DRendering1,
      name: "Dinesh Gosikonda",
      location: "Uppal",
      imageLeft: "758.15px",
      imageTop: "84px",
      textLeft: "781px",
      textTop: "360px"
    },
    {
      image: imgCAM0041,
      name: "Rajender Reddy M",
      location: "Kompally",
      imageLeft: "1205.55px",
      imageTop: "84px",
      textLeft: "1227px",
      textTop: "360px"
    },
    // Row 2
    {
      image: imgCAM12,
      name: "Mr Laxma Reddy",
      location: "Villa Project",
      imageLeft: "310.76px",
      imageTop: "490px", // 1163 - 673 = 490
      textLeft: "327px",
      textTop: "766px" // 1439 - 673 = 766
    },
    {
      image: imgLuxuriousKitchenWithStainlessSteelAppliancesContemporaryMansion3DRendering1,
      name: "Dinesh Gosikonda",
      location: "Uppal",
      imageLeft: "758.15px",
      imageTop: "490px",
      textLeft: "781px",
      textTop: "766px"
    },
    {
      image: imgCAM0041,
      name: "Rajender Reddy M",
      location: "Kompally",
      imageLeft: "1205.55px",
      imageTop: "490px",
      textLeft: "1227px",
      textTop: "766px"
    },
    // Row 3
    {
      image: imgCAM12,
      name: "Mr Laxma Reddy",
      location: "Villa Project",
      imageLeft: "310.76px",
      imageTop: "901px", // 1574 - 673 = 901
      textLeft: "327px",
      textTop: "1177px" // 1850 - 673 = 1177
    },
    {
      image: imgLuxuriousKitchenWithStainlessSteelAppliancesContemporaryMansion3DRendering1,
      name: "Dinesh Gosikonda",
      location: "Uppal",
      imageLeft: "758.15px",
      imageTop: "901px",
      textLeft: "781px",
      textTop: "1177px"
    },
    {
      image: imgCAM0041,
      name: "Rajender Reddy M",
      location: "Kompally",
      imageLeft: "1205.55px",
      imageTop: "901px",
      textLeft: "1227px",
      textTop: "1177px"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ProjectsHero />
      
      {/* Projects Grid Section */}
      <section className="relative bg-[#f8f5ed] h-[1484px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto">
        {/* Rounded corner fill - Hero section color */}
        <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
        <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
        
        {/* Mobile/Tablet Layout - Stacked */}
        <div className="block lg:hidden px-4 sm:px-6 md:px-8 py-8 space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="w-full">
              {/* Image */}
              <div className="w-full aspect-[8/5] rounded-[20px] overflow-hidden mb-4">
                <img 
                  src={project.image} 
                  alt={`${project.name} - ${project.location}`} 
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              
              {/* Text Content */}
              <div className="px-2">
                <p className="font-gotham-medium text-[#143060] mb-0 text-[20px] sm:text-[24px]">
                  {project.name}
                </p>
                <p className="font-gotham-book text-[#143060] text-[14px] sm:text-[15px]">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Medium Desktop Layout (lg: 1024px to 2xl) - Grid */}
        <div className="hidden lg:block 2xl:hidden relative min-h-[1484px] py-8 px-4">
          <div className="grid grid-cols-3 gap-6 max-w-[1400px] mx-auto">
            {projects.map((project, index) => (
              <div key={index} className="w-full">
                {/* Image */}
                <div className="w-full aspect-[8/5] rounded-[20px] overflow-hidden mb-4">
                  <img 
                    src={project.image} 
                    alt={`${project.name} - ${project.location}`} 
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
                
                {/* Text Content */}
                <div>
                  <p className="font-gotham-medium text-[#143060] mb-0 text-[20px]">
                    {project.name}
                  </p>
                  <p className="font-gotham-book text-[#143060] text-[14px]">
                    {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Large Desktop Layout (2xl: 1536px+) - Absolute positioning */}
        <div className="hidden 2xl:block relative h-[1484px]">
          {projects.map((project, index) => (
            <div key={index}>
              {/* Image */}
              <div 
                className="absolute rounded-[20px] overflow-hidden"
                style={{
                  left: project.imageLeft,
                  top: project.imageTop,
                  width: '400px',
                  height: '250px'
                }}
              >
                <img 
                  src={project.image} 
                  alt={`${project.name} - ${project.location}`} 
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
              
              {/* Text */}
              <div 
                className="absolute font-gotham-book text-[#143060]"
                style={{
                  left: project.textLeft,
                  top: project.textTop,
                  lineHeight: '2.09'
                }}
              >
                <p className="font-gotham-medium mb-0 text-[24px]">
                  {project.name}
                </p>
                <p className="text-[15px]">
                  {project.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

