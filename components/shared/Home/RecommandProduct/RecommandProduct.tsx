import Container from "@/components/Container";
import Card from "./Card";

const RecommandProduct = () => {
  return (
    <div className="w-full h-fit my-5">
      <Container className="">
        <div className="w-full flex flex-col">
          {/* Tittle */}
          <div className="w-full flex items-center justify-center ">
            <h1 className="mb-4 text-center text-sm font-medium uppercase leading-none text-black drop-shadow-[0_0_2px_rgba(0,0,0,0.2)] md:mb-6 md:text-2xl md:leading-none lg:drop-shadow-none">
              {"Recommanded For You"}
            </h1>
          </div>
          {/* Recommand card */}
          <div className="w-full">
            <Card />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default RecommandProduct;
