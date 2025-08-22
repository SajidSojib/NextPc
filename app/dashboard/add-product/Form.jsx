"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const loadingSession = status === "loading";

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [price, setPrice] = useState("");
  const [warranty, setWarranty] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  if (loadingSession) return <p className="text-center mt-20">Loading...</p>;
  if (!session)
    return <p className="text-center mt-20">Access Denied. Please login.</p>;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const product = { name, category, photoUrl, price, warranty, description };

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });

      if (!res.ok) {
        const error = await res.text();
        alert("Error: " + error);
        setLoading(false);
        return;
      }

      alert("Product added successfully!");
      setName("");
      setCategory("");
      setPhotoUrl("");
      setPrice("");
      setWarranty("");
      setDescription("");
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-10 md:py-16 lg:py-20 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold">Add a New Product</h1>
        <p className="mt-2 text-gray-500">
          Fill in the details below to add your product to the store.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 bg-base-100 shadow-md rounded-lg"
      >
        <input
          type="text"
          placeholder="Product Name"
          className="input input-bordered w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select
          className="select select-bordered w-full"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Laptop">Laptop</option>
          <option value="Desktop">Desktop</option>
          <option value="Accessories">Accessories</option>
        </select>

        <input
          type="url"
          placeholder="Photo URL"
          className="input input-bordered w-full"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Price"
          className="input input-bordered w-full"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Warranty"
          className="input input-bordered w-full"
          value={warranty}
          onChange={(e) => setWarranty(e.target.value)}
        />

        <textarea
          placeholder="Brand Description"
          className="textarea textarea-bordered w-full"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button
          type="submit"
          className={`btn btn-primary text-center mt-2 `}
          disabled={loading}
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
