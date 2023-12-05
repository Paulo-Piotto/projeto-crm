import { Router } from "express";
import * as usersController from "../controllers/usersController.js";

const usersRouter = Router();
const PATH = "/crm";


usersRouter.get(`${PATH}`,
  usersController.hello
);

export default usersRouter;