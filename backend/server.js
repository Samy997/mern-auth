import express from "express";

const port = 4000;

const app = express();

app.get("/", (req, res) => console.log("Working perfectly"));

app.listen(port, () => console.log(`Server started on PORT ${port}`));
