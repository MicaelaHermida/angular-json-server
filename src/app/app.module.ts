import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { NuevoClienteComponent } from './components/nuevo-cliente/nuevo-cliente.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EditarClienteComponent } from './components/editar-cliente/editar-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarClientesComponent,
    NuevoClienteComponent,
    NavBarComponent,
    EditarClienteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
