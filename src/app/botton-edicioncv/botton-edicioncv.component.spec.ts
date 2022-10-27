import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonEdicioncvComponent } from './botton-edicioncv.component';

describe('BottonEdicioncvComponent', () => {
  let component: BottonEdicioncvComponent;
  let fixture: ComponentFixture<BottonEdicioncvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonEdicioncvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonEdicioncvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
