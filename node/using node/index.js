const fs = require("fs");

fs.writeFile("msg.txt", "hello there", (err)=>{
    if(err) throw err;
    console.log("The file has been saved");
});

fs.readFile("./msg.txt", "utf8", (err,data)=> {
    if(err) throw err;
    console.log("\ncontents of the file are:\n\n"+ data+"\n");
});