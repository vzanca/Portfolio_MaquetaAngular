import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonEdicionredesComponent } from './botton-edicionredes.component';

describe('BottonEdicionredesComponent', () => {
  let component: BottonEdicionredesComponent;
  let fixture: ComponentFixture<BottonEdicionredesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonEdicionredesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonEdicionredesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
