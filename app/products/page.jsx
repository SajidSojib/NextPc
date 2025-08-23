import Link from "next/link";
import clientPromise from "@/lib/mongodb";
import Image from "next/image";

export default async function ProductsPage() {
  // Fetch products from MongoDB
  let products = [];
  try {
    const client = await clientPromise;
    const db = client.db("compumart");
    products = await db.collection("products").find({}).toArray();
    // Convert _id to string for Next.js
    products = products.map((p) => ({ ...p, _id: p._id.toString() }));
  } catch (err) {
    console.error("Error fetching products:", err);
  }

  return (
    <div className="py-10 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      {/* Title & Subtitle */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">Our Products</h1>
        <p className="mt-2 text-gray-500">
          Browse our latest collection of laptops, desktops, and accessories.
        </p>
      </div>

      {products.length === 0 ? (
        <p className="text-center">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  <p className="text-gray-400">{product.description}</p>
                  <p className="mt-1 text-primary font-bold">
                    ${product.price}
                  </p>
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
      )}
    </div>
  );
}
