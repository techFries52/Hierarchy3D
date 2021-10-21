import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionFrameworkComponent } from './collection-framework.component';

describe('CollectionFrameworkComponent', () => {
  let component: CollectionFrameworkComponent;
  let fixture: ComponentFixture<CollectionFrameworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionFrameworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionFrameworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
