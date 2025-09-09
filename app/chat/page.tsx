import { getServerSession } from "next-auth";
import ChatClient from "../../app/chat/chatClient";
import { authOptions } from "../api/auth/[...nextauth]/route"; // adjust path if needed

export default async function ChatPage() {
  const session = await getServerSession(authOptions);

  // Extract first name (fallback: Guest)
  const fullName = session?.user?.name || "Guest";
  const firstName = fullName.split(" ")[0];

  return <ChatClient firstName={firstName} />;
}
