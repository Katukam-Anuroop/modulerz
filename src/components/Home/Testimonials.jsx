import { imgEllipse1, imgStar1, imgVector14 } from '../../assets/svgs';
import { imgEllipse2 } from '../../assets/images';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sriha Srigadde",
      role: "Communication Designer",
      text: "Modulerz Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      name: "Sriha Srigadde",
      role: "Communication Designer",
      text: "Modulerz Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    },
    {
      name: "Sriha Srigadde",
      role: "Communication Designer",
      text: "Modulerz Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
    }
  ];

  return (
    <section className="relative bg-[#dda152] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto py-8 sm:py-12 md:py-16 lg:py-0">
      {/* Rounded corner fill - Gallery section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#f8f5ed] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#f8f5ed] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
      
      {/* Mobile/Tablet Layout */}
      <div className="block lg:hidden px-4 sm:px-6 md:px-8 py-8 space-y-8 sm:space-y-12">
        {/* Heading */}
        <div className="text-center">
          <p 
            className="font-griggs text-[#143060]"
            style={{
              fontSize: 'clamp(40px, 8vw, 80px)',
              lineHeight: '1.3'
            }}
          >
            Voices from Our Clients
          </p>
        </div>
        
        {/* Testimonial Cards */}
        <div className="space-y-6 sm:space-y-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#d9d9d9] rounded-[20px] p-6 sm:p-8"
            >
              {/* Stars */}
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9">
                    <img src={imgStar1} alt="star" className="w-full h-full" />
                  </div>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <div className="font-gotham-book text-black text-[14px] sm:text-[15px] leading-[1.264] mb-6">
                <p className="mb-0">{testimonial.text}</p>
              </div>
              
              {/* Divider */}
              <div className="w-full h-[1px] mb-6">
                <img src={imgVector14} alt="divider" className="w-full h-full" />
              </div>
              
              {/* Avatar and Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-[119px] md:h-[119px] flex-shrink-0">
                  <img src={imgEllipse1} alt="" className="absolute inset-0 w-full h-full" />
                  <div className="absolute inset-[2px]">
                    <img src={imgEllipse2} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                  </div>
                </div>
                <div className="font-gotham-medium text-[#143060]">
                  <p className="mb-0 text-[14px] sm:text-[15px]">{testimonial.name}</p>
                  <p className="font-gotham-book text-[11px] sm:text-[12px]">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medium Desktop Layout (lg: 1024px to 2xl) */}
      <div className="hidden lg:block 2xl:hidden relative min-h-[950px] py-8 px-4">
        <div className="relative w-full max-w-[1400px] mx-auto">
          {/* Heading */}
          <div className="text-center mb-12">
            <p 
              className="font-griggs text-[#143060] text-[60px]"
              style={{ lineHeight: '1.3' }}
            >
              Voices from Our Clients
            </p>
          </div>
          
          {/* Testimonial Cards Grid */}
          <div className="grid grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-[#d9d9d9] rounded-[20px] p-6 h-[500px] flex flex-col"
              >
                {/* Stars */}
                <div className="flex gap-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-7 h-7">
                      <img src={imgStar1} alt="star" className="w-full h-full" />
                    </div>
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <div className="font-gotham-book text-black text-[14px] leading-[1.264] mb-6 flex-grow">
                  <p className="mb-0">{testimonial.text}</p>
                </div>
                
                {/* Divider */}
                <div className="w-full h-[1px] mb-6">
                  <img src={imgVector14} alt="divider" className="w-full h-full" />
                </div>
                
                {/* Avatar and Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0">
                    <img src={imgEllipse1} alt="" className="absolute inset-0 w-full h-full" />
                    <div className="absolute inset-[2px]">
                      <img src={imgEllipse2} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
                    </div>
                  </div>
                  <div className="font-gotham-medium text-[#143060]">
                    <p className="mb-0 text-[14px]">{testimonial.name}</p>
                    <p className="font-gotham-book text-[11px]">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Large Desktop Layout (2xl: 1536px+) - Absolute positioning */}
      <div className="hidden 2xl:block relative h-[950px]">
        {/* Heading - Centered */}
        <p 
          className="absolute left-1/2 -translate-x-1/2 top-[64px] font-griggs text-center w-[1149px]"
          style={{
            color: '#143060',
            fontSize: '80px',
            lineHeight: '1.3'
          }}
        >
          Voices from Our Clients
        </p>
        
        {/* Testimonial Cards */}
        {testimonials.map((testimonial, index) => {
          const cardLefts = ["313px", "767px", "1210px"];
          return (
            <div 
              key={index} 
              className="absolute"
              style={{
                left: cardLefts[index],
                top: '225px',
                width: '400px',
                height: '498px'
              }}
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-[#d9d9d9] rounded-[20px]" />
              
              {/* Stars */}
              <div className="absolute left-[27px] top-[44px] flex gap-[7px]">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-9 h-9">
                    <img src={imgStar1} alt="star" className="w-full h-full" />
                  </div>
                ))}
              </div>
              
              {/* Testimonial Text */}
              <div 
                className="absolute left-[27px] top-[110px] font-gotham-book text-black"
                style={{
                  width: '347px',
                  fontSize: '15px',
                  lineHeight: '1.264'
                }}
              >
                <p className="mb-0">{testimonial.text}</p>
                <p>&nbsp;</p>
              </div>
              
              {/* Divider */}
              <div className="absolute left-[30px] top-[297px] w-[323px] h-[1px]">
                <img src={imgVector14} alt="divider" className="w-full h-full" />
              </div>
              
              {/* Avatar Background */}
              <div className="absolute left-[27px] top-[340px] w-[119px] h-[119px]">
                <img src={imgEllipse1} alt="" className="w-full h-full" />
              </div>
              
              {/* Avatar Image */}
              <div className="absolute left-[31px] top-[344px] w-[111px] h-[111px]">
                <img src={imgEllipse2} alt={testimonial.name} className="w-full h-full object-cover rounded-full" />
              </div>
              
              {/* Name and Role */}
              <div 
                className="absolute left-[168px] top-[377px] font-gotham-medium text-[#143060]"
                style={{
                  width: '185px',
                  lineHeight: '1.264'
                }}
              >
                <p className="mb-0 text-[15px]">{testimonial.name}</p>
                <p className="font-gotham-book text-[11px]">{testimonial.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
