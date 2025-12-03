"use client";
import Link from "next/link";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "motion/react";
import { Mail } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
function SocialLinks({
  isLarge = true,
  onlyIcons = false,
}: {
  isLarge?: boolean;
  onlyIcons?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.9 }}
      className="flex gap-4 w-full justify-center lg:justify-start">
      {[
        {
          icon: FiGithub,
          href: "https://github.com/akkaldhami",
          label: "GitHub",
        },
        { icon: FiLinkedin, href: "#", label: "LinkedIn" },
        {
          icon: Mail,
          href: "mailto:dhamiakkal21@gmail.com",
          label: "Email",
        },
      ].map((social) => (
        <motion.div
          key={social.label}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            variant="outline"
            size="icon"
            className={cn(
              "rounded-sm hover:shadow-primary w-auto cursor-pointer px-2 py-1 h-7 backdrop-blur-sm border bg-linear-l",
              isLarge && "px-3 py-2 h-9"
            )}>
            <Link href={social.href} target="_blank">
              <social.icon className={isLarge ? "size-4" : "size-3"} />

              {!onlyIcons && <span className="">{social.label}</span>}
            </Link>
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default SocialLinks;
