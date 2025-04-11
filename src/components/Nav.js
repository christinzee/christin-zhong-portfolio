"use client";

import { useActiveHome } from "@/hooks/useActiveHome";

export const Nav = () => {
  const active = useActiveHome(["about", "projects"]);

  const links = [
    { id: "about", label: "ABOUT" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <div className="hidden lg:block lg:mt-30">
      <ul>
        {links.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a className="group flex items-center py-3" href={`#${id}`}>
                <span
                  className={`mr-4 h-px w-8 transition-all
                  ${isActive ? "w-16 bg-(--green)" : "bg-(--green)/50"}
                  group-hover:w-16 group-hover:bg-(--green)`}
                ></span>
                <span
                  className={`text-xs transition-all
                    ${isActive ? "text-(--green)" : "text-(--green)/50"}
                    group-hover:text-(--green)`}
                >
                  {label}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
