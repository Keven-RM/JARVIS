import { Server } from "socket.io";
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';

import router from './routes';
import { processRequestedCommand } from "./core/process";
import { greeting } from "./controllers/greeting";
import connectDB from "./database";

dotenv.config();

const app = express();
const server = http.createServer(app);
const io = new Server(server);
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use('/', router);

io.on("connection", (socket) => {    
    console.log(`User Connected: ${socket.id}`);  
    // socket.join('1');
  
    socket.on("message", async (data) => {
        let response = '';
        const { intent, answer } = await processRequestedCommand(data.message)
        switch (intent) {
            case 'greeting':
                response = greeting(answer);
                break;
        
            default:
                break;
        }

        socket
        // .to('1')
        .emit("recive_message", response);

        console.log(`User: ${socket.id} - ${data.user.name}, message: ${data.message}`)
    });

    socket.on("disconnect", () => {
        // socket.rooms.size === 
        console.log(socket.rooms)
    });
});

connectDB();

server.listen(port, () => {
  console.log(`> Servidor rodando na porta ${port}`);
});

console.log("===============================================")
console.log("============JARVIS - POR - KEVEN ==============")
console.log("===============================================")
