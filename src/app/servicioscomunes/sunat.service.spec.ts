import { TestBed, inject } from '@angular/core/testing';

import { SunatService } from './sunat.service';

describe('SunatService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SunatService]
    });
  });

  it('should be created', inject([SunatService], (service: SunatService) => {
    expect(service).toBeTruthy();
  }));
});
