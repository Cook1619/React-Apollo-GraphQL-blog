import express from "express";
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  res.send("This is my express server!!!");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
