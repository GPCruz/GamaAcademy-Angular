import { TestBed } from '@angular/core/testing';

import { NaoLogouGuard } from './nao-logou.guard';

describe('NaoLogouGuard', () => {
  let guard: NaoLogouGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NaoLogouGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
