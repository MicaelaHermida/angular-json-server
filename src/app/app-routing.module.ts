import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NuevoClientePageComponent } from './pages/nuevo-cliente-page/nuevo-cliente-page.component';
import { EditarClientePageComponent } from './pages/editar-cliente-page/editar-cliente-page.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent
  }, 
  {
    path: 'new',
    component: NuevoClientePageComponent
  },
  {
    path: 'edit',
    component: EditarClientePageComponent
  },
  {
    path: "**",
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
