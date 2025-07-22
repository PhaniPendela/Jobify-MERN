import { Router } from "express";
import {
  getAllJobs,
  createJob,
  deleteJob,
  editJobById,
  getJobById,
  showStats,
} from "../controller/jobController.js";
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

const router = Router();

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestUser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getJobById)
  .patch(checkForTestUser, validateIdParam, validateJobInput, editJobById)
  .delete(checkForTestUser, validateIdParam, deleteJob);

export default router;
