const express=require('express');
const http=require('http');
const app=express();
const socketIo=require('socket.io');
const port=3000;


const server=http.createServer(app);

const io=new socketIo.Server(server,
    {
        cors: {
            origin: '',
            methods: ['GET', 'POST']
    } 
}
);

io.on('connection',(socket)=>{
    console.log('user connected with socket id:',socket.id);
    io.on("message",(msg)=>{
        socket.emit(msg);
    });
    socket.on('disconnect',()=>{
        console.log("user disconnected");
    });
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});