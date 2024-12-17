import PlanCard from "./PlanCard";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Plan() {
  // Lista de planos com dados diferentes
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
      period: ""
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
      period: "/ mo"
    },
    {
      title: "Premium Plan",
      features: [
        "Unlimited bandwidth",
        "Encrypted connection",
        "Yes traffic logs",
        "Connect anyware",
        "Get new features",
      ],
      price: "$12",
      isHighlighted: true,
      period: "/ mo"
    },
  ];

  return (
    <section className="mt-4 space-y-2">
      <div className="text-center w-64 m-auto space-y-2">
        <h2 className="font-semibold text-[19px]">Choose your plan</h2>
        <p className="text-[9px]">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu
          id purus ullamcorper. Vel vel erat semper augue.
        </p>
      </div>
      <div>
        <Carousel
          opts={{
            align: "start",
            
          }}
          className="w-full max-w-md"
        >
          <CarouselContent>
            {plans.map((plan, index) => (
              <CarouselItem key={index} className="basis-[45%]">
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
          <CarouselPrevious />
        </Carousel>
      </div>
    </section>
  );
}
