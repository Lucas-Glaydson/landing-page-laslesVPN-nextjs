import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className="flex space-x-1">
        <Image src="/logo.svg" alt="page logo" width={20} height={20} />
        <h1 className="text-[15px]">Lasles<span className="font-semibold">VPN</span></h1>
      </div>
      <div>
        <Image src="/menu.svg" alt="" width={24} height={24}/>
      </div>
    </>
  );
}
