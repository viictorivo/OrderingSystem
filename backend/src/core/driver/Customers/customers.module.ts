import { Module } from '@nestjs/common';
import { PrismaService } from 'src/adapters/applications/apis/prisma.service';
import { CustomersRepository } from 'src/adapters/applications/ports/customersRepository';
import { CustomerService } from 'src/adapters/applications/services/customer.service';
import { CustomersAdapter } from 'src/adapters/persistence/customers.adapter';
import { CustomersController } from './customers.controller';

@Module({
  imports: [],
  controllers: [CustomersController],
  providers: [
    { provide: CustomersRepository, useClass: CustomersAdapter },
    PrismaService,
    CustomerService,
  ],
  exports: [CustomerService],
})
export class CustomersModule {}
