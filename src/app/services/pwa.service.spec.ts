import { TestBed } from '@angular/core/testing';
import { ServiceWorkerModule } from '@angular/service-worker';

import { PwaService } from './pwa.service';

describe('PwaService', () => {
  let service: PwaService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ServiceWorkerModule.register('ngsw-worker.js', { enabled: false })
      ]
    });
    service = TestBed.inject(PwaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
