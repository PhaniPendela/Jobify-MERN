import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import jobModel from "../models/jobModel.js";

export const getAllJobs = async (req, res) => {
  const jobs = await jobModel.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await jobModel.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJobById = async (req, res) => {
  const matchedJob = await jobModel.findById(req.params.id);
  return res.status(StatusCodes.OK).json({ matchedJob });
};

export const editJobById = async (req, res) => {
  const updatedJob = await jobModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res
    .status(StatusCodes.OK)
    .json({ message: "Job updated successfully", updatedJob });
};

export const deleteJob = async (req, res) => {
  const matchedJob = await jobModel.findByIdAndDelete(req.params.id);
  res
    .status(StatusCodes.OK)
    .json({ message: "Job removed successfully", job: matchedJob });
};
