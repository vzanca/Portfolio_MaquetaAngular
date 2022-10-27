import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcvComponent } from './agregarcv.component';

describe('AgregarcvComponent', () => {
  let component: AgregarcvComponent;
  let fixture: ComponentFixture<AgregarcvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarcvComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarcvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
