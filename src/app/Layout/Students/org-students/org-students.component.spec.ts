import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgStudentsComponent } from './org-students.component';

describe('OrgStudentsComponent', () => {
  let component: OrgStudentsComponent;
  let fixture: ComponentFixture<OrgStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgStudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
