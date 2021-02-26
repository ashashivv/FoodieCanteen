import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMenuByDateComponent } from './view-menu-by-date.component';

describe('ViewMenuByDateComponent', () => {
  let component: ViewMenuByDateComponent;
  let fixture: ComponentFixture<ViewMenuByDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMenuByDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMenuByDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
