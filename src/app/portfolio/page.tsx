import PortfolioSlider from '@/components/PortfolioSlider';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { portfolioItems } from '@/data/portfolio';

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-page pt-32 pb-20">
        <PortfolioSlider portfolioItems={portfolioItems} />
      </main>
      <Footer />
    </>
  );
}
