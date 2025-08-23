import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Link from "next/link";
export const metadataProductDetail = {
  title: "NextPC | Product Details",
  description: "View detailed information about the selected product",
};
export default async function ProductDetails({ params }) {
  const { id } = params;

  let product = null;

  try {
    const client = await clientPromise;
    const db = client.db("compumart");
    product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });

    if (product) {
      product._id = product._id.toString(); // convert _id for Next.js
    }
  } catch (err) {
    console.error("Error fetching product:", err);
  }

  if (!product) {
    return (
      <div className="text-center py-20">
        <p className="text-xl font-semibold">Product not found.</p>
        <Link href="/products" className="btn btn-primary mt-4">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="px-4 py-10 md:py-16 lg:py-20 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
        <p className="mt-2 text-gray-500">
          Detailed information about this product.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={product.photoUrl}
            alt={product.name}
            className="w-full max-w-md h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Details */}
        <div className="md:w-1/2 flex flex-col gap-4">
          <p>
            <span className="font-semibold">Category:</span> {product.category}
          </p>
          <p>
            <span className="font-semibold">Price:</span>{" "}
            <span className="text-primary font-bold">${product.price}</span>
          </p>
          {product.warranty && (
            <p>
              <span className="font-semibold">Warranty:</span>{" "}
              {product.warranty}
            </p>
          )}
          <p>
            <span className="font-semibold">Description:</span>
          </p>
          <p className="text-gray-700">{product.description}</p>

          <Link
            href="/products"
            className="btn btn-outline btn-primary mt-4 w-fit"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
