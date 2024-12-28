// src/components/layout/navigation.tsx
"use client";

import { neueRegrade } from "@/lib/fonts";
import { useState } from "react";

const menuItems = [
  { title: "SOBRE", href: "#sobre" },
  { title: "PROJETOS", href: "#projetos" },
  { title: "SERVIÇOS", href: "#servicos" },
  { title: "CONTATO", href: "#contato" },
];

export default function Navigation() {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  return (
    <nav className="w-full flex justify-center">
      <div className="bg-[#111111] rounded-full px-8 py-4 flex items-center gap-12">
        {menuItems.map((item) => (
          <button
            key={item.title}
            onClick={() => setActiveItem(item.title)}
            className={`${neueRegrade.className} text-sm tracking-[0.2em]
              relative px-4 py-2 rounded-full transition-all duration-300 ease-out
              ${
                activeItem === item.title
                  ? "text-black bg-white"
                  : "text-text/80"
              }
              hover:text-black hover:bg-white`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </nav>
  );
}
