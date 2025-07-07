import { StatusCodes } from "http-status-codes";
import userModel from "../models/userModel.js";
import jobModel from "../models/jobModel.js";

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: "get current user" });
};
export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: "get application stats" });
};
export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ message: "update User" });
};
