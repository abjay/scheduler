import { TestBed, inject } from '@angular/core/testing';

import { Client1Service } from './client1.service';

describe('Client1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Client1Service]
    });
  });

  it('should be created', inject([Client1Service], (service: Client1Service) => {
    expect(service).toBeTruthy();
  }));
});
