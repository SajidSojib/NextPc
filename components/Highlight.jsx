import clientPromise from "@/lib/mongodb";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let products = [];

  try {
    const client = await clientPromise;
    const db = client.db("compumart");

    // Fetch the first 6 products
    products = await db.collection("products").find({}).limit(8).toArray();

    products = products.map((p) => ({
      ...p,
      _id: p._id.toString(), // convert _id for Next.js
    }));
  } catch (err) {
    console.error("Error fetching products:", err);
  }

  return (
    <div className="px-4 py-10 md:py-16 lg:py-20 max-w-6xl mx-auto">
      {/* Title & Subtitle */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Product Highlights</h1>
        <p className="mt-2 text-gray-500">
          Check out our featured products available in the store.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border pb-6 rounded-lg shadow-md overflow-hidden bg-base-100"
          >
            <div className="relative w-full h-48">
              <Image
                src={product.photoUrl}
                alt={product.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="p-4 flex flex-col justify-between h-40">
              <div>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-400 line-clamp-2">{product.description}</p>
                <p className="mt-1 text-primary font-bold">${product.price}</p>
              </div>
              <Link
                href={`/products/${product._id}`}
                className="btn btn-outline btn-primary mt-2"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
