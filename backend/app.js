import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.route.js";
import doubtRouter from "./routes/doubt.route.js";

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.urlencoded({
    limit:"16kb",
    extended: true,
}));

app.use(express.json({
    limit: "32kb",
}));

app.use(cookieParser());

app.use("/api/v1/user", userRouter);

app.use("/api/v1/doubt", doubtRouter);

export default app;