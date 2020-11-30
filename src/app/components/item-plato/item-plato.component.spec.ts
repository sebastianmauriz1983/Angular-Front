import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPlatoComponent } from './item-plato.component';

describe('ItemPlatoComponent', () => {
  let component: ItemPlatoComponent;
  let fixture: ComponentFixture<ItemPlatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemPlatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPlatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
