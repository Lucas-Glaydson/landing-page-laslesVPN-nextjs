import PlanCard from "./PlanCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Plan() {
  const plans = [
    {
      title: "Basic Plan",
      features: [
        "Unlimited bandwitch",
        "Encrypted connection",
        "Yes traffic logs",
      ],
      price: "Free",
      isHighlighted: false,
      period: "",
    },
    {
      title: "Standard Plan",
      features: [
        "Unlimited bandwidth",
        "Encrypted connection",
        "Yes traffic logs",
        "Works on all devices",
        "Connect anywhere",
      ],
      price: "$9",
      isHighlighted: false,
      period: "/ mo",
    },
    {
      title: "Premium Plan",
      features: [
        "Unlimited bandwidth",
        "Encrypted connection",
        "Yes traffic logs",
        "Works on all devices",
        "Connect anyware",
        "Get new features",
      ],
      price: "$12",
      isHighlighted: true,
      period: "/ mo",
    },
  ];

  return (
    <section className="space-y-2">
      <div className="text-center w-64 m-auto space-y-2 lg:mt-20 lg:mb-10 lg:w-[560px]">
        <h2 className="font-semibold text-xl lg:text-3xl">Choose your plan</h2>
        <p className="text-xs lg:text-base">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.
        </p>
      </div>
      <div>
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-7xl m-auto"
        >
          <CarouselContent>
            {plans.map((plan, index) => (
              <CarouselItem key={index} className="basis-[200px] lg:basis-1/3">
                <div className="p-1">
                  <PlanCard
                    title={plan.title}
                    features={plan.features}
                    price={plan.price}
                    isHighlighted={plan.isHighlighted}
                    period={plan.period}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
