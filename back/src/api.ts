import express from "express";
import { random } from "./random";

const app = express.Router();

app.get("/random-config", (req, res) => {
  res.json({
    samples: random(0, 100),
    multiplicationFactor: random(0, 500, 2),
  });
});

export default app;
