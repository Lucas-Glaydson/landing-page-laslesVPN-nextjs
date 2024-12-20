import Image from "next/image";

export default function Networks(){
  return (
    <section className="flex flex-col justify-center items-center mx-1">
      <h2 className="font-semibold text-xl w-52 text-center mb-3">Huge global network of fast VPN</h2>
      <p className="w-80 text-xs text-center mb-8">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
      <Image src="/map.svg" alt="" width={311} height={158} />
      <Image src="/sicial.svg" alt="" width={380} height={64} />
    </section>
  )
}