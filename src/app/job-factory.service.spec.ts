import { TestBed, inject } from '@angular/core/testing';
import { JobFactoryService } from './job-factory.service';

describe('JobFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobFactoryService]
    });
  });

  it('should ...', inject([JobFactoryService], (service: JobFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
