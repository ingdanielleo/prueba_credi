import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/Product.model';
import { AppService } from 'src/app/providers/app.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  productos: Producto[] = [];
  estadoActual!: string;
  constructor(private appService: AppService, private router: Router) {}
  ngOnInit() {
    this.appService.obtenerProductos();
    this.appService.productosEncontrados.subscribe((productos) => {
      this.productos = productos;
    });
    this.appService.estadoActual.subscribe((estado) => {
      this.estadoActual = estado;
    });
  }
  verDetalle(id: number) {
    this.router.navigate(['/detalle-producto', id]);
  }
}
