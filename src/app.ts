import express, { Application } from "express";
// import cors from "cors";
import { postRouter } from "./modules/post/post.router";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

const app: Application = express();

app.all("/api/auth/*splt", toNodeHandler(auth));
app.use(express.json());

app.use("/", postRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the Prisma Blog App");
});

export default app;
