import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, MaxLengthValidator, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente.interface';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit{
  forms: FormGroup;

  idCliente: Number = -1;
  cliente: Cliente | undefined;

  constructor(private router: Router, private fb: FormBuilder, private clienteService: ClienteService, private activatedRoute: ActivatedRoute){
    this.forms = this.fb.group({
      apellido: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      nombre: ['', [Validators.minLength(3), Validators.maxLength(20)]],
      dni: ['', [Validators.maxLength(8)]],
      fechaInicio: ['', [Validators.required]]
    });
  }
 
  async ngOnInit():Promise<void>{
    this.idCliente = parseInt(this.activatedRoute.snapshot.queryParamMap.get('clienteID')!);
    this.cliente = await this.clienteService.getClienteById(this.idCliente);
    if(this.cliente !== undefined){
      this.forms.value.apellido = this.cliente.apellido;
      this.forms.value.nombre = this.cliente.nombre;
      this.forms.value.dni = this.cliente.dni;
      this.forms.value.fechaInicio = this.cliente.fechaInicio;
    }
    else{
      alert("Algo salio mal...");
      
    }
  }
  /**/

  cancel(){ 
    this.router.navigate(['/']);
  }
  
  async editarCliente(){
    console.log(this.forms);
    if(this.forms.controls['apellido'].status !== 'INVALID' && this.forms.controls['apellido'].value !== ''){
      this.cliente!.apellido = this.forms.value.apellido;
    }
    if(this.forms.controls['nombre'].status !== 'INVALID' && this.forms.controls['nombre'].value !== ''){
      this.cliente!.nombre = this.forms.value.nombre;
    }
    if(this.forms.controls['dni'].status !== 'INVALID' && this.forms.controls['dni'].value !== ''){
      this.cliente!.dni = this.forms.value.dni;
    }
    if(this.forms.controls['fechaInicio'].status !== 'INVALID' && this.forms.controls['fechaInicio'].value !== ''){
      this.cliente!.fechaInicio = this.forms.value.fechaInicio;
    }
    await this.clienteService.editCliente(this.cliente!);
  }
}