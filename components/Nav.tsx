export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 bg-bg/85 backdrop-blur-sm border-b border-border">
      <div className="max-w-[920px] mx-auto px-4 sm:px-8 py-[18px] flex justify-between items-center">
        <div className="font-display text-sm font-medium">Abhijit Paul</div>
        <div className="flex gap-3 sm:gap-7 text-xs sm:text-sm text-textSecondary">
          <a href="#work" className="hover:text-signal">Work</a>
          <a href="#about" className="hover:text-signal">About</a>
          <a href="#insights" className="hover:text-signal">Insights</a>
          <a href="#contact" className="hover:text-signal">Contact</a>
          <a href="/Abhijit_Paul_CV.pdf" download className="hover:text-signal">Download CV</a>
        </div>
      </div>
    </nav>
  );
}
