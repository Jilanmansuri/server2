const express = require("express");

const app = express();

const users = [
  { id: 1, name: "Arjun", role: "student" },
  { id: 2, name: "Priyesha", role: "mentor" },
  { id: 3, name: "Devilal", role: "rockstar" },
  { id: 4, name: "Nitish", role: "mentor" }
];

app.get("/", (req, res) => {
  res.send("Express server is running");
});

app.get("/users", (req, res) => {
    console.log("list of users",users);
  res.status(200).json(users);
});

app.get("/users/:test",(req,res)=>{
   console.log(req.params);
   console.log("first code")
   res.status(200).json(users);
});

app.get("/users/:id", (req, res) => {
  const userId = Number(req.params.id);
  const user = users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
});

app.listen(3001, () => {
  console.log("Server started on port 3000");
});