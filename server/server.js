//third-party requirement
require("dotenv").config();
const express = require("express");
const cors = require("cors");

//local packages
const connectDB = require("./config/connectDB");
const parentRouter = require("./routes/parent");
const consultantRouter = require("./routes/consultant");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const { signin } = require("./controllers/user");
const { loginValidator } = require("./middlewares/validators");
const setup = require("./config/setup");

//initiate server
const app = express();

app.use(express.json());
app.use(cors());

//connect to DB
connectDB();
//setup admin
setup();

//get the app to use routers

app.use("/farah", userRouter);
app.use("/farah", adminRouter);
app.use("/farah", parentRouter);
app.use("/farah", consultantRouter);

const PORT = process.env.PORT || process.env.port;
app.listen(PORT, (err) =>
  err
    ? console.error(`server ERROR => ${err}`)
    : console.log(`go to localhost:${PORT}`)
);
