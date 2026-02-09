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
  { label: "settings", icon: Settings }
];

export const MenuDock: React.FC<MenuDockProps> = ({
  items,
  className,
  variant = "default",
  orientation = "horizontal",
  showLabels = true,
  activeIndex = 0
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

  // Variant styles
  const getVariantStyles = () => {
    switch (variant) {
      case "compact":
        return {
          container: "p-1",
          item: "py-2 px-3 min-w-16",
          icon: "h-4 w-4",
          text: "text-xs"
        };
      case "large":
        return {
          container: "p-3",
          item: "p-3 min-w-16",
          icon: "h-6 w-6",
          text: "text-base"
        };
      default:
        return {
          container: "px-3 py-2",
          item: "px-3 py-2 sm:min-w-14",
          icon: "h-5 w-5",
          text: "text-sm"
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <nav
      ref={containerRef}
      className={cn(
        "fixed right-2 bottom-3 z-50 mx-auto max-w-[700px] overflow-x-auto border-neutral-500/60 bg-transparent sm:left-1/2 sm:w-full sm:-translate-x-1/2 dark:border-neutral-500/60",
        "bg-background inline-flex items-center space-y-1 rounded-xl border shadow-sm sm:space-x-2",
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
            ref={el => {
              itemRefs.current[index] = el;
            }}
            onClick={() => handleItemClick(index, item)}
            className={cn(
              "group relative flex cursor-pointer flex-col items-center justify-center rounded-lg border border-transparent px-3 transition-all duration-200",
              "focus-visible:ring-ring hover:border-neutral-500/70 focus-visible:ring-2 focus-visible:outline-none",
              styles.item,
              isActive
                ? "text-primary border-neutral-500/90"
                : "text-muted-foreground hover:text-foreground border-transparent"
            )}
            type="button"
            aria-label={item.label}
            aria-current={isActive ? "page" : undefined}>
            <IconComponent
              className={cn(styles.icon, "transition-colors duration-200")}
            />

            {showLabels && (
              <span
                ref={el => {
                  textRefs.current[index] = el;
                }}
                className={cn(
                  "hidden font-medium capitalize transition-colors duration-200 sm:block",
                  styles.text,
                  isActive ? "text-primary font-semibold" : ""
                )}>
                {item.label}
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
};
