import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session)
    return <p className="text-center mt-20">Access Denied. Please login.</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {session.user.name}!</h1>
      <p>You can now manage your products here.</p>
    </div>
  );
}
