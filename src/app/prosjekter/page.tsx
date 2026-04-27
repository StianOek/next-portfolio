import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { projects } from '@/data/projects';

export default function ProsjekterPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-page pt-32 pb-20">
        <Projects projects={projects} showAll={true} noPadding={true} />
      </main>
      <Footer />
    </>
  );
}