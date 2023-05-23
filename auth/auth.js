import express from "express";
import jwt from "jsonwebtoken";
const router = express.Router();

const saltRounds = 10;
const user = {
  email: "test",
  password: "test",
};

//Login user
router.post("/", (req, res) => {
  if (req.body.email===user.email && req.body.password===user.password) {
    //create token and send that token to clint as heder
    const token = jwt.sign(user, "dsjfdsfsdhfgfhdsgfhdsgf");
    //set this token to header
    res.header("auth-token", token).send(token);
  } else {
    res.send("User & Password Incorrect");
  }
});

export default router;
