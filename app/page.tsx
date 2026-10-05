import Header from './components/Header';
import Hero from './sections/Hero';
import Stores from './sections/Stores';
import Deals from './sections/Deals';
import About from './sections/About';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stores />
        <Deals />
        <About />
      </main>
      <Footer />
    </>
  );
}
