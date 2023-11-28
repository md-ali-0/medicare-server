require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const server = http.createServer(app);
const port = process.env.PORT || 8080;
const connectDB = require("./src/db/connectDB");

const main = async () => {
    await connectDB();
    server.listen(port, () => {
        console.log(`MediCare Server is running on port ${port}`);
    });
};

main()