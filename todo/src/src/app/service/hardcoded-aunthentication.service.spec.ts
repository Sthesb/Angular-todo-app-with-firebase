import { TestBed } from '@angular/core/testing';

import { HardcodedAunthenticationService } from './hardcoded-aunthentication.service';

describe('HardcodedAunthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAunthenticationService = TestBed.get(HardcodedAunthenticationService);
    expect(service).toBeTruthy();
  });
});
