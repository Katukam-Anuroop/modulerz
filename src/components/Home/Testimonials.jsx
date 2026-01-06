import { imgEllipse1, imgStar1, imgVector14 } from '../../assets/svgs';
import { imgEllipse2 } from '../../assets/images';

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sriha Srigadde",
      role: "Communication Designer",
      text: "Modulerz Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      cardLeft: "313px"
    },
    {
      name: "Sriha Srigadde",
      role: "Communication Designer",
      text: "Modulerz Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      cardLeft: "767px"
    },
    {
      name: "Sriha Srigadde",
      role: "Communication Designer",
      text: "Modulerz Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      cardLeft: "1210px"
    }
  ];

  return (
    <section className="relative bg-[#dda152] h-[950px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto">
      {/* Rounded corner fill - Gallery section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#f8f5ed]" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#f8f5ed]" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
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
      {testimonials.map((testimonial, index) => (
        <div 
          key={index} 
          className="absolute"
          style={{
            left: testimonial.cardLeft,
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
      ))}
    </section>
  );
}
