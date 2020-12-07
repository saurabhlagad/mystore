import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFeedbackComponent } from './car-feedback.component';

describe('CarFeedbackComponent', () => {
  let component: CarFeedbackComponent;
  let fixture: ComponentFixture<CarFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
