import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ValueProposition from "./components/ValueProposition";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <Hero />
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
