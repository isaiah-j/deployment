const express = require("express");

const knex = require("knex");

const app = express();

const cors = require("cors");

const db = require("./data/db-config");

app.use(cors());

app.get("/", (req, res) => {
  res.send(process.env.DB_URL);
});

app.get("/data", async (req, res) => {
  let people = await db("people");
  res.json(people);
});

app.listen(8080, () => console.log("Listening on port 8080"));
