import { client } from "@repo/db/client";
export default async function Home() {
  const userData = await client.user.findFirst();
  return (
    <div>
      {userData?.username}
      {userData?.password}
    </div>
  );
}
