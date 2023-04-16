import { TestBed } from '@angular/core/testing';

import { MastercardPaymentService } from './mastercard-payment.service';

describe('MastercardPaymentService', () => {
  let service: MastercardPaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MastercardPaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
