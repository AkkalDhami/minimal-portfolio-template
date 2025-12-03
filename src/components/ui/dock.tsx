"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
import { Home, Briefcase, Calendar, Shield, Settings } from "lucide-react";
import { cn } from "@/lib/utils";

type IconComponentType = React.ElementType<{ className?: string }>;

export interface MenuDockItem {
  label: string;
  icon: IconComponentType;
  onClick?: () => void;
}

export interface MenuDockProps {
  items?: MenuDockItem[];
  className?: string;
  variant?: "default" | "compact" | "large";
  orientation?: "horizontal" | "vertical";
  showLabels?: boolean;
  animated?: boolean;
  activeIndex?: number;
}

const defaultItems: MenuDockItem[] = [
  { label: "home", icon: Home },
  { label: "work", icon: Briefcase },
  { label: "calendar", icon: Calendar },
  { label: "security", icon: Shield },
  { label: "settings", icon: Settings },
];

export const MenuDock: React.FC<MenuDockProps> = ({
  items,
  className,
  variant = "default",
  orientation = "horizontal",
  showLabels = true,
  animated = true,
  activeIndex = 0,
}) => {
  const finalItems = useMemo(() => {
    const isValid =
      items && Array.isArray(items) && items.length >= 2 && items.length <= 8;
    if (!isValid) {
      console.warn(
        "MenuDock: 'items' prop is invalid or missing. Using default items.",
        items
      );
      return defaultItems;
    }
    return items;
  }, [items]);

  const [internalActiveIndex, setInternalActiveIndex] = useState(activeIndex);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineLeft, setUnderlineLeft] = useState(0);

  const textRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const containerRef = useRef<HTMLElement | null>(null);

  // Sync internal state with external activeIndex
  useEffect(() => {
    setInternalActiveIndex(activeIndex);
  }, [activeIndex]);

  // Use internal state for display
  const currentActiveIndex = internalActiveIndex;

  // In your MenuDock component, modify the handleItemClick function:
  const handleItemClick = (index: number, item: MenuDockItem) => {
    // Don't update active index for theme item
    if (item.label !== "theme") {
      setInternalActiveIndex(index);
    }

    // Scroll to section (only for non-theme items)
    if (item.label !== "theme") {
      const section = document.getElementById(item.label.toLowerCase());
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }

    // Call custom onClick if provided
    item.onClick?.();
  };

  // Underline animation update
  useEffect(() => {
    const updateUnderline = () => {
      const nav = containerRef.current;
      const activeButton = itemRefs.current[currentActiveIndex];
      const activeText = textRefs.current[currentActiveIndex];

      if (
        !nav ||
        !activeButton ||
        !activeText ||
        !showLabels ||
        orientation !== "horizontal"
      ) {
        setUnderlineWidth(0);
        setUnderlineLeft(0);
        return;
      }

      const buttonRect = activeButton.getBoundingClientRect();
      const textRect = activeText.getBoundingClientRect();
      const containerRect = nav.getBoundingClientRect();

      const scrollLeft = nav.scrollLeft || 0;
      const left =
        buttonRect.left -
        containerRect.left +
        scrollLeft +
        (buttonRect.width - textRect.width) / 2;

      setUnderlineWidth(Math.max(4, textRect.width));
      setUnderlineLeft(left);
    };

    updateUnderline();

    const navEl = containerRef.current;
    window.addEventListener("resize", updateUnderline);
    navEl?.addEventListener("scroll", updateUnderline);

    const mo = new MutationObserver(updateUnderline);
    if (navEl)
      mo.observe(navEl, {
        childList: false,
        subtree: true,
        attributes: true,
        attributeFilter: ["class", "style"],
      });

    return () => {
      window.removeEventListener("resize", updateUnderline);
      navEl?.removeEventListener("scroll", updateUnderline);
      mo.disconnect();
    };
  }, [currentActiveIndex, finalItems, showLabels, orientation]);

  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case "compact":
        return {
          container: "p-1",
          item: "py-2 px-3 min-w-16",
          icon: "h-4 w-4",
          text: "text-xs",
        };
      case "large":
        return {
          container: "p-3",
          item: "p-3 min-w-16",
          icon: "h-6 w-6",
          text: "text-base",
        };
      default:
        return {
          container: "px-3 py-2",
          item: "px-3 py-2 sm:min-w-14",
          icon: "h-5 w-5",
          text: "text-sm",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <nav
      ref={containerRef}
      className={cn(
        "fixed bg-transparent border-neutral-500/60 dark:border-neutral-500/60 bottom-3 max-w-[700px] mx-auto overflow-x-auto sm:w-full right-2 sm:left-1/2 sm:-translate-x-1/2 z-50",
        "inline-flex items-center rounded-xl bg-background border shadow-sm space-y-1 sm:space-x-2",
        orientation === "horizontal" ? "flex-col sm:flex-row" : "flex-col",
        styles.container,
        className
      )}
      role="navigation">
      {finalItems.map((item, index) => {
        const isActive = item.label !== "theme" && index === currentActiveIndex;
        const IconComponent = item.icon;

        return (
          <button
            key={item.label}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            onClick={() => handleItemClick(index, item)}
            className={cn(
              "relative flex group px-3 cursor-pointer flex-col items-center justify-center rounded-lg transition-all duration-200 border border-transparent",
              "hover:border-neutral-500/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              styles.item,
              isActive
                ? "text-primary border-neutral-500/90"
                : "text-muted-foreground border-transparent hover:text-foreground"
            )}
            type="button"
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}>
            <IconComponent
              className={cn(styles.icon, "transition-colors duration-200")}
            />

            {showLabels && (
              <span
                ref={(el) => {
                  textRefs.current[index] = el;
                }}
                className={cn(
                  "font-medium hidden sm:block transition-colors duration-200 capitalize",
                  styles.text,
                  isActive ? "text-primary font-semibold" : ""
                )}>
                {item.label}
              </span>
            )}
          </button>
        );
      })}

      {showLabels && orientation === "horizontal" && (
        <div
          className={cn(
            "absolute opacity-0 sm:opacity-100 bottom-3 h-0.5 bg-primary rounded-full transition-all duration-300 ease-out",
            animated ? "transition-all duration-300" : ""
          )}
          style={{
            width: `${underlineWidth}px`,
            transform: `translateX(${underlineLeft}px)`,
            left: 0,
          }}
        />
      )}
    </nav>
  );
};
