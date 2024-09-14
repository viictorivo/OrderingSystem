import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { PrismaService } from './adapters/applications/apis/prisma.service';
import { QRCodeService } from './adapters/applications/apis/qrcode.service';
import { CategoriesModule } from './core/driver/Categories/categories.module';
import { CustomersModule } from './core/driver/Customers/customers.module';
import { HealthModule } from './core/driver/Health/health.module';
import { OrdersModule } from './core/driver/Orders/orders.module';
import { OrderTrackingModule } from './core/driver/OrdersTracking/order-tracking.module';
import { PaymentsModule } from './core/driver/Payments/payments.module';
import { ProductsModule } from './core/driver/Products/products.module';
import { RolesGuard } from './core/guard/roles.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    HttpModule,
    HealthModule,
    CustomersModule,
    CategoriesModule,
    ProductsModule,
    PaymentsModule,
    OrdersModule,
    OrderTrackingModule,
  ],
  providers: [
    PrismaService,
    QRCodeService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [],
  controllers: [],
})
export class AppModule {}
