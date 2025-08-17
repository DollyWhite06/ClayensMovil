import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarEmpleadoPage } from './buscar-empleado.page';

describe('BuscarEmpleadoPage', () => {
  let component: BuscarEmpleadoPage;
  let fixture: ComponentFixture<BuscarEmpleadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarEmpleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
