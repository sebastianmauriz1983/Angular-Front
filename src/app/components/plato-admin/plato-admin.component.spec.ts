import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlatoAdminComponent } from './plato-admin.component';

describe('PlatoAdminComponent', () => {
  let component: PlatoAdminComponent;
  let fixture: ComponentFixture<PlatoAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatoAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatoAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
