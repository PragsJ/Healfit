import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodTrackingComponent } from './period-tracking.component';

describe('PeriodTrackingComponent', () => {
  let component: PeriodTrackingComponent;
  let fixture: ComponentFixture<PeriodTrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodTrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
