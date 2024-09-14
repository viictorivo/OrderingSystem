import { Module } from '@nestjs/common';
import { PrismaService } from 'src/adapters/applications/apis/prisma.service';
import { OrdersTrackingRepository } from 'src/adapters/applications/ports/ordersTrackingRepository';
import { OrdersTrackingService } from 'src/adapters/applications/services/ordersTracking.service';
import { OrdersTrackingAdapter } from 'src/adapters/persistence/ordersTracking.adapter';
import { OrdersTrackingController } from './order-tracking.controller';

@Module({
  imports: [],
  controllers: [OrdersTrackingController],
  providers: [
    { provide: OrdersTrackingRepository, useClass: OrdersTrackingAdapter },
    OrdersTrackingService,
    PrismaService,
  ],
})
export class OrderTrackingModule {}
