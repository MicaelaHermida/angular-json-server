import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/services/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit{
  lista: Cliente[] = [];

  constructor(private clienteService: ClienteService, private router: Router){
    this.mostrarClientes();
  }
  ngOnInit():void{}

  async mostrarClientes(){
    this.lista = await this.clienteService.getClientes();
    console.log(this.lista);
  }

  async borrarCliente(id: number){
    console.log(id);
    await this.clienteService.deleteCliente(id);
  }

  async editarUnCliente(cliente: Cliente){
    this.router.navigate(['/editar-cliente'], {
      queryParams: {clienteID: cliente.id}
    });
  }
}



