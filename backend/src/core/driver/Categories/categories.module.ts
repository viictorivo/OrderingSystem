import { Module } from '@nestjs/common';
import { PrismaService } from 'src/adapters/applications/apis/prisma.service';
import { CategoriesRepository } from 'src/adapters/applications/ports/categoriesRepository';
import { CategoriesService } from 'src/adapters/applications/services/categories.service';
import { CategoriesAdapter } from 'src/adapters/persistence/categories.adapter';
import { CategoriesController } from './categories.controller';

@Module({
  imports: [],
  controllers: [CategoriesController],
  providers: [
    { provide: CategoriesRepository, useClass: CategoriesAdapter },
    CategoriesService,
    PrismaService,
  ],
})
export class CategoriesModule {}
