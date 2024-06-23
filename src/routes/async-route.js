const express = require("express");
const AsyncRouter = express.Router();

/**
 * here while one call is processing its await it can process the other request
 * if needed of api is hitted second time while its in process of completing the first one
 * not blocking the event loop
 */
AsyncRouter.get("/", async (req, res) => {
  console.log("Async triggered");
  console.log(
    await new Promise((res, rej) => {
      setTimeout(() => {
        res("Done");
      }, 20000);
    })
  );
  res.status(200).send("Jai Shree Ram");
});

module.exports.AsyncRouter = AsyncRouter;
