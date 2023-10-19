import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})
export class NuevoClienteComponent implements OnInit{
  forms: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private clienteService: ClienteService){
    this.forms = this.fb.group({
      apellido: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      dni: ['', [Validators.required, Validators.maxLength(8)]],
      fechaInicio: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  cancel(){ 
    this.router.navigate(['/']);
  }
  
  async agregarCliente(){
    console.log(this.forms);
    if(this.forms.status === 'INVALID'){
      alert("Los datos no se han completado correctamente");
      return;
    }
    const cliente:Cliente = this.forms.value;
    await this.clienteService.postCliente(cliente); 
  }

  
}
