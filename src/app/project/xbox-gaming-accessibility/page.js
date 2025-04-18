import { ProjectNav } from "@/components/ProjectNav";
import ZoomImageWrapper from "@/components/ZoomImageWrapper";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row justify-between h-full lg:max-w-screen-xl overflow-y-auto scrollbar-hide smooth-scroll ">
      <header className="lg:sticky lg:top-0 flex flex-col lg:w-[48%] h-full px-4 lg:px-8">
        <div className="h-full flex flex-col">
          <a href="/" className="hover:underline hover:decoration-(--body)">
            <p className="text-sm text-(--body)">&#8592; Home</p>
          </a>
          <h1 className="font-bold text-3xl lg:text-4xl text-(--cyan) pt-8">
            Xbox - Gaming Accessibility
          </h1>
          <p className="dates text-xs text-(--subheader) pt-4">MARCH 2025</p>
          <div className="details flex flex-col lg:flex-row lg:items-center gap-2 pt-4">
            <p className="text-md text-(--orange)">Frontend Development</p>
          </div>
          <p className="text-md text-(--body) pt-4">
            Developed as part of the Microsoft Industry Project, this AI-powered
            Xbox prototype focuses on making gaming more inclusive for players
            with a wide range of abilities. The solution introduces features
            like real-time speech-to-text, adaptive UI scaling, gesture-based
            controls, and cognitive personalization to help users engage with
            games in more accessible ways.
          </p>

          <div className="pt-6 flex gap-3 lg:gap-4 xl:gap-5">
            {["React", "JavaScript", "HTML5", "CSS3", "Figma"].map((tech) => (
              <span
                key={tech}
                className="py-1 px-3 rounded-sm text-sm font-semibold bg-(--selection) text-(--foreground)"
              >
                {tech}
              </span>
            ))}
          </div>
          <ProjectNav />
        </div>
      </header>

      <main className="lg:w-[48%] px-4 lg:px-8 pt-16 lg:pt-0 text-(--body) flex flex-col gap-8">
        <div id="problem" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">
            Understanding the Problem
          </h1>
          <p>
            Many players face barriers when engaging with modern video
            games-whether due to visual, auditory, motor, or cognitive
            impairments. While accessibility has improved in recent years, it's
            often limited to surface-level settings or workarounds. This project
            aimed to explore how AI could offer deeper, real-time accessibility
            solutions within the Xbox experience itself.
          </p>
          <p>
            Our team was set out to build a prototype that reimagined the Xbox
            experience to showcase how adaptive, AI-powered features could
            transform the way players interact with consoles-making games more
            playable, enjoyable, and inclusive for all.
          </p>

          <ZoomImageWrapper
            src="/xbox.png"
            className="rounded-sm"
            alt="Dog park profile page displaying park name, address, average rating, photo gallery and amenities."
          />
        </div>

        <div id="approach" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">
            My Role & Approach
          </h1>
          <p>
            I was solely responsible for building the Xbox dashboard frontend
            interface. The goal was to recreate the visual layout and flow of
            the original Xbox home screen using React and CSS, while also
            prototyping how conceptual AI accessibility features-such as voice
            navigation, simplified menus, and assistive overlays-might be
            surfaced through the UI.
          </p>
          <p>
            My approach centered on visual fidelity, accessibility compliance,
            and building a scalable component structure to accommodate evolving
            interface ideas proposed by the team.
          </p>
        </div>

        <div id="solution" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">
            Building the Solution
          </h1>
          <p>
            The Xbox dashboard interface was built using React, closely
            mimicking the layout and interaction flow of the original console
            UI. I focused on recreating the card-based layout, tile navigation,
            and menu structure using custom components and state logic.
          </p>
          <p>
            I also developed placeholder components for conceptual accessibility
            features such as voice-activated menu buttons and assistive
            overlays-designed strictly from a UI presentation layer, to support
            future backend integrations by the team.
          </p>
        </div>

        <div id="challenges" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">Key Challenges</h1>
          <p>
            Replicating the Xbox interface without access to official components
            required detailed visual deconstruction and custom layout logic.
          </p>
          <p>
            I had to interpret high-level feature ideas from the team and
            translate them into believable, UI-first implementations that felt
            native to the Xbox environment.
          </p>
        </div>

        <div id="impact" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">The Impact</h1>
          <p>
            The dashboard prototype was well received by Microsoft stakeholders,
            particularly for its clear visual structure and
            accessibility-focused UI decisions. It demonstrated how inclusive
            design principles could be integrated at the interface level without
            disrupting the core Xbox experience.
          </p>
          <p>
            This project helped refine my frontend architecture, UI replication,
            and accessibility implementation skills-especially in designing
            interfaces that anticipate broader, real-world use cases.
          </p>
        </div>

        <div id="future" className="space-y-4 lg:pb-80">
          <h1 className="text-(--header) text-2xl font-bold">What’s Next</h1>
          <p>
            While my work was limited to the frontend, future development could
            include:
          </p>
          <ul>
            <li>
              - Real-time integration of accessibility features through cloud AI
              services
            </li>
            <li>- Player profile-based UI customization</li>
            <li>- Voice-controlled navigation and input through LLM APIs</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
