import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaPeliculaComponent } from './busqueda-pelicula.component';

describe('BusquedaPeliculaComponent', () => {
  let component: BusquedaPeliculaComponent;
  let fixture: ComponentFixture<BusquedaPeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusquedaPeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusquedaPeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
