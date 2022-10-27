import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonEdicioneducacionComponent } from './botton-edicioneducacion.component';

describe('BottonEdicioneducacionComponent', () => {
  let component: BottonEdicioneducacionComponent;
  let fixture: ComponentFixture<BottonEdicioneducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonEdicioneducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonEdicioneducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
