import Image from "next/image";

export const Section4 = () => {
  return (
    <div className="text-white flex justify-between items-center flex-wrap gap-8">
      <div className="flex flex-col gap-6 flex-1 min-w-fit justify-center items-center x:justify-start xl:items-start">
        <Image
          src="/section-4/terminal-icon.png"
          alt="Hero icon"
          width={50}
          height={50}
          className="xl:ml-4"
        />
        <div className="flex flex-col gap-4 items-center text-center xl:text-start xl:items-baseline">
          <h1 className="text-4xl xl:text-5xl font-bold text-primary">
            Terminal:
          </h1>
          <h2 className="text-4xl xl:text-5xl font-bold text-primary">
            The Brain of Nova
          </h2>
          <div className="flex flex-col gap-4 max-w-lg">
            <p className="text-base xl:text-lg">
              Explore the inner workings of Nova through the terminal. Witness
              how Nova engages with users on Reddit and Telegram, showcasing her
              omnipresent intelligence and strategic thinking.
            </p>
          </div>

          <button className="relative py-2 group w-fit text-lg xl:text-xl my-4 ml-4">
            <Image
              src="/button-border.png"
              alt="Button border"
              width={100}
              height={50}
              className="absolute top-1.5 left-[88px] xl:left-[98px] scale-x-[2.9] xl:scale-x-[3.1] scale-y-[1.7] group-hover:scale-x-0 group-hover:scale-y-0 transition-all"
            />
            <span className="bg-primary text-black font-bold py-2 px-12 text-nowrap">
              ENTER THE TERMINAL
            </span>
          </button>
        </div>
      </div>

      <div className="xl:flex-1 items-center flex justify-center w-full max-w-xl mx-auto xl:max-w-full">
        <Image
          src="/section-4/image.png"
          alt="Hero image"
          width={900}
          height={500}
          className="mix-blend-screen"
          quality={100}
          priority
        />
      </div>
    </div>
  );
};
