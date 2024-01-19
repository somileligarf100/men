const express = require("express");
require("../src/db/conn");
const MensRanking = require("../src/db/models/mens");
const router = require("../src/db/models/routers/men");

const app = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})