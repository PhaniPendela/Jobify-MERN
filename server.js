import express from "express";
import morgon from "morgan";
import * as dotenv from "dotenv";

import jobRouter from "./routes/jobRouter.js";
dotenv.config();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgon("dev"));
}

app.use(express.json());

app.get("/", (req, res) => res.send("Hello World"));

app.post("/", (req, res) => {
  console.log(req);

  res.json({ message: "data received", data: req.body });
});

app.use("/api/v1/jobs", jobRouter);

app.use("*", (req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: "Something went wrong" });
});

const port = process.env.PORT || 5100;

app.listen(port, () => {
  console.log(`Server Running on PORT ${port}`);
});
