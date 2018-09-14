import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePerComponent } from './home-per.component';

describe('HomePerComponent', () => {
  let component: HomePerComponent;
  let fixture: ComponentFixture<HomePerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
