import { client } from "@repo/db/client";

export default async function Home() {
  let user: any = { username: "", password: "" };
  try {
    const data = await client.user.findFirst();
    user.username = data?.username;
    user.password = data?.password;
  } catch (error) {
    console.log(error);
  }
  return (
    <div>
      {user?.username}
      {user?.password}
    </div>
  );
}
