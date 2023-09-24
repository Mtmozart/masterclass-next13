import Image from "next/image";
import ProductList from "@/components/shop/product-list";

export default function Home() {
  return (
    <section className="container">
      <ProductList />
    </section>
  );
}
