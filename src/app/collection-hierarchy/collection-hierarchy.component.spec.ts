import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionHierarchyComponent } from './collection-hierarchy.component';

describe('CollectionHierarchyComponent', () => {
  let component: CollectionHierarchyComponent;
  let fixture: ComponentFixture<CollectionHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionHierarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
