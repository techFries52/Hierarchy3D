import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServletHierarchyComponent } from './servlet-hierarchy.component';

describe('ServletHierarchyComponent', () => {
  let component: ServletHierarchyComponent;
  let fixture: ComponentFixture<ServletHierarchyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServletHierarchyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServletHierarchyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
