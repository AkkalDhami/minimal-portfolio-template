"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderBadge } from "../ui/header-badge";
import { FlipWords } from "../ui/flip-words";
import { BorderBeam } from "../ui/border-beam";

import SocialLinks from "./socials";
import ContactDialog from "./contact-dialog";
import Link from "next/link";

export default function CoolHeroSection() {
  const words = [
    "Backend Developer with Node & Express",
    "Frontend Developer with React & TypeScript",
    "Full Stack JavaScript Developer",
    "Next.js & React.js Developer with TypeScript",
    "Next.js Developer focused on speed and scalability",
    "RESTful & GraphQL API Architect",
    "Modern Web App Builder",
    "Tech Enthusiast and Problem Solver",
    "Lifelong Learner and Innovator",
    "Developer focused with clean, maintainable code",
    "Builder of modern digital experiences",
    "JavaScript Lover and Ecosystem Explorer",
    "TypeScript Advocate",
    "Engineer dedicated to building scalable systems",
  ];

  const techStack = [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "GraphQL",
    "REST API",
    "MongoDB",
    "MySQL",
  ];

  return (
    <section
      id="about"
      className="min-h-[90vh] h-full relative flex items-center justify-center overflow-hidden bg-background px-4 mb-8">
      <div
        aria-hidden
        className="absolute inset-0 isolate hidden contain-strict lg:block">
        <div className="w-140 h-320 -translate-y-87.5 absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
        <div className="h-320 absolute left-0 top-0 w-60 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
        <div className="h-320 -translate-y-87.5 absolute left-0 top-0 w-60 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
      </div>
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.08) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.08) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
          backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
        }}
      />

  
      <div className="container mx-auto relative z-10">
        <div className="items-center mt-4 sm:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl sm:text-5xl font-bold mb-5">
            It&apos;s me Akkal Dhami
          </motion.h1>
          <HeaderBadge
            icon={<Sparkles className="size-3" />}
            text="Available for new projects"
          />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col text-center mt-3 lg:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-3xl font-semibold mb-6">
              <FlipWords words={words} />
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-muted-foreground mb-8 max-w-xl leading-relaxed w-full">
              I create modern, responsive web applications with
              {techStack.map((tech, i) =>
                i === techStack.length - 1 ? (
                  <span
                    key={tech}
                    className="text-accent-foreground">{` and ${tech}. `}</span>
                ) : (
                  <span
                    key={tech}
                    className="text-accent-foreground">{` ${tech}, `}</span>
                )
              )}
              Clean code, smooth experiences, and modern design are at the heart
              of what I do.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 flex-wrap justify-center lg:justify-start items-center mb-12">
              <Button
                size="lg"
                variant={"outline"}
                asChild
                className="group hover:shadow-primary border border-zinc-500/10  cursor-pointer relative bg-linear-t">
                <Link href={"#projects"}>
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  <BorderBeam
                    size={40}
                    initialOffset={20}
                    className="from-transparent via-zinc-900 dark:via-zinc-50 to-transparent"
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 20,
                    }}
                  />
                </Link>
              </Button>
              <ContactDialog />
            </motion.div>

            <SocialLinks />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
