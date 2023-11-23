import express from "express";
import userController from "../controller/userController.js";

const router = express.Router();

router.post("/user/add", userController.createUser);
router.put("/user/update/:id", userController.updateUser);
router.get("/user/find/:id", userController.fetchUser);
router.get("/users", userController.fetchAllUsers); // Corrected function name
router.delete("/user/:id", userController.deleteUser);
router.post("/user/login", userController.login)
router.post("/user/forgotpassword/sendcode", userController.forgotPassword_SendCode)
router.post("/user/forgotpassword/getcode", userController.forgotPassword_GetCode)
router.put("/user/password", userController.ChangePassword);
export default router;
