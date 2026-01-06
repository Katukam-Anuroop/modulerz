import Header from '../shared/Header';
import Footer from '../shared/Footer';
import CopyrightStrip from '../shared/CopyrightStrip';
import Careers from '../components/Careers/Careers';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />
      <Careers />
      <Footer />
      <CopyrightStrip />
    </div>
  );
}

