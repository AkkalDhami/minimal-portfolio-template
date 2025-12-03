"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderBadge } from "../ui/header-badge";
import { MdEmail } from "react-icons/md";
import { BorderBeam } from "../ui/border-beam";
import Link from "next/link";
import ContactDialog from "./contact-dialog";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/akkaldhami",
    icon: "↗",
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    href: "https://github.com/akkaldhami",
    icon: "↗",
    description: "Professional profile",
  },
  {
    name: "Twitter",
    href: "https://github.com/akkaldhami",
    icon: "↗",
    description: "Latest updates",
  },
  {
    name: "Email",
    href: "mailto:dhamiakkal21@gmail",
    icon: "↗",
    description: "Send me an email",
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16">
          <HeaderBadge
            icon={<MdEmail className="size-4" />}
            text="Contact Me"
          />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Reach out and let&apos;s create
            something amazing together.
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-lg bg-linear-b border border-zinc-500/40 hover:border-zinc-400 dark:hover:border-zinc-500 group text-center">
                <div className="text-2xl mb-2 text-muted-foreground group-hover:text-accent-foreground dark:group-hover:text-accent-foreground transition-colors">
                  {social.icon}
                </div>
                <div className="font-medium mb-1">{social.name}</div>
                <div className="text-xs text-muted-foreground">
                  {social.description}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center">
          <div className="border  rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Let&apos;s schedule a call to discuss your ideas and how we can
              bring them to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ContactDialog />
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-500/30"
                asChild>
                <Link
                  href="mailto:hello@example.com"
                  className="border border-zinc-500/30  cursor-pointer relative bg-transparent dark:bg-transparent">
                  <Mail className="h-4 w-4 mr-2" />
                  Send Email
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
