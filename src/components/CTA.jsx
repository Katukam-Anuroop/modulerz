export default function CTA() {
  return (
    <section className="relative bg-[#dda152] h-[486px] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto">
      {/* Rounded corner fill - RecentArticles section color */}
      <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#f8f5ed]" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
      <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#f8f5ed]" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
      {/* Heading - Centered */}
      <h2 
        className="absolute left-1/2 -translate-x-1/2 top-[120px] font-griggs text-blue-950 whitespace-nowrap text-center"
        style={{
          width: '1017px',
          height: '128px',
          fontSize: '80px',
          lineHeight: '104px'
        }}
      >
        Envision Your Ideal Home...
      </h2>
      
      {/* Button - Positioned absolutely */}
      <button 
        className="absolute left-1/2 -translate-x-1/2 bg-[#143060] text-[#dda152] px-12 py-4 rounded-[20px] font-griggs"
        style={{
          top: '280px',
          fontSize: '36px'
        }}
      >
        Let's find Out!
      </button>
    </section>
  );
}
