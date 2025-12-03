import React from "react";
import { Badge } from "../ui/badge";

interface Tech {
  name: string;
  icon: any;
}

function TechBadge({ tech }: { tech: Tech }) {
  return (
    <Badge
      variant={"outline"}
      className="flex bg-linear-l items-center border border-zinc-200 dark:border-zinc-700 hover:border-zinc-400 dark:hover:border-zinc-500 gap-1.5 duration-200 font-normal px-3 py-1.5">
      {tech.icon && <tech.icon className="w-3 h-3" />}
      {tech.name}
    </Badge>
  );
}

export default TechBadge;
