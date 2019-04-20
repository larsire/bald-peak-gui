import { TestBed } from '@angular/core/testing';

import { SimulatorAccessService } from './simulator-access.service';

describe('SimulatorAccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimulatorAccessService = TestBed.get(SimulatorAccessService);
    expect(service).toBeTruthy();
  });
});
