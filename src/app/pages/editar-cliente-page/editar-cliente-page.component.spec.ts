import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarClientePageComponent } from './editar-cliente-page.component';

describe('EditarClientePageComponent', () => {
  let component: EditarClientePageComponent;
  let fixture: ComponentFixture<EditarClientePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarClientePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarClientePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
