import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { userId } = auth();
  if (!userId) redirect("/sign-in");

  const user = await currentUser();
  return <div>Hello, {user?.firstName}!</div>;
}
