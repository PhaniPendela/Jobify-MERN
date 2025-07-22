import { readFile } from "fs/promises";
import mongoose from "mongoose";
import dotenv from "dotenv";

import jobModel from "./models/jobModel.js";
import userModel from "./models/userModel.js";
import { URL } from "url";

dotenv.config();

try {
  await mongoose.connect(process.env.MONGO_URL);
  const user = await userModel.findOne({ email: "john@gmail.com" });
  const jsonJobs = JSON.parse(
    await readFile(new URL("./utils/mockData.json", import.meta.url))
  );
  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
  });
  await jobModel.deleteMany({ createdBy: user._id });
  await jobModel.create(jobs);
  console.log("success!!");
  process.exit(0);
} catch (err) {
  console.error(err);
  process.exit(1);
}
