import Image from "next/image";

export const Section5 = () => {
  return (
    <div className="text-white flex justify-between items-center flex-wrap-reverse gap-8">
      <div className="xl:flex-1 items-center flex justify-center w-full max-w-xl xl:max-w-full mx-auto">
        <Image
          src="/section-5/rocket-img.png"
          alt="Hero image"
          width={900}
          height={500}
          className="mix-blend-screen"
          quality={100}
          priority
        />
      </div>

      <div className="flex flex-col gap-6 flex-1 min-w-fit justify-center items-center x:justify-start xl:items-start xl:ml-40">
        <Image
          src="/section-5/icon.png"
          alt="Hero icon"
          width={50}
          height={50}
          className="xl:ml-4"
        />
        <div className="flex flex-col gap-4 items-center text-center xl:text-start xl:items-baseline">
          <h1 className="text-4xl xl:text-5xl font-bold text-primary">
            AI Agent
          </h1>
          <h2 className="text-4xl xl:text-5xl font-bold text-primary">
            Launchpad
          </h2>
          <div className="flex flex-col gap-4 max-w-lg">
            <p className="text-base xl:text-lg">
              Experience the future of AI with our launchpad, where you can chat
              with agents and explore innovative projects. 
            </p>
          </div>

          <button className="relative py-2 group w-fit text-lg xl:text-xl my-4 ml-4">
            <Image
              src="/button-border.png"
              alt="Button border"
              width={100}
              height={50}
              className="absolute top-1.5 left-[58px] xl:left-[65px] scale-x-[2.3] xl:scale-x-[2.4] scale-y-[1.7] group-hover:scale-x-0 group-hover:scale-y-0 transition-all"
            />
            <span className="bg-primary text-black font-bold py-2 px-12 text-nowrap">
              COMING SOON
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
