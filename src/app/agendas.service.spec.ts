import { TestBed } from '@angular/core/testing';

import { AgendasService } from './agendas.service';

describe('AgendasService', () => {
  let service: AgendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
