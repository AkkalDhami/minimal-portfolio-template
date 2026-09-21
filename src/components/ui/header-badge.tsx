"use client";

import React, { ReactNode } from "react";
import { BorderBeam } from "./border-beam";

interface HeaderBadgeProps {
  icon: ReactNode;
  text: string;
}

export const HeaderBadge: React.FC<HeaderBadgeProps> = ({ icon, text }) => {
  return (
    <div className="bg-linear-r group shadow-tertiary relative mb-6 inline-flex items-center space-x-2 rounded-full border px-4 py-2">
      {icon}
      <span className="text-foreground/90 text-sm">{text}</span>

      <BorderBeam
        size={40}
        duration={12}
        initialOffset={20}
        className="from-transparent via-zinc-900 to-transparent dark:via-zinc-50"
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20
        }}
      />
    </div>
  );
};
