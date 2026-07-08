import { useEffect, useState } from "react";
import { AboutCard } from "@/components/about-card";
import { MoveRightIcon } from "@/components/icons";
import Navigation from "@/components/navigation";
import { ProjectCard } from "@/components/project-card";
import ScrollReveal from "@/components/scrollReveal";
import { SiteFooter } from "@/components/site-footer";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { AuroraText } from "@/components/ui/aurora-text";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/ui/dot-pattern";
import { MeshGradientBackground } from "../src/components/ui/mesh-gradient-background";
import { aboutCards, projectCards } from "@/data/home-data";
import { cn } from "@/lib/utils";
import { scrollToTop } from "@/utils/pageUtils";

export default function Welcome() {
  // State Declarations
  // Navbar and section tracking
  const [activeSection, setActiveSection] = useState("home-section");
  const [showNavbar, setShowNavbar] = useState(true);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const resumeHref = "/Resume.pdf";

  useEffect(() => {
    document.title = "Alijah Valle | Portfolio";
  }, []);

  // Effects
  // Show/hide navbar on scroll and track active section
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setIsAtTop(window.scrollY <= 8);

      lastScrollY = window.scrollY;

      // Track active section based on scroll position
      const sections = [
        "hero-section",
        "about-section",
        "techstack-section",
        "project-section",
        "contact-section",
      ];
      const sectionElements = sections
        .map((section) => document.getElementById(section))
        .filter(Boolean);

      let currentSection = "hero-section";

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];

        if (element && element.offsetTop <= window.scrollY + 200) {
          currentSection = sections[i];
          break;
        }
      }

      setActiveSection(currentSection);
    };
    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targetSectionId = new URLSearchParams(window.location.search).get(
      "scrollTo",
    );

    if (!targetSectionId) {
      return;
    }

    const animationFrameId = window.requestAnimationFrame(() => {
      const targetElement = document.getElementById(targetSectionId);

      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "auto",
          block: "center",
        });
      }

      const cleanUrl =
        window.location.pathname +
        (window.location.hash ? window.location.hash : "");
      window.history.replaceState({}, "", cleanUrl);
    });

    return () => window.cancelAnimationFrame(animationFrameId);
  }, []);

  // Functions
  // Navigation/Navbar Functions
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const block = sectionId === "project-section" ? "start" : "center";
      element.scrollIntoView({ behavior: "smooth", block });
    }
  };

  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] text-[#1b1b18] lg:justify-center">
        <Navigation
          activeSection={activeSection}
          showNavbar={showNavbar}
          isAtTop={isAtTop}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          scrollToSection={scrollToSection}
          scrollToTop={scrollToTop}
          resumeHref={resumeHref}
        />
        <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
          <main className="flex w-full max-w-480 flex-col items-center">
            {/* Hero Section */}
            <section className="relative flex h-screen max-h-240 w-full overflow-hidden mask-[linear-gradient(to_bottom,black_80%,transparent_100%)] px-4 py-24 md:px-6 lg:grid lg:grid-cols-[minmax(2rem,3fr)_minmax(0,98rem)_minmax(2rem,3fr)] lg:px-10 lg:py-28">
              {/* Hero Section Content */}
              <ScrollReveal
                id="hero-section"
                direction="up"
                className="z-2 col-start-2 col-end-3 flex w-full flex-col items-center justify-center md:flex-row md:gap-10 xl:gap-36"
              >
                <div className="z-10 flex w-full flex-col items-center justify-center gap-4 md:max-w-280">
                  <ScrollReveal
                    direction="up"
                    delay={400}
                    className="text-center font-semibold tracking-wider text-home-purple uppercase"
                  >
                    Code. Commit. Complete.
                  </ScrollReveal>
                  <ScrollReveal
                    direction="up"
                    delay={600}
                    className="text-center text-5xl leading-14 font-bold text-gray-800/94 lg:text-[64px] lg:leading-20"
                  >
                    Greetings! I'm <AuroraText>Alijah Valle</AuroraText>. I
                    solve problems one query at a time
                  </ScrollReveal>
                  <ScrollReveal
                    direction="up"
                    delay={800}
                    className="max-w-200 text-center leading-7 text-gray-700 lg:text-lg lg:leading-8"
                  >
                    I develop functional web applications from the database to
                    user interfaces. I enjoy solving complex problems, writing
                    clean code, and keeping standard security in mind.
                  </ScrollReveal>
                  <ScrollReveal
                    direction="up"
                    delay={1000}
                    className="mt-6 flex justify-center gap-6"
                  >
                    <Button
                      onClick={() => scrollToSection("project-section")}
                      variant="default"
                      size="lg"
                      className="min-w-32 bg-home-yellow text-gray-800 hover:bg-home-orange"
                    >
                      View my work
                    </Button>
                    <Button
                      onClick={() => scrollToSection("contact-section")}
                      variant="default"
                      size="lg"
                      className="min-w-32 border border-amber-500 bg-white text-amber-700 hover:border-home-orange hover:bg-amber-100/40"
                    >
                      Let's talk
                    </Button>
                  </ScrollReveal>
                </div>
              </ScrollReveal>

              {/* Background */}
              <div
                className={cn(
                  "pointer-events-none absolute inset-0 z-1",
                  "bg-[radial-gradient(1720px_1000px_at_center,rgba(255,255,255,0.96)_20%,rgba(255,255,255,0)_96%)]",
                )}
              />
              <AnimatedGridPattern
                maxOpacity={0.68}
                width={60}
                height={60}
                strokeDasharray={4}
                duration={1.2}
                colors={[
                  "var(--color-home-purple)",
                  "var(--color-home-pink)",
                  "var(--color-home-yellow)",
                  "var(--color-home-purple)",
                ]}
                className={cn(
                  "z-0 opacity-100",
                  "stroke-gray-600/40 text-gray-600",
                )}
              />
            </section>

            {/* About Section */}
            <section
              id="about-section"
              className="flex w-full px-4 py-24 md:px-6 lg:grid lg:grid-cols-[minmax(2rem,3fr)_minmax(0,98rem)_minmax(2rem,3fr)] lg:px-10 lg:py-28"
            >
              <ScrollReveal
                direction="up"
                delay={100}
                className="col-start-2 col-end-3 flex w-full flex-col items-center justify-center gap-20 md:flex-row md:gap-10 xl:gap-36"
              >
                <div className="flex w-full justify-center md:w-1/2 xl:p-12">
                  <img src="/asset-1.gif" alt="Description of image" />
                </div>
                <div className="flex w-full flex-col items-center gap-4 md:w-1/2 md:items-start">
                  <h2 className="text-center font-semibold tracking-wider text-home-purple uppercase md:text-left">
                    About Me
                  </h2>
                  <h1 className="text-center text-3xl font-bold text-gray-800/94 md:text-left md:text-4xl">
                    Eager to Learn, Ready to Build
                  </h1>
                  <p className="flex flex-col gap-4 text-center text-base leading-7 text-gray-700 md:text-left lg:text-lg lg:leading-8">
                    <span>
                      I am a developer who enjoys creating real-world tools and
                      solutions, including audit automation software and admin
                      dashboards. I focus on turning project requirements into
                      clean, functional solutions. I always prioritize making
                      the final product reliable and easy to understand.
                    </span>
                    <span>
                      I bring a careful, detail-oriented approach to my work,
                      whether I am designing database tables, adding basic
                      security measures, or improving the user interface. I also
                      love collaborating with teams, helping my peers, and
                      continuously picking up new skills to improve my craft.
                    </span>
                  </p>
                  <Button
                    onClick={() => scrollToSection("techstack-section")}
                    variant="default"
                    size="lg"
                    className="mt-6 min-w-32 bg-home-yellow text-gray-800 hover:bg-home-orange"
                  >
                    See my tech stack
                  </Button>
                </div>
              </ScrollReveal>
            </section>

            {/* Tech Stack Section */}
            <section
              id="techstack-section"
              className="relative flex w-full overflow-hidden px-4 py-24 md:px-6 lg:grid lg:grid-cols-[minmax(2rem,3fr)_minmax(0,98rem)_minmax(2rem,3fr)] lg:px-10"
            >
              <div className="col-start-2 col-end-3 flex w-full flex-col items-center justify-center lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,86rem)_minmax(0,1fr)]">
                <ScrollReveal
                  direction="up"
                  className="col-start-2 col-end-3 mb-12 flex w-full flex-col gap-4"
                >
                  <h2 className="text-center font-semibold tracking-wider text-home-purple uppercase md:text-left">
                    Toolkit
                  </h2>
                  <h1 className="text-center text-4xl font-bold text-gray-800/94 md:text-left">
                    Technologies & Tools
                  </h1>
                </ScrollReveal>
                <div className="col-start-2 col-end-3 grid w-full grid-cols-[repeat(auto-fill,minmax(0,26rem))] justify-center justify-items-center gap-8">
                  {aboutCards.map((card, index) => (
                    <ScrollReveal
                      direction="up"
                      delay={index * 100}
                      key={`${card.title}-${index}`}
                    >
                      <AboutCard key={`${card.title}-${index}`} {...card} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>

            {/* Project Section */}
            <section
              id="project-section"
              className="flex w-full flex-col px-4 py-24 md:px-6 lg:grid lg:grid-cols-[minmax(2rem,3fr)_minmax(0,98rem)_minmax(2rem,3fr)] lg:px-10 lg:py-28"
            >
              <div className="col-start-2 col-end-3 flex w-full flex-col items-center justify-center">
                <ScrollReveal
                  direction="up"
                  className="mb-12 flex w-full flex-col items-center justify-center gap-4"
                >
                  <h2 className="text-center font-semibold tracking-wider text-home-purple uppercase">
                    Selected Work
                  </h2>
                  <h1 className="text-center text-4xl font-bold text-gray-800/94">
                    Featured Projects
                  </h1>
                  <p className="max-w-2xl text-center leading-7 text-gray-700 lg:text-lg lg:leading-8">
                    I build web applications that solve real problems. Each
                    project teaches me something new about architecture,
                    security, and user experience.
                  </p>
                </ScrollReveal>
                <div className="grid w-full max-w-7xl grid-cols-[repeat(auto-fill,minmax(0,25rem))] justify-center gap-8">
                  {projectCards.map((project, index) => (
                    <ScrollReveal
                      direction="up"
                      delay={index * 100}
                      key={`${project.title}-${index}`}
                    >
                      <ProjectCard
                        key={`${project.title}-${index}`}
                        {...project}
                      />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section
              id="contact-section"
              className="relative flex w-full overflow-hidden mask-[linear-gradient(to_bottom,transparent_0%,black_15%,black_80%,transparent_100%)] px-4 md:px-6 lg:grid lg:grid-cols-[minmax(2rem,3fr)_minmax(0,98rem)_minmax(2rem,3fr)] lg:px-10"
            >
              <ScrollReveal
                direction="up"
                className="z-10 col-start-2 col-end-3 mx-auto flex h-screen max-h-240 w-full max-w-280 flex-col items-center justify-center gap-4 py-32"
              >
                <h2 className="flex items-center font-semibold tracking-wider text-home-purple uppercase">
                  Get in Touch
                </h2>
                <h1 className="text-center text-[42px] leading-14 font-bold text-gray-800/94 md:text-5xl lg:text-[64px] lg:leading-20">
                  Let's work together
                </h1>
                <p className="max-w-200 text-center leading-7 text-gray-700 lg:text-lg lg:leading-8">
                  Interested in collaborating, hiring, or just want to chat
                  about web security and development? I'm open to junior roles
                  and meaningful projects. Whether you need help with database
                  queries or building out a new feature, I am ready to jump in
                  and learn.
                </p>
                <a
                  href="mailto:va.vallealijah@gmail.com"
                  className="group mt-6 flex min-w-32 items-center justify-center gap-2 rounded-full bg-home-yellow px-4 py-2 text-sm font-semibold text-gray-800 transition-all duration-300 hover:bg-home-orange"
                >
                  Send me an email
                  <MoveRightIcon
                    width={16}
                    height={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </ScrollReveal>

              {/* Background */}
              <MeshGradientBackground
                className="pointer-events-none absolute inset-0 z-0 opacity-80"
                colors={[
                  "var(--color-home-purple)",
                  "var(--color-home-orange)",
                  "var(--color-home-pink)",
                ]}
                backgroundColor="#FFFFFF"
                speed={0.9}
              />
              <DotPattern
                width={20}
                height={20}
                className="pointer-events-none absolute inset-0 z-1 mask-[radial-gradient(2800px_720px_at_center,transparent,white)] text-home-purple/50"
              />
            </section>
          </main>
        </div>
      </div>
      <SiteFooter onLogoClick={scrollToTop} />
    </>
  );
}
