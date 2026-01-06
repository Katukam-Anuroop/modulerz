import AboutUsHero from './AboutUsHero';

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      <AboutUsHero />
      
      {/* Main Content Section */}
      <section className="relative bg-[#f8f5ed] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto py-8 sm:py-12 md:py-16 lg:py-0">
        {/* Rounded corner fill - Hero section color */}
        <div className="absolute -top-[30px] left-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 30px 0', zIndex: -1 }} />
        <div className="absolute -top-[30px] right-0 w-[60px] h-[60px] bg-[#143060] hidden lg:block" style={{ borderRadius: '0 0 0 30px', zIndex: -1 }} />
        
        {/* Mobile/Tablet Layout - Stacked */}
        <div className="block lg:hidden px-4 sm:px-6 md:px-8 space-y-12 sm:space-y-16">
          {/* Mission Section */}
          <div className="pt-8 sm:pt-12">
            <h2 className="font-griggs text-[#dda152] text-[32px] sm:text-[36px] md:text-[40px] leading-[1.264] mb-6">
              Our Mission
            </h2>
            <div className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] space-y-4">
              <p>
                Modulerz designs and builds high-precision modular interiors for modern living.
                <br />
                We focus on kitchens, wardrobes, and storage systems that are engineered to perform and designed to last.
              </p>
              <p>Every module we create is driven by one principle: accuracy. From millimeter-perfect measurements to clean joins and flawless finishes, nothing is left to chance. We use advanced CNC technology, premium materials, and disciplined processes to ensure consistency at every stage.</p>
              <p>Design at Modulerz is purposeful. We don't chase trends blindly. We translate lifestyle needs into functional layouts, intelligent storage, and timeless aesthetics that age well.</p>
              <p>Execution is where we stand apart. Timelines are respected. Details are controlled. What's promised is delivered, exactly as planned.</p>
              <p>
                Modulerz is built for clients who value clarity, quality, and control.
                <br />
                Spaces that look refined. Systems that work effortlessly.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div>
            <h2 className="font-griggs text-[#dda152] text-[32px] sm:text-[36px] md:text-[40px] leading-[1.264] mb-6">
              Our Vision
            </h2>
            <div className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] space-y-4">
              <p>
                Modulerz designs and builds high-precision modular interiors for modern living.
                <br />
                We focus on kitchens, wardrobes, and storage systems that are engineered to perform and designed to last.
              </p>
              <p>Every module we create is driven by one principle: accuracy. From millimeter-perfect measurements to clean joins and flawless finishes, nothing is left to chance. We use advanced CNC technology, premium materials, and disciplined processes to ensure consistency at every stage.</p>
              <p>Design at Modulerz is purposeful. We don't chase trends blindly. We translate lifestyle needs into functional layouts, intelligent storage, and timeless aesthetics that age well.</p>
              <p>Execution is where we stand apart. Timelines are respected. Details are controlled. What's promised is delivered, exactly as planned.</p>
              <p>
                Modulerz is built for clients who value clarity, quality, and control.
                <br />
                Spaces that look refined. Systems that work effortlessly.
              </p>
            </div>
          </div>
        </div>

        {/* Medium Desktop Layout (lg: 1024px to 2xl) - Centered */}
        <div className="hidden lg:block 2xl:hidden relative py-8 px-4">
          <div className="relative w-full max-w-[900px] mx-auto space-y-16">
            {/* Mission Section */}
            <div>
              <h2 className="font-griggs text-[#dda152] text-[36px] leading-[1.264] mb-6">
                Our Mission
              </h2>
              <div className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] space-y-4">
                <p>
                  Modulerz designs and builds high-precision modular interiors for modern living.
                  <br />
                  We focus on kitchens, wardrobes, and storage systems that are engineered to perform and designed to last.
                </p>
                <p>Every module we create is driven by one principle: accuracy. From millimeter-perfect measurements to clean joins and flawless finishes, nothing is left to chance. We use advanced CNC technology, premium materials, and disciplined processes to ensure consistency at every stage.</p>
                <p>Design at Modulerz is purposeful. We don't chase trends blindly. We translate lifestyle needs into functional layouts, intelligent storage, and timeless aesthetics that age well.</p>
                <p>Execution is where we stand apart. Timelines are respected. Details are controlled. What's promised is delivered, exactly as planned.</p>
                <p>
                  Modulerz is built for clients who value clarity, quality, and control.
                  <br />
                  Spaces that look refined. Systems that work effortlessly.
                </p>
              </div>
            </div>

            {/* Vision Section */}
            <div>
              <h2 className="font-griggs text-[#dda152] text-[36px] leading-[1.264] mb-6">
                Our Vision
              </h2>
              <div className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] space-y-4">
                <p>
                  Modulerz designs and builds high-precision modular interiors for modern living.
                  <br />
                  We focus on kitchens, wardrobes, and storage systems that are engineered to perform and designed to last.
                </p>
                <p>Every module we create is driven by one principle: accuracy. From millimeter-perfect measurements to clean joins and flawless finishes, nothing is left to chance. We use advanced CNC technology, premium materials, and disciplined processes to ensure consistency at every stage.</p>
                <p>Design at Modulerz is purposeful. We don't chase trends blindly. We translate lifestyle needs into functional layouts, intelligent storage, and timeless aesthetics that age well.</p>
                <p>Execution is where we stand apart. Timelines are respected. Details are controlled. What's promised is delivered, exactly as planned.</p>
                <p>
                  Modulerz is built for clients who value clarity, quality, and control.
                  <br />
                  Spaces that look refined. Systems that work effortlessly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Desktop Layout (2xl: 1536px+) - Absolute Positioning */}
        <div className="hidden 2xl:block relative h-[810px]">
          {/* Mission Section */}
          <div className="absolute left-[364px] top-[88px]">
            <h2 className="font-griggs text-[#dda152] text-[40px] leading-[1.264] mb-6">
              Our Mission
            </h2>
            <div className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[1190px] space-y-4">
              <p>
                Modulerz designs and builds high-precision modular interiors for modern living.
                <br />
                We focus on kitchens, wardrobes, and storage systems that are engineered to perform and designed to last.
              </p>
              <p>Every module we create is driven by one principle: accuracy. From millimeter-perfect measurements to clean joins and flawless finishes, nothing is left to chance. We use advanced CNC technology, premium materials, and disciplined processes to ensure consistency at every stage.</p>
              <p>Design at Modulerz is purposeful. We don't chase trends blindly. We translate lifestyle needs into functional layouts, intelligent storage, and timeless aesthetics that age well.</p>
              <p>Execution is where we stand apart. Timelines are respected. Details are controlled. What's promised is delivered, exactly as planned.</p>
              <p>
                Modulerz is built for clients who value clarity, quality, and control.
                <br />
                Spaces that look refined. Systems that work effortlessly.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="absolute left-[364px] top-[406px]">
            <h2 className="font-griggs text-[#dda152] text-[40px] leading-[1.264] mb-6">
              Our Vision
            </h2>
            <div className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[1190px] space-y-4">
              <p>
                Modulerz designs and builds high-precision modular interiors for modern living.
                <br />
                We focus on kitchens, wardrobes, and storage systems that are engineered to perform and designed to last.
              </p>
              <p>Every module we create is driven by one principle: accuracy. From millimeter-perfect measurements to clean joins and flawless finishes, nothing is left to chance. We use advanced CNC technology, premium materials, and disciplined processes to ensure consistency at every stage.</p>
              <p>Design at Modulerz is purposeful. We don't chase trends blindly. We translate lifestyle needs into functional layouts, intelligent storage, and timeless aesthetics that age well.</p>
              <p>Execution is where we stand apart. Timelines are respected. Details are controlled. What's promised is delivered, exactly as planned.</p>
              <p>
                Modulerz is built for clients who value clarity, quality, and control.
                <br />
                Spaces that look refined. Systems that work effortlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative bg-[#dda152] rounded-tl-[30px] rounded-tr-[30px] w-full max-w-[1920px] mx-auto py-8 sm:py-12 md:py-16 lg:py-0">
        {/* Mobile/Tablet Layout */}
        <div className="block lg:hidden px-4 sm:px-6 md:px-8 py-12 sm:py-16">
          <h2 className="font-griggs text-white text-[36px] sm:text-[48px] md:text-[60px] leading-[1.264] mb-8 text-center">
            Built by Four Minds.<br />Driven by One Vision.
          </h2>
          <div className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] space-y-4">
            <p>Modulerz is shaped by four individuals, each bringing a distinct strength to the table.</p>
            <p>
              <span className="font-gotham-medium">Dinesh Goshikonda</span>
              {' brings a technology-first mindset. His focus is on systems, precision, and leveraging smart tools to make interiors work better, not just look better.'}
            </p>
            <p>
              <span className="font-gotham-bold">Surender Marripelli</span>
              {', the Principal Designer, leads with design intelligence. He understands how form, function, and flow must come together to create spaces that feel effortless and liveable.'}
            </p>
            <p>
              <span className="font-gotham-bold">Satyanarayana Marripelli </span>
              {' anchors execution and operational discipline, ensuring that what\'s designed is delivered with accuracy and consistency.'}
            </p>
            <p>
              <span className="font-gotham-bold">Jalander Marripelli</span>
              {' strengthens the foundation with hands-on expertise and an uncompromising approach to quality on ground.'}
            </p>
            <p>
              Together, they built Modulerz to solve a simple problem with absolute clarity.
              <br />
              {' Indian homes deserve smarter planning, precise execution, and interiors that work as hard as the people who live in them.'}
            </p>
          </div>
        </div>

        {/* Medium Desktop Layout (lg: 1024px to 2xl) - Centered */}
        <div className="hidden lg:block 2xl:hidden relative py-12 px-4">
          <div className="relative w-full max-w-[900px] mx-auto">
            <h2 className="font-griggs text-white text-[48px] leading-[1.264] mb-8 text-center">
              Built by Four Minds.<br />Driven by One Vision.
            </h2>
            <div className="font-gotham-book text-[#143060] text-[15px] leading-[1.264] space-y-4">
              <p>Modulerz is shaped by four individuals, each bringing a distinct strength to the table.</p>
              <p>
                <span className="font-gotham-medium">Dinesh Goshikonda</span>
                {' brings a technology-first mindset. His focus is on systems, precision, and leveraging smart tools to make interiors work better, not just look better.'}
              </p>
              <p>
                <span className="font-gotham-bold">Surender Marripelli</span>
                {', the Principal Designer, leads with design intelligence. He understands how form, function, and flow must come together to create spaces that feel effortless and liveable.'}
              </p>
              <p>
                <span className="font-gotham-bold">Satyanarayana Marripelli </span>
                {' anchors execution and operational discipline, ensuring that what\'s designed is delivered with accuracy and consistency.'}
              </p>
              <p>
                <span className="font-gotham-bold">Jalander Marripelli</span>
                {' strengthens the foundation with hands-on expertise and an uncompromising approach to quality on ground.'}
              </p>
              <p>
                Together, they built Modulerz to solve a simple problem with absolute clarity.
                <br />
                {' Indian homes deserve smarter planning, precise execution, and interiors that work as hard as the people who live in them.'}
              </p>
            </div>
          </div>
        </div>

        {/* Large Desktop Layout (2xl: 1536px+) - Absolute Positioning */}
        <div className="hidden 2xl:block relative h-[800px]">
          <h2 className="absolute left-[789px] top-[142px] font-griggs text-white text-[60px] leading-[1.264] w-[609px]">
            Built by Four Minds. Driven by One Vision.
          </h2>
          <div className="absolute left-[789px] top-[309px] font-gotham-book text-[#143060] text-[15px] leading-[1.264] w-[765px] space-y-4">
            <p>Modulerz is shaped by four individuals, each bringing a distinct strength to the table.</p>
            <p>
              <span className="font-gotham-medium">Dinesh Goshikonda</span>
              {' brings a technology-first mindset. His focus is on systems, precision, and leveraging smart tools to make interiors work better, not just look better.'}
            </p>
            <p>
              <span className="font-gotham-bold">Surender Marripelli</span>
              {', the Principal Designer, leads with design intelligence. He understands how form, function, and flow must come together to create spaces that feel effortless and liveable.'}
            </p>
            <p>
              <span className="font-gotham-bold">Satyanarayana Marripelli </span>
              {' anchors execution and operational discipline, ensuring that what\'s designed is delivered with accuracy and consistency.'}
            </p>
            <p>
              <span className="font-gotham-bold">Jalander Marripelli</span>
              {' strengthens the foundation with hands-on expertise and an uncompromising approach to quality on ground.'}
            </p>
            <p>
              Together, they built Modulerz to solve a simple problem with absolute clarity.
              <br />
              {' Indian homes deserve smarter planning, precise execution, and interiors that work as hard as the people who live in them.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

