import Container from "@/components/Container";
import ProductForm from "./ProductForm";

const HomeAdminDasbord = () => {
  return (
    <div>
      <h1>Home Admin Dasbord</h1>
      <div className="w-full border-b-2 bordeer-gray-300">{"Input "}</div>
      <Container className="">
        <ProductForm />
      </Container>
    </div>
  );
};

export default HomeAdminDasbord;
