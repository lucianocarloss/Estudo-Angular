import { TestBed } from '@angular/core/testing';

import { Resolver } from './.resolver';

describe('Resolver', () => {
  let resolver: Resolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(Resolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
