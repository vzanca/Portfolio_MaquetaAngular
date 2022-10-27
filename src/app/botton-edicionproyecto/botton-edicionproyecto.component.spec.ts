import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonEdicionproyectoComponent } from './botton-edicionproyecto.component';

describe('BottonEdicionproyectoComponent', () => {
  let component: BottonEdicionproyectoComponent;
  let fixture: ComponentFixture<BottonEdicionproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonEdicionproyectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonEdicionproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
