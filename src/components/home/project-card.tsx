"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, LinkIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import TechBadge from "./tech-badge";

import { Project } from "./project-section";
import { DetailSwapCard } from "./card";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden border-0 bg-transparent shadow-none dark:bg-transparent">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <div className="relative aspect-video">
          <DetailSwapCard
            data={{
              images: project.images
            }}
            imageHeight={480}
            imageFit="cover"
            showThumbnailNavigator
            showDotIndicator
            showImageCounter={false}
          />

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <Badge className="border border-neutral-500/30 bg-neutral-900 px-3 backdrop-blur-sm dark:bg-neutral-100">
              {project.category}
            </Badge>
          </div>
        </div>
      </div>

      {/* Project Content */}
      <CardContent className="p-4 lg:p-8">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="mb-2 text-xl font-medium md:text-2xl">
              {project.title}
            </h3>
          </div>
        </div>

        <p className="mb-6 leading-relaxed">{project.description}</p>

        {/* Features */}
        <div className="mb-6">
          <h4 className="mb-3 text-base font-semibold">Key Features:</h4>
          <ul className="flex flex-col space-y-2.5">
            {project.features.slice(0, 4).map((feature, idx) => (
              <li
                key={idx}
                className="text-muted-foreground flex items-center text-base font-medium">
                <Check className="mr-2 h-4 w-4" /> {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="mb-6">
          <h4 className="t mb-3 text-base font-semibold">Technologies:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <TechBadge key={idx} tech={tech} />
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-3">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              className="bg-linear-l hover:shadow-primary flex w-auto cursor-pointer items-center gap-2 rounded-sm border border-zinc-500/30 bg-transparent px-3 py-1 backdrop-blur-sm duration-300 hover:border-zinc-400 dark:border-zinc-500/40 dark:hover:border-zinc-500">
              <LinkIcon className="h-4 w-4" />
              Live Demo
            </Link>
          )}
          <Button
            variant="default"
            size="sm"
            className="hover:shadow-primary flex items-center gap-2"
            asChild>
            <Link href={project.githubUrl} target="_blank">
              <SiGithub className="h-4 w-4" />
              Source Code
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
