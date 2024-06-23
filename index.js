const express = require("express");

const app = express();

app.listen(3030, () => {
  console.log("app is up and running");
});
let counter = 0;

// sync code
/**
 * here it will not process the next request until and unless the current request is not completed
 * it will wait for the first request to complete and then take the another request as fifo
 * here it is blocing the event loop
 */
app.get("/sync", (req, res) => {
  console.log(++counter);
  let i = 0;
  while (i < 10000000000) {
    // blocking the loop for sometime
    i++;
  }
  console.log("done");
  res.status(200).send("Jai Shree Ram");
});

// async code
/**
 * here while one call is processing its await it can process the other request
 * if needed of api is hitted second time while its in process of completing the first one
 * not blocking the event loop
 */
app.get("/async", async (req, res) => {
  console.log(++counter);
  console.log(
    await new Promise((res, rej) => {
      setTimeout(() => {
        res("done");
      }, 20000);
    })
  );
  res.status(200).send("Jai Shree Ram");
});

// check for if api is failed then what happen to the next request
/**
 * here in this snippet it will process the next request as it is sending the response
 * 
 */
app.get("/error", async (req, res) => {
  res.status(500).send("failed");
});
