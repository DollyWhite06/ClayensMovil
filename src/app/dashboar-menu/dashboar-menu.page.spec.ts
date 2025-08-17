import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboarMenuPage } from './dashboar-menu.page';

describe('DashboarMenuPage', () => {
  let component: DashboarMenuPage;
  let fixture: ComponentFixture<DashboarMenuPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboarMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
