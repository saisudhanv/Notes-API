
import express, { json } from "express";
import { config } from "dotenv";
import cors from "cors";
import morgan from "morgan";
import connectDB from "./config/db.js";
import sampleRoutes from "./routes/noteRoute.js";

config();
connectDB();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(json());

app.use("/api/sample", sampleRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
