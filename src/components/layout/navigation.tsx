// src/components/layout/navigation.tsx
"use client";

import { neueRegrade } from "@/lib/fonts";
import { useState } from "react";

const menuItems = [
  { title: "Introdução", href: "#sobre" },
  { title: "Serviços", href: "#projetos" },
  { title: "Cases", href: "#servicos" },
  { title: "Quem somos", href: "#contato" },
  { title: "Contato", href: "#contato", isSpecial: true },
];

export default function Navigation() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="w-full flex justify-center">
      <div className="bg-[#111111] rounded-full px-8 py-4 flex items-center gap-6">
        {menuItems.map((item) => (
          <button
            key={item.title}
            onClick={() => setActiveItem(item.title)}
            className={`${neueRegrade.className} text-sm tracking-[0.2em]
              relative px-4 py-2 rounded-full transition-all duration-300 ease-out
              ${
                item.isSpecial
                  ? activeItem === item.title
                    ? "text-black bg-[#32E978]"
                    : "text-text/80 hover:text-black hover:bg-[#32E978]"
                  : activeItem === item.title
                  ? "text-black bg-white"
                  : "text-text/80 hover:text-black hover:bg-white"
              }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
