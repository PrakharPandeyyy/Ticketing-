import express from "express";
import { Request, Response } from "express";
import { validateRequest } from "../middlewares/validate-request";
const router = express.Router();

const { body, validationResult } = require("express-validator");
import { RequestValidationError } from "../errors/request-validation-error";

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("You must supply a password"),
  ],
  validateRequest,

  (req: Request, res: Response) => {
    
  }
);

export { router as signinRouter };
