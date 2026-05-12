import Portfolio from '@/components/Portfolio';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { portfolioItems } from '@/data/portfolio';

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-page pt-32 pb-20">
        <Portfolio portfolioItems={portfolioItems} showAll={true} noPadding={true} title="Ting jeg har vært med å bygge" />
      </main>
      <Footer />
    </>
  );
}
