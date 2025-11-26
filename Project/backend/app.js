import dotenv from "dotenv";
dotenv.config({ quiet: true });

import cookieParser from "cookie-parser";
import express from "express";

import { errorMiddleware } from "./src/middlewares/error.middleware.js";
import { seedAdmin } from "./src/seed/admin.seed.js";

import productRoutes from "./src/routes/admin/product.route.js";

import userRoutes from "./src/routes/user/user.route.js";

const app = express();

if (process.argv[2] === "seed") {
  seedAdmin();
}

//! Parsing of data

app.use(cookieParser());
app.use(express.json()); //? to handle json data
app.use(express.urlencoded({ extended: true })); //? to handle form data


//! API routes

app.use("/api/user", userRoutes);
app.use("/api/admin/product", productRoutes);

//! Global error handler


app.use(errorMiddleware);

export default app;


// catches all errors from routes/ middleware.
/*
Must have 4 parameters: (err, req, res, next)
Must be LAST middleware
Express automatically calls it when next(error) is called.
?Why last?
Because, Catches errors from all previous middlewares/routes.
*/