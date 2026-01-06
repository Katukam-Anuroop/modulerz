import Header from '../shared/Header';
import Footer from '../shared/Footer';
import CopyrightStrip from '../shared/CopyrightStrip';
import Blog from '../components/Blog/Blog';

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />
      <Blog />
      <Footer />
      <CopyrightStrip />
    </div>
  );
}

