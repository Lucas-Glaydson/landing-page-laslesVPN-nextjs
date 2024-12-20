import Image from "next/image"

interface Props {
  imageUrl: string;
  name: string;
  description: string;
  rate: string;
  text: string;
}

export default function CustomerCard({imageUrl, name, description, rate ,text}: Props){
  return(
    <div className="border-solid border-[1px] border-red p-10 rounded-xl h-48 font-rubik">
      <div className="flex justify-between">
        <Image src={imageUrl} alt="" width={45} height={45} />
        <div className="text-start">
          <h3 className="font-semibold text-[14px]">{name}</h3>
          <span className="text-[12px]">{description}</span>       
        </div>
        <div className="flex gap-2 items-end">
          <span className="text-[12px]">{rate}</span>
          <Image className="pb-1" src="star.svg" alt="star" width={15} height={15} />
        </div>
      </div>
      <div className="flex justify-center mt-4 h-full">
        <p className="text-[12px] text-start">{text}</p>
      </div>
    </div>
  )
}