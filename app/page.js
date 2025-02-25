import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import Goals from '@/components/ui/Goals';
import Stats from '@/components/ui/Stats';
import Services from '@/components/ui/Services';
// import ServicesData from '@/components/ui/ServicesData';
import Features from '@/components/ui/Features';
import Portfolio from '@/components/ui/Portfolio';
import Team from '@/components/ui/Team';
import CallToAction from '@/components/ui/CallAction';
import OurPartners from '@/components/ui/OurPartners';
import Contact from '@/components/ui/Contact';
import Blogs from '@/components/ui/Blogs';
import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Goals />
      <Stats />
      <Services />
      {/* <ServicesData/> */}
      <Features />
      <Portfolio />
      <Team />
      <CallToAction />
      <Contact />
      <OurPartners />
      <Blogs />
      <Footer />
    </main>
  );
}
