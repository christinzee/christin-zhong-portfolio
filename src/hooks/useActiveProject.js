"use client";

import { useEffect, useState } from "react";

export const useActiveProject = (sectionIds = []) => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log("IN VIEW:", entry.target.id);
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: '50% 0% 50% 0%',
        threshold: .8,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
};
