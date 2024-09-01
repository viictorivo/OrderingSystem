import { Injectable } from '@nestjs/common';
import { Products } from 'src/adapters/domain/products';
import { ProductsRepository } from '../ports/productsRepository';

@Injectable()
export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async getById(id: number): Promise<Products | null> {
    return this.productsRepository.getProductsById(id);
  }

  async create(categories: Products): Promise<Products> {
    return this.productsRepository.saveProducts(categories);
  }

  async update(categories: Products): Promise<Products> {
    return this.productsRepository.updateProducts(categories);
  }

  async delete(id: number): Promise<Products> {
    return this.productsRepository.deleteProductsById(id);
  }
}
