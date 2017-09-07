import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtCalendarComponent } from './court-calendar.component';

describe('CourtCalendarComponent', () => {
  let component: CourtCalendarComponent;
  let fixture: ComponentFixture<CourtCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourtCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
