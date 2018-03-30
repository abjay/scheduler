import { TestBed, inject } from '@angular/core/testing';

import { Client2Service } from './client2.service';

describe('Client2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Client2Service]
    });
  });

  it('should be created', inject([Client2Service], (service: Client2Service) => {
    expect(service).toBeTruthy();
  }));
});
