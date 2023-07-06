import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './share/navbar/navbar.component';
import { MenuFlotanteComponent } from './pages/menu-flotante/menu-flotante.component';
import { BuscadorProductosComponent } from './pages/buscador-productos/buscador-productos.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CategoriasComponent } from './pages/categorias/categorias.component';
import { CarritoComprasComponent } from './pages/carrito-compras/carrito-compras.component';
import { HttpClientModule } from '@angular/common/http';
import { AppService } from './providers/app.service';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';
import { DetalleProductoComponent } from './pages/detalle-producto/detalle-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuFlotanteComponent,
    BuscadorProductosComponent,
    ProductosComponent,
    CategoriasComponent,
    CarritoComprasComponent,
    HomeComponent,
    DetalleProductoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
