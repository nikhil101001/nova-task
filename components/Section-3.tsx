import Image from "next/image";
import React from "react";

export const ChartSection = () => {
  return (
    <div className="text-primary border-2 border-primary rounded-xl overflow-hidden">
      <div className="flex flex-col gap-4 p-20 px-4 justify-center items-center bg-black bg-gradient-to-r from-[#05D37140] to-[#0A8B4E40] relative overflow-hidden">
        <Image
          src="/assets/section-3/header-grain.png"
          alt="Header grain"
          width={800}
          height={800}
          className="mix-blend-screen absolute -top-[80%] -left-[15%] rotate-90"
        />
        <h2 className="text-5xl font-bold text-primary text-center">
          Powered by $NOVA
        </h2>
        <p className="text-center">Compare AI tokens and their MCAPs</p>
        <Image
          src="/assets/section-3/header-grain.png"
          alt="Header grain"
          width={800}
          height={800}
          className="mix-blend-screen absolute -top-[70%] -right-[15%] -rotate-90"
        />
      </div>

      <div className="bg-[#191617] border-t border-primary relative w-[1000px] md:w-full">
        <div className="flex gap-8 justify-center items-center border border-primary rounded-xl p-4 px-8 w-fit md:mx-auto bg-[#191617] -mt-8 z-20 font-bold mx-8">
          <button>REDDIT SCENARIOS</button>
          <button>NOVA IN TELEGRAM</button>
          <button>ME TELEGRAM APP</button>
        </div>
        <Image
          src="/assets/section-3/graph.png"
          alt="Graph"
          width={1000}
          height={1000}
          quality={100}
          priority
          className="p-12 w-full object-contain min-h-[500px]"
        />
      </div>
    </div>
  );
};
