"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeaderBadge } from "@/components/ui/header-badge";
import { MdEmail } from "react-icons/md";
import { BorderBeam } from "@/components/ui/border-beam";
import Link from "next/link";
import ContactDialog from "./contact-dialog";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/akkaldhami",
    icon: "↗",
    description: "Check out my code"
  },
  {
    name: "LinkedIn",
    href: "https://github.com/akkaldhami",
    icon: "↗",
    description: "Professional profile"
  },
  {
    name: "Twitter",
    href: "https://github.com/akkaldhami",
    icon: "↗",
    description: "Latest updates"
  },
  {
    name: "Email",
    href: "mailto:dhamiakkal21@gmail",
    icon: "↗",
    description: "Send me an email"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-6 py-20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center">
          <HeaderBadge
            icon={<MdEmail className="size-4" />}
            text="Contact Me"
          />
          <h2 className="mb-4 text-3xl font-medium md:text-4xl">
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
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
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {socialLinks.map(social => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-linear-b group rounded-lg border border-zinc-500/40 p-4 text-center hover:border-zinc-400 dark:hover:border-zinc-500">
                <div className="text-muted-foreground group-hover:text-accent-foreground dark:group-hover:text-accent-foreground mb-2 text-2xl transition-colors">
                  {social.icon}
                </div>
                <div className="mb-1 font-medium">{social.name}</div>
                <div className="text-muted-foreground text-xs">
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
          <div className="rounded-2xl border p-8 md:p-12">
            <h3 className="mb-4 text-2xl font-bold md:text-3xl">
              Ready to Start Your Project?
            </h3>
            <p className="text-muted-foreground mx-auto mb-8 max-w-md">
              Let&apos;s schedule a call to discuss your ideas and how we can
              bring them to life.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <ContactDialog />
              <Button
                variant="outline"
                size="lg"
                className="border-zinc-500/30"
                asChild>
                <Link
                  href="mailto:hello@example.com"
                  className="hover:shadow-primary bg-linear-b relative cursor-pointer border border-zinc-500/30">
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
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
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
