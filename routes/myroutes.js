import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.post("/user/add", userController.createUser);
router.put("/user/:id", userController.updateUser);
router.get("/user/:id", userController.fetchUser);
router.get("/users", userController.fetchAllUsers); // Corrected function name
router.delete("/user/:id", userController.deleteUser);
router.post("/user/login", userController.login)

export default router;
