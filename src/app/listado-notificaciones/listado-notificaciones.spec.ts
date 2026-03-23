import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoNotificaciones } from './listado-notificaciones';

describe('ListadoNotificaciones', () => {
  let component: ListadoNotificaciones;
  let fixture: ComponentFixture<ListadoNotificaciones>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoNotificaciones],
    }).compileComponents();

    fixture = TestBed.createComponent(ListadoNotificaciones);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
