import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarexperiencialabComponent } from './agregarexperiencialab.component';

describe('AgregarexperiencialabComponent', () => {
  let component: AgregarexperiencialabComponent;
  let fixture: ComponentFixture<AgregarexperiencialabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarexperiencialabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarexperiencialabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
