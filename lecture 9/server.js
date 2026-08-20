const express = require('express');
const app = express();
const PORT=3000

const users = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 3, name: "Jim Doe", email: "jim@example.com" },
    { id: 4, name: "Jack Doe", email: "jack@example.com" },
    {id:5, name: "Jacky Doe", email: "jacky@example.com"},
];

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/about",(req,res)=>{
    res.send("heyy! This is about page");
})

app.get("/contact",(req,res)=>{
    res.send("heyy! This is contact page");
})

app.get("/users",(req,res)=>{
    res.json(users);
})

app.listen(PORT,()=>{
    console.log('Server is running on port 3000');
})