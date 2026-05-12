import Hero from '@/components/Hero';
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
      <Portfolio title="Fremhevede prosjekter" portfolioItems={featuredPortfolioItems} />
      <Footer />
    </>
  );
}
