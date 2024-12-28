// src/app/layout.tsx
import type { Metadata } from "next";
import { bebasNeue, neueRegrade } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Orpheo Digital",
  description: "Your awesome description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${neueRegrade.variable}`}>
      <body className={bebasNeue.className}>
        <main className="relative min-h-screen">{children}</main>
      </body>
    </html>
  );
}
