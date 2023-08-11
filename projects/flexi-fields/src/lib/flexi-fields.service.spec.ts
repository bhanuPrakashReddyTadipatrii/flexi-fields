import { TestBed } from '@angular/core/testing';

import { FlexiFieldsService } from './flexi-fields.service';

describe('FlexiFieldsService', () => {
  let service: FlexiFieldsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlexiFieldsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
