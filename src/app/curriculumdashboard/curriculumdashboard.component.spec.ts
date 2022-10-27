import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumdashboardComponent } from './curriculumdashboard.component';

describe('CurriculumdashboardComponent', () => {
  let component: CurriculumdashboardComponent;
  let fixture: ComponentFixture<CurriculumdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumdashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
