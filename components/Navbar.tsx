import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-white pt-8">
      <div className="mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image src="/logo.png" alt="Nova logo" width={100} height={50} />
          </Link>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-11 items-center text-xl">
            <li className="hover:text-primary">
              <Link href="#">
                <span>Documentation</span>
              </Link>
            </li>

            <li className="hover:text-primary">
              <Link href="#">
                <span>SDK</span>
              </Link>
            </li>
            <li className="relative py-2 group">
              <Link href="#">
                <Image
                  src="/button-border.png"
                  alt="Button border"
                  width={100}
                  height={50}
                  className="absolute top-[7px] left-[9px] scale-x-[1.3] scale-y-[1.7] group-hover:scale-x-0 group-hover:scale-y-0 transition-all"
                />
                <span className="bg-primary text-black font-bold py-2 px-4">
                  CONTACT
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* hamburger menu */}
        <div className="md:hidden">
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/hamburger.png"
                alt="Hamburger menu"
                width={40}
                height={40}
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
