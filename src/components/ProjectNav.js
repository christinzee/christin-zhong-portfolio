"use client";

import { useActiveProject } from "@/hooks/useActiveProject";

export const ProjectNav = () => {
  const active = useActiveProject([
    "problem",
    "approach",
    "solution",
    "challenges",
    "impact",
    "future",
  ]);

  const links = [
    { id: "problem", label: "PROBLEM" },
    { id: "approach", label: "APPROACH" },
    { id: "solution", label: "SOLUTION" },
    { id: "challenges", label: "CHALLENGES" },
    { id: "impact", label: "IMPACT" },
    { id: "future", label: "WHAT'S NEXT" },
  ];

  return (
    <div className="mt-30">
      <ul>
        {links.map(({ id, label }) => {
          const isActive = active === id;
          return (
            <li key={id}>
              <a
                className={`group flex items-center py-3 ${
                  isActive ? "text-(--green)" : ""
                }`}
                href={`#${id}`}
              >
                <span
                  className={`mr-4 h-px w-8  transition-all
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
