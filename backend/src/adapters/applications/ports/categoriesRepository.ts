import { Categories } from 'src/adapters/domain/categories';
import { ProductsByCategory } from 'src/adapters/domain/productsByCategory';

export abstract class CategoriesRepository {
  abstract getCategoriesById(id: number): Promise<Categories | null>;
  abstract getProductByCategoryID(
    categoryID: number,
  ): Promise<ProductsByCategory | null>;
  abstract saveCategories(categories: Categories): Promise<Categories>;
  abstract updateCategories(categories: Categories): Promise<Categories>;
  abstract deleteCategoriesById(id: number): Promise<Categories>;
}
