import { TestBed } from '@angular/core/testing';

import { AlertdialogService } from './alertdialog.service';

describe('AlertdialogService', () => {
  let service: AlertdialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertdialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
