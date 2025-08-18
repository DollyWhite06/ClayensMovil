import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsistenciaFechaPage } from './asistencia-fecha.page';

describe('AsistenciaFechaPage', () => {
  let component: AsistenciaFechaPage;
  let fixture: ComponentFixture<AsistenciaFechaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AsistenciaFechaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
