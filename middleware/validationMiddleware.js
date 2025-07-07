import { body, param, validationResult } from "express-validator";
import mongoose from "mongoose";
import { BadRequestError, NotFoundError } from "../Errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import jobModel from "../models/jobModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((err) => err.msg);
        if (errorMessages[0].startsWith("no job")) {
          throw new NotFoundError(errorMessages);
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};

export const validateJobInput = withValidationErrors([
  body("company").notEmpty().withMessage("Company is Required"),
  body("position").notEmpty().withMessage("Position is Required"),
  body("jobLocation").notEmpty().withMessage("job location is Required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("Invalid Status Value"),
  body("jobType")
    .isIn(Object.values(JOB_TYPE))
    .withMessage("Invalid Type Value"),
]);

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MongoDB id");
    const job = await jobModel.findById(value);
    if (!job) throw new NotFoundError(`no job with id : ${value}`);
  }),
]);
