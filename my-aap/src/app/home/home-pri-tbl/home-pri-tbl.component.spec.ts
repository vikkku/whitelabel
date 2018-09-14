import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePriTblComponent } from './home-pri-tbl.component';

describe('HomePriTblComponent', () => {
  let component: HomePriTblComponent;
  let fixture: ComponentFixture<HomePriTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePriTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePriTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
