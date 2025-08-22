import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const client = await clientPromise;
  const db = client.db("compumart");

  try {
    const data = await req.json();
    const result = await db.collection("products").insertOne(data);
    return new Response(JSON.stringify(result), { status: 201 });
  } catch (err) {
    return new Response(err.message, { status: 500 });
  }
}
