import express, { Router } from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.post("/posts", postController.createPost);
router.get("/posts", postController.postGetAll);

export const postRouter: Router = router;
