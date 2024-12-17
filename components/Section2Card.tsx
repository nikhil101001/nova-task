import Image from "next/image";
import Link from "next/link";

interface Props {
  product: {
    id: number;
    title: string;
    tag: string;
    description: string;
    image: string;
    link: string;
  };
}

export const Section2Card = ({ product }: Props) => {
  return (
    <Link href={product.link}>
      <div className="border-primary border rounded-xl flex flex-col gap-4 max-w-sm overflow-hidden min-w-[300px] h-full">
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={500}
          className="object-cover"
          priority
        />

        <div className="flex flex-col gap-4 p-6 border-t border-primary">
          <h2 className="text-xl font-bold text-primary">{product.title}</h2>
          <h2 className="text-base xl:text-lg font-bold">{product.tag}</h2>
          <p className="text-base xl:text-lg">{product.description}</p>
        </div>
      </div>
    </Link>
  );
};
