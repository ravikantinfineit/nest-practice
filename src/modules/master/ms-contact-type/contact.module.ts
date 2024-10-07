import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';

import { ContactController } from './contact.controller';
import { ContactService } from './contact.service';

@Module({
    imports: [
        ClientsModule.register([
            {
                name: 'CONTACT_SERVICE',
                transport: Transport.TCP,
                options: {
                    host: 'localhost',
                    port: 3043,
                },
                // transport: Transport.RMQ,
                // options: {
                //     urls: ['amqp://localhost:5672'],
                //     queue: 'contact-queue',
                //     // queueOptions: { durable: false },
                // },
                // transport: Transport.REDIS,
                // options: {
                //     url: 'redis://localhost:6379',
                // },
            },
        ]),
        ClientsModule.register([
            {
                name: 'CONTACT_SERVICE1',
                transport: Transport.TCP,
                options: {
                    host: 'localhost',
                    port: 3044,
                },
                // transport: Transport.RMQ,
                // options: {
                //     urls: ['amqp://localhost:5672'],
                //     queue: 'contact-queue1',
                //     // queueOptions: { durable: false },
                // },
            },
        ]),
    ],
    controllers: [ContactController],
    providers: [ContactService],
})
export class ContactModule {}
