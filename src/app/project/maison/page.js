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
            Maison
          </h1>
          <p className="dates text-xs text-(--subheader) pt-4">
            APRIL 2025 - PRESENT
          </p>
          <div className="details flex flex-col lg:flex-row lg:items-center gap-2 pt-4">
            <p className="text-md text-(--orange)">Frontend Development</p>
            {/* <span className="hidden lg:block w-px h-4 my-auto bg-(--orange)/50"></span>

            <a
              href="https://www.ratemydogpark.com"
              target="_blank"
              className="hover:underline hover:decoration-(--orange)"
            >
              <p className="text-md text-(--orange) flex items-center gap-1">
                <svg
                  className="size-3 fill-(--orange)"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m5 2c.55228 0 1 .44772 1 1s-.44772 1-1 1h-1v8h8v-1c0-.5523.4477-1 1-1s1 .4477 1 1v1c0 1.1046-.8954 2-2 2h-8c-1.10457 0-2-.8954-2-2v-8c0-1.10457.89543-2 2-2zm10-1v4.99814453c0 .55229-.4477 1-1 1s-1-.44771-1-1v-1.58395453l-4.28429 4.28427c-.39052.39053-1.02369.39053-1.41421 0-.39053-.39052-.39053-1.02369 0-1.41421l4.2843-4.28425h-1.58960859c-.55228 0-1-.44772-1-1s.44772-1 1-1z"
                    fillRule="evenodd"
                  />
                </svg>
                www.ratemydogpark.com
              </p>
            </a> */}
          </div>
          <p className="text-md text-(--body) pt-4">
            Maison is a referral-based home services startup connecting trusted
            contractors with homeowners through real estate professionals. I led
            the frontend development of the platform’s core infrastructure,
            building out the Vendor Portal and Partner Portal. These
            role-specific dashboards were designed to power Maison’s operations
            at launch, enabling vendors to manage leads and territories, and
            partners to track and monetize referrals.
          </p>

          <div className="pt-6 flex gap-3 lg:gap-4 xl:gap-5">
            {["Next.js", "TypeScript", "Tailwind", "shadcn/ui"].map((tech) => (
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
            Maison is an early-stage startup aiming to reshape how homeowners
            connect with trusted contractors, not through ads or bidding
            platforms, but through referrals from real estate professionals like
            agents and designers.
          </p>

          <ul>
            To bring that vision to life, the team needed two key systems built
            from the ground up:
            <li>
              - A Vendor Portal to help contractors manage exclusive lead access
              and view their performance within claimed service areas
              ("patches")
            </li>
            <li>
              - A Partner Portal to give realtors and designers a seamless way
              to submit referrals, track progress, and earn rewards
            </li>
          </ul>
          <p>
            None of these systems existed yet. My goal was to design and build a
            frontend experience from the ground up that felt clean, intuitive,
            and scalable — setting the stage for Maison’s product launch.
          </p>

          <ZoomImageWrapper
            src="/maison-vendor.png"
            className="rounded-sm"
            alt="Maison vendor dashboard showing a list of leads and territory patches"
          />
        </div>

        <div id="approach" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">
            My Role & Approach
          </h1>
          <p>
            As the lead frontend developer, I was responsible for designing and
            implementing the UI for both portals. My focus was on translating
            user flows into clean, intuitive components — ensuring each portal
            supported its core use cases while staying consistent with Maison’s
            brand and product goals.
          </p>
          <p>
            I worked closely with the founder to map out role-specific journeys,
            to build a modular component system that could scale. From layout
            scaffolds to individual UI states, I led decisions around structure,
            usability, and how the interface should feel for vendors, partners,
            and admins.
          </p>
          <ZoomImageWrapper
            src="/maison-partner.png"
            className="rounded-sm"
            alt="Maison partner dashboard tracking a list of referrals and commission earnings"
          />
        </div>

        <div id="solution" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">
            Building the Solution
          </h1>
          <p>
            The platform is built with Next.js and Tailwind CSS, which allowed
            me to move quickly while keeping the UI system consistent and
            responsive. I focused on translating core user flows like submitting
            a referral, reviewing a new lead, and tracking patch performance
            into modular, role-specific components. Each portal adapts based on
            the user’s role, showing only what’s relevant to vendors or partners
            without adding unnecessary complexity.
          </p>
          <p>
            Instead of designing static pages, I built flexible views that
            respond to real-time data and changing business needs. Referral
            progress and lead stages update dynamically, helping users
            understand what’s happening without needing to dig. The goal was
            always clarity — giving each user just enough context to take action
            with confidence, whether they’re managing jobs or sending a new
            client into the network.
          </p>
          <ZoomImageWrapper
            src="/maison-vendor2.png"
            className="rounded-sm"
            alt="Maison vendor portal showing kanban board of leads"
          />
        </div>

        <div id="challenges" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">Key Challenges</h1>
          <p>
            Since Maison hadn’t launched yet, I had to design and build without
            usage data. I relied on UX heuristics, competitor research, and
            internal team feedback to guide UI decisions that would feel
            intuitive to first-time users.
          </p>
          <p>
            The platform supports multiple user types — each with different
            access levels and data needs. I implemented conditional layouts and
            reusable scaffolds that could adapt based on role while keeping code
            DRY and components testable.
          </p>
          <p>
            The dashboards had to handle complex workflows (lead tracking,
            document handling, referral chains) without overwhelming users. I
            used progressive disclosure, collapsible panels, and consistent
            visual hierarchy to maintain a clear user experience.
          </p>
          <ZoomImageWrapper
            src="/maison-partner2.png"
            className="rounded-sm"
            alt="Maison partner portal showing referral tracking and details"
          />
        </div>

        <div id="impact" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">The Impact</h1>
          <p>
            While Maison hasn’t launched publicly yet, these portals now form
            the foundation of the product.
          </p>
          <ul>
            They’re designed to:
            <li>- Enable efficient onboarding for contractors and partners</li>
            <li>- Support referral and lead flow from day one</li>
            <li>
              - Set up scalable frontend logic that maps cleanly to backend
              infrastructure
            </li>
          </ul>
          <p>
            The systems are already being used internally for testing,
            onboarding demos, and preparing for pilot rollouts.
          </p>
          <ZoomImageWrapper
            src="/maison-vendor3.png"
            className="rounded-sm"
            alt="Maison vendor portal showing vendor profile management page"
          />
        </div>

        <div id="future" className="space-y-4 lg:pb-80">
          <h1 className="text-(--header) text-2xl font-bold">What’s Next</h1>
          <p>
            As Maison prepares for launch, I’ll continue refining the Vendor and
            Partner Portals based on real user feedback. Once early partners and
            contractors begin using the system, I plan to observe how they
            interact with the tools — what feels intuitive, where they hesitate,
            and which flows need simplification. My focus moving forward will be
            on strengthening the user experience through real-world testing,
            improving clarity, and making adjustments that support the way
            people actually work, not just how we imagined they would.
          </p>
        </div>
      </main>
    </div>
  );
}
