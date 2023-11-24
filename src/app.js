const express = require('express');
const connectDB = require("./db/connectDB");
const globalErrorHandler = require("./utils/globalErrorHandler");

require('dotenv').config();
const app =express();
const port = process.env.PORT || 8080;

// error handling middleware
app.use(globalErrorHandler);

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
    await connectDB()
    app.listen(port, ()=>{
        console.log(`MediCare Server is running on port ${port}`);
    })
   
}

main()