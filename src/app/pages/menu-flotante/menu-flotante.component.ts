import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/Product.model';

@Component({
  selector: 'app-menu-flotante',
  templateUrl: './menu-flotante.component.html',
  styleUrls: ['./menu-flotante.component.scss'],
})
export class MenuFlotanteComponent implements OnInit {
  @Input() producto!: Producto;

  constructor() {}

  ngOnInit(): void {}
  agregarAlCarrito() {
    // Aquí puedes agregar el código para agregar el producto al carrito de compras
    console.log('Agregando producto al carrito:', this.producto);
  }
}
