"use client";
import { GraduationCap, Mail, Package, User, Moon, Sun } from "lucide-react";

import { FaRegComments } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { MenuDock, MenuDockItem } from "../ui/dock";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function AppleStyleDock() {
  const [mount, setMount] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const customMenuItems: MenuDockItem[] = [
    {
      label: "About",
      icon: User,
      onClick: () => window.scrollTo(0, 0),
    },
    {
      label: "Projects",
      icon: Package,
      onClick: () => (window.location.href = "#projects"),
    },
    {
      label: "Skills",
      icon: VscTools,
      onClick: () => (window.location.href = "#skills"),
    },
    {
      label: "Education",
      icon: GraduationCap,
      onClick: () => (window.location.href = "#experiences"),
    },
    {
      label: "Testimonials",
      icon: FaRegComments,
      onClick: () => (window.location.href = "#testimonials"),
    },
    {
      label: "Contact",
      icon: Mail,
      onClick: () => (window.location.href = "#contact"),
    },
    {
      label: "Theme",
      icon: currentTheme === "dark" ? Sun : Moon,
      onClick: () => setTheme(currentTheme === "dark" ? "light" : "dark"),
    },
  ];

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  return (
    <>
      <div className="fixed bottom-4 rounded-lg bg-background z-10 left-1/2 max-w-full -translate-x-1/2">
        <MenuDock
          items={customMenuItems}
          variant="default"
          animated={false}
          className="bg-transparent border-neutral-500/60 dark:border-neutral-500/60"
        />

        <div className="fixed -bottom-10 inset-x-0 h-16 w-full bg-background to-transparent backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>
      </div>
    </>
  );
}
