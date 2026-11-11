import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Capabilities from "@/components/Capabilities";
import SelectedWork from "@/components/SelectedWork";
import About from "@/components/About";
import Credentials from "@/components/Credentials";
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
        <Credentials />
        <Insights />
      </div>
      <Contact />
    </main>
  );
}
