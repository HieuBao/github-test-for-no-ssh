//Import express Lib
//import express from "express";
const express = require("express");

//Import path
const path = require("path");
//Declare app
const app = express();

//Declare port
const port = 3000;

//Get Method
app.get("/test", (req, res) => {
  res.send("Hello word");
});

app.get("/", (req, res) => {
  res.render("sample.ejs");
});

//Config view engine
app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

//Listen on port
app.listen(port, () => {
  console.log(`App's running on ${port}`);
});
