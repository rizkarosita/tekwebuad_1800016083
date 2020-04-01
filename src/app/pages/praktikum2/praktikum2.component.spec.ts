import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Praktikum2Component } from './praktikum2.component';

describe('Praktikum2Component', () => {
  let component: Praktikum2Component;
  let fixture: ComponentFixture<Praktikum2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Praktikum2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Praktikum2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
