import { client } from "@repo/db/client";
export default async function Home() {
  const userData = await client.user.findFirst();
  return (
    <div>
      username of first user: {userData?.username}
      password of first user: {userData?.password}
    </div>
  );
}
