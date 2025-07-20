import Image from "next/image";

const Card = () => {
  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
      {Array.from({ length: 8 }).map((_, index) => {
        return (
          <div
            key={index}
            className="w-full h-fit shadow-lg shadow-amber-50 border-1 border-gray-200 rounded-md p-2"
          >
            <div className="w-full flex flex-col ">
              {/* image */}
              <div className="w-fit h-fit">
                <Image
                  src={
                    "https://d2t8nl1y0ie1km.cloudfront.net/images/thumbs/668f7eb5636c9d7aa1e607f5_S203121-Noah-E-Blender-888-2024_1_220.webp"
                  }
                  alt={"image"}
                  width={200}
                  height={200}
                />
              </div>
              {/* title */}
              <div className="w-full flex flex-wrap sm:justify-center sm:items-center mt-1 sm:text-center">
                <span className=" text-normal sm:text-center text-wrap flex flex-wrap  text-gray-700 leading-5 font-medium">
                  {"Noah Blender 888 version 2024"}
                </span>
              </div>

              {/* price */}
              <div className="">
                <div className="w-full flex flex-col">
                  <div className="w-full flex flex-wrap sm:justify-center items-center mt-1 text-center sm:text-center gap-1">
                    {/* was price */}
                    <div className="flex items-center text-center">
                      <span className="line-through text-gray-500 text-sm">
                        {"৳160"}
                      </span>
                    </div>
                    {/* regular */}
                    <div className="flex items-center text-[19px] text-center">
                      <span className="font-semibold text-primary ">৳145</span>
                    </div>
                    {/* per price */}
                    <div className="flex items-center text-center">
                      <span className="text-primary/80 text-sm ">
                        {"per piece"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delevari Time */}
              <div className="w-full flex justify-start items-center mt-1">
                <span className="time text-[10px] flex justify-center items-center  text-gray-700 bg-primary/20 pt-1 sm:pt-1 sm:pb-1 border-1 border-primary  text-center px-2 sm:text-[12px] rounded-md">
                  {"Delivery in 3-5 days"}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
