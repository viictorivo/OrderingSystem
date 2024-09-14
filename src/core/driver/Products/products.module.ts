import { Module } from '@nestjs/common';
import { ProductsRepository } from 'src/adapters/applications/ports/productsRepository';
import { ProductsService } from 'src/adapters/applications/services/products.service';
import { ProductsAdapter } from 'src/adapters/persistence/products.adapter';

import { PrismaService } from 'src/adapters/applications/apis/prisma.service';
import { ProductsController } from './products.controller';

@Module({
  imports: [],
  controllers: [ProductsController],
  providers: [
    { provide: ProductsRepository, useClass: ProductsAdapter },
    ProductsService,
    PrismaService,
  ],
})
export class ProductsModule {}
