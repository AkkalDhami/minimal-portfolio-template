"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Check, LinkIcon } from "lucide-react";
import { formatDate, Project } from "./project-section";
import { SiGithub } from "react-icons/si";
import Link from "next/link";
import TechBadge from "./tech-badge";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="overflow-hidden bg-transparent dark:bg-transparent border  transition-all duration-300">
      <div className="lg:flex">
        {/* Project Image */}
        <div className="lg:w-2/5 relative overflow-hidden">
          <div className="aspect-video lg:aspect-auto lg:h-full relative">
            {project.image ? (
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500"
              />
            ) : (
              <Skeleton className="h-full w-full rounded-lg m-3" />
            )}

            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-neutral-700 dark:text-neutral-300 border-0">
                {project.category}
              </Badge>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="lg:w-3/5">
          <CardContent className="p-6 lg:p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl md:text-2xl font-medium mb-2">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(project.createdAt)}</span>
                </div>
              </div>
            </div>

            <p className=" mb-6 leading-relaxed">{project.description}</p>

            {/* Features */}
            <div className="mb-6">
              <h4 className="text-base font-semibold mb-3">Key Features:</h4>
              <ul className="flex flex-col space-y-2.5">
                {project.features.slice(0, 4).map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center font-medium text-base text-muted-foreground">
                    <Check className="h-4 w-4 mr-2" /> {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div className="mb-6">
              <h4 className="text-base font-semibold t mb-3">Technologies:</h4>
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
                  className="flex items-center gap-2 rounded-sm w-auto cursor-pointer px-3 backdrop-blur-sm border border-zinc-500/30 dark:border-zinc-500/40 hover:border-zinc-400 dark:hover:border-zinc-500 bg-transparent duration-300  dark:bg-transparent">
                  <LinkIcon className="h-4 w-4" />
                  Live Demo
                </Link>
              )}
              <Button
                variant="default"
                size="sm"
                className="flex items-center gap-2"
                asChild>
                <Link href={project.githubUrl} target="_blank">
                  <SiGithub className="h-4 w-4" />
                  Source Code
                </Link>
              </Button>
            </div>
          </CardContent>
        </div>
      </div>
    </Card>
  );
}
