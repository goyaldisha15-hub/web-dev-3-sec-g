const os  = require('os');
const path = require('path');
const fs=require('fs');

// console.log('OS platform:', os.platform());
// console.log('OS architecture:', os.arch());
// console.log('OS CPU info:', os.cpus());
// console.log(os.homedir());
// console.log(os.totalmem()/(1024*1024*1024) + "GB");
// console.log(os.freemem()/(1024*1024*1024) + "GB");

// const filepath=path.resolve(__dirname,"core_modules.js");
// console.log(__dirname);

// const filepath=path.join("lecture 5","core_modules.js");
// console.log(filepath);

// const file="lecture 5/core_modules.js";
// console.log(path.basename(file));//file name
// console.log(path.extname(file));//js
// console.log(path.dirname(file));//backend/lecture 5

// const data=fs.readFileSync("sample.txt","utf-8");
// console.log(data);
 fs.readFile("sample.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
})