const express = require("express");
const app = express();
const PORT = 1234;

app.use(express.static("public"));

app.get("home", (req, res)=> {
    res.sendFile(__dirname + "/views/home.html");
});

app.get("", (req, res)=> {
    res.sendFile(__dirname + "/views/about.html");
});

app.get("", (req, res)=> {
    res.sendFile(__dirname + "/views/works.html");
});

app.listen(PORT, ()=>{
    console.log(`Server running, listening on ${PORT}`);
})