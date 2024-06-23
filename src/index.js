const express = require("express");
const { SyncRouter } = require("./routes/sync-route");
const { AsyncRouter } = require("./routes/async-route");

const app = express();

app.listen(3030, () => {
  console.log("app is up and running");
});

// sync code
app.use("/sync", SyncRouter);

// async code
app.use("/async", AsyncRouter);

// check for if api is failed then what happen to the next request
/**
 * here in this snippet it will process the next request as it is sending the response
 *
 */
app.get("/error", async (req, res) => {
  res.status(500).send("failed");
});
