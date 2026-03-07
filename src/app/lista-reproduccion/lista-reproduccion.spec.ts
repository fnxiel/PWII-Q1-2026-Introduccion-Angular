import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaReproduccion } from './lista-reproduccion';

describe('ListaReproduccion', () => {
  let component: ListaReproduccion;
  let fixture: ComponentFixture<ListaReproduccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaReproduccion],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaReproduccion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
