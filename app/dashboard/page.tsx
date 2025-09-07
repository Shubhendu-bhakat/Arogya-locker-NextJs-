import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  return (
    <div className="p-8">
      <h1 className="text-2xl">Welcome, {session.user?.name}</h1>
    </div>
  );
}
