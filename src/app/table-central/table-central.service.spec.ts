import { TestBed } from '@angular/core/testing';

import { TableCentralService } from './table-central.service';

describe('TableCentralService', () => {
  let service: TableCentralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableCentralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
