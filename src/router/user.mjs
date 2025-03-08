import { Router } from "express";
import { userInfor } from "../data/user-info.mjs";
import DB from "../db/db.mjs";
const userRouter = Router();
userRouter.get("/all-user", async (req, res) => {
  try {
    const allUser = await DB.user.findMany();
    res.status(200).json({
      msg: "sucsess",
      data: allUser,
    });
  } catch (error) {
    res.status(500).json({
      msg: "Internala sever Error",
      data: "null",
    });
  }
});
userRouter.get("/:id", async (req, res) => {
  const getUserID = req.params.id;
  try {
    if (getUserID !== undefined && getUserID !== "") {
      const selectedUser = await DB.user.findFirst({
        where: {
          ID: Number(getUserID),
        },
      });
      return res.status(200).json({
        msg: "user selected",
        data: selectedUser,
      });
    }
  } catch (error) {
    res.status(500).json({
      msg: "user not found",
    });
  }
});
userRouter.post("/create-user", async (req, res) => {
  const userData = req.body;
  console.log(userData);
  try {
    const newUser = await DB.user.create({ data: userData });
    return res.status(200).json(newUser);
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
});

userRouter.delete("/delete-user/:id", async (req, res) => {
  const userid = parseInt(req.params.id);

  try {
    const deluser = await DB.user.delete({
      where: {
        ID: userid,
      },
    });
    console.log(deluser);
    return res.status(200).json({
      msg: "User deleted",
      data: deluser,
    });
  } catch (error) {
    return res.status(500).json;
  }
});
userRouter.put("/update-user", async (req, res) => {
  const { id } = req.query;
  const updateData = req.body;

  if (id !== undefined && id !== "") {
    try {
      const updateUserData = await DB.user.update({
        where: { ID: Number(id) },
        data: updateData,
      });
      return res.status(200).json({
        msg: "User updated",
        data: updateUserData,
      });
    } catch (error) {
      res.status(404).json({
        msg: "update error",
        data: "",
      });
    }
  }
});
export default userRouter;
