import Image from "next/image";
import FeatureText from "../features/FeatureText";

interface PlanCardProps {
  title: string;
  features: string[];
  price: string;
  isHighlighted?: boolean;
  period: string;
}

export default function PlanCard({
  title = "Standard Plan",
  features = [],
  price = "$9",
  isHighlighted = false,
  period = "",
}: PlanCardProps) {
  return (
    <div
      className={`m-auto my-5 w-48 h-[500px] border-2 rounded-2xl flex flex-col justify-between items-center py-5 
        ${isHighlighted ? "border-red" : "border-gray-200"} lg:w-80 lg:h-[802px] lg:py-16`} 
    >
      <Image className="lg:w-36 lg:h-40" src="/Box.svg" alt="box image" width={80} height={91} />
      <h3 className="font-semibold lg:text-xl">{title}</h3>
      <div className="max-h-60 h-56">
        {features.map((feature, index) => (
          <FeatureText key={index} text={feature} isBold={false}/>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <h2>
          <span className="font-semibold">{price}</span>{" "}
          {period}
        </h2>
        <button className="bg-red text-white rounded-xl font-medium w-24 h-6 text-[12px] mt-2 lg:w-28 lg:h-7">
          Select
        </button>
      </div>
    </div>
  );
}
