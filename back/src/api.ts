(() => {
  const express = require("express");

  const app = express.Router();

  app.get("/random-config", (req, res) => {
    res.json({
      samples: 23,
      multiplicationFactor: 56,
    });
  });

  module.exports = app;
})();
