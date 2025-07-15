import Container from "@/components/Container";
import Category from "./Category";
import HomeSlider from "./HomeSlider";

const Home = () => {
  return (
    <div className="w-full catefori&photo overflow-hidden">
      <Container className=" ">
        <div className="w-full  flex justify-around gap-2">
          <div className="w-[340px] hidden lg:block h-[70vh] shadow-sm">
            <Category />
          </div>
          <div className="w-fit mt-1 relative  ">
            <HomeSlider />
          </div>
          {/* xl to open it */}
        </div>
      </Container>
    </div>
  );
};

export default Home;
