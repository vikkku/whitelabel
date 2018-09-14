import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeWelComponent } from './home-wel.component';

describe('HomeWelComponent', () => {
  let component: HomeWelComponent;
  let fixture: ComponentFixture<HomeWelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeWelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeWelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
