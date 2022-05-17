import { TestBed } from '@angular/core/testing';

import { ExamodelService } from './examodel.service';

describe('ExamodelService', () => {
  let service: ExamodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
