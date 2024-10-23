import { Router } from "express";
import { CreateUser, deleteUser, getUsers, updateUser } from "../Controller/user.controller.js";

 const router = Router();

  // route to create user
  router.post("/", CreateUser);

  // route to update user
  router.put("/update:id",updateUser);
  
  // route to get all the users
  router.get("/fetchusers",getUsers);

  // route to delete user
  router.post("/delete:id", deleteUser);

 export default router;