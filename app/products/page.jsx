import Link from "next/link";
import clientPromise from "@/lib/mongodb";

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
    <div className="px-4 py-10 md:py-16 lg:py-20 max-w-6xl mx-auto">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="border rounded-lg shadow-md overflow-hidden bg-base-100"
            >
              <img
                src={product.photoUrl}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
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
