import { Router, Request, Response } from "express";
import { getFibonacciNumber } from "../services/fibonacci";

const router = Router();

router.get("/:baseNumber", (req: Request, res: Response) => {
  const calculatedNumber = getFibonacciNumber(+req.params.baseNumber);
  res.send(calculatedNumber);
});

export default router;
