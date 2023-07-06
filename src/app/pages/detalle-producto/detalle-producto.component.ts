import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Producto } from 'src/app/models/Product.model';
import { AppService } from 'src/app/providers/app.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss'],
})
export class DetalleProductoComponent implements OnInit {
  producto!: Producto;

  constructor(private route: ActivatedRoute, private appService: AppService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.appService.obtenerProducto(id).subscribe((producto) => {
        this.producto = producto;
      });
    });
  }
}
