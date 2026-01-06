import Header from '../shared/Header';
import Footer from '../shared/Footer';
import CopyrightStrip from '../shared/CopyrightStrip';
import Solutions from '../components/Solutions/Solutions';

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />
      <Solutions />
      <Footer />
      <CopyrightStrip />
    </div>
  );
}

