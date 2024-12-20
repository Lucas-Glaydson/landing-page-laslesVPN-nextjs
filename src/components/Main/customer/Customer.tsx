"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CustomerCard from "./CustomerCard";
import Autoplay from "embla-carousel-autoplay";

export default function Customer() {
  return (
    <section className="font-rubik text-center mx-2 overflow-x-hidden">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-xl w-56 text-center mb-3">
          Trusted by thousands of happy customer
        </h2>
        <p className="w-80 text-xs text-center mb-8">
          Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper.
          Vel vel erat semper augue.
        </p>
      </div>
      <div >
        <Carousel
          opts={{
            align: "center",
          }}
          className="w-full max-w-7xl m-auto"
          plugins={[
            Autoplay({
              delay: 10000,
            }),
          ]}
        >
          <CarouselContent>
            {Array.from({ length: 4 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 basis-11/12">
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
          <div className="flex justify-center mt-4">
            <CarouselPrevious className="px-4 py-2 bg-gray-400 text-white rounded-full hover:bg-gray-500 mx-2" />
            <CarouselNext className="px-4 py-2 bg-red text-white rounded-full hover:bg-red-600 mx-2" />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
