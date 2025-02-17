import express from "express";
import cors from "cors";
import routes from "./routes";
import databaseConnection from "./config/database";

const app = express();
databaseConnection();
app.use(express.json(), cors());
app.use(express.urlencoded({ extended: true }));

routes(app);

export default app;
