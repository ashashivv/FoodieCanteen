import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuByCategoryComponent } from './view-menu-by-category.component';

describe('ViewMenuByCategoryComponent', () => {
  let component: ViewMenuByCategoryComponent;
  let fixture: ComponentFixture<ViewMenuByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMenuByCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
