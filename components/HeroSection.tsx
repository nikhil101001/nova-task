import Image from "next/image";

export const HeroSection = () => {
  return (
    <div className="text-white flex justify-between items-center flex-wrap-reverse gap-8 mt-16">
      <div className="flex flex-col gap-6 flex-1 min-w-fit">
        <Image
          src="/hero-icon.png"
          alt="Hero icon"
          width={100}
          height={100}
          className="xl:block hidden"
        />
        <div className="flex flex-col gap-4 items-center text-center xl:text-start xl:items-baseline">
          <h1 className="text-4xl xl:text-5xl font-bold text-primary">
            Welcome to Nova:
          </h1>
          <h2 className="text-4xl xl:text-5xl font-bold text-primary">
            Your Portal to AI Gaming
          </h2>
          <div className="flex flex-col gap-4 max-w-lg">
            <p className="text-base xl:text-lg">
              Nova is an interactive agent orchestration layer, creating a
              seamless experience for brands like Magic Eden.
            </p>

            <ul className="list-disc text-base xl:text-lg ml-12 text-start">
              <li>Connect effortlessly with various AI agents.</li>
              <li>
                Unlock innovative gaming experiences with AI-driven
                interactions.
              </li>
              <li>
                Experience a new dimension of interaction that promotes user
                retention.
              </li>
            </ul>
          </div>

          <button className="relative py-2 group w-fit text-lg xl:text-xl my-4 ml-4">
            <Image
              src="/button-border.png"
              alt="Button border"
              width={100}
              height={50}
              className="absolute top-1.5 left-[68px] xl:left-[76px] scale-x-[2.6] xl:scale-x-[2.7] scale-y-[1.8] group-hover:scale-x-0 group-hover:scale-y-0 transition-all"
            />
            <span className="bg-primary text-black font-bold py-2 px-12 text-nowrap">
              CHAT WITH NOVA
            </span>
          </button>
        </div>
      </div>

      <div className="xl:flex-1 items-center flex justify-center w-full max-w-xl xl:max-w-full mx-auto">
        <Image
          src="/hero-img.png"
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
