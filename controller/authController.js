import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";
import { hashPassword } from "../utils/passwordUtils.js";

export const register = async (req, res) => {
  const isFirstUser = (await userModel.countDocuments()) === 0;
  req.body.role = isFirstUser ? "admin" : "user";
  req.body.password = await hashPassword(req.body.password);
  await userModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ message: "User Created" });
};
export const login = async (req, res) => {
  res.send("login");
};
