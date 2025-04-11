export const Projects = () => {
  return (
    <section id="projects" className="project mt-18">
      <h1 className="text-sm text-(--header) font-bold px-8 lg:hidden">
        PROJECTS
      </h1>
      <div className="relative group transition-all lg:hover:bg-(--selection)/30 p-8 rounded-sm overflow-hidden">
        {/* clickable overlay (COVERS ENTIRE DIV) */}
        <a
          href="/project/ratemydogpark"
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full z-10"
        >
          <span className="sr-only">Go to Rate My Dog Park case study</span>
        </a>

        <div className="relative z-20 pointer-events-none">
          <p className="dates text-xs text-(--subheader)">2025 - PRESENT</p>
          <div className="flex items-center gap-2 ">
            <h1 className="font-bold text-2xl lg:text-4xl text-(--cyan) pt-4">
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
          </p>

          <div className="pt-6 flex gap-3 lg:gap-6">
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
            alt="Rate My Dog Park Screenshot"
          />
        </div>
      </div>
    </section>
  );
};
