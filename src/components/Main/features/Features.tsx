import Image from "next/image";
import FeatureText from "./FeatureText";

export default function Features(){
  return (
    <section className="m-auto flex flex-col items-center mx-6 mt-10 lg:flex-row lg:justify-center lg:gap-36">
      <div>
        <Image className="lg:w-[510px] lg:h-[416px]" src="/Illustration2.svg" alt="Second guy using pc" width={275} height={224}/>
      </div>
      <div className="lg:w-96">
        <h2 className="text-xl font-semibold mt-6 text-balance lg:text-[30px]">We provide many features you can use</h2>
        <p className="text-sm mt-5 text-left lg:text-base">Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
        <ul className="w-full mt-8">
          <FeatureText text="Powerfull online protection."/>
          <FeatureText text="Internet with borders."/>
          <FeatureText text="Supercharged VPN."/>
          <FeatureText text="No specific time limits."/>
        </ul>
      </div>
    </section>
  )
}