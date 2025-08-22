import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    const client = await clientPromise;
    const db = client.db("compumart");

    const existingUser = await db.collection("users").findOne({ email });
    if (existingUser) {
      return new Response("User already exists", { status: 400 });
    }

    const result = await db.collection("users").insertOne({
      name,
      email,
      password,
      createdAt: new Date(),
    });

    // Return the inserted document manually
    const newUser = await db
      .collection("users")
      .findOne({ _id: result.insertedId });

    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (err) {
    console.error(err);
    return new Response("Internal Server Error", { status: 500 });
  }
}
