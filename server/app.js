const express = require("express");
const app = express();

const connectDB = require("./db");
connectDB();


// Middleware to parse JSON
app.use(express.json());
 
const projectRouter = require('./routes/projects')
app.use('/',projectRouter)

const server = app.listen(process.env.PORT || 5000);
const portNumber = server.address().port;
console.log(`Server is running on port ${portNumber}`);
