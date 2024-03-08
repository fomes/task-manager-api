import cors from "cors";
import express, { Application, Request, Response } from "express";

const app: Application = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.use("/hello", (_req: Request, res: Response) => {
  res.json({ message: "Hello API!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
