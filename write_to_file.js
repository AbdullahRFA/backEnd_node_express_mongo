

const fs = require('fs');

fs.writeFile("Output.txt","Abdullah is the best",(err)=>{
  if(err){
    console.log("Error Occured");
  }
  else{
    console.log("File Write Successulffy");
  }
})

fs.readFile("Output.txt","utf8",(err,data)=>{
  if(err){
    console.log("Error Occured")
  }
  else{
    console.log("Your Written file is : ",data)
  }
})