import { Injectable } from '@nestjs/common';
import { Payments } from 'src/adapters/domain/payments';
import { PaymentsRepository } from '../ports/paymentsRepository';

@Injectable()
export class PaymentsService {
  constructor(private readonly paymentsRepository: PaymentsRepository) {}

  async getById(id: number): Promise<Payments | null> {
    return this.paymentsRepository.getPaymentsById(id);
  }
  async getPaymentsByOrderId(orderID: number): Promise<Payments | null> {
    return this.paymentsRepository.getPaymentsByOrderId(orderID);
  }
  async update(payment: Payments): Promise<Payments> {
    return this.paymentsRepository.updatePayment(payment);
  }
}
