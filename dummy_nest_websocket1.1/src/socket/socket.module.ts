import { Module } from "@nestjs/common";
import { socketClient } from "./socket.client";

@Module({
    providers:[socketClient],
})
export class socketModule{}