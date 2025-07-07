import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";

export const register = async (req, res) => {
  const isFirstUser = (await userModel.countDocuments()) === 0;
  req.body.role = isFirstUser ? "admin" : "user";
  const user = await userModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};
export const login = async (req, res) => {
  res.send("login");
};
