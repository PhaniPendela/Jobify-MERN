import { StatusCodes } from "http-status-codes";
import cloudinary from "cloudinary";
import { promises as fs } from "fs";
import userModel from "../models/userModel.js";
import jobModel from "../models/jobModel.js";

export const getCurrentUser = async (req, res) => {
  const user = await userModel.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
export const getApplicationStats = async (req, res) => {
  const users = await userModel.countDocuments();
  const jobs = await jobModel.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};
export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;

  if (req.file) {
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    await fs.unlink(req.file.path);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const oldUser = await userModel.findByIdAndUpdate(req.user.userId, newUser);
  if (req.file && oldUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(oldUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ message: "User updated" });
};
