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
  price = "$9/mo",
  isHighlighted = false,
  period = "",
}: PlanCardProps) {
  return (
    <div
      className={`m-auto my-5 w-48 h-[440px] border-2 rounded-lg flex flex-col justify-between items-center py-5 
        ${isHighlighted ? "border-red" : "border-gray-200"}`}
    >
      <Image src="/Box.svg" alt="box image" width={80} height={91} />
      <h3>{title}</h3>
      <div>
        {features.map((feature, index) => (
          <FeatureText key={index} text={feature} />
        ))}
      </div>
      <div className="flex flex-col items-center">
        <h2>
          <span className="font-semibold">{price}</span>{" "}
          {period}
        </h2>
        <button className="bg-red text-white rounded-md font-medium w-24 h-6 text-[12px]">
          Select
        </button>
      </div>
    </div>
  );
}
