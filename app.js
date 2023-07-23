const express = require("express");
const app = express();

app.get("/", (request, response) => {
  let newDate = new Date();
  response.send(
    `${newDate.getDate()}-${newDate.getDate() + 1}-${newDate.getFullYear()}`
  );
});

app.listen(3002);
module.exports = app;
