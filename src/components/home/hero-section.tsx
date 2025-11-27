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
      className="min-h-[90vh] relative flex items-center justify-center overflow-hidden bg-background px-4 mb-8">
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

      {/* Floating Grid */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-linear(#ffffff 1px, transparent 1px),
                           linear-linear(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
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
              className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed w-full">
              I create modern, responsive web applications with
              {techStack.map((tech, i) => (
                <strong
                  key={i}
                  className="text-accent-foreground rounded-sm border ml-3 bg-neutral-100 dark:bg-neutral-900 px-2 py-1.5 duration-200">
                  {tech}
                  {i === techStack.length - 1 ? "." : ","}
                </strong>
              ))}
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
                className="group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-zinc-500/30  cursor-pointer relative bg-transparent dark:bg-transparent">
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
