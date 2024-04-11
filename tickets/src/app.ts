import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import mongoose from "mongoose";
import cookieSession from "cookie-session";




//Middlewares
import { errorHandler , NotFoundError} from "@pptgtickets/common";



const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);


// using error handler
app.all("*", async () => {
  throw new NotFoundError();
});
app.use(errorHandler);



export { app };