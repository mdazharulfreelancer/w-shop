import Home from "@/components/shared/Home/Home";
import RecommandProduct from "@/components/shared/Home/RecommandProduct/RecommandProduct";

export default function Page() {
  return (
    <div className="w-full">
      <Home />
      {/* <RecommandProduct /> */}
      <div className="">
        <RecommandProduct />
      </div>
    </div>
  );
}
