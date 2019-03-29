import { TestBed } from '@angular/core/testing';

import { HasService } from './has.service';

describe('HasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HasService = TestBed.get(HasService);
    expect(service).toBeTruthy();
  });
});
