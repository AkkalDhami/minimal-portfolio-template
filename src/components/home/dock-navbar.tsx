"use client";

import { Mail, Package, User, Moon, Sun, BriefcaseIcon } from "lucide-react";
import { FaRegComments } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { MenuDock, MenuDockItem } from "../ui/dock";
import { useTheme } from "next-themes";
import { useEffect, useState, useMemo } from "react";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const customMenuItems: MenuDockItem[] = useMemo(() => {
    return [
      {
        label: "about",
        icon: User,
        onClick: () =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
      },
      {
        label: "projects",
        icon: Package,
        onClick: () =>
          document
            .getElementById("projects")
            ?.scrollIntoView({ behavior: "smooth" })
      },
      {
        label: "skills",
        icon: VscTools,
        onClick: () =>
          document
            .getElementById("skills")
            ?.scrollIntoView({ behavior: "smooth" })
      },
      {
        label: "education",
        icon: BriefcaseIcon,
        onClick: () =>
          document
            .getElementById("education")
            ?.scrollIntoView({ behavior: "smooth" })
      },
      {
        label: "testimonials",
        icon: FaRegComments,
        onClick: () =>
          document
            .getElementById("testimonials")
            ?.scrollIntoView({ behavior: "smooth" })
      },
      {
        label: "contact",
        icon: Mail,
        onClick: () =>
          document
            .getElementById("contact")
            ?.scrollIntoView({ behavior: "smooth" })
      },
      {
        label: "theme",
        icon: currentTheme === "dark" ? Sun : Moon,
        onClick: () => setTheme(currentTheme === "dark" ? "light" : "dark")
      }
    ];
  }, [currentTheme, setTheme]);

  // ✅ Alternative: Scroll-based section detection
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const sectionIds = [
      "about",
      "projects",
      "skills",
      "education",
      "testimonials",
      "contact"
    ];

    const sectionToIndexMap: Record<string, number> = {};
    customMenuItems.forEach((item, index) => {
      if (item.label !== "theme") {
        sectionToIndexMap[item.label] = index;
      }
    });

    const findActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let activeSection = "";
      let minDistance = Infinity;

      sectionIds.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          // Check if element is in viewport
          if (elementTop <= scrollPosition && elementBottom >= scrollPosition) {
            const distance = Math.abs(elementTop - scrollPosition);
            if (distance < minDistance) {
              minDistance = distance;
              activeSection = id;
            }
          }
        }
      });

      if (activeSection && sectionToIndexMap[activeSection] !== undefined) {
        const newIndex = sectionToIndexMap[activeSection];
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    };

    // Throttled scroll handler
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          findActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    findActiveSection();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", findActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", findActiveSection);
    };
  }, [customMenuItems, activeIndex]);
  if (!mounted) return null;

  return (
    <>
      <div className="bg-background fixed bottom-2 left-1/2 z-50 w-full -translate-x-1/2 rounded-lg">
        <MenuDock
          items={customMenuItems}
          variant="default"
          animated={false}
          activeIndex={activeIndex}
        />

        {/* <div className="bg-background dark:bg-background fixed inset-x-0 -bottom-1 h-16 w-full to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]"></div> */}
      </div>
    </>
  );
}
