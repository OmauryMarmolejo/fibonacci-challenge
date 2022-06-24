import express from "express";
import cors from "cors";
import fibonacciRouter from "./routes/fibonacci";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 4000;

app.use("/api/fibonacci", fibonacciRouter);

app.listen(PORT, () => {
  console.log(`Server listening on: ${PORT}`);
});
