"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("henloo");
console.log("FDgdf");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
    res.send("Welcome ecommerce");
});
app.listen(8008, () => {
    console.log(`Server localhost 8008 аслаа aa`);
});
