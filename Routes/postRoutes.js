import { Router } from "express";
import { CreatePost, deletePost, getPost, updatePost } from "../Controller/post.controller.js";

const router = Router();

// route to create post
router.post("/",CreatePost);

// route to update post
router.put("/update:id",updatePost);

// route to get post 
router.get("/fetchpost",getPost);

// route to delete post
router.post("/delete:id", deletePost);

export default router