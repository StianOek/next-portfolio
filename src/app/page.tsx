import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getFeaturedProjects } from '@/data/projects';

export default function Home() {
  const featuredProjects = getFeaturedProjects();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects projects={featuredProjects} />
      <Footer />
    </>
  );
}
