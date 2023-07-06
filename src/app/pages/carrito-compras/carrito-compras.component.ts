import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Product.model';
import { AppService } from 'src/app/providers/app.service';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.scss'],
})
export class CarritoComprasComponent implements OnInit {
  productos: Producto[] = [];
  totalProductos: number = 0;
  constructor(private appService: AppService) {
    this.appService.obtenerCarrito();
    this.appService.productosEnCarrito.subscribe((productos) => {
      this.productos = productos;
    });
    this.appService.totalProductosEnCarrito.subscribe((total) => {
      this.totalProductos = total;
    });
  }
  eliminarDelCarrito(productId: number) {
    this.appService.eliminarProductoDelCarrito(productId);
  }
  ngOnInit(): void {}
}
