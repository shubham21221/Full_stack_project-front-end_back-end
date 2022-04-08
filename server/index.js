const express = require('express');
const app = express();


app.get('/',(req,res) => {
res.send("hellow name");
});

app.listen(3001, () => {
    console.log("rurring on port 3001")
});