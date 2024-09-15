import { Injectable } from '@nestjs/common';
import { Customers } from 'src/adapters/domain/customer';
import { CustomersRepository } from '../ports/customersRepository';

@Injectable()
export class CustomerService {
  constructor(private readonly customersRepository: CustomersRepository) {}

  async getById(id: number): Promise<Customers | null> {
    return this.customersRepository.getCustomerById(id);
  }
  async getByCpf(cpf: string): Promise<Customers | null> {
    return this.customersRepository.getCustomerByCpf(cpf);
  }

  async getCheckIsAdmin(id: number): Promise<boolean> {
    return this.customersRepository.getCheckIsAdmin(id);
  }

  async create(customer: Customers): Promise<Customers> {
    return this.customersRepository.saveCustomer(customer);
  }

  async update(customer: Customers): Promise<Customers> {
    return this.customersRepository.updateCustomer(customer);
  }

  async delete(id: number): Promise<Customers> {
    return this.customersRepository.deleteCustomerById(id);
  }
}
