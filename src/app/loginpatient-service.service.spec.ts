import { TestBed } from '@angular/core/testing';
import { LoginpatientServiceService } from './loginpatient-service.service';

describe('LoginpatientServiceService', () => {
  let service: LoginpatientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginpatientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
