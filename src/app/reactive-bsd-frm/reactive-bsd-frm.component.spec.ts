import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveBsdFrmComponent } from './reactive-bsd-frm.component';

describe('ReactiveBsdFrmComponent', () => {
  let component: ReactiveBsdFrmComponent;
  let fixture: ComponentFixture<ReactiveBsdFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveBsdFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveBsdFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
