import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MenuDataItem from "@/lib/menudata";
import { AlignLeft } from "lucide-react";
import Link from "next/link";

export default function Menu() {
  return (
    <div className="">
      <div className="w-full hidden sm:block mt-1">
        <div className="w-full flex  gap-4">
          <div className="w-full flex justify-between  items-center">
            {/* left */}
            <div className="hidden sm:block">
              <div className=" icon flex flex-1/6 items-center gap-2">
                <div>
                  <AlignLeft className="text-gray-500" />
                </div>
                <span className="text-sm uppercase text-wrap tracking-wide font-bold ">
                  {"Shop By Category"}
                </span>
              </div>
            </div>

            {/* Middle */}
            <div className="flex flex-1/2 items-center justify-start">
              <div className="w-full flex gap-4 items-start justify-start text-center">
                <div className="w-full">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {MenuDataItem &&
                        MenuDataItem.map((item, index) => (
                          <CarouselItem
                            key={index}
                            className=" md:basis-1/3 lg:basis-1/4 xl:basis-1/6 sm:basis-1/2"
                          >
                            <Link
                              href={item?.link}
                              key={index}
                              className="uppercase tracking-normal hover:text-primary transition-all duration-150 text-[15px] font-[500] font-poppins"
                            >
                              {" "}
                              {item?.name}
                            </Link>
                          </CarouselItem>
                        ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex flex-1/4 items-center justify-center">
              <div className="flex gap-2 items-center text-center">
                <Link
                  href={"/customare-care"}
                  className="text-sm font-semibold text-primary hover:underline"
                >
                  {"Help & Support"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:hidden">
        <Carousel className="w-full ">
          <CarouselContent>
            {MenuDataItem &&
              MenuDataItem.map((item, index) => (
                <CarouselItem key={index} className=" basis-1/3">
                  <Link
                    href={item?.link}
                    key={index}
                    className="uppercase tracking-normal hover:text-primary transition-all duration-150 text-[12px] font-[500] font-poppins border-1 border-primary px-2  py-0.5 rounded-2xl bg-primary/10 text-gray-700"
                  >
                    {item?.name}
                  </Link>
                </CarouselItem>
              ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
