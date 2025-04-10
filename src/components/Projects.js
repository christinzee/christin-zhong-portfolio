export const Projects = () => {
  return (
    <section id="projects" className="project mt-18">
      <div className="relative group transition-all hover:bg-(--selection)/30 p-8 rounded-sm overflow-hidden">
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
          <h1 className="font-bold text-4xl text-(--cyan) pt-4">
            Rate My Dog Park
          </h1>

          <div className="details flex items-center gap-2 pt-4">
            <p className="text-md text-(--orange)">Design & Development</p>
            <span className="w-px h-4 my-auto bg-(--orange)/50"></span>
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

          <div className="pt-6 flex gap-6">
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
