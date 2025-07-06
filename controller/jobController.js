import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  if (!req.body.company || !req.body.position)
    return res
      .status(400)
      .json({ message: "Failed due to insufficient information about job" });
  const job = {
    id: nanoid(),
    company: req.body.company,
    position: req.body.position,
  };
  jobs.push(job);
  res.status(201).json({ job });
};

export const getJobById = async (req, res) => {
  const { id } = req.params;
  const matchedJob = jobs.filter((job) => job.id === id);
  if (matchedJob.length === 0) {
    return res
      .status(404)
      .json({ message: `Unable to find the job with id: ${id}` });
  }
  return res.status(200).json({ matchedJob });
};

export const editJobById = async (req, res) => {
  const { id } = req.params;
  const matchedJob = jobs.find((job) => job.id === id);
  if (matchedJob.length === 0)
    return res
      .status(404)
      .json({ message: `Unable to find the job with id: ${id}` });
  if (!req.body.company || !req.body.position)
    return res
      .status(400)
      .json({ message: "Failed due to insufficient information about job" });

  matchedJob.company = req.body.company;
  matchedJob.position = req.body.position;
  res.status(200).json({ message: "Job updated successfully", matchedJob });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const matchedJob = jobs.find((job) => job.id === id);
  if (matchedJob.length === 0)
    return res
      .status(404)
      .json({ message: `Unable to find the job with id: ${id}` });
  jobs = jobs.filter((job) => job.id !== id);
  res.status(200).json({ message: "Job removed successfully" });
};
