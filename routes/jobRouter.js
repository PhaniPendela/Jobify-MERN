import { Router } from "express";
import {
  getAllJobs,
  createJob,
  deleteJob,
  editJobById,
  getJobById,
} from "../controller/jobController.js";

const router = Router();

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJobById).patch(editJobById).delete(deleteJob);

export default router;
