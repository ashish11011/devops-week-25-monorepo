import express from "express";
import { client } from "@repo/db/client";

const app = express();

const PORT = 8080;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/singup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await client.user.create({
      data: {
        username,
        password,
      },
    });
    return res.status(201).json({
      message: "Signup successful",
      id: user.id,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ error });
  }
});

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
