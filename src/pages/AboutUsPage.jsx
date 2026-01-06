import Header from '../shared/Header';
import Footer from '../shared/Footer';
import CopyrightStrip from '../shared/CopyrightStrip';
import AboutUs from '../components/AboutUs/AboutUs';

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />
      <AboutUs />
      <Footer />
      <CopyrightStrip />
    </div>
  );
}

