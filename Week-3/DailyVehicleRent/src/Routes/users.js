const userRouter = require("express").Router();

const userController = require("../Controllers/users");

userRouter.post("/", userController.addNewUser);
userRouter.get("/", userController.getAllUsers);
userRouter.patch("/", userController.updateUserName);
userRouter.delete("/", userController.deleteUser);

module.exports = userRouter;