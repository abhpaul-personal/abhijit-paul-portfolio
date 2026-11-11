export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 bg-bg/85 backdrop-blur-sm border-b border-line">
      <div className="max-w-[920px] mx-auto px-4 sm:px-8 py-[18px] flex justify-between items-center">
        <div className="font-display text-sm font-medium text-ink">Abhijit Paul</div>
        <div className="flex gap-3 sm:gap-7 text-xs sm:text-sm text-inkSoft">
          <a href="#work" className="hover:text-accent">Work</a>
          <a href="#about" className="hover:text-accent">About</a>
          <a href="#insights" className="hover:text-accent">Insights</a>
          <a href="#contact" className="hover:text-accent">Contact</a>
          <a href="/Abhijit_Paul_CV.pdf" download className="hover:text-accent">Download CV</a>
        </div>
      </div>
    </nav>
  );
}
