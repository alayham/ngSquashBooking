import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreserveComponent } from './unreserve.component';

describe('UnreserveComponent', () => {
  let component: UnreserveComponent;
  let fixture: ComponentFixture<UnreserveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreserveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreserveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
