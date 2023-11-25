const express = require('express');
const connectDB = require("./db/connectDB");
const globalErrorHandler = require("./utils/globalErrorHandler");

require('dotenv').config();
const app =express();
const port = process.env.PORT || 8080;
const authRoutes = require('./routes/auth')
const campRoutes = require('./routes/camp')

// error handling middleware
app.use(globalErrorHandler);
app.use(authRoutes)
app.use(campRoutes)

app.get('/health', async(req,res)=>{
    res.send('MediCare is running')
})

// handling all (get, post, put, delete) unhandled routes
app.all('*',(req,res,next)=>{
    const error = new Error(`Can't find requested ${req.originalUrl} in our server`);
    error.status = 404;
    next(error)
})

const main=async ()=>{
    // await connectDB()
    app.listen(port, ()=>{
        console.log(`MediCare Server is running on port ${port}`);
    })
   
}

main()