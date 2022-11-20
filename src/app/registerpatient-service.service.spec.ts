import { TestBed } from '@angular/core/testing';

import { RegisterpatientServiceService } from './registerpatient-service.service';

describe('RegisterpatientServiceService', () => {
  let service: RegisterpatientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterpatientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
