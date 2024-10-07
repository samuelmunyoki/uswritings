import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const Reviews = () => {
  return (
    <div className="bg-white w-full grid grid-cols-1 lg:grid-cols-[30%_70%] px-6 lg:px-44 py-[80px] items-center">
      <div className="text-2xl w-full">
        <div className="hidden md:block">
          <div className="flex flex-col items-start">
            <span>WHAT OUR</span>
            <span className="font-extrabold">CUSTOMERS SAY</span>
          </div>
        </div>
        <div className="block md:hidden">
          <span className="text-[#383945]">
            WHAT OUR{" "}
            <span className="font-extrabold text-[#383945]">CUSTOMERS SAY</span>
          </span>
        </div>
        <p className="text-sm leading-6 font-light pt-4 w-[80%] md:w-full pr-6 pb-8">
          You will get the grade you deserve without having to worry about
          unrealistic deadlines and without having to stress yourself out to the
          point where you feel like giving up.
        </p>
      </div>
      <div className="w-full flex flex-col items-center justify-center">
        <Carousel
          // plugins={[
          //   Autoplay({
          //     delay: 2000,
          //   }),
          // ]}
          className="w-full mx-6"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
              <div className=" flex flex-col">
                <div className="flex flex-col pt-3">
                  <div className="flex  lg:flex-row flex-col lg:items-center lg:justify-between ">
                    <p>Alison, US, Bristol</p>
                    <div className="flex items-center gap-x-3 py-3">
                      <Image
                        src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                        alt="High rating"
                        height={18}
                        width={18}
                        className="object-cover"
                      />
                      <Image
                        src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                        alt="High rating"
                        height={18}
                        width={18}
                        className="object-cover"
                      />
                      <Image
                        src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                        alt="High rating"
                        height={18}
                        width={18}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-xs pb-6">
                    Lab Report, Chemistry, 5 Pages, 48 hours, HNC/HND
                  </p>
                  <Card className="mt-3 bg-white rounded-lg shadow-[0_0_9px_rgba(217,222,237,0.4)] text-sm h-[200px]">
                    <CardContent className="font-light py-3 leading-6">
                      Frankly speaking I hate Chemistry. Just can't stand it.
                      And when the professor asked us to write a chemistry lab
                      report I felt hopeless. Luckily, I've got you! The writer
                      performed a perfect assignment.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/2">
              <div className=" flex flex-col">
                <div className="flex flex-col pt-3">
                  <div className="flex  lg:flex-row flex-col lg:items-center lg:justify-between ">
                    <p>Andy, US, Reading</p>
                    <div className="flex items-center gap-x-3 py-3">
                      <Image
                        src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                        alt="High rating"
                        height={18}
                        width={18}
                        className="object-cover"
                      />
                      <Image
                        src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                        alt="High rating"
                        height={18}
                        width={18}
                        className="object-cover"
                      />
                      <Image
                        src="https://ukwritings.com/assets/star-bd136e00de7d0a831bdbb898b1a997ad6f0a1e953b60a4555ba90bef7495ee29.svg"
                        alt="High rating"
                        height={18}
                        width={18}
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <p className="text-xs pb-6">
                    Book Review, Philosophy, 5 Pages, 24 hours, Undergraduate
                  </p>
                  <Card className="mt-3 bg-white rounded-lg shadow-[0_0_9px_rgba(217,222,237,0.4)] text-sm h-[200px]">
                    <CardContent className="font-light py-3 leading-6">
                      I love the book review your writers have performed for me.
                      It's well-structured and all the questins have been
                      answered. I'm sure it will bring me a good grade.
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Reviews;
