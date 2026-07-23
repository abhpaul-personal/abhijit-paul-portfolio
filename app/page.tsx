import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Insights from "@/components/Insights";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="max-w-[920px] mx-auto px-8">
        <Hero />
        <Capabilities />
        <SelectedWork />
        <About />
        <Insights />
      </div>
      <Contact />
    </main>
  );
}
