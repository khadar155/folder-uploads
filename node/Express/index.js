import express from "express";
const app = express();
let port = 3030
app.get("/", (req, res) => {
    res.send("Hello Witorld!!");
});

app.listen(port, ()=>{
    console.log(`Server running on port ${port}.`);
});
