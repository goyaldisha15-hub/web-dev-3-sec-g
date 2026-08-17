const os  = require('os');
const path = require('path');
const fs=require('fs');
const crypto=require('crypto');
const dns=require('dns');
const process=require('process');

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
//  fs.readFile("sample.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })
// fs.writeFileSync("sample.txt","Hello guyss");
// fs.writeFile("sample.txt","Hello ",(err)=>{
//     if(err)
//         console.log(err)
//     })
// fs.appendFileSync("sample.txt","\nNew content")
// fs.unlinkSync("file.txt")
// fs.renameSync("sample.txt","newFile.txt")
// fs.copyFileSync("newFile.txt","copyFile.txt")
// const password="123456";
// const hash=crypto.createHash("sha256").update(password).digest("hex");
// console.log(hash);

// const salt=crypto.randomBytes(16).toString("hex");
//  console.log(salt);

// const hash=crypto.createHmac("sha256",salt).update(password).digest("hex");
// console.log(hash);
// dns.lookup('www.google.com', (err, address, family) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(address);
//         console.log(family);
//     }
// })

// dns.reverse("8.8.8.8", (err, hostnames) => {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(hostnames);
//     }
// })

const data=process.argv;
// console.log(Number(data[2])+Number(data[3]));
console.log(process.version);
console.log(process.pid);
console.log(process.platform);
console.log(process.cwd());