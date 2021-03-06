import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTING } from './app.routes';



// Servicios
import { ColeccionesService } from './servicios/colecciones.service';


// Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { ProductoComponent } from './components/shared/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { ProductoTarjetaComponent } from './components/shared/producto-tarjeta/producto-tarjeta.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    NosotrosComponent,
    ColeccionesComponent,
    ProductoComponent,
    BuscadorComponent,
    ProductoTarjetaComponent,
    HeaderComponent,
    FooterComponent,
    ContactoComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
  ],
  providers: [
    ColeccionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
