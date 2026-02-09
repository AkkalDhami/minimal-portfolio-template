"use client";

import { motion } from "motion/react";
import { Heart } from "lucide-react";
import SocialLinks from "./socials";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mb-24 border-t">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-muted-foreground order-2 text-sm sm:order-1">
            © {currentYear} Akkal Dhami. All rights reserved.
          </div>

          <div className="text-muted-foreground order-3 flex items-center gap-2 text-sm">
            <span>Made with</span>
            <motion.div
              animate={{
                scale: [1, 1.3, 1, 1.3, 1]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}>
              <Heart className="text-accent-foreground h-3 w-3 fill-current" />
            </motion.div>
            <span>by Akkal Dhami</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
