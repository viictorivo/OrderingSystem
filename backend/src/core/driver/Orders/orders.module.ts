import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { PrismaService } from 'src/adapters/applications/apis/prisma.service';
import { QRCodeService } from 'src/adapters/applications/apis/qrcode.service';
import { OrdersRepository } from 'src/adapters/applications/ports/ordersRepository';
import { OrdersService } from 'src/adapters/applications/services/orders.service';
import { OrdersAdapter } from 'src/adapters/persistence/orders.adapter';
import { OrdersController } from './orders.controller';

@Module({
  imports: [HttpModule],
  controllers: [OrdersController],
  providers: [
    { provide: OrdersRepository, useClass: OrdersAdapter },
    OrdersService,
    PrismaService,
    QRCodeService,
  ],
})
export class OrdersModule {}
