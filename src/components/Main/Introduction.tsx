import Image from "next/image";

export default function Introduction(){
  return(
    <section className="flex flex-col items-center m-4 text-center">
      <Image className="mb-8" src="/Illustration.svg" alt="person using computer" width={306} height={191}/>
      <h1 className="mb-4 text-[33px]">Want anything to be easy with <span className="font-semibold">LaslesVPN</span></h1>
      <p className="mb-7">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
      <button className="text[12px] flex items-center justify-center w-36 h-10 p-5 rounded-xl bg-red text-white font-semibold">Get started</button>
    </section>
  )
}