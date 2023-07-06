import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/Category.model';
import { AppService } from 'src/app/providers/app.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
})
export class CategoriasComponent implements OnInit {
  categorias: Categoria[] = [];

  constructor(private appService: AppService) {
    this.appService.obtenerCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  ngOnInit(): void {}
}
