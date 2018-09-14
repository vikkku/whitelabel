import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePortfoComponent } from './home-portfo.component';

describe('HomePortfoComponent', () => {
  let component: HomePortfoComponent;
  let fixture: ComponentFixture<HomePortfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePortfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePortfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
