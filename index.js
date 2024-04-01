import express from "express";
import bodyParser from "body-parser";
// import pg from "pg";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
app.use( express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
  res.sendFile(__dirname+"/public/login.html");
});

app.post("/logged",(req,res)=>{
  res.send(req.body.username);
  console.log("body recieved")
  console.log(req.body.username)

})

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });





