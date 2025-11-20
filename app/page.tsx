import Header from "./components/Header";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Services from "./components/Services";
import ValueProposition from "./components/ValueProposition";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Hero3 from "./components/Hero3";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      {/* <Hero /> */}
      {/* <Hero2 /> */}
      <Hero3 />
      <Services />
      <ValueProposition />
      <Portfolio />
      <Process />
      <Testimonials />
      <ContactForm />
      <Footer />
    </main>
  );
}
