const express = require(`express`);
const app = express();

const port = 8000;

app.get('/',(req,res)=>{
  res.sendFile('public/index.html',{root:__dirname});
})

app.listen(port,()=>{
  console.log(`App is listening at port ${port}`)
})