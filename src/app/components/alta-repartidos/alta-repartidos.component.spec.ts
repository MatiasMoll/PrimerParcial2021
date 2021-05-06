import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaRepartidosComponent } from './alta-repartidos.component';

describe('AltaRepartidosComponent', () => {
  let component: AltaRepartidosComponent;
  let fixture: ComponentFixture<AltaRepartidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaRepartidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaRepartidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
