import { useState } from 'react';
import { imgRectangle58 } from '../../assets/images';

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobileNumber: '',
    city: '',
    size: '',
    type: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSizeChange = (value) => {
    setFormData(prev => ({
      ...prev,
      size: value
    }));
  };

  const handleTypeChange = (value) => {
    setFormData(prev => ({
      ...prev,
      type: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Form */}
      <section className="relative w-full max-w-[1920px] mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[1535px] mt-[100px]">
        {/* Gradient Background */}
        <div 
          className="absolute inset-0"
          style={{ 
            backgroundImage: "linear-gradient(-69.4192deg, rgb(221, 161, 82) 1.1839%, rgb(20, 48, 96) 97.461%)" 
          }}
        />
        
        {/* Content Container */}
        <div className="relative z-10 h-full w-full max-w-[1920px] mx-auto px-4 sm:px-8 lg:px-4 xl:px-0">
          {/* Main Heading */}
          <div 
            className="absolute left-4 sm:left-8 md:left-16 lg:left-4 xl:left-[360px] top-16 sm:top-24 md:top-32 lg:top-[193px]"
            style={{
              color: '#DDA152',
              fontSize: 'clamp(32px, 5vw, 80px)',
              fontFamily: 'Griggs',
              fontWeight: '400',
              lineHeight: '1.264'
            }}
          >
            Let's connect
          </div>
          
          {/* Description */}
          <p 
            className="absolute left-4 sm:left-8 md:left-16 lg:left-4 xl:left-[366px] top-32 sm:top-40 md:top-48 lg:top-[310px] font-gotham-book text-white text-[16px] sm:text-[20px] md:text-[24px] lg:text-[30px] leading-[1.264] w-[calc(100%-2rem)] sm:w-[600px] md:w-[650px] lg:w-[calc(100%-2rem)] xl:w-[715px]"
          >
            Have a project in mind? We'd love to discuss it.
          </p>
          
          {/* Contact Form */}
          {/* Mobile/Tablet Layout */}
          <div className="block lg:hidden absolute left-4 sm:left-8 md:left-16 top-[420px] sm:top-[460px] md:top-[520px] w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-4rem)]">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-white text-[16px] sm:text-[18px] md:text-[20px] mb-2 font-gotham-book">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full h-[60px] sm:h-[70px] md:h-[85px] border-2 border-white rounded-[10px] bg-transparent text-white px-4 text-[14px] sm:text-[16px] md:text-[20px] font-gotham-book placeholder:text-white placeholder:opacity-70 outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>
              
              {/* Email and Mobile Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label className="block text-white text-[16px] sm:text-[18px] md:text-[20px] mb-2 font-gotham-book">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full h-[60px] sm:h-[70px] md:h-[85px] border-2 border-white rounded-[10px] bg-transparent text-white px-4 text-[14px] sm:text-[16px] md:text-[20px] font-gotham-book placeholder:text-white placeholder:opacity-70 outline-none"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-[16px] sm:text-[18px] md:text-[20px] mb-2 font-gotham-book">
                    Mobile Number*
                  </label>
                  <input
                    type="tel"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="w-full h-[60px] sm:h-[70px] md:h-[85px] border-2 border-white rounded-[10px] bg-transparent text-white px-4 text-[14px] sm:text-[16px] md:text-[20px] font-gotham-book placeholder:text-white placeholder:opacity-70 outline-none"
                    placeholder="Enter your mobile number"
                    required
                  />
                </div>
              </div>
              
              {/* City */}
              <div>
                <label className="block text-white text-[16px] sm:text-[18px] md:text-[20px] mb-2 font-gotham-book">
                  City*
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full h-[60px] sm:h-[70px] md:h-[86px] border-2 border-white rounded-[10px] bg-transparent text-white px-4 text-[14px] sm:text-[16px] md:text-[20px] font-gotham-book placeholder:text-white placeholder:opacity-70 outline-none"
                  placeholder="Enter your city"
                  required
                />
              </div>
              
              {/* Tell us about your home */}
              <div>
                <h3 className="font-griggs text-white text-[28px] sm:text-[32px] md:text-[40px] mb-4 sm:mb-6" style={{ lineHeight: '1.264' }}>
                  Tell us about your home
                </h3>
                
                {/* Size and Type - Side by side on larger screens */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 items-start">
                  {/* Size Options - Left Side */}
                  <div className="flex-1 md:flex-none">
                    <p className="font-gotham-medium text-white text-[20px] sm:text-[24px] md:text-[30px] mb-3 sm:mb-4">Size:</p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                      {['2 BHK', '3 BHK', '4 BHK or more'].map((option) => (
                        <label
                          key={option}
                          className="flex items-center border-2 border-white rounded-[5px] px-3 sm:px-4 py-2 sm:py-3 cursor-pointer hover:bg-white hover:bg-opacity-10 transition-colors"
                        >
                          <input
                            type="radio"
                            name="size"
                            value={option}
                            checked={formData.size === option}
                            onChange={() => handleSizeChange(option)}
                            className="mr-2 w-4 h-4 sm:w-5 sm:h-5 accent-[#dda152]"
                          />
                          <span className="font-gotham-medium text-white text-[14px] sm:text-[16px] md:text-[20px]">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Vertical Divider - Only on medium screens and up */}
                  <div className="hidden md:block w-0 h-[80px] sm:h-[100px] border-l-2 border-white"></div>
                  
                  {/* Type Options - Right Side */}
                  <div className="flex-1 md:flex-none">
                    <p className="font-gotham-medium text-white text-[20px] sm:text-[24px] md:text-[30px] mb-3 sm:mb-4">Type:</p>
                    <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                      {['Independent/Villa', 'Apartment'].map((option) => (
                        <label
                          key={option}
                          className="flex items-center border-2 border-white rounded-[5px] px-3 sm:px-4 py-2 sm:py-3 cursor-pointer hover:bg-white hover:bg-opacity-10 transition-colors"
                        >
                          <input
                            type="radio"
                            name="type"
                            value={option}
                            checked={formData.type === option}
                            onChange={() => handleTypeChange(option)}
                            className="mr-2 w-4 h-4 sm:w-5 sm:h-5 accent-[#dda152]"
                          />
                          <span className="font-gotham-medium text-white text-[14px] sm:text-[16px] md:text-[20px]">
                            {option}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Message */}
              <div>
                <label className="block text-white text-[16px] sm:text-[18px] md:text-[20px] mb-2 font-gotham-book">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full h-[200px] sm:h-[220px] md:h-[256px] border-2 border-white rounded-[10px] bg-transparent text-white px-4 py-3 text-[14px] sm:text-[16px] md:text-[20px] font-gotham-book placeholder:text-white placeholder:opacity-70 outline-none resize-none"
                  placeholder="Enter your message"
                  required
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#143060] text-[#dda152] px-8 sm:px-12 py-3 sm:py-4 rounded-[20px] font-griggs text-[20px] sm:text-[24px] md:text-[36px] hover:opacity-90 transition-opacity mt-6 sm:mt-8"
              >
                Submit
              </button>
            </form>
          </div>
          
          {/* Desktop Layout - Absolute positioning */}
          <div className="hidden lg:block relative w-full h-full">
            <form onSubmit={handleSubmit} className="relative w-full h-full">
              {/* Full Name */}
              <div className="absolute left-4 xl:left-[389px] top-[400px] w-[calc(100%-2rem)] xl:w-[1143px]">
                <label className="block text-white text-[20px] mb-2 font-gotham-book">
                  Full Name*
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full h-[85px] border-2 border-white rounded-[10px] bg-transparent text-white px-4 text-[20px] font-gotham-book placeholder:text-white placeholder:opacity-70 outline-none"
                  placeholder=""
                  required
                />
              </div>
              
              {/* Email */}
              <div className="absolute left-4 xl:left-[389px] top-[528px] w-[calc(50%-2rem)] xl:w-[537px]">
                <label className="block text-white text-[20px] mb-2 font-gotham-book">
                  Email*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-[85px] border-2 border-white rounded-[10px] bg-transparent text-white px-4 text-[20px] font-gotham-book placeholder:text-white placeholder:opacity-70 outline-none"
                  placeholder=""
                  required
                />
              </div>
              
              {/* Mobile Number */}
              <div className="absolute left-[calc(50%+0.5rem)] xl:left-[978px] top-[528px] w-[calc(50%-2rem)] xl:w-[554px]">
                <label className="block text-white text-[20px] mb-2 font-gotham-book">
                  Mobile Number*
                </label>
                <input
                  type="tel"
                  name="mobileNumber"
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="w-full h-[85px] border-2 border-white rounded-[10px] bg-transparent text-white px-4 text-[20px] font-gotham-book placeholder:text-white placeholder:opacity-70 outline-none"
                  placeholder=""
                  required
                />
              </div>
              
              {/* City */}
              <div className="absolute left-4 xl:left-[389px] top-[647px] w-[calc(100%-2rem)] xl:w-[1143px]">
                <label className="block text-white text-[20px] mb-2 font-gotham-book">
                  City*
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full h-[86px] border-2 border-white rounded-[10px] bg-transparent text-white px-4 text-[20px] font-gotham-book placeholder:text-white placeholder:opacity-70 outline-none"
                  placeholder=""
                  required
                />
              </div>
              
              {/* Tell us about your home */}
              <div className="absolute left-4 xl:left-[392px] top-[807px]">
                <h3 className="font-griggs text-white text-[40px] mb-8" style={{ lineHeight: '1.264' }}>
                  Tell us about your home
                </h3>
                
                {/* Size and Type - Side by side */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  {/* Size Options - Left Side */}
                  <div>
                    <p className="font-gotham-medium text-white text-[30px] mb-4">Size:</p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: '2 BHK', width: '145.045px' },
                        { value: '3 BHK', width: '145.045px' },
                        { value: '4 BHK or more', width: '238.897px' }
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center border-2 border-white rounded-[5px] px-4 py-3 cursor-pointer hover:bg-white hover:bg-opacity-10 transition-colors h-[68.256px]"
                          style={{ width: option.width }}
                        >
                          <input
                            type="radio"
                            name="size"
                            value={option.value}
                            checked={formData.size === option.value}
                            onChange={() => handleSizeChange(option.value)}
                            className="mr-2 w-5 h-5 accent-[#dda152]"
                          />
                          <span className="font-gotham-medium text-white text-[20px]">
                            {option.value}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  {/* Vertical Divider - Only on desktop */}
                  <div className="hidden lg:block w-0 h-[106px] border-l-2 border-white"></div>
                  
                  {/* Type Options - Right Side */}
                  <div>
                    <p className="font-gotham-medium text-white text-[30px] mb-4">Type:</p>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: 'Independent/Villa', width: '281.557px' },
                        { value: 'Apartment', width: '196.237px' }
                      ].map((option) => (
                        <label
                          key={option.value}
                          className="flex items-center border-2 border-white rounded-[5px] px-4 py-3 cursor-pointer hover:bg-white hover:bg-opacity-10 transition-colors h-[68.256px]"
                          style={{ width: option.width }}
                        >
                          <input
                            type="radio"
                            name="type"
                            value={option.value}
                            checked={formData.type === option.value}
                            onChange={() => handleTypeChange(option.value)}
                            className="mr-2 w-5 h-5 accent-[#dda152]"
                          />
                          <span className="font-gotham-medium text-white text-[20px]">
                            {option.value}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Message */}
              <div className="absolute left-4 xl:left-[389px] top-[1085px] w-[calc(100%-2rem)] xl:w-[1143px]">
                <label className="block text-white text-[20px] mb-2 font-gotham-book">
                  Message*
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={8}
                  className="w-full h-[256px] border-2 border-white rounded-[10px] bg-transparent text-white px-4 py-3 text-[20px] font-gotham-book placeholder:text-white placeholder:opacity-70 outline-none resize-none"
                  placeholder=""
                  required
                />
              </div>
              
              {/* Submit Button */}
              <button
                type="submit"
                className="absolute left-4 xl:left-[389px] top-[1420px] bg-[#143060] text-[#dda152] px-12 py-4 rounded-[20px] font-griggs text-[36px] hover:opacity-90 transition-opacity"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Map/Image Section */}
      <section className="relative w-full max-w-[1920px] mx-auto h-[400px] sm:h-[500px] md:h-[600px] lg:h-[850px] rounded-tl-[30px] rounded-tr-[30px] overflow-hidden">
        {/* Rounded corner fill - Hero section color */}
        <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
        <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
        
        <img 
          src={imgRectangle58} 
          alt="Location Map" 
          className="w-full h-full object-cover rounded-tl-[30px] rounded-tr-[30px]"
        />
      </section>
    </div>
  );
}
