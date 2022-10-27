import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregareducacionComponent } from './agregareducacion.component';

describe('AgregareducacionComponent', () => {
  let component: AgregareducacionComponent;
  let fixture: ComponentFixture<AgregareducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregareducacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregareducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
