import express from "express";
import bodyParser from "body-parser";
import { blogPosts } from "./blogpost";
const app = express();
const PORT = 8000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("This is my express server!!!");
});

app.get("/blogposts", (req, res) => {
  res.send(blogPosts);
});

app.post("/delete-post", (req, res) => {
  const id: string = req.body.id;
  for (let i = 0; i < blogPosts.length; i++) {
    if (blogPosts[i].id === id) {
      return res.send(blogPosts.splice(i, 1)[0]);
    }
  }
  res.send("failed to delete blog post");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
