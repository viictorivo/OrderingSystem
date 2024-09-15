import { Module } from '@nestjs/common';
import { PaymentsRepository } from 'src/adapters/applications/ports/paymentsRepository';
import { PaymentsService } from 'src/adapters/applications/services/payments.service';
import { PaymentsAdapter } from 'src/adapters/persistence/payments.adapter';
import { PaymentsController } from './payments.controller';
import { PrismaService } from 'src/adapters/applications/apis/prisma.service';

@Module({
  imports: [],
  controllers: [PaymentsController],
  providers: [
    { provide: PaymentsRepository, useClass: PaymentsAdapter },
    PaymentsService,
    PrismaService,
  ],
})
export class PaymentsModule {}
