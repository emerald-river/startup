import {Router} from "express";
import apiV1Router from "./v1";

//Initialize main router object
const mainRouter = Router();

//Here we can include static routes or API routes from other files
mainRouter.use("/api", apiV1Router);
mainRouter.use("/api/v1", apiV1Router);

//Include a basic route for testing
mainRouter.get("/", (_req, res) => res.send("Welcome to DevExp"));

export default mainRouter;
