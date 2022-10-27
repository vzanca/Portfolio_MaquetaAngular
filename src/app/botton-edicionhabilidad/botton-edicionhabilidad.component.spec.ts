import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonEdicionhabilidadComponent } from './botton-edicionhabilidad.component';

describe('BottonEdicionhabilidadComponent', () => {
  let component: BottonEdicionhabilidadComponent;
  let fixture: ComponentFixture<BottonEdicionhabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonEdicionhabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonEdicionhabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
