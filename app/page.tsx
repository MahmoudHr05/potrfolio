import Hero from '@/components/hero';
import About from '@/components/about';
import Experience from '@/components/experience';
import Skills from '@/components/skills';
import Testimonials from '@/components/testimonials';
import Contact from '@/components/contact';
import CTA from '@/components/cta';

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Testimonials />
      <CTA />
      <Contact />
    </div>
  );
}