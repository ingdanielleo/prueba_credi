import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/Category.model';
import { Producto } from '../models/Product.model';
import { BehaviorSubject } from 'rxjs';
import { Carrito } from '../models/Carrito.model';
@Injectable({
  providedIn: 'root',
})
export class AppService {
  productosEncontrados = new BehaviorSubject([]);
  estadoActual = new BehaviorSubject('todos');
  productosEnCarrito = new BehaviorSubject([]);
  totalProductosEnCarrito = new BehaviorSubject(0);
  constructor(private http: HttpClient) {}
  obtenerCategorias() {
    return this.http.get<Categoria[]>(
      'https://api.escuelajs.co/api/v1/categories'
    );
  }
  obtenerProductos() {
    return this.http
      .get<Producto[] | any>(
        'https://api.escuelajs.co/api/v1/products?offset=0&limit=20'
      )
      .subscribe((productos) => {
        this.productosEncontrados.next(productos);
        this.estadoActual.next('todos');
      });
  }
  obtenerProducto(id: number) {
    return this.http.get<Producto[] | any>(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
  }
  buscarProductos(filtroBusqueda: string) {
    return this.http
      .get<Producto[] | any>(
        `https://api.escuelajs.co/api/v1/products/?title=${filtroBusqueda}`
      )
      .subscribe((productos) => {
        this.productosEncontrados.next(productos);
        this.estadoActual.next('busqueda');
      });
  }
  obtenerCarrito() {
    this.http
      .get<Carrito[] | any>('https://fakestoreapi.com/carts/3')
      .subscribe((carrito: any) => {
        const productos = carrito.products.reduce(
          (productos: any, producto: any) => {
            const productoExistente = productos.find(
              (p: any) => p.productId === producto.productId
            );
            if (productoExistente) {
              productoExistente.cantidad += producto.quantity;
            } else {
              productos.push({
                productId: producto.productId,
                cantidad: producto.quantity,
              });
            }
            return productos;
          },
          []
        );
        this.productosEnCarrito.next(productos);
        this.totalProductosEnCarrito.next(
          productos.reduce(
            (total: any, producto: any) => total + producto.cantidad,
            0
          )
        );
      });
  }
  eliminarProductoDelCarrito(productId: number) {
    const productos = this.productosEnCarrito.value.filter(
      (producto: any) => producto.productId !== productId
    );
    this.productosEnCarrito.next(productos);
    this.totalProductosEnCarrito.next(
      productos.reduce((total, producto: any) => total + producto.cantidad, 0)
    );
  }
}
