import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoListaComponent } from './plato-lista.component';

describe('PlatoListaComponent', () => {
  let component: PlatoListaComponent;
  let fixture: ComponentFixture<PlatoListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
