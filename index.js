const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const { readFile } = require("fs").promises;

app.get("/", async (request, response) => {
  try {
    const html = await readFile("./home.html", "utf8");
    response.send(html);
  } catch (error) {
    response.status(500).send("Sorry, out of order");
  }
});

app.listen(port);