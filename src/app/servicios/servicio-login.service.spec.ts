/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ServicioLoginService } from './servicio-login.service';

describe('Service: ServicioLogin', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioLoginService]
    });
  });

  it('should ...', inject([ServicioLoginService], (service: ServicioLoginService) => {
    expect(service).toBeTruthy();
  }));
});
