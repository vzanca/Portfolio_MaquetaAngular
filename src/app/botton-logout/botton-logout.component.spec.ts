import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottonLogoutComponent } from './botton-logout.component';

describe('BottonLogoutComponent', () => {
  let component: BottonLogoutComponent;
  let fixture: ComponentFixture<BottonLogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottonLogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottonLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
