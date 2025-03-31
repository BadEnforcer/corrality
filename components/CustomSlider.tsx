import * as React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface CarouselItemData {
  headerImg: string;
  footerText: string;
  backgroundImg: string;
  imageAlt: string;
}

interface CustomCarouselProps {
  isLooping: boolean;
  carouselItems: CarouselItemData[];
}

export default function CustomCarousel({
                                         isLooping,
                                         carouselItems,
                                       }: CustomCarouselProps) {
  return (

      <Carousel
        // The Carousel component fills the parent container
        className="w-full h-full"
        opts={{
          align: "center",
          loop: isLooping,
        }}
      >
        <CarouselContent
          // If only one item exists, center it with flex utility classes
          className={" "}
        >
          {carouselItems.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-3/4 sm:basis-2/4 md:basis-1/3 lg:basis-1/4 xl:basis-1/4"
            >
              <div>
                <Card className={`relative overflow-hidden aspect-square rounded-none rounded-tl-2xl rounded-br-2xl outline-1 outline-neutral-300 sm:h-56 lg:h-56 xl:h-96  `}>
                  {/* Background image filling the entire card */}
                  <div className="absolute inset-0 ">
                    <Image
                      src={item.backgroundImg}
                      alt={item.imageAlt}
                      fill
                      className="object-cover hover:scale-110 duration-200"
                    />
                  </div>
                  
                  <CardContent className="relative flex flex-col h-full p-6 select-none ">
                    {/* Header image positioned at the top left with spacing */}
                    <div className="absolute left-4 top-2 z-10 w-1/2 md:w-3/4">
                      <Image
                        src={item.headerImg}
                        alt="header image"
                        width={200}
                        height={200}
                        className="w-full h-auto object-contain "
                      />
                    </div>
                    
                    {/* Footer text styled as white, light, small,
                        limited to a few lines, sticking to the bottom */}
                    <div className="mt-auto lg:top-7  right-2 relative z-10">
                      <p className="text-white text-sm lg:text-[1rem] font-light leading-tight line-clamp-4 lg:line-clamp-3">
                        {item.footerText}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* Uncomment these if navigation buttons are needed
        <CarouselPrevious />
        <CarouselNext />
        */}
      </Carousel>
  );
}