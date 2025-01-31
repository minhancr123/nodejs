const express = require('express')

const app = express();

const test_route = require("./routes/test_route");
app.use("/api/v1/test" , test_route)

app.listen(8000 , )