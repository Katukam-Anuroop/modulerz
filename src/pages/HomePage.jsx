import Header from '../shared/Header';
import Hero from '../components/Home/Hero';
import WhatWeDo from '../components/Home/WhatWeDo';
import WhyChoose from '../components/Home/WhyChoose';
import ModulerzDifference from '../components/Home/ModulerzDifference';
import Gallery from '../components/Home/Gallery';
import Testimonials from '../components/Home/Testimonials';
import RecentArticles from '../components/Home/RecentArticles';
import CTA from '../components/Home/CTA';
import Footer from '../shared/Footer';
import CopyrightStrip from '../shared/CopyrightStrip';

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-hidden w-full">
      <Header />
      <Hero />
      <WhatWeDo />
      <WhyChoose />
      <ModulerzDifference />
      <Gallery />
      <Testimonials />
      <RecentArticles />
      <CTA />
      <Footer />
      <CopyrightStrip />
    </div>
  );
}

