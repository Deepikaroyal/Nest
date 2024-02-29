import { Injectable, OnModuleInit } from "@nestjs/common";
import { io,Socket } from "socket.io-client";

@Injectable()
export class socketClient implements OnModuleInit{
public socketClient:Socket;

constructor() {
    this.socketClient = io('http://localhost:3001');
}
 onModuleInit() {
    this.registerConsumerEvents();
 }   
 private registerConsumerEvents(){
   // this.socketClient.emit('newMessage',{msg: 'hey there !'});
        this.socketClient.on('connect', () => {
        console.log('@@@,Connected to Gateway...')
     });
     this.socketClient.on('onMessage', (payload:any) => {
        console.log('socketClientClass',payload)
     })
 }

}