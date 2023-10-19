import { Injectable } from "@angular/core";
import { Cliente } from "../interfaces/cliente.interface";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})

export class ClienteService{
    url = 'http://localhost:3000/clientes';

    constructor(private router: Router){}

    async getClientes(): Promise<Cliente[] | undefined>{
        try{
            const resultado = await fetch(this.url);
            const listaClientes = resultado.json();
            return listaClientes;
        }catch(error){
            alert('Hubo un error');
        }
        return undefined;
    }

    async postCliente(cliente: Cliente){
        try{
            await fetch(this.url,{
                method: 'POST',
                body: JSON.stringify(cliente),
                headers: {'Content-type': 'application/json'}
            });
            this.router.navigate(['/']);
        }catch(error){
            alert("Error al agregar el cliente");
        }
    }

    async deleteCliente(id: number){
        try{
            await fetch(`${this.url}/${id}`,
            {
                method: 'DELETE'
            });
            location.reload();
        }catch(error){
            alert("Error al borrar el cliente");
        }
    }

    async editCliente(cliente: Cliente){
        try{
            await fetch(`${this.url}/${cliente.id}`,
            {
                method: 'PUT',
                body: JSON.stringify(cliente),
                headers: {'Content-type': 'application/json'}
            });
            this.router.navigate(['/']);
        }catch(error){
            console.error(error);
        }
    }

    async getClienteById(id: Number){
        try{
            const resultado = await fetch(`${this.url}/${id}`,
            {
                method: 'GET'
            });
            const cliente = await resultado.json();
            return cliente;
        }catch(error){
            console.error(error);
        }    
    }
}