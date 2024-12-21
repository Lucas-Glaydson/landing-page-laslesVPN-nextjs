import Image from "next/image";

export default function Networks(){
  return (
    <section className="flex flex-col justify-center items-center mx-1">
      <h2 className="font-semibold text-xl w-52 text-center mb-3 lg:text-2xl lg:w-64 lg:mt-8">Huge global network of fast VPN</h2>
      <p className="w-80 text-xs text-center mb-8 lg:text-base lg:w-[500px]">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
      <Image className="lg:w-[1060px] lg:h-[539px]" src="/map.svg" alt="" width={311} height={158} />
      <Image className="lg:w-[1136px] lg:h-[210px]" src="/sicial.svg" alt="" width={380} height={64} />
    </section>
  )
}