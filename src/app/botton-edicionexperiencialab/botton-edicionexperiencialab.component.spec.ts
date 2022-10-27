import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonEdicionexperiencialabComponent } from './botton-edicionexperiencialab.component';

describe('BottonEdicionexperiencialabComponent', () => {
  let component: BottonEdicionexperiencialabComponent;
  let fixture: ComponentFixture<BottonEdicionexperiencialabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonEdicionexperiencialabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonEdicionexperiencialabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
