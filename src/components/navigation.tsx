import ScrollReveal from "@/components/scrollReveal";
import { ArrowDownToLineIcon, MenuIcon, XIcon } from "@/components/icons";

interface NavigationProps {
  activeSection: string;
  showNavbar: boolean;
  isAtTop: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  scrollToSection: (sectionId: string) => void;
  scrollToTop: () => void;
  resumeHref: string;
}

export default function Navigation({
  activeSection,
  showNavbar,
  isAtTop,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  scrollToSection,
  scrollToTop,
  resumeHref,
}: NavigationProps) {
  const navChromeMobile = isAtTop
    ? "border-0 bg-transparent opacity-90 shadow-none backdrop-blur-none backdrop-saturate-100 scale-[1.01]"
    : "border border-home-purple/25 bg-white/85 opacity-100 shadow-[0_10px_30px_rgba(50,68,164,0.12)] backdrop-blur-xl backdrop-saturate-150 scale-100";
  const navChromeDesktop = isAtTop
    ? "border-0 bg-transparent opacity-90 shadow-none backdrop-blur-none backdrop-saturate-100 scale-[1.01]"
    : "border border-home-purple/25 bg-white/85 opacity-100 shadow-[0_12px_30px_rgba(50,68,164,0.12)] backdrop-blur-xl backdrop-saturate-150 scale-100";
  const navBgMobile = isAtTop
    ? "inset-0 rounded-none"
    : "top-4 right-2 left-2 bottom-4 rounded-full";
  const navBgDesktop = isAtTop
    ? "inset-0 rounded-none"
    : "top-6 right-6 left-6 bottom-6 rounded-full xl:right-12 xl:left-12";
  const navContentInsetMobile = "px-2 py-4";
  const navContentInsetDesktop = "px-6 py-6 xl:px-12";

  return (
    <>
      {/* Mobile Header */}
      <div
        className={`pointer-events-none fixed top-0 right-0 left-0 z-50 transition-transform duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden ${showNavbar ? "translate-y-0" : "-translate-y-28"}`}
      >
        <div className="relative">
          <div
            className={`pointer-events-none absolute transition-[top,right,bottom,left,border-radius,background-color,box-shadow,backdrop-filter,opacity,transform] duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[top,right,bottom,left,border-radius,background-color,box-shadow,backdrop-filter,opacity,transform] ${navBgMobile} ${navChromeMobile}`}
          />
          <div className={`relative ${navContentInsetMobile}`}>
            <div className="pointer-events-auto flex w-full items-center justify-between p-2">
              <span
                onClick={scrollToTop}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-home-purple/30 bg-home-purple/10 p-1 text-sm font-semibold text-home-dark-purple uppercase transition-all duration-300 hover:cursor-pointer hover:bg-home-purple/20 hover:shadow-lg lg:h-10 lg:w-10 lg:p-2 lg:text-lg"
              >
                <p>av</p>
              </span>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="rounded-full p-2 text-home-dark-purple/80 transition-colors duration-300 ease-in-out hover:text-home-dark-purple"
              >
                <MenuIcon width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Side Navbar */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full transform border-l border-home-purple/10 bg-white/95 shadow-[0_20px_50px_rgba(50,68,164,0.12)] backdrop-blur-xl transition-transform duration-200 ease-in-out lg:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col items-end gap-4 p-4 pt-6.5">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-fit rounded-full p-2 text-home-dark-purple transition-colors duration-300 ease-in-out"
          >
            <XIcon width={24} height={24} />
          </button>
          <div className="flex w-full flex-col space-y-1 font-medium text-home-dark-purple">
            <span
              onClick={() => {
                scrollToTop();
                setIsMobileMenuOpen(false);
              }}
              className={`${activeSection === "hero-section" ? "bg-home-purple/10 text-home-dark-purple" : "text-home-dark-purple/70 hover:bg-home-purple/5 hover:text-home-dark-purple"} cursor-pointer rounded-lg px-4 py-3 font-semibold transition-all duration-300 ease-in-out`}
            >
              Home
            </span>
            <span
              onClick={() => {
                scrollToSection("about-section");
                setIsMobileMenuOpen(false);
              }}
              className={`${activeSection === "about-section" ? "bg-home-purple/10 text-home-dark-purple" : "text-home-dark-purple/70 hover:bg-home-purple/5 hover:text-home-dark-purple"} cursor-pointer rounded-lg px-4 py-3 font-semibold transition-all duration-300 ease-in-out`}
            >
              About
            </span>
            <span
              onClick={() => {
                scrollToSection("techstack-section");
                setIsMobileMenuOpen(false);
              }}
              className={`${activeSection === "techstack-section" ? "bg-home-purple/10 text-home-dark-purple" : "text-home-dark-purple/70 hover:bg-home-purple/5 hover:text-home-dark-purple"} cursor-pointer rounded-lg px-4 py-3 font-semibold transition-all duration-300 ease-in-out`}
            >
              Toolkit
            </span>
            <span
              onClick={() => {
                scrollToSection("project-section");
                setIsMobileMenuOpen(false);
              }}
              className={`${activeSection === "project-section" ? "bg-home-purple/10 text-home-dark-purple" : "text-home-dark-purple/70 hover:bg-home-purple/5 hover:text-home-dark-purple"} cursor-pointer rounded-lg px-4 py-3 font-semibold transition-all duration-300 ease-in-out`}
            >
              Projects
            </span>
            <span
              onClick={() => {
                scrollToSection("contact-section");
                setIsMobileMenuOpen(false);
              }}
              className={`${activeSection === "contact-section" ? "bg-home-purple/10 text-home-dark-purple" : "text-home-dark-purple/70 hover:bg-home-purple/5 hover:text-home-dark-purple"} cursor-pointer rounded-lg px-4 py-3 font-semibold transition-all duration-300 ease-in-out`}
            >
              Contact
            </span>
          </div>

          <a
            href={resumeHref}
            download
            className="mt-auto flex items-center justify-center rounded-full bg-home-dark-purple px-4 py-2 text-sm font-semibold text-white uppercase transition-all duration-300 hover:cursor-pointer hover:bg-home-dark-purple/90"
          >
            <span>RESUME</span>
            <ArrowDownToLineIcon width={16} height={16} className="ml-2" />
          </a>
        </div>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Desktop Navbar */}
      <ScrollReveal
        direction="down"
        duration={300}
        className={`pointer-events-none fixed top-0 right-0 left-0 z-50 hidden transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:block ${showNavbar ? "translate-y-0" : "-translate-y-24"}`}
      >
        <div className="relative">
          <div
            className={`pointer-events-none absolute transition-[top,right,bottom,left,border-radius,background-color,box-shadow,backdrop-filter,opacity,transform] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-[top,right,bottom,left,border-radius,background-color,box-shadow,backdrop-filter,opacity,transform] ${navBgDesktop} ${navChromeDesktop}`}
          />
          <div className={`relative ${navContentInsetDesktop}`}>
            <div className="pointer-events-auto grid grid-cols-[1fr_auto_1fr] items-center p-1">
              <ScrollReveal
                direction="down"
                delay={1600}
                onClick={scrollToTop}
                className="col-start-1 flex h-8 w-8 items-center justify-center rounded-full border border-home-purple/50 bg-[#F4F6FB] p-1 font-serif text-sm font-semibold text-home-dark-purple/80 uppercase transition-all duration-300 hover:cursor-pointer hover:border-home-purple hover:bg-[#E3E6F7] hover:text-home-dark-purple lg:h-10 lg:w-10 lg:p-2 lg:text-lg"
              >
                <p>av</p>
              </ScrollReveal>

              <div className="col-start-2 flex cursor-pointer justify-center gap-4 justify-self-center text-sm font-medium transition-all duration-300 ease-in-out lg:text-base xl:gap-8">
                <ScrollReveal
                  direction="down"
                  delay={1800}
                  onClick={scrollToTop}
                  className={`${activeSection === "hero-section" ? "border-home-purple text-home-dark-purple/90" : "border-b-transparent text-home-dark-purple/60"} border-b-2 py-1 transition-all duration-300 ease-in-out hover:text-home-dark-purple lg:px-2`}
                >
                  Home
                </ScrollReveal>
                <ScrollReveal
                  direction="down"
                  delay={1900}
                  onClick={() => scrollToSection("about-section")}
                  className={`${activeSection === "about-section" ? "border-home-purple text-home-dark-purple/90" : "border-b-transparent text-home-dark-purple/60"} border-b-2 py-1 transition-all duration-300 ease-in-out hover:text-home-dark-purple lg:px-2`}
                >
                  About
                </ScrollReveal>
                <ScrollReveal
                  direction="down"
                  delay={2000}
                  onClick={() => scrollToSection("techstack-section")}
                  className={`${activeSection === "techstack-section" ? "border-home-purple text-home-dark-purple/90" : "border-b-transparent text-home-dark-purple/60"} border-b-2 py-1 transition-all duration-300 ease-in-out hover:text-home-dark-purple lg:px-2`}
                >
                  Toolkit
                </ScrollReveal>
                <ScrollReveal
                  direction="down"
                  delay={2100}
                  onClick={() => scrollToSection("project-section")}
                  className={`${activeSection === "project-section" ? "border-home-purple text-home-dark-purple/90" : "border-b-transparent text-home-dark-purple/60"} border-b-2 py-1 transition-all duration-300 ease-in-out hover:text-home-dark-purple lg:px-2`}
                >
                  Projects
                </ScrollReveal>
                <ScrollReveal
                  direction="down"
                  delay={2200}
                  onClick={() => scrollToSection("contact-section")}
                  className={`${activeSection === "contact-section" ? "border-home-purple text-home-dark-purple/90" : "border-b-transparent text-home-dark-purple/60"} border-b-2 py-1 transition-all duration-300 ease-in-out hover:text-home-dark-purple lg:px-2`}
                >
                  Contact
                </ScrollReveal>
              </div>
              <ScrollReveal
                direction="down"
                delay={2400}
                className="col-start-3 flex justify-end justify-self-end"
              >
                <a
                  href={resumeHref}
                  download
                  className="flex items-center justify-center justify-self-end rounded-full border border-home-purple/50 bg-[#F4F6FB] p-2 px-4 text-sm font-semibold text-home-dark-purple/80 uppercase transition-all duration-300 hover:cursor-pointer hover:border-home-purple hover:bg-[#E3E6F7] hover:text-home-dark-purple"
                >
                  <p>RESUME</p>
                  <ArrowDownToLineIcon
                    width={16}
                    height={16}
                    className="ml-2"
                  />
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </>
  );
}
