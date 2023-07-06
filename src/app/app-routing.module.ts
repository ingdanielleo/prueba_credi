import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscadorProductosComponent } from './pages/buscador-productos/buscador-productos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { HomeComponent } from './pages/home/home.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'buscador-productos', component: BuscadorProductosComponent },
  { path: 'listado-categorias', component: CategoriasComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'detalle-producto/:id', component: DetalleProductoComponent },
  { path: 'carrito-compras', component: CarritoComprasComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
