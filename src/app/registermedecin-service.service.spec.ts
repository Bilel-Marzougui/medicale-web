import { TestBed } from '@angular/core/testing';

import { RegistermedecinServiceService } from './registermedecin-service.service';

describe('RegistermedecinServiceService', () => {
  let service: RegistermedecinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistermedecinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
