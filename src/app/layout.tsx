import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Orpheo Digital",
  description: "A melhor escolha em soluções digitais",
  keywords: ["Next.js", "React", "Landing Page"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
