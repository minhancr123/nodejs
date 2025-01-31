const express = require('express')

const app = express();


app.listen(8000 , (error)=>{
    console.log("Server is listen at port 8000");
    if(error){
        console.log(error);
    }
})