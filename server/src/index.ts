import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import errorHandler from "./middlewares/errorHandler";
import connectDB from "./utils/dbConnect";
import { eventRouter } from "./routes/event";

dotenv.config();
const port = process.env.PORT || 5000;
const app = express();


app.use(cors());
app.use(express.json());

connectDB();


app.use("/api/events", eventRouter)


app.use(errorHandler);
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

