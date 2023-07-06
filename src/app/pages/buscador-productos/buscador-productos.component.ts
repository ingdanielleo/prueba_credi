import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/providers/app.service';

@Component({
  selector: 'app-buscador-productos',
  templateUrl: './buscador-productos.component.html',
  styleUrls: ['./buscador-productos.component.scss'],
})
export class BuscadorProductosComponent implements OnInit {
  filtroBusqueda!: string;

  constructor(private appService: AppService) {}

  ngOnInit(): void {}
  buscar() {
    if (this.filtroBusqueda == '' || this.filtroBusqueda.length < 3) {
      return;
    }

    this.appService.buscarProductos(this.filtroBusqueda);
  }
}
