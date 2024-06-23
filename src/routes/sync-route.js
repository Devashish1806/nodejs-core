const express = require("express");
const SyncRouter = express.Router();

/**
 * here it will not process the next request until and unless the current request is not completed
 * it will wait for the first request to complete and then take the another request as fifo
 * here it is blocing the event loop
 */
SyncRouter.get("/", (req, res) => {
  console.log("Sync triggered");
  let i = 0;
  while (i < 10000000000) {
    // blocking the loop for sometime
    i++;
  }
  console.log("Done");
  res.status(200).send({ status: "OK", message: "Sync Responded" });
});

module.exports.SyncRouter = SyncRouter;
