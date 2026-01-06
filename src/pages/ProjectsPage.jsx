import Header from '../shared/Header';
import Footer from '../shared/Footer';
import CopyrightStrip from '../shared/CopyrightStrip';
import Projects from '../components/Projects/Projects';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden w-full">
      <Header />
      <Projects />
      <Footer />
      <CopyrightStrip />
    </div>
  );
}

