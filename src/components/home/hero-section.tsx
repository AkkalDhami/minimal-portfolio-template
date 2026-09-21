"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import { FlipWords } from "@/components/ui/flip-words";
import { BorderBeam } from "@/components/ui/border-beam";

import SocialLinks from "./socials";
import ContactDialog from "./contact-dialog";
import Link from "next/link";

export default function HeroSection() {
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
    "Engineer dedicated to building scalable systems"
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
    "MySQL"
  ];

  return (
    <section
      id="about"
      className="bg-background relative mb-8 flex h-full min-h-[90vh] items-center justify-center overflow-hidden px-4">
      <div className="relative z-10 container mx-auto">
        <div className="mt-4 items-center sm:mt-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-5 text-3xl font-medium sm:text-5xl">
            Akkal Dhami
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-3 flex flex-col text-center lg:text-left">
            <motion.h3
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-primary mb-6 text-lg font-medium md:text-xl">
              <FlipWords words={words} />
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-8 w-full max-w-xl text-xl leading-relaxed">
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
              className="mb-12 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <Button
                size="lg"
                variant={"outline"}
                asChild
                className="group hover:shadow-primary bg-linear-t relative cursor-pointer border border-zinc-500/10">
                <Link href={"#projects"}>
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <BorderBeam
                    size={40}
                    initialOffset={20}
                    className="from-transparent via-zinc-900 to-transparent dark:via-zinc-50"
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 20
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
