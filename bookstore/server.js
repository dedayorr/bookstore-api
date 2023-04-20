const express = require("express");
const app = express();
require("colors");
const DBconnect = require("./config/Db");
require("dotenv").config();

const port = process.env.PORT || 5000;

DBconnect()
.then(()=>{
    app.listen(port, () => {
        console.log(`Server is running on ${port}`.bgRed);
      });
})
.catch(()=>{
    console.log(err.message);
})



