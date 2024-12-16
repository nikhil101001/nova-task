import { HeroSection } from "@/components/HeroSection";
import { ExploreSection } from "@/components/Section-2";
import { ChartSection } from "@/components/Section-3";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-32 overflow-hidden">
      <div className="container mx-auto p-4 flex flex-col gap-32">
        <div className="fixed top-0 left-0 w-full h-full bg-[url('/assets/grains.png')] bg-repeat bg-contain opacity-35 -z-20" />

        <HeroSection />
        <ExploreSection />
      </div>

      <div className="relative overflow-hidden ">
        <div className="h-full absolute top-0 left-0 w-screen">
          <Image
            src="/assets/section-3/pattern.png"
            alt="Pattern"
            fill
            className="object-fill scale-y-[1.4]"
          />
        </div>

        <div className="container mx-auto p-4">
          <ChartSection />
        </div>
      </div>
    </main>
  );
}
