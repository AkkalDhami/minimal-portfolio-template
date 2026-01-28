import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Navbar } from "@/components/home/dock-navbar";
import { Toaster } from "@/components/ui/sonner";

const font = Geist_Mono({
  weight: ["400", "500", "700", "300", "600", "800"],
  subsets: ["latin"]
});

export const metadata: Metadata = {
  title: "Akkal Dhami - Full Stack Developer",
  description:
    "Portfolio of Akkal Dhami, a skilled Full Stack Developer specializing in modern web applications using React, Next.js, Node.js, and TypeScript. Explore projects, skills, and contact information."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <main className="max-w-5xl px-4 mx-auto">
            {children}
            <Navbar />
          </main>

          <Toaster position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
