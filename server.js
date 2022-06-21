const express = require('express');
const app = express();

require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');

const productRouter = require('./backend/routes/product_routes');
const registerauth = require('./backend/routes/user_routes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

mongoose.connect("mongodb://localhost:27017/NODEAPI")
.then(()=>{
    console.log('DataBase Connected Successfully');
})
.catch(()=>{
    console.log("Error in Connecting to Database");
    process.exit();
})

app.use('/api',productRouter);
app.use('/api/auth',registerauth);



let PORT = 8000;
app.listen(PORT,()=>{
    console.log(`Server Started at port: ${PORT}`);
})