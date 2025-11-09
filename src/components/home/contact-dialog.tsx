"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Input } from "../ui/input";
import { useState } from "react";
import { Send } from "lucide-react";
import { Label } from "../ui/label";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name) {
      toast.error("Please enter your name.");
      return;
    } else if (!formData.email) {
      toast.error("Please enter your email.");
      return;
    } else if (!formData.message) {
      toast.error("Please enter your message.");
      return;
    }

    console.log("Form submitted:", formData);
    setIsOpen(false);
    setFormData({ name: "", email: "", message: "" });
    toast.success("Message sent successfully!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <InteractiveHoverButton> Let&apos;s Talk</InteractiveHoverButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Get in Touch</DialogTitle>
          <p className="text-sm text-muted-foreground">
            Ready to start your project?
          </p>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Your Email *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              name="message"
              className="resize-none"
              placeholder="Briefly describe your project or inquiry..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full cursor-pointer">
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default ContactDialog;
