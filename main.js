//task1
const fs = require("fs");
const fStream = fs.createReadStream("Kaidash.txt");
let i=0;
fStream.on("data", (chunk) => {
  let r = chunk.length;
  i++;
  console.log(r);
});
//task2
fStream.on("end",()=>{
    console.log('i=>',i)
})
