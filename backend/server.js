import express from "express";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 4000;

const app = express();

app.get("/", (req, res) => console.log("Working perfectly"));

app.listen(port, () => console.log(`Server started on PORT ${port}`));
