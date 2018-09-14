import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeServicComponent } from './home-servic.component';

describe('HomeServicComponent', () => {
  let component: HomeServicComponent;
  let fixture: ComponentFixture<HomeServicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeServicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeServicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
