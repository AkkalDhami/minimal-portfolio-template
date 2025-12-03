"use client";

import React, { ReactNode } from "react";
import { BorderBeam } from "./border-beam";

interface HeaderBadgeProps {
  icon: ReactNode;
  text: string;
}

export const HeaderBadge: React.FC<HeaderBadgeProps> = ({ icon, text }) => {
  return (
    <div className="inline-flex bg-linear-r relative group items-center space-x-2 border rounded-full px-4 py-2 mb-6">
      {icon}
      <span className="text-sm text-foreground/90">{text}</span>
      <div className="absolute bottom-[-0.5px] left-1/2 -translate-x-1/2 h-px w-[calc(100%-24px)] bg-linear-to-r ffrom-transparent via-zinc-500 dark:via-zinc-500 to-transparent"></div>
      <div className="absolute -top-px left-1/2 -translate-x-1/2 h-px w-[calc(100%-24px)] bg-linear-to-r from-transparent via-zinc-500 dark:via-zinc-500 to-transparent"></div>

      <BorderBeam
        size={40}
        duration={12}
        initialOffset={20}
        className="from-transparent via-zinc-900 dark:via-zinc-50 to-transparent"
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
      />
    </div>
  );
};
