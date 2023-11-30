const express = require("express");
const applyMiddleware = require("./middlewares");
const globalErrorHandler = require("./utils/globalErrorHandler");

require("dotenv").config();
const app = express();
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const campRoutes = require("./routes/camp");
const reviewsRoutes = require("./routes/review");
const paymentRoutes = require("./routes/payment");
const settingRoutes = require("./routes/setting");

applyMiddleware(app);

// error handling middleware
app.use(authRoutes);
app.use(userRoutes);
app.use(campRoutes);
app.use(reviewsRoutes);
app.use(paymentRoutes);
app.use(settingRoutes);

app.get("/health", async (req, res) => {
    res.send("MediCare is running");
});
app.get("/", async (req, res) => {
    res.send("MediCare is running");
});
// handling all (get, post, put, delete) unhandled routes
app.all("*", (req, res, next) => {
    const error = new Error(`Can't find requested ${req.originalUrl} in our server`);
    error.status = 404;
    next(error);
});

app.use(globalErrorHandler);

module.exports = app;
