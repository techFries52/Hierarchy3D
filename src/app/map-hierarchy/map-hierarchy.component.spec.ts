import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapHierarchyComponent } from './map-hierarchy.component';

describe('MapHierarchyComponent', () => {
  let component: MapHierarchyComponent;
  let fixture: ComponentFixture<MapHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapHierarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MapHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
