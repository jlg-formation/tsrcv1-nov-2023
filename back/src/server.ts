import express from "express";
import api from "./api";

const port = 3000;
const publicDir = "../front/dist";

const app = express();

app.use((req, res, next) => {
  console.log("req.url", req.url);
  next();
});

app.use("/api", api);

app.use(express.static(publicDir));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
