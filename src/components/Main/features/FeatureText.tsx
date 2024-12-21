import Image from "next/image"

export default function FeatureText({text, isBold}: {text: string, isBold: boolean}){
  return (
      <li className="flex justify-start items-center mb-5 space-x-2">
        <Image src="/tick-circle.svg" alt="correct image" width={15} height={15}/>
        <span className={`text-xs lg:text-base ${isBold ? "font-semibold" : "font-normal"}`}>
          {text}
        </span>
      </li>
  )
}