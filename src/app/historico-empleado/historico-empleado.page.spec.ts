import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HistoricoEmpleadoPage } from './historico-empleado.page';

describe('HistoricoEmpleadoPage', () => {
  let component: HistoricoEmpleadoPage;
  let fixture: ComponentFixture<HistoricoEmpleadoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoricoEmpleadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
