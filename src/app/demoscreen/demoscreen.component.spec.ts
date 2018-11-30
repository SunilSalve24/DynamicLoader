import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoscreenComponent } from './demoscreen.component';

describe('DemoscreenComponent', () => {
  let component: DemoscreenComponent;
  let fixture: ComponentFixture<DemoscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
