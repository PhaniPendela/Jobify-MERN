import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";
import { comparePasswords, hashPassword } from "../utils/passwordUtils.js";
import { UnauthenticatedError } from "../Errors/customErrors.js";

export const register = async (req, res) => {
  const isFirstUser = (await userModel.countDocuments()) === 0;
  req.body.role = isFirstUser ? "admin" : "user";
  req.body.password = await hashPassword(req.body.password);
  await userModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ message: "User Created" });
};
export const login = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  const isAuthorized =
    user && (await comparePasswords(req.body.password, user.password));
  if (!isAuthorized) throw new UnauthenticatedError("Invalid Credentials");
  res.send("login");
};
