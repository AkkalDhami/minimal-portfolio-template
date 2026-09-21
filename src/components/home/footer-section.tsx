"use client";

import { motion } from "motion/react";
import { Axe, Heart } from "lucide-react";
import Link from "next/link";

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
            <Axe className="text-accent-foreground h-3 w-3" />
            <span>by</span>
            <Link
              href={"https://akkal.com.np"}
              target="_blank"
              className="text-accent-foreground hover:underline">
              Akkal Dhami
            </Link>
          </div>
          <Link
            href={"https://github.com/akkaldhami/minimal-portfolio-template"}
            target="_blank"
            className="text-accent-foreground text-sm hover:underline">
            Source code
          </Link>
        </div>
      </div>
    </footer>
  );
}
