require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouter");
const profileRouter = require("./routers/profileRouters");
const notFound = require ("./middlewares/404");
const internalServerError = require ("./middlewares/500");
// const authMiddleware = require("./middlewares/auth");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_UNI = process.env.MONGO_UNI;

app.use(cors());
app.use(express.json());

mongoose.connect(MONGO_UNI)
    .then(() => console.log("Pedro Sánchez"))
    .catch((err => console.error("adfdf", err)));

app.use("/users", userRouter);
// app.use(authMiddleware);
app.use("/profile", profileRouter);
app.use(notFound);
app.use(internalServerError);

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`)
})


