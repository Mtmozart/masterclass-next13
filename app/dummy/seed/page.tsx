import stripe from "@/lib/stripe";
import { DummyProduct } from "@/types";

async function getDummyProducts() {
  const response = await fetch("https://dummyjson.com/products?limit=109");

  const dummyData = await response.json();

  const products = dummyData.products.map((product: DummyProduct) => {
    return {
      id: product.id,
      description: product.description,
      name: product.title,
      images: product.images,
      default_price_data: {
        unit_amount_decimal: product.price,
        currency: "BRL",
      },
    };
  });
  return products;
}
async function seedDummyData() {
  const products = await getDummyProducts();
  await products.map(async (product: any) => {
    try {
      const productCreated = await stripe.products.create(product);
    } catch (e: any) {
      console.log("STRIPE_CREATE_ERROR: ", e.message);
    }
  });
}

export default async function Seed() {
  await seedDummyData();
  return (
    <div className="container flex items-center justify-center my-10">
      <h1 className="text-3x1 text-green-600 font-extrabold">
        Dummy data created in your stripe inventory. If you don&apos;t see it on
        your Products Dashboard. Take a look at you console.
      </h1>
    </div>
  );
}
