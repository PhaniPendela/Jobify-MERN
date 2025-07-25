import {
  BadRequestError,
  UnauthenticatedError,
  UnauthorizedError,
} from "../Errors/customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = (req, res, next) => {
  const { token } = req.cookies;
  if (!token) throw new UnauthenticatedError("Authentication Invalid");
  try {
    const { userId, role } = verifyJWT(token);
    const testUser = userId === "687eeb2f554e0d85063d5f39";
    req.user = { userId, role, testUser };
    next();
  } catch (err) {
    throw new UnauthenticatedError("Authentication Invalid");
  }
};

export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      throw new UnauthorizedError("Unauthorized to access this route");
    next();
  };
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) throw new BadRequestError("Demo user, Read Only!");
  next();
};
