import * as net from 'net';

import { Inject, Injectable, OnModuleDestroy } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { ContactDto as CreateDto } from './dto/create.dto';

@Injectable()
export class ContactService implements OnModuleDestroy {
    private readonly consumerHost = 'localhost'; // Adjust as needed
    private readonly consumerPort = 3042; // Adjust as needed
    constructor(
        @Inject('CONTACT_SERVICE') private rabbitClient: ClientProxy,
        @Inject('CONTACT_SERVICE1') private rabbitClient1: ClientProxy
    ) {}
    async create(createDto: CreateDto) {
        // try {
        //     this.rabbitClient.emit('create-contact', createDto);
        //     return 'send sussefullty';
        // } catch (error) {
        //     console.error('Failed to send message:', error);
        //     return 'request failed' + error;
        // }
        const isConsumerAvailable = await this.checkConsumerStatus();

        if (isConsumerAvailable) {
            this.rabbitClient.emit('create-contact', createDto);
            this.rabbitClient1.emit('create-contact', createDto);
            return 'Message sent successfully';
        } else {
            // this.messageQueue.push(createDto);
            console.log('Consumer is down. Message stored locally:', createDto);
            return 'Consumer is down, Try after some time';
        }
        // const result = this.rabbitClient.emit('create-contact', createDto);
        // console.log(result);
        // return 'send create request';
    }
    private async checkConsumerStatus(): Promise<boolean> {
        return new Promise((resolve) => {
            const socket = new net.Socket();

            socket.setTimeout(2000); // Set timeout for connection

            socket.on('connect', () => {
                socket.destroy(); // Close the connection
                resolve(true);
            });

            socket.on('error', () => {
                resolve(false); // Connection failed
            });

            socket.on('timeout', () => {
                socket.destroy(); // Close the connection
                resolve(false); // Timeout occurred
            });

            socket.connect(this.consumerPort, this.consumerHost); // Attempt to connect
        });
    }
    onModuleDestroy() {
        this.rabbitClient.close();
        this.rabbitClient1.close();
    }
}
