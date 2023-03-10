import { Category } from '../models/Category';
import { CreateUserDTO } from '../dto/create-category-dto';

export class CategoriesRepository {
    constructor() {
        this.categories = [];
    }
    private categories: Category[];

    create({ name, description }: CreateUserDTO): void {
        const category = new Category();
        Object.assign(category, {
            name,
            description,
            created_at: new Date(),
        });

        this.categories.push(category);
    }
}