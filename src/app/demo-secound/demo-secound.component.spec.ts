import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoSecoundComponent } from './demo-secound.component';

describe('DemoSecoundComponent', () => {
  let component: DemoSecoundComponent;
  let fixture: ComponentFixture<DemoSecoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoSecoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoSecoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
