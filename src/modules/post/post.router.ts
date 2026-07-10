import { Router } from "express";

const router = Router();

router.post("/create-post", (req, res) => {
  res.send("hello World");
});

export const postRouter: Router = router;
