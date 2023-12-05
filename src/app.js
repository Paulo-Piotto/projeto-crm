import express, { json } from "express";
import cors from "cors";
import "express-async-errors";
import router from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandlerMiddleware.js";



const app = express();

app.use(json());
app.use(cors());
app.use(router);
app.use(errorHandler)


setInterval(() => {
    console.log("Busquei os dados")
},5000)


export default app;