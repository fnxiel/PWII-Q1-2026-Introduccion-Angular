import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Reproduciendo } from './reproduciendo';

describe('Reproduciendo', () => {
  let component: Reproduciendo;
  let fixture: ComponentFixture<Reproduciendo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Reproduciendo],
    }).compileComponents();

    fixture = TestBed.createComponent(Reproduciendo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
