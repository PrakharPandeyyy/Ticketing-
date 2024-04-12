import express from "express";
import "express-async-errors";
import { json } from "body-parser";

import cookieSession from "cookie-session";

//Routes
import { createTicketRouter } from "./routes/new";



//Middlewares
import { errorHandler , NotFoundError ,currentUser} from "@pptgtickets/common";



const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== "test",
  })
);
app.use(currentUser);

//Routes
app.use(createTicketRouter);

// using error handler
app.all("*", async () => {
  throw new NotFoundError();
});
app.use(errorHandler);



export { app };