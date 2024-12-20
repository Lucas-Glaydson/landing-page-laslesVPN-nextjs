import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full lg:justify-evenly font-rubik justify-between px-6 py-4">
      <div className="flex w-[50%] space-x-40 items-center">
        <div className="flex space-x-1 items-center">
          <Image className="lg:w-7 lg:h-7" src="/logo.svg" alt="page logo" width={20} height={20} />
          <h1 className="lg:text-[16px] text-[15px]">
            Lasles<span className="font-semibold">VPN</span>
          </h1>
        </div>
        <div className="hidden lg:flex">
          <ul className="flex justify-between w-96 text-base">
            <li><Link href=""/>features</li>
            <li><Link href=""/>Pricing</li>
            <li><Link href=""/>Testimonial</li>
            <li><Link href=""/>Help</li>
          </ul>
        </div>
      </div>
      
      <div className="hidden lg:flex gap-5 text-base">
        <button>Sign in</button>
        <button className="border-solid border-[1px] border-red text-red rounded-xl py-1 px-2">Sign up</button>
      </div>
      <div className="lg:hidden">
        <Image src="/menu.svg" alt="" width={24} height={24} />
      </div>
    </header>
      
  );
}
