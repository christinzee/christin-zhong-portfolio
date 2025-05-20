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
            CRM Dashboard
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
            This CRM dashboard was built to give sales reps a clear, focused
            view of their pipeline, progress, and daily priorities — without the
            clutter. I designed and developed the frontend from scratch,
            focusing on modular UI components that emphasize clarity, urgency,
            and action. The result is a clean, responsive experience that
            supports real sales workflows and motivates forward momentum.
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
            Sales teams thrive on clarity, but most CRMs are bloated,
            overwhelming, or too focused on managerial reporting. From a rep’s
            perspective, it’s easy to lose track of which leads need attention,
            how close they are to hitting quota, or which deals actually matter.
          </p>

          <p>
            This project started with a simple goal: design a CRM dashboard that
            puts the sales rep first. I wanted to build something that showed
            clear priorities, progress toward goals, and actionable insights —
            all in one glance. The result is a clean, responsive interface that
            balances performance tracking with deal visibility, without the
            clutter.
          </p>
          <ZoomImageWrapper
            src="/crm-dashboard.png"
            className="rounded-sm"
            alt="CRM dashboard showing quota progress, task list, lead details, and activity metrics"
          />
        </div>

        <div id="approach" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">
            My Role & Approach
          </h1>
          <p>
            I led the frontend design and development for this dashboard,
            focusing on how to visualize core sales activities in a way that
            feels motivating, not overwhelming. I worked from mock user journeys
            (inspired by actual sales workflows) and broke down the interface
            into modular, role-aware components.
          </p>
          <p>
            I used Next.js for structure and routing, Tailwind CSS for styling,
            and built the UI to be easily extendable — whether by sales reps
            tracking their day or managers monitoring team performance. Each
            card was designed to answer a key question:{" "}
            <span className="italic">
              How am I doing? What needs my attention right now? What’s most
              worth following up on?
            </span>
          </p>
          {/* <ZoomImageWrapper
            src="/crm-dashboard2.png"
            className="rounded-sm"
            alt="Maison partner dashboard tracking a list of referrals and commission earnings"
          /> */}
        </div>

        <div id="solution" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">
            Building the Solution
          </h1>
          <p>
            The dashboard highlights quota progress, daily activity (calls,
            meetings, emails), incoming leads, upcoming tasks, and high-value
            opportunities — all surfaced in real-time. Cards like “Team
            Progress” and “Deals by Stage” give reps visibility into performance
            without needing to click into deep reports. I paid special attention
            to visual hierarchy, using color and spacing to emphasize urgency
            and level.
          </p>
          <p>
            Interactions are kept lightweight and fast, and the layout adapts
            seamlessly across screen sizes. Filters, tags, and progress
            indicators provide quick at-a-glance understanding, supporting both
            speed and focus throughout the day.
          </p>
          {/* <ZoomImageWrapper
            src="/maison-vendor2.png"
            className="rounded-sm"
            alt="Maison vendor portal showing kanban board of leads"
          /> */}
        </div>

        <div id="challenges" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">Key Challenges</h1>
          <p>
            The hardest part was deciding what not to include. Sales dashboards
            often collapse under the weight of too many KPIs and disconnected
            charts. I focused on reducing visual noise and making every element
            serve a purpose — whether that was nudging follow-up, highlighting
            top deals, or showing how close a rep is to hitting their number.
          </p>
          <p>
            Designing for motivation and not just metrics, was central to the
            experience.
          </p>
          {/* <ZoomImageWrapper
            src="/maison-partner2.png"
            className="rounded-sm"
            alt="Maison partner portal showing referral tracking and details"
          /> */}
        </div>

        <div id="impact" className="space-y-4">
          <h1 className="text-(--header) text-2xl font-bold">The Impact</h1>
          <p>
            This project demonstrates how thoughtful design can reshape how
            salespeople engage with their tools. By surfacing the right data at
            the right time, the dashboard doesn’t just track progress — it
            drives it. Early testers found the interface intuitive and
            energizing, helping them stay focused and aware of what actually
            moves the needle.
          </p>
          {/* <ZoomImageWrapper
            src="/maison-vendor3.png"
            className="rounded-sm"
            alt="Maison vendor portal showing vendor profile management page"
          /> */}
        </div>

        <div id="future" className="space-y-4 lg:pb-80">
          <h1 className="text-(--header) text-2xl font-bold">What’s Next</h1>
          <p>
            I plan to continue refining the dashboard as part of a broader CRM
            system, incorporating user feedback and real-time data as the
            project evolves. This includes building out the individual pages
            such as deal views, contact profiles, and activity timelines to
            complete the end-to-end experience. The goal remains the same: to
            keep the interface focused, responsive, and rooted in what
            salespeople actually care about — closing deals and knowing what to
            do next.
          </p>
        </div>
      </main>
    </div>
  );
}
