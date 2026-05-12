import Hero from '@/components/Hero';
import About from '@/components/About';
import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { getFeaturedPortfolioItems } from '@/data/portfolio';

export default function Home() {
  const featuredPortfolioItems = getFeaturedPortfolioItems();

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio title="Fremhevede prosjekter" portfolioItems={featuredPortfolioItems} />
      <Footer />
    </>
  );
}
