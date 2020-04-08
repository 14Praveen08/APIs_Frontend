import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacdetailsComponent } from './facdetails.component';

describe('FacdetailsComponent', () => {
  let component: FacdetailsComponent;
  let fixture: ComponentFixture<FacdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
