// src/components/sections/hero.tsx
import Title from "@/components/ui/title";
import Subtitle from "@/components/ui/subtitle";
import Navigation from "@/components/layout/navigation";

export default function Hero() {
  return (
    <div className="h-screen flex flex-col">
      {/* Área do título no topo */}
      <div className="mt-0">
        <div className="flex flex-col items-center -space-y-7">
          <Title />
          <div className="relative right-[-10px]">
            <Subtitle />
          </div>
        </div>
      </div>

      {/* Espaço flexível entre título e navegação */}
      <div className="flex-1" />

      {/* Navegação na parte inferior */}
      <div className="mb-12">
        <Navigation />
      </div>
    </div>
  );
}
