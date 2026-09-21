import React from "react";
import { Badge } from "@/components/ui/badge";

interface Tech {
  name: string;
  icon: any;
}

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <Badge
      variant={"outline"}
      className="bg-linear-l flex items-center gap-1.5 border border-zinc-200 px-3 py-1.5 font-normal duration-200 hover:border-zinc-400 dark:border-zinc-700 dark:hover:border-zinc-500">
      {tech.icon && <tech.icon className="h-3 w-3" />}
      {tech.name}
    </Badge>
  );
}

export default TechBadge;
