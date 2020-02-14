const express = require("express");
const messageRouter = require("./message/router");

const app = express();

const port = 4000;

const jsonMiddleware = express.json();


app.use(jsonMiddleware);
app.use(messageRouter);

app.listen(port, () => console.log(`server is listening on ${port}`));

