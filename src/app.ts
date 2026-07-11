import express, { Application } from "express";
import { postRouter } from "./modules/post/post.router";

const app: Application = express();

app.use(express.json());

app.use("/", postRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Prisma Blog App");
});

export default app;
