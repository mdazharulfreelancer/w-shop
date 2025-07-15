import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import HomeDataCasual from "@/lib/homeDataCasual";
import Image from "next/image";
import Link from "next/link";
import SubCategories from "./SubCategories";

const HomeSlider = () => {
  return (
    <div className="w-full ">
      <Carousel className="">
        <CarouselContent>
          {HomeDataCasual &&
            HomeDataCasual.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <Link href={item.link} className="w-full h-full">
                    <Image
                      alt={item.description}
                      src={item.image}
                      width={1632}
                      height={50}
                    />
                  </Link>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-2" />
      </Carousel>

      <div className=" mt-5 sm:t-0 pt-4">
        <SubCategories />
      </div>
    </div>
  );
};

export default HomeSlider;
