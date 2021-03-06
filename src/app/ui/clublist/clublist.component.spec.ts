import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClublistComponent } from './clublist.component';

describe('ClublistComponent', () => {
  let component: ClublistComponent;
  let fixture: ComponentFixture<ClublistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClublistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClublistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
