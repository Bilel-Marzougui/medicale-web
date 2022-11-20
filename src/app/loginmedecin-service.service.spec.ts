import { TestBed } from '@angular/core/testing';

import { LoginmedecinServiceService } from './loginmedecin-service.service';

describe('LoginmedecinServiceService', () => {
  let service: LoginmedecinServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginmedecinServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
