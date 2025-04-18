export const Projects = () => {
  return (
    <section id="projects" className="project pt-18">
      <h1 className="text-sm text-(--header) font-bold px-4 lg:px-8 lg:hidden">
        PROJECTS
      </h1>

      <div className="relative group transition-all lg:hover:bg-(--selection)/30 p-4 lg:p-8 rounded-sm overflow-hidden">
        {/* clickable overlay (COVERS ENTIRE DIV) */}
        <a
          href="/project/rate-my-dog-park"
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full z-10"
        >
          <span className="sr-only">Go to Rate My Dog Park case study</span>
        </a>

        <div className="relative z-20 pointer-events-none">
          <p className="dates text-xs text-(--subheader)">2025 - PRESENT</p>
          <div className="flex items-center gap-2 ">
            <h1 className="font-bold text-3xl lg:text-4xl text-(--cyan) pt-4">
              Rate My Dog Park
            </h1>
            <svg
              className="size-6 lg:size-8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m0 0h24v24h-24z"
                fill="#8be9fd"
                opacity="0"
                transform="matrix(-1 0 0 -1 24 24)"
              />
              <path
                d="m18 7.05a1 1 0 0 0 -1-1l-8-.05a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l8.29-8.29v5.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"
                fill="#8be9fd"
              />
            </svg>
          </div>

          <div className="details flex flex-col lg:flex-row lg:items-center gap-2 pt-4">
            <p className="text-md text-(--orange)">Design & Development</p>
            <span className="hidden lg:block w-px h-4 my-auto bg-(--orange)/50"></span>
            <p className="text-md text-(--orange) flex items-center gap-1">
              www.ratemydogpark.com
            </p>
          </div>

          <p className="text-md text-(--body) pt-4">
            A community-driven platform where dog parents can find, review, and
            rate local dog parks based on real experiences. The app serves as a
            centralized platform for dog park information, allowing users to
            search parks by location, view detailed park profiles, leave
            reviews, and see insights from other dog parents.

            Designed and deployed a full-stack web application allowing users to discover, rate, and review local dog parks
Built reusable components using React and Next.js; implemented user authentication and data storage with Firebase
Integrated Google Maps API for interactive location searches; prioritized accessibility and mobile-first design
          </p>

          <div className="pt-6 flex gap-3 lg:gap-4 xl:gap-5">
            {["Next.js", "Firebase", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="py-1 px-3 rounded-sm text-sm font-semibold bg-(--selection) text-(--foreground)"
              >
                {tech}
              </span>
            ))}
          </div>

          <img
            src="ratemydogpark.png"
            className="mt-6 w-full rounded-sm"
            alt="Rate My Dog Park homepage displaying search bar and list of popular dog parks"
          />
        </div>
      </div>

      <div className="relative group transition-all lg:hover:bg-(--selection)/30 p-4 lg:p-8 rounded-sm overflow-hidden">
        {/* clickable overlay (COVERS ENTIRE DIV) */}
        <a
          href="/project/xbox-gaming-accessibility"
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full z-10"
        >
          <span className="sr-only">
            Go to Xbox - Gaming Accessibility case study
          </span>
        </a>

        <div className="relative z-20 pointer-events-none">
          <p className="dates text-xs text-(--subheader)">MARCH 2025</p>
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-3xl lg:text-4xl text-(--cyan) pt-4">
              Xbox - Gaming Accessibility
            </h1>
            <svg
              className="size-6 lg:size-8"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m0 0h24v24h-24z"
                fill="#8be9fd"
                opacity="0"
                transform="matrix(-1 0 0 -1 24 24)"
              />
              <path
                d="m18 7.05a1 1 0 0 0 -1-1l-8-.05a1 1 0 0 0 0 2h5.56l-8.27 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l8.29-8.29v5.58a1 1 0 0 0 1 1 1 1 0 0 0 1-1z"
                fill="#8be9fd"
              />
            </svg>
          </div>

          <div className="details flex flex-col lg:flex-row lg:items-center gap-2 pt-4">
            <p className="text-md text-(--orange)">Frontend Development</p>
          </div>

          <p className="text-md text-(--body) pt-4">
            An AI-powered Xbox gaming prototype designed to improve
            accessibility for players with diverse abilities. Developed as part
            of the Microsoft Industry Project, the solution addresses key
            barriers in gaming through features like real-time speech-to-text,
            adaptive UI scaling, object recognition, gesture-based controls, and
            AI-driven gameplay adjustments.
          </p>

          <div className="pt-6 flex gap-3 lg:gap-4 xl:gap-5">
            {["JavaScript", "React", "Sass", "Figma"].map((tech) => (
              <span
                key={tech}
                className="py-1 px-3 rounded-sm text-sm font-semibold bg-(--selection) text-(--foreground)"
              >
                {tech}
              </span>
            ))}
          </div>

          <img
            src="xbox.png"
            className="mt-6 w-full rounded-sm"
            alt="Xbox dashboard displaying AI powered interface"
          />
        </div>
      </div>
    </section>
  );
};
