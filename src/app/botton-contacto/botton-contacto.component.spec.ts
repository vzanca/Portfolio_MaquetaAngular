import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonContactoComponent } from './botton-contacto.component';

describe('BottonContactoComponent', () => {
  let component: BottonContactoComponent;
  let fixture: ComponentFixture<BottonContactoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonContactoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
