import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum1Component } from './praktikum1.component';

describe('Praktikum1Component', () => {
  let component: Praktikum1Component;
  let fixture: ComponentFixture<Praktikum1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
