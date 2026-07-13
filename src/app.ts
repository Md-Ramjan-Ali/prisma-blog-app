import express, { Application } from "express";
import { postRouter } from "./modules/post/post.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app: Application = express();

app.use(express.json());
app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/", postRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Prisma Blog App");
});

export default app;
