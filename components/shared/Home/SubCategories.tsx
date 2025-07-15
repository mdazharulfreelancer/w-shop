import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SubCategorys from "@/lib/subcategorys";
import Image from "next/image";
import Link from "next/link";
const SubCategories = () => {
  return (
    <div>
      <Carousel className="">
        <CarouselContent className="">
          {SubCategorys &&
            SubCategorys.map((item, index) => {
              return (
                <CarouselItem
                  key={index}
                  className="basis-1/4 sm:basis-1/4 xl:basis-1/5"
                >
                  <Link
                    href={item.link}
                    className="w-full h-full rounded-2xl  relative"
                  >
                    <Image
                      alt={item?.description}
                      src={item?.image}
                      width={300}
                      height={300}
                      className="rounded-full sm:rounded-md "
                    />
                    <div className="sm:hidden  w-full bg-primary/10 border-1 border-primary rounded-md flex text-center items-center justify-center mt-2">
                      <span className="text-[12px] text-gray-600 text-center">
                        {item?.name.slice(0, 6)}
                      </span>
                    </div>
                    <div className="w-full hidden sm:block  sm:h-9"></div>
                    <div className="absolute w-full  bottom-5    text-center ">
                      <div className="flex h-full justify-center items-center text-center">
                        <span className="hidden sm:block text-primary-foreground h-full w-[80%] bg-primary  text-md rounded-md  py-1">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              );
            })}
        </CarouselContent>

        <CarouselPrevious className="left-4" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  );
};

export default SubCategories;
