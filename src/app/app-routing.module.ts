import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';

const routes: Routes = [
  {
    path: 'listar-clientes', 
    component: ListarClientesComponent
  },
  {
    path: 'nuevo-cliente',
    component: NuevoClienteComponent
  },
  {
    path: 'editar-cliente',
    component: EditarClienteComponent
  },
  {
    path: "**",
    redirectTo: 'listar-clientes'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
