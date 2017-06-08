import { TestBed, inject } from '@angular/core/testing';
import { ConnectorFactoryService } from './connector-factory.service';

describe('ConnectorFactoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectorFactoryService]
    });
  });

  it('should ...', inject([ConnectorFactoryService], (service: ConnectorFactoryService) => {
    expect(service).toBeTruthy();
  }));
});
