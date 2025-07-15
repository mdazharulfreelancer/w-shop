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
              <div className="w-full flex flex-wrap justify-center items-center mt-1 text-center">
                <span className=" text-normal text-center text-wrap flex flex-wrap  text-gray-700 font-semibold ">
                  {"Noah Blender 888"}
                </span>
              </div>

              {/* price */}
              <div className="">
                <div className="w-full flex flex-col">
                  <div className="w-full flex flex-wrap justify-center items-center mt-1 text-center gap-2">
                    <div>
                      <span>145</span>
                    </div>
                    {/* was price */}
                    <div>
                      <span>{"was 160"}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* free deceloper */}
              <div className="w-full flex justify-start items-center mt-1">
                <span>free devevari</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
