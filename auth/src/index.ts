import express from "express";
import { json } from "body-parser";

//Route Handlers
import { currentUserRouter } from "./routes/current-user";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter} from "./routes/signup";
import { errorHandler } from "./middlewares/error-handler";

const app = express();
app.use(json());

// using route handlers
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

// using error handler
app.use(errorHandler);

app.listen(3000, () => {
  console.log("Listening on port 3000!!!!!");
});
