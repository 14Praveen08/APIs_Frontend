import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllFacultyComponent } from './all-faculty.component';

describe('AllFacultyComponent', () => {
  let component: AllFacultyComponent;
  let fixture: ComponentFixture<AllFacultyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllFacultyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
