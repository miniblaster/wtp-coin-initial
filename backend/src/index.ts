import express, { Express } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import router from "./routes";
import { connectToDatabase } from "./db";

dotenv.config();
const app: Express = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", router);
app.use("/", (_req, res) => {
  res.send(`Working! on master`);
});

connectToDatabase()
  .then(() => {
    app
      .listen(process.env.SERVER_PORT, () => {
        console.log("Server is successfully running on port " + process.env.SERVER_PORT);
      })
      .on("error", (error) => {
        // gracefully handle error
        throw new Error(error.message);
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });
