import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomerCard from "./CustomerCard";

export default function Customer() {
  return (
    <section className="font-rubik text-center mx-2">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-xl w-56 text-center mb-3">
          Trusted by thousands of happy customer
        </h2>
        <p className="w-80 text-xs text-center mb-8">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper.
          Vel vel erat semper augue.
        </p>
      </div>
      <div className="flex flex-col items-center ">
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-5xl"
        >
          <CarouselContent>
            {Array.from({ length: 3 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                  <CustomerCard
                    imageUrl="/man.svg"
                    name="Brooklyn Simmons"
                    description="Warsaw, Poland"
                    rate="4.5"
                    text="“Wow... I am very happy to use this VPN. It turned out to be more than my expectations, and so far, there have been no problems. LaslesVPN is always the best.”"
                  />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="px-4 py-2 bg-gray-300 text-black rounded-full hover:bg-gray-400" />
          <CarouselNext className="px-4 py-2 bg-red text-white rounded-full hover:bg-red-600 ml-4" />
        </Carousel>
      </div>
    </section>
  );
}
