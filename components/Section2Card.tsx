import Image from "next/image";

export const Section2Card = () => {
  return (
    <div className="border-primary border rounded-xl flex flex-col gap-4 max-w-sm overflow-hidden -z-10 min-w-[300px]">
      <Image
        src="/assets/section-2/image.png"
        alt="Image"
        width={500}
        height={500}
        className="object-cover"
        priority
      />

      <div className="flex flex-col gap-4 p-6 border-t border-primary">
        <h2 className="text-xl font-bold text-primary">NOVA ON REDDIT</h2>
        <p className="text-base xl:text-lg">
          LLM + D&D Engage in epic adventures with our AI-powered Dungeons &
          Dragons experiences.
        </p>
      </div>
    </div>
  );
};
