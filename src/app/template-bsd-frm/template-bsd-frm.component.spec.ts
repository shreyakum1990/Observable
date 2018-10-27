import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateBsdFrmComponent } from './template-bsd-frm.component';

describe('TemplateBsdFrmComponent', () => {
  let component: TemplateBsdFrmComponent;
  let fixture: ComponentFixture<TemplateBsdFrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateBsdFrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateBsdFrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
