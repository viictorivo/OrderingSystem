import { Injectable } from '@nestjs/common';
import { PrismaService } from '../applications/apis/prisma.service';
import { ProductsRepository } from '../applications/ports/productsRepository';
import { Products } from '../domain/products';

@Injectable()
export class ProductsAdapter implements ProductsRepository {
  constructor(private prisma: PrismaService) {}

  async getProductsById(id: number): Promise<Products | null> {
    try {
      return await this.prisma.products.findUnique({ where: { id: id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async saveProducts(products: Products): Promise<Products> {
    try {
      return await this.prisma.products.create({ data: products });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async updateProducts(products: Products): Promise<Products> {
    try {
      return await this.prisma.products.update({
        where: {
          id: products.id,
        },
        data: products,
      });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }

  async deleteProductsById(id: number): Promise<Products> {
    try {
      return await this.prisma.products.delete({ where: { id: id } });
    } catch (error) {
      const message = error?.meta?.target || error?.meta?.details;
      throw new Error(message);
    }
  }
}
