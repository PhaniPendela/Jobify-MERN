import { Router } from "express";
import {
  getAllJobs,
  createJob,
  deleteJob,
  editJobById,
  getJobById,
} from "../controller/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

const router = Router();

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(validateIdParam, getJobById)
  .patch(validateIdParam, validateJobInput, editJobById)
  .delete(validateIdParam, deleteJob);

export default router;
