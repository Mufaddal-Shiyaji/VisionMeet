const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(bodyParser.urlencoded({extended:true}))
const PORT = process.env.PORT || 5000;

let roomAndUsers=[{"roomID":"0","userId":[]}];
app.post("/:roomId", (req, res) => {
  console.log("posted!")
  let roomId= req.params.roomId;
  console.log(roomId);
  const userId = req.body.name;
  function func(i){
    if(i.roomID==roomId){
      i.userId.push(userId);
    }
    else{
      const key={"roomID":roomId,"userId":[userId]}
      roomAndUsers.push(key);
    }
  }
  roomAndUsers.forEach(func)
  res.redirect(`/${roomId}`)
});

app.get("/:roomId", (req, res) => {
  res.send(roomAndUsers);
});

app.post("/joinRoom", (req, res) => {
  console.log("Joinposted!")
  let roomId= req.body.meeting;
  console.log(roomId);
  const userId = req.body.name;
  function func(i){
    if(i.roomID==roomId){
      i.userId.push(userId);
    }
    else{
      let arr=[]
      arr.push(userId)
      const key={"roomID":roomId,"userId":arr}
      roomAndUsers.push(key);
    }
  }
  roomAndUsers.forEach(func)
  res.redirect(`/${roomId}`)
});
app.use(express.static("build"));

app.listen(PORT, () => {
  console.log("Server running at port 5000");
});
