import Header from '../shared/Header';
import Footer from '../shared/Footer';
import CopyrightStrip from '../shared/CopyrightStrip';
import Contact from '../components/Contact/Contact';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />
      <Contact />
      <Footer />
      <CopyrightStrip />
    </div>
  );
}

