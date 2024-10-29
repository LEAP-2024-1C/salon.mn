const express = require("express");
import { Request, Response } from "express";
const app = express();
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome ecommerce");
});

app.listen(8008, () => {
  console.log(`Server localhost 8008 аслаа aa`);
});
