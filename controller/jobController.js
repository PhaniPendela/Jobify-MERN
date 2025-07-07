import "express-async-errors";
import { StatusCodes } from "http-status-codes";
import jobModel from "../models/jobModel.js";
import { NotFoundError } from "../Errors/customErrors.js";

export const getAllJobs = async (req, res) => {
  const jobs = await jobModel.find({});
  res.status(StatusCodes.OK).json({ jobs });
};

export const createJob = async (req, res) => {
  try {
    const job = await jobModel.create(req.body);
    res.status(StatusCodes.CREATED).json({ job });
  } catch (err) {
    console.log(err);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({ message: "Server Error" });
  }
};

export const getJobById = async (req, res) => {
  const { id } = req.params;
  const matchedJob = await jobModel.findById(id);
  if (!matchedJob)
    throw new NotFoundError(`Unable to find the job with id: ${id}`);
  return res.status(StatusCodes.OK).json({ matchedJob });
};

export const editJobById = async (req, res) => {
  const { id } = req.params;
  const updatedJob = await jobModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updatedJob)
    throw new NotFoundError(`Unable to find the job with id: ${id}`);
  res
    .status(StatusCodes.OK)
    .json({ message: "Job updated successfully", updatedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const matchedJob = await jobModel.findByIdAndDelete(id);
  if (!matchedJob)
    throw new NotFoundError(`Unable to find the job with id: ${id}`);
  res
    .status(StatusCodes.OK)
    .json({ message: "Job removed successfully", job: matchedJob });
};
