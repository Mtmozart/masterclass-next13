import stripe from "@/lib/stripe";
export default function Seed() {
  return (
    <div className="container flex items-center justify-center my-10">
      <h1 className="text-3x1 text-green-600 font-extrabold">
        Dummy data created in your stripe inventory. If you don&apos;t see it on
        your Products Dashboard. Take a look at you console.
      </h1>
    </div>
  );
}
