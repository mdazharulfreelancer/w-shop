"use client";
import {
  productFormSchema,
  ProductFormValues,
} from "@/app/schemas/product.schema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const ProductForm = () => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productFormSchema),
    defaultValues: {
      name: "",
      description: "",
      images: undefined,

      // brand : "",
      // tags : "",
      // reviews : "",
      // rating : 0,
      // numReviews : 0,
      // isFeatured : false,
    },
  });
  const FormdataTs: {
    name: keyof ProductFormValues;
    label: string;
    placeholder: string;
  }[] = [
    { name: "name", label: "Product Name", placeholder: "Enter name" },
    {
      name: "description",
      label: "Description",
      placeholder: "Product details",
    },
  ];

  const onSubmit = async (data: ProductFormValues) => {
    // ✅ Confirm handler is triggered
    console.log("submiting");
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    const files: FileList = data.images;
    Array.from(files).forEach((file) => formData.append("images", file));

    await fetch("https://w-shope.vercel.app/api/v1/register-test", {
      method: "POST",
      body: formData,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="">
        {FormdataTs &&
          FormdataTs.map((item, index) => {
            return (
              <FormField
                key={index}
                control={form.control}
                name={item?.name}
                render={({ field }) => (
                  <FormItem className="mb-4">
                    <FormLabel>{item?.label}</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder={item?.placeholder} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            );
          })}
        <FormField
          control={form.control}
          name="images"
          render={({}) => (
            <FormItem>
              <FormLabel>Upload Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  {...form.register("images")}
                  accept="image/*"
                  multiple
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default ProductForm;
