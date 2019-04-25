import { TestBed } from '@angular/core/testing';

import { FuerzaService } from './fuerza.service';

describe('FuerzaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FuerzaService = TestBed.get(FuerzaService);
    expect(service).toBeTruthy();
  });
});
