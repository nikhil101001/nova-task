import Image from "next/image";
import { Section2Card } from "./Section2Card";
import { homeProducts } from "@/util/data";

export const ExploreSection = () => {
  return (
    <div className="flex items-center gap-8 flex-col xl:flex-row">
      <div className="flex flex-col gap-8 max-w-sm items-center justify-center text-center xl:items-start xl:text-start">
        <Image
          src="/assets/section-2/icon.png"
          alt="Icon"
          width={50}
          height={50}
        />
        <p className="text-3xl xl:text-5xl font-bold text-primary hidden xl:block">
          Explore Our Suite of AI Agent Products
        </p>
        <p className="text-3xl xl:text-5xl font-bold text-primary xl:hidden">
          POWERED BY NOVA
        </p>
        <p className="text-base xl:text-lg">
          AI-Powered Gaming Orchestration Across Reddit, Telegram, and Discord.
        </p>
        <p
          className="text-base xl:hidden text-center
        "
        >
          Explore top projects powered by{" "}
          <span
            className="text-primary
          "
          >
            Nova
          </span>
        </p>
      </div>

      <div className="flex-1 w-full relative p-4 overflow-hidden group">
        <div className="lg:shadow-[120px_0px_85px_#000000_inset] shadow-[80px_0px_85px_#000000_inset] h-full w-full absolute top-0 left-0 z-10" />
        <div className="carousel-container mx-auto">
          <div className="flex gap-4 h-full carousel-items gap-x-8 w-full group-hover:pause">
            {[...homeProducts, ...homeProducts].map((product, index) => (
              <Section2Card key={index} product={product} />
            ))}
          </div>
        </div>
        <div className="lg:shadow-[120px_0px_85px_#000000_inset] shadow-[80px_0px_85px_#000000_inset] h-full w-full absolute top-0 left-0 -scale-100" />
      </div>
    </div>
  );
};
