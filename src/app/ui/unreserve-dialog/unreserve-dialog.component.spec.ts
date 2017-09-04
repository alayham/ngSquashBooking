import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnreserveDialogComponent } from './unreserve-dialog.component';

describe('UnreserveDialogComponent', () => {
  let component: UnreserveDialogComponent;
  let fixture: ComponentFixture<UnreserveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnreserveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnreserveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
