import Image from "next/image";

export default function Networks(){
  return (
    <section className="flex flex-col justify-center items-center space-y-9 my-6 ">
      <h2 className="font-semibold text-[17px] w-44 text-center">Huge global network of fast VPN</h2>
      <p className="w-80 text-[10px] text-center">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
      <Image src="/map.svg" alt="" width={311} height={158} />
      <Image src="/sicial.svg" alt="" width={347} height={64} />
    </section>
  )
}