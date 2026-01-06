import CareersHero from './CareersHero';

export default function Careers() {
  // Why Join Us cards - positions relative to section (subtracted 673px from Figma values)
  const whyJoinUs = [
    {
      title: "Design your future.",
      description: "Whether you're a creative genius, a sales superstar, or a logistics expert, there's a place for you to shine here.",
      cardLeft: "309px",
      cardTop: "246px", // 919 - 673 = 246
      textLeft: "351px",
      textTop: "313px" // 986 - 673 = 313
    },
    {
      title: "Grow with us.",
      description: "We manage projects end to end and give every role the space to take ownership and grow.",
      cardLeft: "760px",
      cardTop: "246px",
      textLeft: "802px",
      textTop: "313px"
    },
    {
      title: "A Culture of Teamwork.",
      description: "Whether you're a creative genius, a sales superstar, or a logistics expert, there's a place for you to shine here.",
      cardLeft: "1208px",
      cardTop: "246px",
      textLeft: "1245px",
      textTop: "313px"
    }
  ];

  // Job listings - positions relative to section (subtracted 1304px from Figma values)
  const jobs = [
    {
      title: "Production Designer",
      description: "Whether you're a creative genius, a sales superstar, or a logistics expert, there's a place for you to shine here.",
      department: "Production",
      type: "Fulltime",
      cardLeft: "86px",
      cardTop: "131px", // 1435 - 1304 = 131
      textLeft: "128px",
      textTop: "189px", // 1493 - 1304 = 189
      buttonLeft: "116px",
      buttonTop: "433px" // 1737 - 1304 = 433
    },
    {
      title: "Production Designer",
      description: "Whether you're a creative genius, a sales superstar, or a logistics expert, there's a place for you to shine here.",
      department: "Production",
      type: "Fulltime",
      cardLeft: "537px",
      cardTop: "131px",
      textLeft: "575px",
      textTop: "189px",
      buttonLeft: "563px",
      buttonTop: "433px"
    },
    {
      title: "Production Designer",
      description: "Whether you're a creative genius, a sales superstar, or a logistics expert, there's a place for you to shine here.",
      department: "Production",
      type: "Fulltime",
      cardLeft: "985px",
      cardTop: "131px",
      textLeft: "1023px",
      textTop: "189px",
      buttonLeft: "1011px",
      buttonTop: "433px"
    },
    {
      title: "Production Designer",
      description: "Whether you're a creative genius, a sales superstar, or a logistics expert, there's a place for you to shine here.",
      department: "Production",
      type: "Fulltime",
      cardLeft: "1433px",
      cardTop: "131px",
      textLeft: "1471px",
      textTop: "189px",
      buttonLeft: "1459px",
      buttonTop: "433px"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <CareersHero />
      
      {/* Why Join Us Section */}
      <section className="relative bg-[#f8f5ed] h-[631px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto">
        {/* Rounded corner fill - Hero section color */}
        <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
        <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
        
        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden px-4 sm:px-6 md:px-8 py-8">
          {/* Heading */}
          <h2 
            className="font-griggs text-[#143060] text-center mb-8 text-[40px] sm:text-[50px] md:text-[60px] lg:text-[80px]"
            style={{ lineHeight: '1.264' }}
          >
            Why Join Us?
          </h2>
          
          {/* Cards */}
          <div className="space-y-6">
            {whyJoinUs.map((item, index) => (
              <div key={index} className="bg-[#dda152] rounded-[20px] p-6">
                <h3 className="font-griggs text-white text-[24px] sm:text-[28px] md:text-[30px] mb-3">
                  {item.title}
                </h3>
                <p className="font-gotham-book text-[#231f20] text-[14px] sm:text-[15px] leading-[1.264]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Medium Desktop Layout (lg: 1024px to 2xl) */}
        <div className="hidden lg:block 2xl:hidden relative min-h-[631px] py-8 px-4">
          {/* Heading */}
          <h2 
            className="font-griggs text-[#143060] text-center mb-12 text-[60px] md:text-[80px]"
            style={{ lineHeight: '1.264' }}
          >
            Why Join Us?
          </h2>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-3 gap-6 max-w-[1400px] mx-auto">
            {whyJoinUs.map((item, index) => (
              <div key={index} className="bg-[#dda152] rounded-[20px] p-6 h-[250px] flex flex-col justify-center">
                <h3 className="font-griggs text-white text-[28px] mb-3">
                  {item.title}
                </h3>
                <p className="font-gotham-book text-[#231f20] text-[14px] leading-[1.264]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Large Desktop Layout (2xl: 1536px+) */}
        <div className="hidden 2xl:block relative h-[631px]">
          {/* Heading */}
          <h2 
            className="absolute left-1/2 -translate-x-1/2 top-[77px] font-griggs text-[#143060] text-center text-[80px]"
            style={{ lineHeight: '1.264' }}
          >
            Why Join Us?
          </h2>
          
          {/* Cards */}
          {whyJoinUs.map((item, index) => (
            <div key={index}>
              {/* Card Background */}
              <div 
                className="absolute bg-[#dda152] rounded-[20px]"
                style={{
                  left: item.cardLeft,
                  top: item.cardTop,
                  width: '400px',
                  height: '250px'
                }}
              />
              
              {/* Text Content */}
              <div 
                className="absolute font-gotham-book text-[#231f20]"
                style={{
                  left: item.textLeft,
                  top: item.textTop,
                  width: '315px',
                  lineHeight: '1.264'
                }}
              >
                <h3 className="font-griggs text-white text-[30px] mb-0">
                  {item.title}
                </h3>
                <p className="mb-0 text-[15px]">&nbsp;</p>
                <p className="text-[15px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* Job Listings Section */}
      <section className="relative bg-[#d9d9d9] h-[633px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto">
        {/* Rounded corner fill - Why Join Us section color */}
        <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#f8f5ed] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
        <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#f8f5ed] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
        
        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden px-4 sm:px-6 md:px-8 py-8">
          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div key={index} className="bg-[#dda152] rounded-[20px] p-6">
                <h3 className="font-griggs text-white text-[24px] sm:text-[28px] md:text-[30px] mb-3">
                  {job.title}
                </h3>
                <p className="font-gotham-book text-[#231f20] text-[14px] sm:text-[15px] leading-[1.264] mb-4">
                  {job.description}
                </p>
                <p className="font-gotham-book text-[#231f20] text-[14px] sm:text-[15px] mb-4">
                  {job.department} &nbsp;&nbsp;&nbsp;&nbsp; {job.type}
                </p>
                <button className="bg-[#143060] text-[#dda152] rounded-[20px] px-8 py-3 font-griggs text-[20px] sm:text-[24px] md:text-[30px] w-full">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Medium Desktop Layout (lg: 1024px to 2xl) */}
        <div className="hidden lg:block 2xl:hidden relative min-h-[633px] py-8 px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1600px] mx-auto">
            {jobs.map((job, index) => (
              <div key={index} className="bg-[#dda152] rounded-[20px] p-6 flex flex-col">
                <h3 className="font-griggs text-white text-[24px] mb-3">
                  {job.title}
                </h3>
                <p className="font-gotham-book text-[#231f20] text-[14px] leading-[1.264] mb-4 flex-grow">
                  {job.description}
                </p>
                <p className="font-gotham-book text-[#231f20] text-[14px] mb-4">
                  {job.department} &nbsp;&nbsp;&nbsp;&nbsp; {job.type}
                </p>
                <button className="bg-[#143060] text-[#dda152] rounded-[20px] px-6 py-3 font-griggs text-[20px] w-full">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Large Desktop Layout (2xl: 1536px+) */}
        <div className="hidden 2xl:block relative h-[633px]">
          {jobs.map((job, index) => (
            <div key={index}>
              {/* Job Card Background */}
              <div 
                className="absolute bg-[#dda152] rounded-[20px]"
                style={{
                  left: job.cardLeft,
                  top: job.cardTop,
                  width: '400px',
                  height: '400px'
                }}
              />
              
              {/* Text Content */}
              <div 
                className="absolute font-gotham-book text-[#231f20]"
                style={{
                  left: job.textLeft,
                  top: job.textTop,
                  width: '316px',
                  lineHeight: '1.264'
                }}
              >
                <h3 className="font-griggs text-white text-[30px] mb-0">
                  {job.title}
                </h3>
                <p className="mb-0 text-[15px]">&nbsp;</p>
                <p className="mb-0 text-[15px]">
                  {job.description}
                </p>
                <p className="mb-0 text-[15px]">&nbsp;</p>
                <p className="mb-0 text-[15px]">&nbsp;</p>
                <p className="text-[15px]">
                  {job.department} &nbsp;&nbsp;&nbsp;&nbsp; {job.type}
                </p>
              </div>
              
              {/* Apply Now Button */}
              <div 
                className="absolute bg-[#143060] rounded-[20px]"
                style={{
                  left: job.buttonLeft,
                  top: job.buttonTop,
                  width: '348.558px',
                  height: '68.774px'
                }}
              >
                <button 
                  className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 font-griggs text-[#dda152] text-[30px]"
                  style={{ lineHeight: '1.264' }}
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

