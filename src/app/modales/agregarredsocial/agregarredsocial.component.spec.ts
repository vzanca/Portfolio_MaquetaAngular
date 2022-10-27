import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarredsocialComponent } from './agregarredsocial.component';

describe('AgregarredsocialComponent', () => {
  let component: AgregarredsocialComponent;
  let fixture: ComponentFixture<AgregarredsocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarredsocialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarredsocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
