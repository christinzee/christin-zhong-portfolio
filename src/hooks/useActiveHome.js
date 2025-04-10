"use client";

import { useEffect, useState } from "react";

export const useActiveHome = (sectionIds = []) => {
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
        rootMargin: "10% 0% 10% 0%",
        threshold: 0.9,
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
