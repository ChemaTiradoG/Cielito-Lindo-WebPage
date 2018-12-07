import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ColeccionesComponent } from './components/colecciones/colecciones.component';
import { ProductoComponent } from './components/shared/producto/producto.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const APP_ROUTES: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'nosotros', component: NosotrosComponent },
    { path: 'colecciones', component: ColeccionesComponent },
    { path: 'producto/:id', component: ProductoComponent },
    { path: 'buscar/:termino', component: BuscadorComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'inicio' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash: true});
