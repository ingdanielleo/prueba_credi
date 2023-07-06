import { Categoria } from './Category.model';

export class Producto {
  constructor(
    public id: number,
    public title: string,
    public price: string,
    public description: string,
    public category: Categoria,
    public images: [],
    public productId?: number,
    public cantidad?: number
  ) {}
}
