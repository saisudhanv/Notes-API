
import express, { json } from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import noteRoutes from "./routes/noteRoute.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/notes", noteRoutes);

app.use((req, res) => {
  res.status(404).json({message: "Route not found"});
})

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
});

