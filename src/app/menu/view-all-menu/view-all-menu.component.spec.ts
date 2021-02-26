import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllMenuComponent } from './view-all-menu.component';

describe('ViewAllMenuComponent', () => {
  let component: ViewAllMenuComponent;
  let fixture: ComponentFixture<ViewAllMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
