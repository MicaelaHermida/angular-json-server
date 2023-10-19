import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit{
  lista: Cliente[] | undefined = [];

  constructor(private clienteService: ClienteService, private router: Router){
    
  }
  ngOnInit():void{
    this.mostrarClientes();
  }

  async mostrarClientes(){
    this.lista = await this.clienteService.getClientes();
    console.log(this.lista);
  }

  async borrarCliente(id: number){
    console.log(id);
    const ok = confirm(`Esta seguro de eliminar al cliente con id ${id}`);
    if(!ok){
      return;
    }
    await this.clienteService.deleteCliente(id);
  }

  async editarUnCliente(cliente: Cliente){
    this.router.navigate(['/edit'], {
      queryParams: {clienteID: cliente.id}
    });
  }
}



